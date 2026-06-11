---
layout: lab
permalink: /cn/publications/
title: "论文成果"
lang: zh
nav_id: publications
en_url: /publications/
description: "机器人学习与控制实验室论文成果。"
---
<section class="lab-page-title">
  <p class="lab-eyebrow">论文成果</p>
  <h1>论文成果</h1>
  <p>精选论文由 YAML 手动维护，用于更丰富的展示；完整公开列表从 BibTeX 文件自动加载。</p>
</section>

<section class="lab-section lab-section--tight">
  <div class="lab-section__head">
    <div>
      <p class="lab-eyebrow">精选论文</p>
      <h2>代表成果</h2>
    </div>
  </div>
  <div class="lab-grid lab-grid--two">
    {% for paper in site.data.publications_manual.featured %}
      <article class="lab-publication">
        <img src="{{ paper.image | relative_url }}" alt="论文缩略图">
        <div>
          <h3>{{ paper.title }}</h3>
          <p class="lab-muted">{{ paper.authors }}</p>
          <p><strong>{{ paper.venue }}</strong> · {{ paper.year }}</p>
          <div class="lab-tags">
            {% for tag in paper.tags %}<span>{{ tag }}</span>{% endfor %}
          </div>
          <div class="lab-publication__links">
            {% if paper.links.paper %}<a class="lab-text-link" href="{{ paper.links.paper }}">论文</a>{% endif %}
            {% if paper.links.code %}<a class="lab-text-link" href="{{ paper.links.code }}">代码</a>{% endif %}
            {% if paper.links.demo %}<a class="lab-text-link" href="{{ paper.links.demo }}">演示</a>{% endif %}
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
      <h2>完整公开列表</h2>
    </div>
    <a class="lab-text-link" href="{{ '/publications.bib' | relative_url }}">下载 BibTeX</a>
  </div>
  <div data-bib-source="{{ '/publications.bib' | relative_url }}" data-paper="论文" data-empty="没有找到 BibTeX 条目。" data-error="无法加载 publications.bib。">
    <p class="lab-muted">正在从 BibTeX 加载论文...</p>
  </div>
</section>
