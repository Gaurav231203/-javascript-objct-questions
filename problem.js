const obj={
    info:{
        score:80

    }
};
const clone ={...obj};
clone.info.score=100;
console.log(obj.info.score);
//"Maine spread operator se copy banayi hai, to original kyun change ho gaya?"

//Answer: Kyunki spread operator sirf first level (shallow copy) copy karta hai, nested objects ko nahi.