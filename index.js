class Circle{
    constructor(radius){
        this.radius = radius;
    }
    get diameter(){
        return this.radius * 2
    }

    set diameter(newDiameter){
        this.radius = newDiameter/2
    } 

    get circumference(){
        return Math.PI * this.diameter
    }

    set circumference(newCircumference){
        this.radius = newCircumference/(2*Math.PI)
    }
    get area(){
        return Math.PI * this.radius ** 2
    }

    set area(newArea){
        this.radius = Math.sqrt(newArea/Math.PI);
    }
}

// let circle = new Circle(2);
// console.log(circle.diameter);
// console.log(circle.circumference);
// console.log(circle.area);
// circle.circumference = 20;
// console.log(circle.area);
// console.log(circle.radius)

