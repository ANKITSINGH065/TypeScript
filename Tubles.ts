/*
In TypeScript, a tuple is a data structure that allows you to define an ordered collection of elements. Each element in a tuple can have a different data type, and the order of elements is fixed. Tuples are defined using a specific syntax and are useful when you want to work with a fixed-size array where each element has a known type.

*/



type PersonInfo = [string,number,boolean];

const person1:PersonInfo = ["Ankit",21,true];
const person2:PersonInfo = ["Anurag",21,true];

const displayPersonInfo:(person:PersonInfo) => void = (person:PersonInfo):void => {
    const [name,age,hasDrive]= person;
    console.log(`Name: ${name},Age: ${age},Driver License: ${hasDrive}`)

}

displayPersonInfo(person1);
displayPersonInfo(person2);


