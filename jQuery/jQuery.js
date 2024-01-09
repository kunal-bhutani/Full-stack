// alert("hello i am linked");
// $("h1").css("color","red");

$("h1").addClass("body-title margin-50")  // class get added

// $("h1").text("bhallu");  // text get changed

// $("button").text("don't click me");// text of the button get changed  

// $("button").html("<em>hey</em>");// it change inner html using tag 

// $("button").text("<em>hey</em>")   // it will also show em

// $("h1").click(function(){
//     $("h1").css("color","purple")
// });  // this is a event listner for h1

// * adding event listner for all button


// $("button").click(function(){
//     $("h1").css("color","purple");
// })   // on click color of h1 is changed


// $(document).keypress(function(event){
//     $("h1").html(event.key);
// }) // change text to the key pressed


$("h1").on("mouseover",function(){
    $("h1").css("color","purple")
})  // on  is convinent way to add event listner in it here is 2 parameters first  which  type of event and 2nd what it will change we can use click with on  its like on click;

