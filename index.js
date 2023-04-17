function examOne(first, second) {
  // 매개변수가 문자열일 경우, 다음과 같은 문자열이 나타나도록 작성하시오.
  // "문자열 데이터를 입력하셨습니다."
  if((typeof(first) === "string" || typeof(second) === "string")) {
    return "문자열 데이터를 입력하셨습니다.";
  } else {
    return first + second;
  }
};

function examTwo(first, second, third) {
  // 숫자여야만 실행되도록 타입을 확인하는 로직을 작성하시오.
  if((typeof(first) === "number" && typeof(second) === "number" && typeof(third) === "number")) {
    return first * second * third;
  } else {
    return "숫자가 아닌 데이터를 입력하셨습니다.";
  }
};

function examThree(str) {
  // 문자열만 실행되도록 확인하는 로직을 작성하시오.
  // length 프로퍼티를 사용하지 않고 길이값을 구하시오.
  if(typeof(str) === "string") {
    const string = str.split("")
    return arrayChecker(string);
  } else {
    return "문자열 데이터가 아닙니다."
  }
};

// 문자열 길이를 구하기 위해 만든 함수
function arrayChecker(arr) {
  let i = 0;
  while(arr[i] != undefined) {
    i++;
  }
  return i;
}

function examFour(array) {
  // 배열(array)만을 인자로 받아서 실행할 수 있도록 작성하시오.
  if(Array.isArray(array)) {
    let checker;
    for(let i = 0; i < array.length; i++) {
      if(i === 0) {
        checker = array[i];
      } else {
        if(checker > array[i]) {
          checker = array[i];
        }
      }
    }
    return checker;
  } else {
    return "배열이 아닌 데이터를 입력하셨습니다.";
  }
};

function examFive(array) {
  // 배열(array)만을 인자로 받아서 실행할 수 있도록 작성하시오.
  if(Array.isArray(array)) {
    let sum = 0;
    for(let i = 0; i < array.length; i++) {
      sum = sum + array[i];
    }
    return sum;
  } else {
    return "배열이 아닌 데이터를 입력하셨습니다.";
  }
};

console.log(examOne(2, 3)); // 덧셈 로직 만들기
console.log(examTwo(2, 3, 4)); // 곱셈 로직 만들기
console.log(examThree("hello")); // 문자열 길이 구하기
console.log(examFour([3, 1, 4, 2])); //최솟값 판별하기
console.log(examFive([1, 2, 3])); // 배열값 누산(총합)하기