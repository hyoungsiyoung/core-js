/* --------------------- */
/* Event Handling        */
/* --------------------- */

/* 이벤트 핸들링 3가지 방법 --------------------------------------------------- */

// 1. HTML 속성 : onclick="handler()"

function handler() {
  console.log('클릭 이벤트 발생!!!');
}

// 2. DOM 프로퍼티 : element.onclick = handler
const first = getNode('.first');
first.onclick = handler;

// 3. 메서드 : element.addEventListener(event, handler[, phase])

function handleClick(event) {
  //event객체는 evt or e 라고도 씀 (강사님은 e를 많이 쓰신다고 한다)
  console.log(event.type); //e.type
  console.log(event.target); //e.target
  console.log(event.offsetX); //e.offsetX
}

first.addEventListener('click', handleClick); //('mousedown', handleClick); or ('mouseup', handleClick);

/* 이벤트 추가/제거 --------------------------------------------------------- */

// - addEventListener
// - removeEventListener

/* --------------------- */
/* Event Handling        */
/* --------------------- */

/* 이벤트 핸들링 3가지 방법 --------------------------------------------------- */

// 1. HTML 속성 : onclick="handler()"

function handler() {
  console.log('클릭 이벤트 발생!!!');
}

// 2. DOM 프로퍼티 : element.onclick = handler
const first = getNode('.first');
// first.onclick = handler;

// 3. 메서드 : element.addEventListener(event, handler[, phase])

function handleClick(e) {
  console.log(e.type);
  console.log(e.target);
  console.log(e.offsetX);
}

const second = getNode('.second');

// second.addEventListener('click',firstEventRemove)

function bindEvent(node, type, handler) {
  if (isString(node)) node = getNode(node);

  node.addEventListener(type, handler);

  return () => node.removeEventListener(type, handler);
}

const firstEventRemove = bindEvent('.first', 'click', handleClick);

//second를 클릭했을 때 제거해보자
second.addEventListener('click', () => {
  first.removeEventListener('click', handleClick);
});

//setTimeout(() => {
//     first.removeEventListener('click', handleClick)
// }, 3000)

//second.addEventListener('click',firstEventRemove)

/* 이벤트 추가/제거 --------------------------------------------------------- */

// - addEventListener
// - removeEventListener

const ground = getNode('.ground');
const ball = getNode('ball');

function handleClickBall(e) {
  const { offsetX: x, offsetY: y } = e;
  //   let x = e.offsetX;
  //   let y = e.offsetY;

  ball.style.transform = `translate(${x - ball.offsetWidth / 2}px, ${y - ball.offsetHeight / 2}px)`;
}

// ground.addEventListener('click', handleClickBall);

function handleMove({ offsetX: x, offsetY: y }) {
  console.log(x, y);

  let template = `
  <div class="emotion" style="top:${y}px; left:${x}px;">💋</div>
  `;

  insertLast(ground, template);
}

function debounce(callback, limit = 500) {
  let timeout;
  return function (e) {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      callback.call(this, e);
    }, limit);
  };
}

function throttle(callback, limit = 200) {
  let waiting = false;

  return function (e) {
    if (!waiting) {
      callback.call(this, e);
      waiting = true;

      setTimeout(() => {
        waiting = false;
      }, limit);
    }
  };
}

ground.addEventListener('mousemove', throttle(handleMove));

// throttle(()=>{
//   console.log('hit');
// })()

// addClass('ground',['a', 'b', 'c'])
// addClass('.ground', 'a','b','c')
// addClass('.ground', 'a,b,c');

// ground.addEventListener('mousemove',(e)=>{
//   console.log( e );
// })

//throttle(수도꼭지), debounce(공 튀김 방지)
