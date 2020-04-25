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
hello() {
     super.hello();
    console.log('А я наследуемый метод!');   
}

}

const second = new Second();
second.hello();

