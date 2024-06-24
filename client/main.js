import { attr, getNode, insertLast, clearContents } from './lib/index.js';

/* global clearContents */

console.log(attr);

function phase1() {
  //1. input vlaue 값 가져오기(first.second)
  // - input 선택하기
  // - input에게 input 이벤트를 걸어준다
  // - input.value 값을 가져온다
  //2. 숫자 더하기
  // - 숫자 형변환
  //3. result 내용 지우기
  // - clearContents

  const first = getNode('#firstNumber');
  const second = getNode('#secondNumber');
  const result = getNode('.result');
  const clear = getNode('#clear');

  function handleInput() {
    const firstValue = Number(first.value);
    const secondValue = +second.value;
    const total = firstValue + secondValue;

    clearContents(result);
    insertLast(result, total);

    //   console.log(total);
    //result.textContent = ''; //result에 textContent를 먼저 비워주고
  }

  function handleClear(e) {
    e.preventDefault();

    clearContents(first);
    clearContents(second);
    result.textContent = '-';
  }

  first.addEventListener('input', handleInput); //대상에게 input 타입으로 걸어줌 //함수의 재사용성 -> 매개변수
  second.addEventListener('input', handleInput);
  clear.addEventListener('click', handleClear);
}

phase1();

//
//
//이벤트 위임을 사용해서 처리하는 코드
function phase2() {
  const calculator = getNode('.calculator');
  const result = getNode('.result');
  const clear = getNode('#clear');
  const numberInputs = [...document.querySelectorAll('input:not(#clear)')]; //clear를 제외한 input만 수집

  function handleInput() {
    const total = numberInputs.reduce((acc, cur) => acc + Number(cur.value), 0);

    clearContents(result);
    insertLast(result, total);
  }

  function handleClear(e) {
    e.preventDefault();
    numberInputs.forEach(clearContents);
    result.textContent = '-';
  }

  calculator.addEventListener('input', handleInput);
  clear.addEventListener('click', handleClear);
}
