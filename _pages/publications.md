---
layout: lab
permalink: /publications/
title: "Publications"
lang: en
nav_id: publications
zh_url: /cn/publications/
description: "Publications of the Robot Learning and Control Lab."
---
<section class="lab-page-title">
  <p class="lab-eyebrow">Publications</p>
  <h1>Publications</h1>
  <p>Featured publications are curated in YAML for richer presentation. The complete list below is loaded from the public BibTeX file.</p>
</section>

<section class="lab-section lab-section--tight">
  <div class="lab-section__head">
    <div>
      <p class="lab-eyebrow">Featured</p>
      <h2>Selected results</h2>
    </div>
  </div>
  <div class="lab-grid lab-grid--two">
    {% for paper in site.data.publications_manual.featured %}
      <article class="lab-publication">
        <img src="{{ paper.image | relative_url }}" alt="Publication thumbnail">
        <div>
          <h3>{{ paper.title }}</h3>
          <p class="lab-muted">{{ paper.authors }}</p>
          <p><strong>{{ paper.venue }}</strong> · {{ paper.year }}</p>
          <div class="lab-tags">
            {% for tag in paper.tags %}<span>{{ tag }}</span>{% endfor %}
          </div>
          <div class="lab-publication__links">
            {% if paper.links.paper %}<a class="lab-text-link" href="{{ paper.links.paper }}">Paper</a>{% endif %}
            {% if paper.links.code %}<a class="lab-text-link" href="{{ paper.links.code }}">Code</a>{% endif %}
            {% if paper.links.demo %}<a class="lab-text-link" href="{{ paper.links.demo }}">Demo</a>{% endif %}
          </div>
        </div>
      </article>
    {% endfor %}
  </div>
</section>

<section class="lab-section">
  <div class="lab-section__head">
    <div>
      <p class="lab-eyebrow">BibTeX</p>
      <h2>Complete public list</h2>
    </div>
    <a class="lab-text-link" href="{{ '/publications.bib' | relative_url }}">Download BibTeX</a>
  </div>
  <div data-bib-source="{{ '/publications.bib' | relative_url }}" data-paper="Paper" data-empty="No BibTeX entries found." data-error="Could not load publications.bib.">
    <p class="lab-muted">Loading publications from BibTeX...</p>
  </div>
</section>
