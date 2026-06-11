---
layout: lab
permalink: /cn/
title: "首页"
lang: zh
nav_id: home
en_url: /
description: "机器人学习与控制实验室主页。"
---
{% assign lab = site.data.lab %}

<section class="lab-hero" style="--hero-image: url('{{ lab.hero_image | relative_url }}');">
  <div class="lab-hero__inner">
    <p class="lab-kicker">{{ lab.affiliation_zh }} · 机器人学习 · 控制</p>
    <h1>{{ lab.name_zh }}</h1>
    <p>{{ lab.tagline_zh }} 我们关注能够在真实物理世界中感知、规划、学习与可靠执行的机器人系统。</p>
    <div class="lab-actions">
      <a class="lab-button lab-button--primary" href="{{ '/cn/research/' | relative_url }}">查看研究方向</a>
      <a class="lab-button lab-button--ghost" href="{{ '/cn/join/' | relative_url }}">加入我们</a>
    </div>
  </div>
</section>

<section class="lab-section lab-section--tight">
  <div class="lab-section__head">
    <div>
      <p class="lab-eyebrow">研究重点</p>
      <h2>面向可靠机器人的方法与系统。</h2>
    </div>
    <p>当前网站采用公开安全的数据驱动结构，后续会在信息确认后逐步补充成员、项目与成果。</p>
  </div>
  <div class="lab-grid">
    {% for item in site.data.research limit:3 %}
      <article class="lab-card">
        <h3>{{ item.title_zh }}</h3>
        <p>{{ item.summary_zh }}</p>
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
      <p class="lab-eyebrow">代表成果</p>
      <h2>已公开的精选论文。</h2>
    </div>
    <a class="lab-text-link" href="{{ '/cn/publications/' | relative_url }}">查看全部论文</a>
  </div>
  <div class="lab-grid lab-grid--two">
    {% for paper in site.data.publications_manual.featured limit:2 %}
      <article class="lab-publication">
        <img src="{{ paper.image | relative_url }}" alt="论文缩略图">
        <div>
          <h3>{{ paper.title }}</h3>
          <p class="lab-muted">{{ paper.authors }}</p>
          <p><strong>{{ paper.venue }}</strong> · {{ paper.year }}</p>
          <div class="lab-publication__links">
            {% if paper.links.paper %}<a class="lab-text-link" href="{{ paper.links.paper }}">论文</a>{% endif %}
          </div>
        </div>
      </article>
    {% endfor %}
  </div>
</section>

<section class="lab-section">
  <div class="lab-section__head">
    <div>
      <p class="lab-eyebrow">新闻动态</p>
      <h2>近期更新。</h2>
    </div>
    <a class="lab-text-link" href="{{ '/cn/news/' | relative_url }}">新闻归档</a>
  </div>
  <div class="lab-news-list">
    {% for item in site.data.news limit:5 %}
      <article class="lab-news-item">
        <div class="lab-news-date">{{ item.date | date: "%Y-%m-%d" }}</div>
        <div>
          <h3>{{ item.title_zh }}</h3>
          <p class="lab-muted">{{ item.type }}</p>
        </div>
      </article>
    {% endfor %}
  </div>
</section>

<section class="lab-callout">
  <div class="lab-section">
    <p class="lab-eyebrow">开放合作</p>
    <h2>欢迎对机器人学习与控制感兴趣的学生和合作者关注我们。</h2>
    <p>招生与联系方式会在公开发布确认后更新。</p>
    <div class="lab-actions">
      <a class="lab-button lab-button--primary" href="{{ '/cn/people/' | relative_url }}">团队成员</a>
      <a class="lab-button lab-button--ghost" href="{{ '/cn/contact/' | relative_url }}">联系方式</a>
    </div>
  </div>
</section>
