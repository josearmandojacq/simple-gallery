$(document).ready(function(){
  $.getJSON("./data.json", function(array){
    var $ul = $("<ul id='list'></ul>");

    array.forEach(function(item, index){
      var $li = $("<li>"+ (index + 1) + "</li>");

      $ul.append($li);
      //$("div").html("<img src=" + array[index].src+ ">");

    });
      $("body").append($ul);

      /////Adding a div and a h1 and putting on the html ////
      var $div = $("<div></div>");
      var $h1 = $("<h1>Welcome</h1>");
      $div.insertBefore($ul);
      $div.append($h1);
      var iterator = 0;

      //everytime clicked will appear the title on the h1
      $("li").on("click", function(){
        var temp = parseInt($(this).text()) - 1;
        $h1.text(array[temp].title);
        $("body").css("background-image", "url('" + array[temp].src +"')");
        $h1.css("color", "white");
        $("li").css("color", "white");
      });

  });
});
