// $(window).scroll(function() {    
//     var scroll = $(window).scrollTop();

//      //>=, not <=
//     if (scroll >= 50) {
//         //clearHeader, not clearheader - caps H
//         $(".main-header").addClass("active");
//     }else{
//         $(".main-header").removeClass("active");
//     }
// }); //missing );


$(function() {
    //caches a jQuery object containing the header element
    var header = $(".main-header");
    $(window).scroll(function() {
        var scroll = $(window).scrollTop();

        if (scroll >= 50) {
            header.addClass("active");
        } else {
            header.removeClass('active');
        }
    });
});


function myFunction(x) {
if (x.matches) { // If media query matches

        var controller = new ScrollMagic.Controller();

        var scene = new ScrollMagic.Scene({triggerElement: ".trigger", duration: 1200, triggerHook: 0.9})
            // animate color and top border in relation to scroll position
            .setTween(".bg-img", {width: '30%'}) // the tween durtion can be omitted and defaults to 1
            // .addIndicators({name: "2 (duration: 800)"}) // add indicators (requires plugin)
            .addTo(controller);

        var scene = new ScrollMagic.Scene({triggerElement: ".trigger", duration: 800, triggerHook: 0.8})
            // animate color and top border in relation to scroll position
            .setTween(".bg-after", {opacity: 1}) // the tween durtion can be omitted and defaults to 1
            // .addIndicators({name: "2 (duration: 800)"}) // add indicators (requires plugin)
            .addTo(controller);

        var scene = new ScrollMagic.Scene({triggerElement: ".live-happy", duration: 800, triggerHook: '0.8'})
            // animate color and top border in relation to scroll position
            .setTween(".purple-ball", {opacity: 1}) // the tween durtion can be omitted and defaults to 1
            // .addIndicators({name: "2 (duration: 800)"}) // add indicators (requires plugin)
            .addTo(controller);


            // build tween
            var tween = TweenMax.staggerFromTo(".up-rotate", 5, {y: 80,  rotate: '10deg'}, {y: 0,  rotate: '0deg'}, 0.3);

            // build scene
            var scene = new ScrollMagic.Scene({triggerElement: ".up-rotate", duration: 300, triggerHook: 0.8,})
            .setTween(tween)
            .addTo(controller);

            // build tween
            var tween = TweenMax.staggerFromTo(".scale-up", 5, {scale: 0.6}, {scale: 1}, 0.3);

            // build scene
            var scene = new ScrollMagic.Scene({triggerElement: ".scale-up", duration: 350, triggerHook: 0.95,})
            .setTween(tween)
            .addTo(controller);

        // var scene = new ScrollMagic.Scene({triggerElement: ".bubble", duration: 100, triggerHook: '0'})
        //     // animate color and top border in relation to scroll position
        //     .setTween(".bubble", {opacity: 0}) // the tween durtion can be omitted and defaults to 1
        //     // .addIndicators({name: "2 (duration: 800)"}) // add indicators (requires plugin)
        //     .addTo(controller);

        var scene = new ScrollMagic.Scene({triggerElement: ".moments" , triggerHook: '0.1'})
            // trigger animation by adding a css class
            .setClassToggle(".moments", "active")
            // .addIndicators({name: "1 - add a class"}) // add indicators (requires plugin)
            .addTo(controller);


            // var controller = new ScrollMagic.Controller();
            // $(".bubble").each(function() {
            // var tl = new TimelineMax();
            
            // tl.to(this, 1, {opacity: 0});


            // var scene = new ScrollMagic.Scene({
            //     triggerElement: this,
            //     triggerHook: 0.1,
            //     duration: 100
            // })

            // .setTween(tl)
            // .addTo(controller);
            // });


            var controller = new ScrollMagic.Controller();
            $(".ups").each(function() {
                var tl = new TimelineMax();
                var child = $(this).find(".up1");
                var child2 = $(this).find(".up2");
                var child3 = $(this).find(".up3");
                var child4 = $(this).find(".up4");
                var child5 = $(this).find(".up5");
                tl.to(child, 1, {opacity: 1, y: -80 });
                tl.to(child2, 1, {opacity: 1, y: -80 });
                tl.to(child3, 1, {opacity: 1, y: -80 });
                tl.to(child4, 1, {opacity: 1, y: -80 });
                tl.to(child5, 1, {opacity: 1, y: -80 });
            
                var scene = new ScrollMagic.Scene({
                triggerElement: this,
                triggerHook: 0.7,
                duration: 1200
                })
            
                .setTween(tl)
                // .addIndicators({
                //   colorTrigger: "black",
                //   colorStart: "black",
                //   colorEnd: "black",
                //   indent: 10
                // })
                
                .addTo(controller);
            });

        // function pinsec() {
        //     new ScrollMagic.Scene({
        //     triggerElement: '.pin-bubble',
        //     duration: '200',
        //     top: 0,
        //     left: 0,
        //     right: 0,
        //     triggerHook: 0,
        // })
        //     .setPin('.pin-bubble')
        //     .addTo(controller)
        // scene.offset(0)
        // }
        // pinsec()

    }

    else {
    

    }
}

var x = window.matchMedia("(min-width: 992px)")
myFunction(x) // Call listener function at run time
x.addListener(myFunction) // Attach listener function on state changes


