// String.prototype.repeatify = function repeatify(int) {
//     if (int === 0) return '';
//     return this + this.repeatify(int -1)
// };

// console.log('Hola'.repeatify(5))

class Shape {
    constructor(type){
    this.type = type
    }
    getType(){ return this.type}
}

class Triangle extends Shape {
    constructor(a, b, c){
        super('Triangle')
        this.a = a
        this.b = b
        this.c = c

    }
    getPerimeter(){
        return this.a + this.b + this.c
    }

    getArea(){
        let s = (this.getPerimeter() / 2)
        return Math.sqrt(s*(s-this.a)*(s-this.b)*(s-this.c))
    }
}

class Circle extends Shape {
    constructor(radius){
        super('Circle')
        this.radius = radius
    }

    getPerimeter(){
        return Math.PI * this.radius * 2
    }

    getArea(){
        return Math.PI * Math.pow(this.radius, 2)
    }
}

class Square extends Shape {
    constructor(side){
        super('Square')
        this.side = side
    }

    getPerimeter(){
        return this.side * 4
    }

    getArea(){
        return this.side * 2
    }
}




var t = new Triangle(1, 2, 3);
console.log(t instanceof Triangle)
// true
Shape.prototype.isPrototypeOf(t);
// true> 
console.log(t.getPerimeter());
// 6
console.log(t.getType());
// "Triangle"

var c = new Circle(3);
console.log(c instanceof Circle)
// true
console.log(Shape.prototype.isPrototypeOf(c));
// true
console.log(c.getPerimeter());
// 12.566370614359172
console.log(c.getArea());
console.log(c.getType());
// "Circle"

var s = new Square(2);
console.log(s instanceof Square)
// true
console.log(Shape.prototype.isPrototypeOf(s));
// true
console.log(s.getPerimeter());
// 8
console.log(s.getArea());
console.log(s.getType());
// "Square"

let t1 = new Triangle(8,10,6);
console.log(t1.getArea())