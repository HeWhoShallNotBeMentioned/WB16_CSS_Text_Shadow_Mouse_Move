

const hero = document.querySelector('.hero');
const text = hero.querySelector('h1');

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

   console.log(x, y);
}

hero.addEventListener('mousemove', shadow);
