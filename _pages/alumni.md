---
layout: lab
permalink: /alumni/
title: "Alumni"
lang: en
nav_id: alumni
zh_url: /cn/alumni/
description: "Alumni of the Robot Learning and Control Lab."
---
<section class="lab-page-title">
  <p class="lab-eyebrow">Alumni</p>
  <h1>Alumni</h1>
  <p>Former lab members and their public career updates will be listed here.</p>
</section>

{% assign alumni_group = site.data.members.groups | where: "id", "alumni" | first %}
<section class="lab-section lab-section--tight">
  {% if alumni_group.members and alumni_group.members.size > 0 %}
    <div class="lab-alumni-list">
      {% for member in alumni_group.members %}
        <article class="lab-alumni-item">
          <div>
            <h3>{{ member.name_en }}</h3>
            <p class="lab-muted">{{ member.role_en | default: member.degree_en }}</p>
            {% if member.current_en %}<p>{{ member.current_en }}</p>{% endif %}
            {% if member.research_en %}<p>{{ member.research_en }}</p>{% endif %}
          </div>
          <div class="lab-alumni-item__meta">
            {% if member.year %}<span>{{ member.year }}</span>{% endif %}
            {% if member.homepage %}<a class="lab-text-link" href="{{ member.homepage }}">Homepage</a>{% endif %}
            {% if member.email %}<a class="lab-text-link" href="mailto:{{ member.email }}">{{ member.email }}</a>{% endif %}
          </div>
        </article>
      {% endfor %}
    </div>
  {% else %}
    <p class="lab-empty-state">Alumni information is being prepared.</p>
  {% endif %}
</section>
