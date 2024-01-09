// alert("hello");
console.log("123 check");
let a = document;       // it give the starting layout of the html page
a = document.all;     // it give the information about all the elements in the page
a = document.body;      // to get the body element
a = document.forms    // to get the forms element 



// Array.from(a).forEach(function(element){
//     console.log(element);
// })
// a = document.links; // just provide information
// a = document.links[0]; // provide whole information
// a = document.links[0].href; // provide link only



// a = document.scripts;
// a = document.scripts[0]; // give the link of the script used
// a = document.scripts[2]; // this will be undefined because no vaild link is used
//a = document.images;        // this give  all the details of images

a = document.head;
let b =document.getElementById("hello")
// a = document.getElementById("hello")
b.style.color = "red"
console.log(b);

// let c = document.querySelectorAll()
// let c = document.querySelectorAll(".example")
// for (let i = 0; i < c.length; i++) {
//     c[i].style.backgroundColor = "red";
//   }
// console.log(c);



let d = document.querySelectorAll(".child")
d[0].style.color ="red"
d[1].style.color = "green"
console.log(d);

let e = document.querySelector(".kid").style.color ="blue" // this only give one element
console.log(e)



console.log(document.getElementsByTagName("h1"))


