let a: number;
let isDone: boolean = false;

function hello(b: number) {
    console.log(b);
}

hello(10);


let decimal: number = 6;
let hex: number = 0Xf00d;
let binary: number = 0b1010;
let octal: number = 0o744;
let notNumber: number = NaN;
let underscoreNum: number = 1_000_000;


let myName: string = 'Mark';
myName = 'Anna';


// Template String (ES6)
let fullName: string = 'Mark Lee';
let age: number = 39;

let sentence: string = `Hello, My name is ${fullName}.`;


const sym = Symbol();

const obj = {
    [sym]: "value",     // obj 내부 접근을 막을 때,,
};

obj[sym];


let v: void = undefined;
let union: string | null = null;
union = "Mark";



let list: number[] = [1, 2, 3];
let list2: Array<number> = [1, 2, 3,];      // jsx 에서 충동 가능성 있는 방식

let list3: (number | string)[] = [1, 2, 3, "X"];

let x: [string, number];
x = ["hello", 39];


const person: [string, number] = ['Mark', 39];
const [ first, second ] = person;


// Any : 최대한 쓰지 않는 것이 핵심이다.
function returnAny(message: any): any {
    console.log(message);
}

const any1 = returnAny("리턴은 아무거나");
any1.toString();

function leakingAny(obj: any) {
    const a: number = obj.num;
    const b = a + 1;
    return b;
}

const c = leakingAny({ num: 0 });
// c.indexOf('0');


// unknown
declare const maybe: unknown;       // unknown 사용시 typeguard 기능을 쓸 수 있다.

const aNumber: number = maybe;

if (maybe === '1') {    // typeguard
    // const aBoolean: boolean = maybe;
    const aString: string = maybe;       // 이 코드는 에러
}

//
declare const a2: string | number;

if (typeof a2 === 'string') {
    a2;     // a2는 string or number 중 1 개를 가지게 되서 never 가 아니게 된다.
}
//

type Indexable<T> = T extends string ? T & { [index: string]: any } : never;


function returnVoid(message: string): void {
    console.log(message);

    return;
}

returnVoid("리턴이 없다."); 

