// 출력 — 파이썬의 print('hello')
console.log('hello')

// 변수 — let은 재대입 가능, const는 선언할 때 초기값 필수

// 옛날 문법 — var: 여기서는 let·const 사용
// var count = 1

let a = 1  // 변경 가능
const b = 1  // 상수 — 재대입 불가

// 선언 — 값 없이 선언하면 undefined
let c
// 할당 — 선언한 변수에 값 넣기
c = 3

a++ // 값을 1 증가시킴
// b++ → const에 재대입하므로 TypeError
// ++a는 먼저 증가시킨 값을 사용
console.log(++a, b)


// 자료형 — typeof로 타입 확인

// 정수·소수 모두 number (파이썬은 int·float로 구분)
const price = 1500
console.log(typeof price)

const weight = 0.25
console.log(typeof weight)

// 이름 관례: 파이썬 is_fresh, JS isFresh / true·false는 boolean
const isFrech = true
console.log(typeof isFrech)

// 문자열은 string
const naming = 'wonjun'
console.log(typeof naming)

// 배열 Array — 파이썬의 리스트(list)와 비슷함
const basket = ['aa', 'bbb', 'cccc']
console.log(typeof basket) // 배열도 typeof 결과는 object
console.log(basket[2])
console.log(Array.isArray(basket)) // 배열인지 확인: true

// 객체 Object — 파이썬의 딕셔너리(dict)처럼 키·값을 저장
const apple = { name: '사과', price: 1500 }
console.log(typeof apple)
console.log(apple['name']) // 대괄호로 속성 접근
console.log(apple.name) // 속성 이름을 직접 쓰면 점 표기도 가능
console.log(apple)

// null: 의도적으로 값이 없음을 표시 (파이썬의 None과 비슷함)
const discount = null
console.log(typeof discount) // 역사적인 특성 때문에 'object' 출력

let t
console.log(t) // undefined: 아직 값이 할당되지 않음

// const는 초기값 없이 선언할 수 없음
// const asdf

// 템플릿 문자열(f-string 비교): 백틱과 ${값} — 파이썬의 f'hello {naming}'
const hi = `hello ${naming}`
console.log(hi)

console.log(apple)
// apple = 1 → const 변수 자체의 재대입은 불가
apple.name = '링고'
// const 객체도 내부 속성은 변경 가능
console.log(apple)


// 조건 — if / else if / else (파이썬의 if / elif / else)
const stock = 0

if (stock >= 10) {
    console.log('재고 충분')
}
else if (stock > 0) {
    console.log('재고 부족')
}
else {
    console.log('품절')
}


// 삼항 연산자: 조건 ? 참일 때 값 : 거짓일 때 값
// 파이썬: status = '재고 있음' if stock > 0 else '품절'
const status = stock > 0 ? '재고 있음' : '품절'


// 변수 비교 — ==는 타입 변환 가능, ===는 타입까지 같아야 함
console.log("0" == "0")
console.log(0 == "0") // true
console.log(0 === "0") // false
console.log('hello' != 'hi')


// 반복1 — while: 조건이 참인 동안 반복
let n = 0
while ( n < 3 ) {
    console.log(n)
    n++ // n += 1
}

// 반복2 — 기본 for: 초기화; 반복 조건; 매 반복 후 실행
// 아래는 파이썬의 for i in range(3)과 비슷함
let i
for ( i = 0; i < 3; i++ ) {
    console.log(i)
}

// 반복3 — 인덱스로 배열 순회: basket.length는 파이썬의 len(basket)
for ( let i = 0; i < basket.length; i++ ) {
    console.log(basket[i])
}

// 반복4 of 리스트 — for...of: 배열의 값 순회 — 파이썬의 for item in basket:
for (const item of basket) {
    console.log(item)
}

// 반복5 in 딕셔너리 — for...in: 객체의 열거 가능한 문자열 키 순회 (상속된 키도 포함)
for (const key in apple) {
    console.log(key, apple[key])
    // apple[key]는 변수 key의 값으로 접근, apple.key는 'key'라는 속성을 찾음
}

// 반복6 — forEach: 각 요소마다 콜백 실행 — 인자 순서는 값, 인덱스
// 파이썬: for index, item in enumerate(basket): print(item, index)
basket.forEach(function (item, index) { console.log(item, index) })


// 함수 선언
function multiply(num1, num2) {
    return num1 * num2
}
console.log(multiply(2, 3))


// 1. 함수 표현식
const multiply2 = function (num1, num2) { 
    return num1 * num2
}
console.log(multiply2(2, 3))

// 2. 화살표 함수
const multiply3 = (num1, num2) => { 
    return num1 * num2
 }
 console.log(multiply3(-9, 23))


 // 2-1. 화살표 함수 축약 : 몸통이 return 한줄이면 {} 과 return 생략가능
 // 파이썬: multiply4 = lambda num1, num2: num1 * num2
 const multiply4 = (num1, num2) => num1 * num2

 // 2-2. 화살표 함수 축약 : 매개변수가 하나면 () 생략 가능
// 파이썬: double = lambda num1: num1 * 2
 const double = num1 => num1 * 2
 // fuction
