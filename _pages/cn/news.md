---
layout: lab
permalink: /cn/news/
title: "新闻动态"
lang: zh
nav_id: news
en_url: /news/
description: "机器人学习与控制实验室新闻动态。"
---
<section class="lab-page-title">
  <p class="lab-eyebrow">新闻动态</p>
  <h1>新闻动态</h1>
  <p>实验室公开动态。</p>
</section>

<section class="lab-section lab-section--tight">
  <div class="lab-news-list">
    {% for item in site.data.news %}
      <article class="lab-news-item">
        <div class="lab-news-date">{{ item.date | date: "%Y-%m-%d" }}</div>
        <div>
          <h3>{% if item.url %}<a href="{{ item.url }}">{{ item.title_zh }}</a>{% else %}{{ item.title_zh }}{% endif %}</h3>
          <p class="lab-muted">{{ item.type }}</p>
        </div>
      </article>
    {% endfor %}
  </div>
</section>
