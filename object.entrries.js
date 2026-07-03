//use object.entries() to print all   the vale-key pair as :
/*title:jsscript
durartion:4 weeks*/

let learn ={
    title:"js script",
    duration: "4 weeks",

}
Object.entries(learn).forEach(function(val){
    console.log(val[0] +":"+ val[1]);
    
 })