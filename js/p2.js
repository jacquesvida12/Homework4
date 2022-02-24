const r = Number(prompt("Enter the circle radius:"));


// TODO: create the circle object here
const circle = {
    radius: r,
    area(){
        this.area = Number(Math.PI * (r * r));
        return this.area;
    },
    circumference(){
        this.circumference = Number(2 * Math.PI * r);
        return this.circumference;
    }
   }

console.log(`Its circumference is ${circle.circumference()}`);
console.log(`Its area is ${circle.area()}`);
