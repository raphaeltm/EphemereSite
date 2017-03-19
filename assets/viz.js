var sketch = function(p){
    var s = this;
    
    s.canvas = null;              // The s.canvas.
    s.$viz = $('#viz');           // The s.canvas container.
    
    s.particles = [];             // Global particle array.
    s.gravity = {x: 0, y: -10};   // "s.gravity" for the s.particles.
    s.particleDeath = 800;        // How many millis before kill particle.
    s.linkIndex = null;
    s.$menuLinks = $('.menulink');
    
    var touchTarget = {             // Target to generate s.particles on touch.
        x: s.$viz.width() / 2,
        y: s.$viz.height() / 2
    };
    
    s.Circle = function(x, y){
        var circle = this;
        circle.x = x;
        circle.y = y;
        circle.o = 0;
        circle.r = 30;
        circle.tx = x;
        circle.ty = y;
        circle.to = 0;
        circle.fill = [255, 255, 255, 0];
        circle.stroke = [50, 220, 120, 0];
    }
    
    s.Circle.prototype.draw = function(){
        var circle = this;
        p.push();
        circle.x = circle.x + ((circle.tx - circle.x) / 5);
        circle.y = circle.y + ((circle.ty - circle.y) / 5);
        circle.o = circle.o + ((circle.to - circle.o) / 5);
        circle.stroke[3] = circle.o;
        circle.fill[3] = circle.o;
        p.fill(circle.fill);
        p.stroke(circle.stroke);
        p.ellipseMode(p.CENTER);
        p.ellipse(circle.x, circle.y, circle.r, circle.r);
        p.pop();
    }
    
    /**
     * The Particle object for the points.
     * @param x
     * @param y
     * @constructor
     */
    s.Particle = function(x, y) {
        var particle = this;
        particle.x = x;
        particle.y = y;
        particle.active = false;
        particle.strokeWeight = 2;
        particle.stroke = {
            r: 50,
            g: 220,
            b: 120,
            a: 220
        };
        particle.circle = new s.Circle(x, y);
        var baseSize = 100;
        var randomSize = 45;
        particle.points = [];
        for(var i = 0; i < s.$menuLinks.length; i++){
            particle.points.push((Math.random() * randomSize) + baseSize);
        }
        particle.rotation = p.radians(0);
        particle.rotationSpeed = p.radians(1);
    }
    
    s.Particle.prototype.setRotationSpeed = function(deg){
        this.rotationSpeed = p.radians(deg);
    }
    
    s.Particle.prototype.getRotationSpeed = function(){
        return p.degrees(this.rotationSpeed);
    }
    
    s.Particle.prototype.draw = function(){
        var particle = this;
        p.push();
        particle.rotation += particle.rotationSpeed;
        p.strokeWeight(particle.strokeWeight);
        var c = particle.stroke;
        p.stroke(c.r, c.g, c.b, c.a);
        p.noFill();
        var baseVector = p.createVector(this.x, this.y);
        var drawingPoints = [];
        for(var i = 0; i < particle.points.length; i++){
            var rot = particle.rotation + p.radians((360/particle.points.length) * i);
            var mag = particle.points[i];
            mag = mag + ((Math.sin(p.radians(p.degrees(particle.rotation * 1.2 + rot * 2) + mag)) + 1) * 20);
            var pointVector = p.createVector(0,1);
            pointVector.setMag(mag);
            pointVector.rotate(rot);
            var drawingPoint = baseVector.copy().add(pointVector);
            drawingPoints.push(drawingPoint);
            p.curveVertex(drawingPoint.x, drawingPoint.y);
        }
        p.beginShape();
        p.curveVertex(drawingPoints[drawingPoints.length-1].x, drawingPoints[drawingPoints.length-1].y);
        for(var i = 0; i < drawingPoints.length; i++){
            var point = drawingPoints[i];
            p.curveVertex(point.x, point.y);
        }
        p.curveVertex(drawingPoints[0].x, drawingPoints[0].y);
        p.curveVertex(drawingPoints[1].x, drawingPoints[1].y);
        p.endShape();
        
        if(s.linkIndex !== null){
            var pt = drawingPoints[s.linkIndex];
            particle.circle.tx = pt.x;
            particle.circle.ty = pt.y;
            particle.circle.to = 255;
        }
        else {
            particle.circle.tx = particle.x;
            particle.circle.ty = particle.y;
            particle.circle.to = 0;
        }
        particle.circle.draw();
        p.pop();
    }
    
    s.getTarget = function(){
        if(p.rotationX == null || true){
            return {
                x: p.width / 2, //p.mouseX,
                y: p.height / 2  //p.mouseY
            }
        }
        else {
            touchTarget.x += (p.rotationY / 18);
            touchTarget.y += (p.rotationX / 18);
            if(touchTarget.x < 0){
                touchTarget.x = 0;
            }
            if(touchTarget.y < 0){
                touchTarget.y = 0;
            }
            if(touchTarget.x > p.width){
                touchTarget.x = p.width;
            }
            if(touchTarget.y > p.height){
                touchTarget.y = p.height;
            }
            return touchTarget;
        }
    }
    
    /**
     * Setup the s.canvas.
     */
    p.setup = function() {
        s.canvas = p.createCanvas(s.$viz.width(), s.$viz.height());
        var t = s.getTarget();
        s.blob = new s.Particle(t.x, t.y);
    }
    
    /**
     * Global draw method.
     */
    p.draw = function() {
        p.clear();
        var t = s.getTarget();
        s.blob.x = t.x;
        s.blob.y = t.y;
        s.blob.draw();
    }
    
    /**
     * Make sure to handle window size changes, particularly for mobile.
     */
    p.windowResized = function() {
      p.resizeCanvas(s.$viz.width(), s.$viz.height());
    }
    
    $('.menulink').hover(function(){
        s.linkIndex = $(this).index('.menulink');
    }, function(){
        s.linkIndex = null;
    });

};

window.mp5 = new p5(sketch, 'viz');