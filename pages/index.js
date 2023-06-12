'use client'
// import React from 'react';
import React, { useEffect } from 'react';
import { Controller, Scene } from 'react-scrollmagic';
import Header from '../src/app/components/Header';
import Footer from '../src/app/components/Footer';
import LocalImages from '../src/app/images';
import Image from '../src/app/components/Image';
// import v1 from '../src/app/images/v1.mp4';

const HomePage = () => {

  useEffect(() => {

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



          // build tween
          var tween = TweenMax.staggerFromTo(".scale-up", 5, {scale: 0.6}, {scale: 1}, 0.3);
          // build scene
          var scene = new ScrollMagic.Scene({triggerElement: ".scale-up", duration: 400, triggerHook: 0.98,})
          .setTween(tween)
          .addTo(controller);



          // build tween
          var tween = TweenMax.staggerFromTo(".up-rotate", 5, {y: 80, x:20, rotate: '20deg'}, {y: 0, x:0, rotate: '0deg'}, 0.3);
          // build scene
          var scene = new ScrollMagic.Scene({triggerElement: ".up-rotate", duration: 400, triggerHook: 0.85,})
          .setTween(tween)
          .addTo(controller);


          var scene = new ScrollMagic.Scene({triggerElement: ".moments" , triggerHook: '0.1'})
          // trigger animation by adding a css class
          .setClassToggle(".moments", "active")
          // .addIndicators({name: "1 - add a class"}) // add indicators (requires plugin)
          .addTo(controller);

          function pinsec1() {
            new ScrollMagic.Scene({
            triggerElement: '.recog-in',
            duration: '1500',
            top: 0,
            left: 0,
            right: 0,
            triggerHook: 0,
          })
            .setPin('.recog-in')
            .addTo(controller)
          scene.offset(0)
          }
          pinsec1()


          var scene = new ScrollMagic.Scene({triggerElement: ".b1-trigger" , triggerHook: '0'})
          // trigger animation by adding a css class
          .setClassToggle(".recognition", "b2-active")
          // .addIndicators({name: "1 - add a class"}) // add indicators (requires plugin)
          .addTo(controller);
    
    
          var scene = new ScrollMagic.Scene({triggerElement: ".b2-trigger" , triggerHook: '0'})
          // trigger animation by adding a css class
          .setClassToggle(".recognition", "b3-active")
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

      // function pinsec() {
      //   new ScrollMagic.Scene({
      //   triggerElement: '.ball-div',
      //   duration: '1000',
      //   top: 0,
      //   left: 0,
      //   right: 0,
      //   triggerHook: 0,
      // })
      //   .setPin('.ball-div')
      //   .addTo(controller)
      // scene.offset(0)
      // }
      // pinsec()

 
    }

    else {

      var controller = new ScrollMagic.Controller();

      var scene = new ScrollMagic.Scene({triggerElement: ".b1-trigger" , triggerHook: '0'})
      // trigger animation by adding a css class
      .setClassToggle(".recognition", "b2-active")
      // .addIndicators({name: "1 - add a class"}) // add indicators (requires plugin)
      .addTo(controller);


      var scene = new ScrollMagic.Scene({triggerElement: ".b2-trigger" , triggerHook: '0'})
      // trigger animation by adding a css class
      .setClassToggle(".recognition", "b3-active")
      // .addIndicators({name: "1 - add a class"}) // add indicators (requires plugin)
      .addTo(controller);

      function pinsec1() {
        new ScrollMagic.Scene({
        triggerElement: '.recog-in',
        duration: '1500',
        top: 0,
        left: 0,
        right: 0,
        triggerHook: 0,
      })
        .setPin('.recog-in')
        .addTo(controller)
      scene.offset(0)
      }
      pinsec1()
    }
  }
  
  var x = window.matchMedia("(min-width: 992px)")
  myFunction(x) // Call listener function at run time
  x.addListener(myFunction) // Attach listener function on state changes



  }, [])
 
  return (
    <div>
      <Header />

      <section class="banner" id="banner">
        <div class="bg-img">
          <figure>
            {/* <!-- <img src="/images/banner.png"/> --> */}
            <video autoPlay playsInline muted loop>
              <source src="/banner-video.mp4" type="video/mp4" />
            </video>
          </figure>
        </div>
        <div class="container">
          <div class="text">
            <h1>We believe happiness is a human right</h1>
            <p class="h5">Everything we do is to make our world happier.</p>

            <a href="javascript:;"><Image src={LocalImages.Ios} alt='iOS'/></a>
          </div>
        </div>
        
        <div class="bg-after"></div>
      </section>
      <div class="trigger"></div>

      <section class="moments" id="moments">
      <div class="curve-top">
        <div class="bubbles">
          <div class="bubbles-in">
            <div class="bubble1">
              <div class="bubble">
                <video autoPlay playsInline loop muted>
                  <source src="/v1.mp4" type="video/mp4" />
                </video>
              </div>
  
              <div class="bubble">
                <video autoPlay playsInline loop muted>
                  <source src="/v3.mp4" type="video/mp4" />
                </video>
              </div>
  
              <div class="bubble">
                <video autoPlay playsInline loop muted>
                  <source src="/v5.mp4" type="video/mp4" />
                </video>
              </div>
  
              <div class="bubble">
                <video autoPlay playsInline loop muted>
                  <source src="/v7.mp4" type="video/mp4" />
                </video>
              </div>
            </div>
    
    
            <div class="bubble2">
              <div class="bubble ">
                <video autoPlay playsInline loop muted>
                  <source src="/v2.mp4" type="video/mp4" />
                </video>
              </div>
  
              <div class="bubble ">
                <video autoPlay playsInline loop muted>
                  <source src="/v4.mp4" type="video/mp4" />
                </video>
              </div>
  
              <div class="bubble">
                <video autoPlay playsInline loop muted>
                  <source src="/v6.mp4" type="video/mp4" />
                </video>
              </div>
  
              <div class="bubble">
                <video autoPlay playsInline loop muted>
                  <source src="/v9.mp4" type="video/mp4" />
                </video>
              </div>
            </div>
          </div>
          <div class="bubbles-in">
            <div class="bubble1">
              <div class="bubble">
                <video autoPlay playsInline loop muted>
                  <source src="/v1.mp4" type="video/mp4" />
                </video>
              </div>
  
              <div class="bubble">
                <video autoPlay playsInline loop muted>
                  <source src="/v3.mp4" type="video/mp4" />
                </video>
              </div>
  
              <div class="bubble">
                <video autoPlay playsInline loop muted>
                  <source src="/v6.mp4" type="video/mp4" />
                </video>
              </div>
  
              <div class="bubble">
                <video autoPlay playsInline loop muted>
                  <source src="/v7.mp4" type="video/mp4" />
                </video>
              </div>
            </div>
    
    
            <div class="bubble2">
              <div class="bubble ">
                <video autoPlay playsInline loop muted>
                  <source src="/v2.mp4" type="video/mp4" />
                </video>
              </div>
  
              <div class="bubble ">
                <video autoPlay playsInline loop muted>
                  <source src="/v4.mp4" type="video/mp4" />
                </video>
              </div>
  
              <div class="bubble">
                <video autoPlay playsInline loop muted>
                  <source src="/v7.mp4" type="video/mp4" />
                </video>
              </div>
  
              <div class="bubble">
                <video autoPlay playsInline loop muted>
                  <source src="/v9.mp4" type="video/mp4" />
                </video>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="pin-bubble">
        <div class="container">
          <div class="text ups">
            <h2 class="up1">Make your happiest moments live on forever!</h2>
            <p class="h6 up1">Happiness AI uses advanced algorithms to analyze facial expressions and body language to help you identify moments of happiness and capture them in lasting memories.</p>
          </div>
        </div>
      </div>
      </section>

      <section class="recognition">
      <div className='b1-trigger'></div>
      <div className='b2-trigger'></div>
        <div className='recog-in'>
          <div class="ball-div">
            <img class="orange-ball ball-img" src="/orange-balls.svg" alt="Img"/>
            <img class="purple-ball ball-img" src="/purple-balls.svg" alt="Img"/>
            <img class="black-ball ball-img" src="/black-balls.svg" alt="Img"/>
          </div>

          <div className='b-text'>
            <div className='b1'>
              <div class="container">
                <div class="phone-div">
                  <video autoPlay playsInline muted loop>
                    <source src="/phone-video.mp4" type="video/mp4" />
                  </video>
                </div>

                <div class="text text-1">
                  <h2>Emotion recognition</h2>
                  <p class="h6">Be mindful of your emotions 
                    to create happy experiences</p>
                </div>

                <div class="text text-2 left">
                  <h2>Premium features</h2>
                  <p class="h6">Get Premium access to save happy memories </p>
                </div>


                <div class="text text-3">
                  <h2>Share with friends</h2>
                  <p class="h6">Share moments of happiness to make our world happier</p>
                </div>
              </div>
            </div>

            {/* <div className='b2'>
              <div class="container">
                <div class="phone-div">
                  <video autoPlay playsInline muted loop>
                    <source src="/phone-video.mp4" type="video/mp4" />
                  </video>
                </div>

                
              </div>
            </div>

            <div className='b3'>
              <div class="container">
                <div class="phone-div">
                  <video autoPlay playsInline muted loop>
                    <source src="/phone-video.mp4" type="video/mp4" />
                  </video>
                </div>

              
              </div>
            </div> */}

          </div>
        </div>
        
      </section>

      <section class="live-happy">
        <div class="container">
          <div class="live-row">
              <div class="text ups">
                <div class="cmnt up-rotate">
                  <h4><span>live happy</span></h4>
                </div>
                <h3 class="up1">What Makes us Happy?</h3>
                <p class="h6 up1">Happiness is a feeling of wellbeing where all elements of our life - physical, mental, emotional, environmental, economic, hedonic, relational, intellectual, and eudaimonic - are flourishing.</p>

                <a href="javascript:;" class="btn up1">Get iOS App</a>
              </div>

              <div class="happy-img">
                <figure class="scale-up"><Image src={LocalImages.Happy} alt='happy'/></figure>
              </div>
          </div>


        </div>

        <div class="cirle-div">
          <div class="container">
            <div class="circle-list">
              <div>
                <div class="circle-li">
                  <div>
                    <i class="health-icon"></i>
                    <h5>Health</h5>
                    <p>Maintaining physical, mental, and emotional wellbeing is essential to live our best lives.</p>
                  </div>
                </div>
              </div>
        
              <div>
                <div class="circle-li">
                  <div>
                    <i class="lifestyle-icon"></i>
                    <h5>Lifestyle</h5>
                    <p>Our way of life is shaped by our environmental, economic, and hedonic wellbeing. </p>
                  </div>
                </div>
              </div>
        
              <div>
                <div class="circle-li">
                  <div>
                    <i class="social-icon"></i>
                    <h5>Social</h5>
                    <p>Relational wellbeing is being  part of a caring community and nurturing positive relationships.</p>
                  </div>
                </div>
              </div>
        
              <div>
                <div class="circle-li">
                  <div>
                    <i class="intelli-icon"></i>
                    <h5>Intelligence</h5>
                    <p>Intellectual wellbeing is fostered by cultivating creativity, gaining knowledge, and embracing virtue.</p>
                  </div>
                </div>
              </div>
              <div>
                <div class="circle-li">
                  <div>
                    <i class="purpose2-icon"></i>
                    <h5>Purpose</h5>
                    <p>Eudaimonic wellbeing is achieved when we uncover our purpose and meaning in life.</p>
                  </div>
                </div>
              </div>
        
        
            </div>
          </div>
        </div>
      </section>

      <section class="happier">
        <div class="container">
          <div class="h1">Help us make our world happier</div>
          <a href="javascript:;"><Image src={LocalImages.Ios} alt='iOS'/></a>
        </div>
      </section>
      
{/* 
      <Controller>
        <Scene duration={600} pin>
          <div>Sticky Example</div>
        </Scene>
      </Controller> */}
    <Footer />
    </div>

  );
};

export default HomePage;