$(document).ready(function(){
  alert("it works");
  const flavors = ["bubble gum", "chocolate chips", "strawberry"];
  flavors.forEach(function(flavor){
    $("ul").append('li').text(flavor);
  });
});