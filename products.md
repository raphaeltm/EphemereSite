--- 
layout: default 
title: What I make
permalink: /products/
menuPosition: 2
--- 




<div class="text-center">
    <img class="inline-block" src="{{'/images/starxhdpi.png'|relative_url}}" style="width: 150px" alt="star">
    <h1>I provide services, but also build my own products.
    <br> <small>Check out some of my projects below.</small></h1>
    <hr>
</div>


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