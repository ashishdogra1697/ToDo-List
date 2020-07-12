//click on lists to remove or line thorugh
$("ul").on("click","li",function(){
   $(this).toggleClass("complete");
});

//click on x to delete todo
$("ul").on("click","span",function(event){
   $(this).parent().fadeOut(500, function(){
   $(this).remove();
   });
    event.stopPropagation();
});
// add todo through input
$("input[type='text']").keypress(function(event){
  if(event.which=== 13){
    var todo= $(this).val();
    $(this).val("");
    $("ul").append("<li><span>X</span> " + todo +"</li>");
  }
});