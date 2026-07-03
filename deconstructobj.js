//what will happen if cordinates are missing and how will u prevent errors.
// by using (optional changing mathod we can run a code without errror ),


let info={
    name:"gaurav",
    branch:"cse",
    address:{
        city:"kashipur",
        codrinates:{
            lat:22.3,
            lng:21.3,
        }
    },
};
console.log(info);
//destructure the  city and lat from laocation object above

let{city}= info?.address;
let {lat}=info?.address?.codrinates;
console.log(city);
console.log(lat);
