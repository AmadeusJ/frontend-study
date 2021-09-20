console.log("Hellow World!")

// IIFE

const a = 7
function double() {
    console.log(a * 2)
}
double();

(function () {
    console.log(a * 3)
})();        // 즉시 실행 함수   

(function () {
    console.log(a * 4)
}());

// Hoisting 
// -> 함수 선언부가 유효범위 최상단으로 끌어올려지는 현상

const b = 8
double2()
function double2() {
    console.log(b * 10)
}


// Timer function
// setTimeout(func, 시간)
// setInterval(func, 시간)
// clearTimeout() : 설정된 Timeout 함수를 종료
// clearInterval() : 설정된 Interval 함수를 종료

// const timer = setInterval(() => {
//     console.log('Hehehehe!')
// }, 3000);

// const h1El = document.querySelector('h1')
// h1El.addEventListener('click', () => {
//     clearInterval(timer)
// });



// Callback
// function timeout(callback) {
//     setTimeout(() => {
//         console.log('Heropy!');
//         callback();
//     }, 3000);
// }
// timeout(() => {
//     console.log('Done!');
// });



// 생성자
function user(first, last) {
    this.firstName = first
    this.lastName = last
}

user.prototype.getFullName = () => {
    return `${this.firstName} ${this.lastName}`
}

const heropy = new user('Heropy', 'Park')
console.log(heropy.getFullName())


// this
// 일반(Normal) 함수는 호출 위치에 따라 this 정의 !
// 화살표(Arrow) 함수는 자신이 선언된 함수 범위에서 this 정의 !

const heropy2 = {
    name: 'Heropy',
    normal: function () {
        console.log(this.name)
    },
    arrow: () => {
        console.log(this.name)
    }
}
heropy2.normal()
heropy2.arrow()

function User(name) {
    this.name = name
}
User.prototype.normal = function () {
    console.log(this.name)
}
User.prototype.arrow = () => {
    console.log(this.name)
}

const hhh = new User('heropy')
hhh.normal()
hhh.arrow()


// Class

class User2 {
    constructor(first, last) {
        this.firstName = first
        this.lastName = last
    }

    getFullName() {
       return `${this.firstName} ${this.lastName}`
    }
}

class Hero extends User2 {
    constructor(first, last, home) {
        super(first, last)
        this.home = home
    }
}

