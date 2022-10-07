// 문자열
const str = 'hello';


// 숫자
const num = 10;

// 배열
//배열은 첫문자 대문자Array
const arr: Array<number> = [1,2,3];
const heroes:Array<string>=['Capt','Thor']


// 배열 - 리터럴 적용
const items: number[] = [1,2,3];
items.push(10);
const array: string[]=['hi','hi']

// 튜플
const address: [string, number] = ['판교', 40];
const tuple: [string, string]=['id','password']


// 객체
const obj: object = {};
const obj2:object={'abc':'abc'}
// obj.a = 10;

// 타입 객체
const person: { age: number; name: string } = { age: 100, name: 'Capt' };
person.age = 101;

// 진위값
const isLogin = false;