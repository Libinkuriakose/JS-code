var a1={
    n:10
}
var a2={
    n:20
}
console.log(a1.n+a2.n);
var restaurents=[
    {
        name: 'wamama',
        location:'banasankari',
        rating:3.2
    },
    {
        name:'cocoa bakes',
        location:'banasankari',
        rating:3.8
    },
    {
        name:'milkshake',
        location:'banasakari',
        rating:3.5
    }
];
console.log('nearby restaurents');
restaurents.forEach(function(restaurent){
console.log(`${restaurent.name} -${restaurent.location}- ${restaurent.rating}`);
})

restaurents.forEach(function(res){
 if(res.rating>=3.5){
     console.log(res[name]);
 }
 })

 
     restaurents.filter(function(n){
         
     })


