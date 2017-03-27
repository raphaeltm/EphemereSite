--- 
layout: default 
title: Things we make
permalink: /products/
menuPosition: 2
--- 

**We provide services, but we also make things on our own time.** Check out some of our in-house projects below.

<div class="row">
  <div class="col-xs-12">
    <div class="spacer-70"></div>
  </div>
</div>

{% assign products = site.products | sort: 'menuPosition' %}
{% for product in products %}
  {% assign url=product.url | relative_url %}
  {% capture direction %}{% cycle 'right', 'left' %}{% endcapture %}
  <div class="row">
      <div class="col-xs-12 col-sm-6 {% if direction == 'left' %}col-sm-push-6{% endif %}">
        {% include colour_tile.html url=product.link switch=true text=product.title direction=direction %}
      </div>
      <div class="col-xs-12 col-sm-6 {% if direction == 'left' %}col-sm-pull-6{% endif %}">
        {{product.content|markdownify}}
        <p>
          <a href="{{product.link}}" class="btn btn-default">Check it out!</a>
          <a href="#" class="drift-open-chat btn btn-primary" data-msg="Hi! What can I do for you?">Have a question?</a>
        </p>
      </div>
      <div class="col-xs-12">
        <div class="spacer-60"></div>
      </div>
  </div>
{% endfor %}