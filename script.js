'use strict';

class Fierst{
    
hello() {
    console.log('Привет я метод родителя!');  
}
}
class Second extends Fierst {

hello() {
    first.hello();    
    console.log('А я наследуемый метод!');   
}
}
const first = new Fierst();
const second = new Second();

second.hello();

