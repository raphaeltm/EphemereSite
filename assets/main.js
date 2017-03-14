---
---
var searchClient = algoliasearch('{{ site.algolia.application_id }}', '{{ site.algolia.search_key }}');
var pagesIndex = searchClient.initIndex('Pages');
var $body = $('body');
var bgColors = ['red', 'green', 'blue', 'yellow', 'purple', 'aqua', 'white'];
var activeColor = 'white';

function randomColor(){
    return bgColors[Math.floor(Math.random()*bgColors.length)];
}

function setBackground(){
    var color = randomColor();
    while(color == activeColor){
        color = randomColor();
    }
    $body.removeClass('bg-'+activeColor);
    $body.addClass('bg-'+color);
    activeColor = color;
}

setBackground();

setInterval(setBackground, 6000);