let userName = prompt("누구세요?");

if (userName === "admin") {
  let password = prompt("비밀번호는");

  if (password == "theMaster") {
    console.log("취소");
  } else {
    console.log("비밀번호를 잘못 입력하셨습니다.");
  }
} else if (userName == null) {
  console.log("취소");
} else {
  console.log("실패");
}
