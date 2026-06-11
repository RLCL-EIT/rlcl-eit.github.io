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
        <div class="lab-people-grid">
          {% for member in group.members %}
            <article class="lab-person-card">
              {% if member.photo %}
                <img class="lab-person-card__photo" src="{{ member.photo | relative_url }}" alt="{{ member.name_en }}">
              {% endif %}
              <div class="lab-person-card__body">
                <h3>{{ member.name_en }}</h3>
                {% if member.research_en %}<p>{{ member.research_en }}</p>{% endif %}
                <div class="lab-person-card__links">
                  {% if member.email %}<a class="lab-text-link" href="mailto:{{ member.email }}">{{ member.email }}</a>{% endif %}
                  {% if member.homepage %}<a class="lab-text-link" href="{{ member.homepage }}">Homepage</a>{% endif %}
                  {% if member.scholar %}<a class="lab-text-link" href="{{ member.scholar }}">Scholar</a>{% endif %}
                  {% if member.github %}<a class="lab-text-link" href="{{ member.github }}">GitHub</a>{% endif %}
                </div>
                {% if member.education_en and member.education_en.size > 0 %}
                  <ul class="lab-education-list">
                    {% for item in member.education_en %}
                      <li>{{ item }}</li>
                    {% endfor %}
                  </ul>
                {% endif %}
              </div>
            </article>
          {% endfor %}
        </div>
      {% else %}
        <p class="lab-empty-state">Profiles in this category are being prepared.</p>
      {% endif %}
    </section>
  {% endfor %}
</section>
