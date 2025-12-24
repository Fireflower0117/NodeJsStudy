// 객체 리터럴
// 객체 리터럴에는 편리한 기능들이 추가되었다.

var sayNode = function(){
    console.log('Node');
}

let es = 'ES';
var oldObject = {
    sayJs: function(){
        console.log('JS');
    }
    ,sayNode : sayNode,
}

oldObject[es + 6] = 'Fanstic';  //  oldObject.ES6
oldObject.sayNode(); // Node
oldObject.sayJs(); // JS
console.log(oldObject['ES6']); // Fanstic

// 위으 스크립트를 아래와 같이 다시 쓸수있다.

const newObject = {
    sayJS(){                    //  newObject.sayJS
        console.log('New JS');
    }
  , sayNode                          //  newObject.sayNode (객체의 key이름도 sayNode , value도 sayNodedl로 명칭이 같으면 한번만 사용해되 된다.)
  , [es + 6] : 'New Fanstic'             //  newObject.ES6
  ,
}
newObject.sayNode(); // Node
newObject.sayJS();   // JS
console.log(newObject['ES6']); // Fanstic

// oldObject ,  newObject 비교해보면 sayJS같은 객체에 함수를 연결할떄 더는 콜론(:)과 function을 붙이지 않아도 된다. (newObject.sayJS)
// 속성명과 변수명이 동일한경우는 한번만 써도 되게끔 바뀌었다. (newObject.sayNode)

// {name: name , age: age} // ES5
// {name, age} // ES2015이상

// 예전문법에서는 ES6라는 속성명을 만들때는 객체리터럴 밖에서 해야 핬다. (oldObject.ES6)
// ES2015부터는 객체리터럴 내부에서 선언을 해도 된다. (newObject.ES6)


// 리터럴(literal)은 소스 코드에 직접 입력된 고정된 값 자체를 의미(Data Type) 
// int age = 25;
// String name = "김철수"; 
// 25는 정수형(int) 리터럴입니다.
// "김철수"는 문자열(String) 리터럴입니다. 

// 리터럴의 주요 종류
// 정수 리터럴: 10, 500, -20 등 정수 값.
// 실수/부동 소수점 리터럴: 3.14, 0.5, -1.2e3 등 실수 값.
// 문자 리터럴: 'A', 'c', '\n' 등 단일 문자. 작은따옴표로 묶습니다.
// 문자열 리터럴: "안녕하세요", "Hello" 등 문자들의 나열. 큰따옴표로 묶습니다.
// 부울(boolean) 리터럴: true, false 등 논리 값.
// 널(null) 리터럴: null 등 값이 없음을 나타내는 특별한 값. 
