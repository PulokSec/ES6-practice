class Parent{
    constructor(){
        this.fatherName = "Schwerznegger";
    }
}
class Child extends Parent{
    //inherit child of parent must use "extrends" then call "super()" funtion in child section to call parent constructor
    constructor(name){
        super();
        this.name = name;
    }
    getFullName(){
        return this.name + " " + this.fatherName;
    }
}
const baby = new Child("Arnold");
console.log(baby.getFullName());