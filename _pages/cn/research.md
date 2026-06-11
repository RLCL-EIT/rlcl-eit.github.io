---
layout: lab
permalink: /cn/research/
title: "研究方向"
lang: zh
nav_id: research
en_url: /research/
description: "机器人学习与控制实验室研究方向。"
---
<section class="lab-page-title">
  <p class="lab-eyebrow">研究方向</p>
  <h1>研究方向</h1>
  <p>实验室围绕机器人学习、控制、规划、操作和具身智能等核心问题开展研究。</p>
</section>

<section class="lab-section lab-section--tight">
  <div class="lab-grid lab-grid--two">
    {% for item in site.data.research %}
      <article class="lab-card">
        <h3>{{ item.title_zh }}</h3>
        <p>{{ item.summary_zh }}</p>
        <div class="lab-tags">
          {% for tag in item.tags %}<span>{{ tag }}</span>{% endfor %}
        </div>
      </article>
    {% endfor %}
  </div>
</section>
