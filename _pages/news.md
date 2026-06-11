---
layout: lab
permalink: /news/
title: "News"
lang: en
nav_id: news
zh_url: /cn/news/
description: "News from the Robot Learning and Control Lab."
---
<section class="lab-page-title">
  <p class="lab-eyebrow">News</p>
  <h1>News</h1>
  <p>Public updates from the lab.</p>
</section>

<section class="lab-section lab-section--tight">
  <div class="lab-news-list">
    {% for item in site.data.news %}
      <article class="lab-news-item">
        <div class="lab-news-date">{{ item.date | date: "%b %-d, %Y" }}</div>
        <div>
          <h3>{% if item.url %}<a href="{{ item.url }}">{{ item.title_en }}</a>{% else %}{{ item.title_en }}{% endif %}</h3>
          <p class="lab-muted">{{ item.type }}</p>
        </div>
      </article>
    {% endfor %}
  </div>
</section>
