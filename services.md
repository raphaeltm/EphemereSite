--- 
layout: default 
title: Things we do
permalink: /services/
menuPosition: 1
--- 
**We create beautiful experiences**. We offer a variety of creative media services, including web site design and creation, web application development, and app design and development.

**We can help you find your path forward**. If you don't yet need our services, but rather need help finding the right direction, we can help. If you're unsure whether you need an app, website, web application, or perhaps something entirely different, we can help you figure it out and move forward.

**We work with great people**. We partner up with some great people and companies, like [Pivot](http://letspivot.ca) to help you get the best results possible.

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
            <!--<a href="{{service.url|relative_url}}" class="btn btn-default">Learn More</a>-->
          {% endif %}
          <a href="#" class="drift-open-chat btn btn-primary" data-msg="{{service.driftMsg|default:'Let me know what we can do for you!'}}">Let's talk!</a>
        </p>
      </div>
      <div class="col-xs-12">
        <div class="spacer-60"></div>
      </div>
  </div>
{% endfor %}