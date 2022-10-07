// 자바스크립트 함수 선언
function sum(a, b) {
  return a + b;
}

// 타입스크립트 함수 선언 - 함수의 매개 변수
function add(a: number, b: number):number {
  return a + b;
}

function nanu(a:number, b:number):void{
  a=a+b
}

// function add(a: number, b: number): string {
//   return a + b;
// }

// 함수 인자
function log(a: string, b?:string, c?:string) {
  console.log(a);
}
log('a');
log('hellow ts', 'hello')

function dot(a:number, b?:number):number{
  return a+b
}
const a=dot(10)

// 함수 옵셔널 파라미터(optional parameter)
function printText(text: string, type?: string) {
  console.log(text);
}
printText('hi');

function initial(a:number, b=100):number{
  return a+b
}
