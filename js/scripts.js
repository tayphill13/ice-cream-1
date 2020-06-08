$(document).ready(function(){
  const flavors = ["bubble gum", "chocolate chips", "strawberry"];
  flavors.forEach(function(flavor){
    console.log(flavor);
    $("ul").append("<li>" + flavor + "</li>");
  });
});