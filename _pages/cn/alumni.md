---
layout: lab
permalink: /cn/alumni/
title: "校友"
lang: zh
nav_id: alumni
en_url: /alumni/
description: "机器人学习与控制实验室校友。"
---
<section class="lab-page-title">
  <p class="lab-eyebrow">校友</p>
  <h1>校友</h1>
  <p>实验室往届成员及其公开去向将在此页面展示。</p>
</section>

{% assign alumni_group = site.data.members.groups | where: "id", "alumni" | first %}
<section class="lab-section lab-section--tight">
  {% if alumni_group.members and alumni_group.members.size > 0 %}
    <div class="lab-alumni-list">
      {% for member in alumni_group.members %}
        <article class="lab-alumni-item">
          <div>
            <h3>{{ member.name_zh | default: member.name_en }}</h3>
            <p class="lab-muted">{{ member.role_zh | default: member.degree_zh | default: member.role_en | default: member.degree_en }}</p>
            {% if member.current_zh %}<p>{{ member.current_zh }}</p>{% elsif member.current_en %}<p>{{ member.current_en }}</p>{% endif %}
            {% if member.research_zh %}<p>{{ member.research_zh }}</p>{% elsif member.research_en %}<p>{{ member.research_en }}</p>{% endif %}
          </div>
          <div class="lab-alumni-item__meta">
            {% if member.year %}<span>{{ member.year }}</span>{% endif %}
            {% if member.homepage %}<a class="lab-text-link" href="{{ member.homepage }}">主页</a>{% endif %}
            {% if member.email %}<a class="lab-text-link" href="mailto:{{ member.email }}">{{ member.email }}</a>{% endif %}
          </div>
        </article>
      {% endfor %}
    </div>
  {% else %}
    <p class="lab-empty-state">校友信息正在整理中。</p>
  {% endif %}
</section>
