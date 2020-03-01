# js-oop

생활코딩 자바스크립트 객체지향 정리 https://opentutorials.org/module/4047

## 수업소개

- object => 코드를 단순하게 만드는 도구 중 하나
- 객체 : 서로 연관된 변수와 함수를 그룹핑하고 이름을 붙인 것

## 객체의 사용 사례

- 객체지향인 컴퓨터 언어를 보통 내장된 객체를 통하여 개발자들이 개발하기 쉽게 도와줌
- 객체에 소속된 함수를 method라고 명칭함

## this

- 프로그래밍에서 자기자신을 가르키는 표현인 this가 존재
- 메소드가 자신이 속해있는 객체를 가르키는 특수한 키워드가 this
- this는 속해있는 메소드가 속해있는 객체를 가르키도록 약속되어 있는 특수한 예약어

## 객체 공장

- new를 붙이면 객체를 생성하는 생성자(constructor) 함수가 됨

생성자 함수를 만들면 좋은 점

- 생성자 함수를 이용하면 같은 형식의 객체를 만들 때 하나하나 변수를 지정해줄 필요 없으며, 생성자 함수에서 값을 변경함에 따라 생성자 함수를 통해 만들어진 모든 객체가 한번에 바꿔짐

## prototype

- prototype(원형)
- javascript => prototype based language (프로토타입 기반 언어)
- prototype 없다면 생성자 함수 안에 함수가 새로운 객체를 생성할 때마다 함수를 정의해야하므로 메모리가 낭비와 성능 저하를 일으킴
- 자바스크립트는 객체의 속성으로 지정한 메소드를 먼저 실행시켜주고 없다면 prototype으로 지정된 메소드를 실행함

## class

- class : constructor function 대체제 (객체 공장)
- es6에서 추가된 것

https://caniuse.com

https://babeljs.io => 최신문법을 오래된 문법으로 변경하여 ie 등의 브라우저에서도 동작할 수 있도록 도와줌

생성자 함수 하는 일

- 객체를 만든다
- 객체의 초기 상태를 정의한다

## class constructor

- constructor : 객체가 만들어지기 직전에 초기상태를 지정하는 역할을 하는 함수

## class 상속

- Inheritance
- 기존 클래스의 기능을 상속하고 기능을 확장
- 상속이 없으면 중복발생 및 유지보수하기 힘들어짐

## super

- super: 서브(자식) 클래스에서 상위 클래스를 호출할 때 사용하는 키워드
- super : 부모 클래스 ex) `super.sum()`
- super() : 부모 클래스의 생성자

## 객체 간의 상속

객체지향은 크게 두 가지 요소로 나눠져 있음

- class (객체 공장)
- object (instance)

- 주류 객체지향언어 => 자바와 비슷한 문법을 가진 언어들
- 주류 객체지향 언어에서는 상속을 sub class가 super class의 자식이 되고 sub class를 통해서 object(객체)를 만듬
- 객체가 어떠한 기능을 가지게 되는지는 class 단에서 결정됨

- javascript에서는 sub object가 super object(prototype object)에서 직접 상속받을 수 있음
- 상속은 자유롭게 prototype link(`__proto__`)를 바꿔주면 변경되게 됨
- 프로퍼티로 없다면 `__proto__`이 담고 있는 객체에서 찾아서 나타내줌
- `__proto__`쓰는 것 보다 `Object.create()`로 prototype link를 지정해주는 것이 더 좋은 방법

https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Statements/debugger
