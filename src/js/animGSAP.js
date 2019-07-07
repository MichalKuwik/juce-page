window.onload = load;

function load(){
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

}