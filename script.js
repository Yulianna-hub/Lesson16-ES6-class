'use strict';

class Fierst{
    constructor(){
        this.phrase = 'Привет я метод родителя!';   
    }   
hello() {
    console.log(`${this.phrase}`);  
}
}
class Second extends Fierst {
    constructor(phrase) {
        super(phrase);    
    }
hello() {
     super.hello();
    console.log('А я наследуемый метод!');   
}

}

const second = new Second();
console.log(second);
second.hello();

