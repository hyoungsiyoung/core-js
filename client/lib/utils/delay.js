/*import { getNode } from '../dom/getNode.js';
import { isNumber, isObject } from '../utils/type.js';

function delay(callback, timeout = 1000) {
  setTimeout(callback, timeout);
}

const first = getNode('.first');
const second = getNode('.second');

// delay(()=>{
//   first.style.top = '-100px';
//   second.style.top = '100px';
//   delay(()=>{
//     first.style.transform = 'rotate(360deg)';
//     second.style.transform = 'rotate(-360deg)';
//     delay(()=>{
//       first.style.top = '0px';
//       second.style.top = '0px'; //되돌아오기
//     })
//   })
//  })

const shouldRejected = true;

// const p = new Promise((성공, 실패) => {
//   if (!shouldRejected) {
//     성공('성공!!');
//   } else {
//     실패('실패!');
//   }
// });

//객체 합성
const defaultOptions = {
  shouldRejected: false,
  data: '성공',
  errorMessage: '알 수 없는 오류',
  timeout: 1000,
};

export function delayP(options) {
  let config = { ...defaultOptions };

  if (isNumber(options)) {
    //typenumber의 option이 number라면
    config.timeout = options;
  }

  if (isObject(options)) {
    //객체를 집어넣었다면 config에 합성해, 그리고 꺼내서 사용해
    config = { ...defaultOptions, ...options };
  }

  //option과 defaultOption이 mixin이 된 형태가 떨어짐

  const { shouldRejected, data, errorMessage, timeout } = config;

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (!shouldRejected) {
        resolve(data);
      } else {
        reject({ message: errorMessage });
      }
    }, timeout);
  });
}

// delayP({timeout:5000})

delayP(5000);
// .then(()=>)
// .then(()=>)
// .then(()=>)
// .then(()=>)
// .then(()=>)
// .then(()=>)

// delayP()
//   .then((res) => {
//     console.log(res);
//     first.style.top = '-100px';
//     second.style.top = '100px';

//     return delayP();
//   })

//   .then((res) => {
//     console.log(res);
//     first.style.transform = 'rotate(360deg)';
//     second.style.transform = 'rotate(-360deg)';

//     return delayP();
//   })
//   .then((res) => {
//     first.style.top = '0px';
//     second.style.top = '0px';
//     console.log(res);
//   });

// async / await

function d() {
  return new Promise((resolve, reject) => {
    resolve('데이터');
  });
}

// async 함수는 무 조 건 Promise object를 반환한다.
// await  2가지 기능 수행
//        1. result 꺼내오기
//        2. 코드 실행 흐름 제어

async function delayA(data) {
  const p = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('성공!');
    }, 2000);
  });

  // p.then((res)=>{
  //   console.log(res);
  // })

  const result = await p;

  console.log(result);
  return;
}

async function 라면끓이기() {
  const a = await delayP({ data: '물' });
  console.log(a);

  const b = await delayP({ data: '스프' });
  console.log(b);

  const c = await delayP({ data: '면' });
  console.log(c);

  const d = await delayP({ data: '그릇' });
  console.log(d);
}

// 라면끓이기()

async function getData() {
  const data = await xhrPromise.get('https://pokeapi.co/api/v2/pokemon/15');

  console.log();

  insertLast(
    document.body,
    `<img src="${data.sprites.other.showdown['front_default']}" alt="" />`
  );
}

getData();
*/
