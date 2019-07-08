window.onload = load;

function load(){
  //index.html
  TweenMax.from('.div-branch', 1,//speed 
  { scale: 0, 
    height: '100vh',
    ease: Back.easeOut.config(2.7),
  });
  TweenMax.from('#title-index', 1,//speed 
  { y: '-20px', 
    height: '100vh',
    ease: Back.easeOut.config(.7),
  });
  // strawbery.html
  TweenMax.from('.right-content-red', 1,//speed 
  { height:0,
    ease: Back.easeOut.config(1.9),
  });
  TweenMax.from('.overlay-red', 1,//speed 
  { opacity:0,
    delay:0.4,
    ease: Back.easeOut.config(1.9),
  });

  // // citron.html
  TweenMax.from('.right-content-yellow', 1,//speed 
  { scale:0,
    ease: Back.easeOut.config(1.9),
  });
  TweenMax.from('.overlay-yellow', 1,//speed 
  { opacity:0,
    delay:0.5,
    ease: Back.easeOut.config(1.9),
  });

}