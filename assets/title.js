(function(){
    if(window.titlePaper){
        return;
    }
    window.$pageTitle = $('.page-title');
    window.titlePaper = null;
    window.titleBox = null;
    
    if(!window.titleColor){
        window.titleColor = '#32dc78';
    }
    if(!window.titleColorSecondary){
        window.titleColorSecondary = '#A933FF';
    }
    
    function drawTitleBox(){
        if(window.titlePaper){
            window.titlePaper.remove();
        }
        window.titlePaper = Raphael(window.$pageTitle[0]);
        var strokeWidth = 15;
        var strokeOffset = strokeWidth / 2;
        var width = window.$pageTitle.innerWidth() - strokeWidth;
        var drop = 300;
        var dropOffset = 100;
        var path = Raphael.format("M{0},{1}v{2}l{3},{4}v{5}Z", strokeOffset, strokeOffset, (drop - dropOffset), width, dropOffset, -drop);
        window.titleBox = window.titlePaper.path(path);
        window.titleBox.attr('stroke', window.titleColor);
        window.titleBox.attr('stroke-width', strokeWidth);
        window.titleBox.attr('fill', window.titleColor);
        
        window.titleBox.hover(function(e){
          window.titleBox.animate({
              'fill': window.titleColorSecondary,
              'stroke': window.titleColorSecondary,
              'stroke-opacity': 0
          }, 500, 'linear');
          
        },function(e){
          window.titleBox.animate({
              'fill': window.titleColor,
              'stroke': window.titleColor,
              'stroke-opacity': 1
          }, 500, 'linear');
        });
    }
    
    drawTitleBox();
    
    $(window).on('resize', function(){
        drawTitleBox();
    });
})();