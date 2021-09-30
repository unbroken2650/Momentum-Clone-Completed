# 바닐라 JS로 크롬 앱 만들기
###### https://nomadcoders.co/javascript-for-beginners

21.09.27 ~

## 2.3 const and let
const : X redefine X change  
let : X redefine can change  
var : can redefine can change  

## 2.13 Conditionals
prompt : stopping js and can't change anything

## 4.1 Form Submission
to trigger the valudation of input, input has to be in 'form'

## 4.3 Events part Two
javascript press play the function and put HERE object that contains information aobut the event that just happened
```javascript
loginForm.addEventListener("submit", HERE);
```
So we can stop it by 
```javascript
event.preventDefault(); or alert() or ...
```

## 7.4 Loading To Dos part One
JSON.stringify(LIST) : LIST를 문자열로 변환
JSON.parse(STRING) : STRING을 javascript가 쓸 수 있게 변형.

화살표 함수
(item) => COMMAND : 화살표 오른쪽이 함수의 내용, item이 변수인 함수

## 7.8 Deleting To Dos part Three
ARRAY.filter(FUNC) : ARRAY에 있는 모든 항목들에 대하여 FUNC를 만족하는 항목들로 새로 배열 생성.

## etc
변수명 = inputList (camelCase)
문자열만 들어있는 변수명 = HIDDEN_CLASSNAME (모두 대문자))
Weather API : https://openweathermap.org/
