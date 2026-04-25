$(document).ready(function () {

  $("li.submenu")
    .mouseover(function (e) {
      $(e.currentTarget).children("ul").show();
    })
    .mouseout(function (e) {
      $(e.currentTarget).children("ul").hide();
    });

});
