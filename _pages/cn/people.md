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
        <div class="lab-people-grid lab-people-grid--{{ group.id }}">
          {% for member in group.members %}
            <article class="lab-person-card">
              {% if member.photo %}
                <img class="lab-person-card__photo" src="{{ member.photo | relative_url }}" alt="{{ member.name_zh | default: member.name_en }}">
              {% endif %}
              <div class="lab-person-card__body">
                <h3>{{ member.name_zh | default: member.name_en }}</h3>
                {% if member.research_zh %}<p>{{ member.research_zh }}</p>{% elsif member.research_en %}<p>{{ member.research_en }}</p>{% endif %}
                <div class="lab-person-card__links">
                  {% if member.email %}<a class="lab-text-link" href="mailto:{{ member.email }}">{{ member.email }}</a>{% endif %}
                  {% if member.homepage %}<a class="lab-text-link" href="{{ member.homepage }}">主页</a>{% endif %}
                  {% if member.scholar %}<a class="lab-text-link" href="{{ member.scholar }}">Scholar</a>{% endif %}
                  {% if member.github %}<a class="lab-text-link" href="{{ member.github }}">GitHub</a>{% endif %}
                </div>
                {% assign education_items = member.education_zh | default: member.education_en %}
                {% if education_items and education_items.size > 0 %}
                  <ul class="lab-education-list">
                    {% for item in education_items %}
                      <li>{{ item }}</li>
                    {% endfor %}
                  </ul>
                {% endif %}
              </div>
            </article>
          {% endfor %}
        </div>
      {% else %}
        <p class="lab-empty-state">该分类成员信息正在整理中。</p>
      {% endif %}
    </section>
  {% endfor %}
</section>
