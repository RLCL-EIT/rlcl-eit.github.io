---
layout: lab
permalink: /cn/people/
title: "团队成员"
lang: zh
nav_id: people
en_url: /people/
description: "机器人学习与控制实验室团队成员。"
---
<section class="lab-page-title">
  <p class="lab-eyebrow">团队成员</p>
  <h1>团队成员</h1>
  <p>团队成员将按身份分类展示，公开信息确认后逐步补充。</p>
</section>

<section class="lab-section lab-section--tight">
  {% for group in site.data.members.groups %}
    <section class="lab-person-group" id="{{ group.id }}">
      <h2>{{ group.title_zh }}</h2>
      {% if group.members and group.members.size > 0 %}
        <div class="lab-grid lab-grid--two">
          {% for member in group.members %}
            <article class="lab-card">
              <h3>{{ member.name_zh | default: member.name_en }}</h3>
              <p class="lab-muted">{{ member.role_zh | default: member.role_en }}</p>
              {% if member.research_zh %}<p>{{ member.research_zh }}</p>{% endif %}
            </article>
          {% endfor %}
        </div>
      {% else %}
        <p class="lab-empty-state">该分类成员信息正在整理中。</p>
      {% endif %}
    </section>
  {% endfor %}
</section>
