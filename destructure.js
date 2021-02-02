const person = { name: "Mark", gfName:"elita",address:"Dhaka"};

const { name , address } = person;
const gfName = person.gfName;
const complexObjetct = {
    name : "abc",
    info:{
        address : "kola Bagan",
        leader: "Tiger"
    }
}

// console.log(gfName,name,address);
const  friends = ["amit","Pran","Ajoy"];
//const [first,second] = friends;
const [first,...remain] = friends;
console.log(first,...remain);