---
layout: lab
permalink: /
title: "Home"
lang: en
nav_id: home
zh_url: /cn/
description: "Robot Learning and Control Lab homepage."
---
{% assign lab = site.data.lab %}

<section class="lab-hero" style="--hero-image: url('{{ lab.hero_image | relative_url }}');">
  <div class="lab-hero__inner">
    <p class="lab-kicker">{{ lab.affiliation_en }} · Robot Learning · Control</p>
    <h1>{{ lab.name_en }}</h1>
    <p>{{ lab.tagline_en }} We build learning-enabled robotic systems that reason, plan, and act reliably in the physical world.</p>
    <div class="lab-actions">
      <a class="lab-button lab-button--primary" href="{{ '/research/' | relative_url }}">Explore Research</a>
      <a class="lab-button lab-button--ghost" href="{{ '/join/' | relative_url }}">Join Us</a>
    </div>
  </div>
</section>

<section class="lab-section lab-section--tight">
  <div class="lab-section__head">
    <div>
      <p class="lab-eyebrow">Research Focus</p>
      <h2>Methods for capable, reliable robots.</h2>
    </div>
    <p>Our site is being built as a public-safe, data-driven lab homepage. Content will be expanded as approved information becomes available.</p>
  </div>
  <div class="lab-grid">
    {% for item in site.data.research limit:3 %}
      <article class="lab-card">
        <h3>{{ item.title_en }}</h3>
        <p>{{ item.summary_en }}</p>
        <div class="lab-tags">
          {% for tag in item.tags limit:3 %}<span>{{ tag }}</span>{% endfor %}
        </div>
      </article>
    {% endfor %}
  </div>
</section>

<section class="lab-section">
  <div class="lab-section__head">
    <div>
      <p class="lab-eyebrow">Featured Publications</p>
      <h2>Selected public results.</h2>
    </div>
    <a class="lab-text-link" href="{{ '/publications/' | relative_url }}">View all publications</a>
  </div>
  <div class="lab-grid lab-grid--two">
    {% for paper in site.data.publications_manual.featured limit:2 %}
      <article class="lab-publication">
        <img src="{{ paper.image | relative_url }}" alt="Publication thumbnail">
        <div>
          <h3>{{ paper.title }}</h3>
          <p class="lab-muted">{{ paper.authors }}</p>
          <p><strong>{{ paper.venue }}</strong> · {{ paper.year }}</p>
          <div class="lab-publication__links">
            {% if paper.links.paper %}<a class="lab-text-link" href="{{ paper.links.paper }}">Paper</a>{% endif %}
          </div>
        </div>
      </article>
    {% endfor %}
  </div>
</section>

<section class="lab-section">
  <div class="lab-section__head">
    <div>
      <p class="lab-eyebrow">Latest News</p>
      <h2>Recent updates.</h2>
    </div>
    <a class="lab-text-link" href="{{ '/news/' | relative_url }}">News archive</a>
  </div>
  <div class="lab-news-list">
    {% for item in site.data.news limit:5 %}
      <article class="lab-news-item">
        <div class="lab-news-date">{{ item.date | date: "%b %-d, %Y" }}</div>
        <div>
          <h3>{{ item.title_en }}</h3>
          <p class="lab-muted">{{ item.type }}</p>
        </div>
      </article>
    {% endfor %}
  </div>
</section>

<section class="lab-callout">
  <div class="lab-section">
    <p class="lab-eyebrow">Open Collaboration</p>
    <h2>We welcome students and collaborators interested in robot learning and control.</h2>
    <p>Recruiting details and contact information will be updated after public release approval.</p>
    <div class="lab-actions">
      <a class="lab-button lab-button--primary" href="{{ '/people/' | relative_url }}">Meet the Team</a>
      <a class="lab-button lab-button--ghost" href="{{ '/contact/' | relative_url }}">Contact</a>
    </div>
  </div>
</section>
