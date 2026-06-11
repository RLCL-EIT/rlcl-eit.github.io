---
layout: lab
permalink: /people/
title: "People"
lang: en
nav_id: people
zh_url: /cn/people/
description: "Members of the Robot Learning and Control Lab."
---
<section class="lab-page-title">
  <p class="lab-eyebrow">People</p>
  <h1>Team members</h1>
  <p>Members are grouped by role. Profiles will be added gradually after public release review.</p>
</section>

<section class="lab-section lab-section--tight">
  {% for group in site.data.members.groups %}
    <section class="lab-person-group" id="{{ group.id }}">
      <h2>{{ group.title_en }}</h2>
      {% if group.members and group.members.size > 0 %}
        <div class="lab-grid lab-grid--two">
          {% for member in group.members %}
            <article class="lab-card">
              <h3>{{ member.name_en }}</h3>
              <p class="lab-muted">{{ member.role_en }}</p>
              {% if member.research_en %}<p>{{ member.research_en }}</p>{% endif %}
            </article>
          {% endfor %}
        </div>
      {% else %}
        <p class="lab-empty-state">Profiles in this category are being prepared.</p>
      {% endif %}
    </section>
  {% endfor %}
</section>
