

const hero = document.querySelector('.hero');
const text = hero.querySelector('h1');
const walk = 100; //100px

function shadow (e) {
  const width = hero.offsetWidth;
  const height = hero.offsetHeight;
  //const { offsetWidth: width, offsetHeight: height } = hero; destructured version (es6) of the above 2 lines
  let {offsetX: x, offsetY: y} = e;

  //this = hero as we are listening for that. When e.target is anything but that, in this case, h1 if is envolked.
  if (this !== e.target) {
     x = x + e.target.offsetLeft;
     y = y + e.target.offsetTop;
   }

   const xWalk = Math.round((x / width * walk) - (walk / 2));
   const yWalk = Math.round((y / height * walk) - (walk / 2));
   text.style.textShadow = `${xWalk}px ${yWalk}px 0 purple,
    ${xWalk * -1}px ${yWalk}px 0 blue,
     ${yWalk}px ${xWalk * -1}px 0 yellow,
     ${yWalk * -1}px ${xWalk}px 0 green
   `;
}

hero.addEventListener('mousemove', shadow);
