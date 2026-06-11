---
layout: lab
permalink: /contact/
title: "Contact"
lang: en
nav_id: contact
zh_url: /cn/contact/
description: "Contact the Robot Learning and Control Lab."
---
{% assign lab = site.data.lab %}
<section class="lab-page-title">
  <p class="lab-eyebrow">Contact</p>
  <h1>Contact</h1>
  <p>Public contact details will be updated after review.</p>
</section>

<section class="lab-section lab-section--tight">
  <div class="lab-grid lab-grid--two">
    <article class="lab-card">
      <h3>Email</h3>
      {% if lab.contact_email %}<p><a href="mailto:{{ lab.contact_email }}">{{ lab.contact_email }}</a></p>{% else %}<p class="lab-muted">Email address to be updated.</p>{% endif %}
    </article>
    <article class="lab-card">
      <h3>Address</h3>
      <p>{{ lab.address_en }}</p>
    </article>
  </div>
</section>
