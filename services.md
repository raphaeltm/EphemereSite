--- 
layout: default 
title: What we do
permalink: /services/
menuPosition: 1
--- 

<div class="text-center">
    <img class="inline-block" src="{{'/images/Heartxhdpi.png'|relative_url}}" style="width: 150px" alt="heart">
    <h1>We build beautiful websites and apps.</h1>
    <h3>We can also help with branding and UX design by the wonderful people at <a href="http://letspivot.com/">Pivot</a>.</h3>
    <hr>
</div>

<div class="row">
  <div class="col-xs-12">
    <div class="spacer-70"></div>
  </div>
</div>

{% assign services = site.services | sort: 'menuPosition' %}
{% for service in services %}
  {% assign url=service.url | relative_url %}
  {% capture direction %}{% cycle 'right', 'left' %}{% endcapture %}
  <div class="row">
      <div class="col-xs-12 col-sm-6 {% if direction == 'left' %}col-sm-push-6{% endif %}">
        {% include colour_tile.html url=url switch=true text=service.title direction=direction %}
      </div>
      <div class="col-xs-12 col-sm-6 {% if direction == 'left' %}col-sm-pull-6{% endif %}">
        {{service.shortDescription|markdownify}}
        <p>
          {% if service.title == "Mentorship" %}
            <a href="https://www.codementor.io/raphaeltm?utm_source=github&utm_medium=button&utm_term=raphaeltm&utm_campaign=github"><img src="https://cdn.codementor.io/badges/i_am_a_codementor_dark.svg" alt="I am a codementor" style="max-width:100%"/></a>
          {% else %}
            <a href="{{service.url|relative_url}}" class="btn btn-default">Learn More</a>
            <a href="#" class="drift-open-chat btn btn-primary" data-msg="{{service.driftMsg|default:'Let me know what we can do for you!'}}">Let's talk!</a>
          {% endif %}
        </p>
      </div>
      <div class="col-xs-12">
        <div class="spacer-120"></div>
      </div>
  </div>
{% endfor %}