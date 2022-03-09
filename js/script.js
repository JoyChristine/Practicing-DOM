
$(document).ready(function() {
    $("button#hello").click(function() {
      $("ul#user").prepend("<li>Hello!</li>");
      $("ul#webpage").prepend("<li>Why Hello there!</li>");
      // adds a pop-up
      $("ul#user").children("li").first().click(function() {
        alert('Hi')
      });
      $("ul#webpage").children("li").first().click(function() {
        alert('Hello, hi')
      });
      // remove the li
      $("ul#user").children("li").first().click(function() {
        $(this).remove();
      });
      $("ul#webpage").children("li").first().click(function() {
        $(this).remove();
      });
    });

    $("button#goodbye").click(function() {
      $("ul#user").prepend("<li>Goodbye!</li>");
      $("ul#webpage").prepend("<li>See you next time!</li>");
      $("ul#user").children("li").first().click(function() {
        alert('Hi')
      });
      $("ul#webpage").children("li").first().click(function() {
        alert('Hello, hi')
      });
      // remove the li
      $("ul#user").children("li").first().click(function() {
        $(this).remove();
      });
      $("ul#webpage").children("li").first().click(function() {
        $(this).remove();
      });
    });

    $("button#stop").click(function() {
      $("ul#user").prepend("<li>Stop copying me!</li>");
      $("ul#webpage").prepend("<li>Pardon me. I meant no offense</li>");
      $("ul#user").children("li").first().click(function() {
        alert('Hi')
      });
      $("ul#webpage").children("li").first().click(function() {
        alert('Hello, hi')
      });
      // remove the li
      $("ul#user").children("li").first().click(function() {
        $(this).remove();
      });
      $("ul#webpage").children("li").first().click(function() {
        $(this).remove();
      });
    });
  });
