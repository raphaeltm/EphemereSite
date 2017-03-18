---
---
var searchClient = algoliasearch('{{ site.algolia.application_id }}', '{{ site.algolia.search_key }}');
var pagesIndex = searchClient.initIndex('Pages');

$(function(){
    var $document = $(document);
    var $menu = $('#menu');
    
    $document.on('click', '.menu-trigger', function(e){
        e.preventDefault();
        $menu.toggleClass('closed');
    });
});