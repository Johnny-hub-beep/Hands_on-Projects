
Hands‑on Project 
Dropdown Menu with jQuery

This project implements a simple dropdown navigation menu using jQuery event handlers. When the user moves the mouse over a menu item, its submenu becomes visible. When the mouse leaves the item, the submenu hides again.

Features
Uses jQuery’s $(document).ready() to ensure the script runs after the page loads

Shows submenu on mouseover

Hides submenu on mouseout

Uses $(e.currentTarget).children("ul") to target the correct submenu inside each <li class="submenu">

JavaScript Used
js
$(document).ready(function () {

  $("li.submenu")
    .mouseover(function (e) {
      $(e.currentTarget).children("ul").show();
    })
    .mouseout(function (e) {
      $(e.currentTarget).children("ul").hide();
    });

});
Requirements
jQuery 3.7.1 or later

HTML structure where each dropdown menu is a <ul> nested directly inside an <li class="submenu">
