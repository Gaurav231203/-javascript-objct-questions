//deepcone kro object ko safily//
const obj={
    info:{
        score:80

    }
};
let obj2 =structuredClone(obj);
//let obj2=JSON.parse(JSON.stringify(obj));
obj2.info.score=100;
console.log(obj2);
console.log(obj);