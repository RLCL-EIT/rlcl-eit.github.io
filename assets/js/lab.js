(function () {
  const toggle = document.querySelector('.lab-nav-toggle');
  const nav = document.querySelector('.lab-nav');
  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      const open = nav.classList.toggle('is-open');
      toggle.setAttribute('aria-expanded', String(open));
    });
  }

  const bibMount = document.querySelector('[data-bib-source]');
  if (!bibMount) return;

  const source = bibMount.getAttribute('data-bib-source');
  const labels = {
    empty: bibMount.getAttribute('data-empty') || 'No BibTeX entries found.',
    error: bibMount.getAttribute('data-error') || 'Could not load publications.bib.',
    paper: bibMount.getAttribute('data-paper') || 'Paper'
  };

  function escapeHtml(value) {
    return String(value || '').replace(/[&<>'"]/g, function (char) {
      return {
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        "'": '&#39;',
        '"': '&quot;'
      }[char];
    });
  }

  function clean(value) {
    return (value || '')
      .replace(/[{}]/g, '')
      .replace(/\\&/g, '&')
      .replace(/\s+/g, ' ')
      .trim();
  }

  function parseFields(body) {
    const fields = {};
    const pattern = /([a-zA-Z]+)\s*=\s*(\{(?:[^{}]|\{[^{}]*\})*\}|"[^"]*"|[^,]+)\s*,?/g;
    let match;
    while ((match = pattern.exec(body)) !== null) {
      fields[match[1].toLowerCase()] = clean(match[2]);
    }
    return fields;
  }

  function parseBibtex(text) {
    const entries = [];
    const entryPattern = /@(\w+)\s*\{\s*([^,]+),([\s\S]*?)\n\}/g;
    let match;
    while ((match = entryPattern.exec(text)) !== null) {
      const fields = parseFields(match[3]);
      if (fields.title) {
        entries.push({ type: match[1], key: match[2].trim(), fields });
      }
    }
    return entries.sort(function (a, b) {
      return Number(b.fields.year || 0) - Number(a.fields.year || 0);
    });
  }

  function render(entries) {
    if (!entries.length) {
      bibMount.innerHTML = '<p class="lab-muted">' + escapeHtml(labels.empty) + '</p>';
      return;
    }
    bibMount.innerHTML = entries.map(function (entry) {
      const f = entry.fields;
      const venue = f.journal || f.booktitle || f.publisher || '';
      const tags = (f.keywords || '').split(',').map(function (tag) { return tag.trim(); }).filter(Boolean);
      const tagHtml = tags.map(function (tag) { return '<span>' + escapeHtml(tag) + '</span>'; }).join('');
      const link = f.url ? '<a class="lab-text-link" href="' + escapeHtml(f.url) + '">' + escapeHtml(labels.paper) + '</a>' : '';
      return '<article class="lab-publication lab-publication--compact">'
        + '<div><h3>' + escapeHtml(f.title) + '</h3>'
        + '<p class="lab-muted">' + escapeHtml(f.author || '') + '</p>'
        + '<p><strong>' + escapeHtml(venue) + '</strong>' + (f.year ? ' · ' + escapeHtml(f.year) : '') + '</p>'
        + '<div class="lab-tags">' + tagHtml + '</div></div>'
        + '<div class="lab-publication__links">' + link + '</div>'
        + '</article>';
    }).join('');
  }

  fetch(source)
    .then(function (response) {
      if (!response.ok) throw new Error('fetch failed');
      return response.text();
    })
    .then(function (text) { render(parseBibtex(text)); })
    .catch(function () { bibMount.innerHTML = '<p class="lab-muted">' + escapeHtml(labels.error) + '</p>'; });
}());
