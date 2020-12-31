//toString() method is use for @string representation of an obect
//@ overridabble
//@useful for logging, auditing or scripting
console.log('tostring method');

console.log({}.toString());
console.log(Object.prototype.toString.call([]));

const myArray = [2, 5, 7, 9, 10];
console.log(myArray.toString());//override version
console.log("This is my array:" + myArray); // calling (string + object)

// URL search params (),gives querry string/ toString customizes the object to give different results

const searchParams = new URLSearchParams([["name", "Sajan"], ["age", 21]]);
console.log("This is my search params:" + searchParams);

 // also we can

 class Rectangle{
     constructor(width,height,uint){
         this.width = width;
         this.height = height;
         this.uint = uint;
     }
     // to override we add toString () and return as bellow

     toString(){
         return `Rectangle (${this.width}x${this.height}${this.uint})`;
     }
 }
class ColoredRectangle extends Rectangle{
    constructor(width,height,unit,color) {
        super(width,height,unit);
        this.color = color;

    }

    toString(){
        return `${super.toString()}[${this.color}]`;// now added 
    }

}


 const myRect = new Rectangle(7, 9, "cm");
 console.log("Here is my rectangle: " + myRect);
 // output "Here is my rectangle:[object Object]" becase we have not overiden the object yet

 const myColoredRect = new ColoredRectangle(7,5, "mm", "red");
 console.log("Here is my rectangle:" + myColoredRect);

 // again we see thje same result as above"
 //"" Here is my rectangle:Rectangle (7x5mm)"" 
 //because toString method has yet be be used to coloredRectangle

 console.log("Here is my rectangle:"+ Rectangle.prototype.toString.call(myColoredRect));

 // we can also use prtotype-tostring-call merhod 
 //to pass over to colored rect.
 // where tostring- call () is passing over to colored rectangle like above