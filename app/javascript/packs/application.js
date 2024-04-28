// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.

require("@rails/ujs").start()
require("turbolinks").start()
require("@rails/activestorage").start()
require("channels")


// Uncomment to copy all static images under ../images to the output folder and reference
// them with the image_pack_tag helper in views (e.g <%= image_pack_tag 'rails.png' %>)
// or the `imagePath` JavaScript helper below.
//
// const images = require.context('../images', true)
// const imagePath = (name) => images(name, true)

import "@doabit/semantic-ui-sass"


$(document).on('turbolinks:load', function() {
    $(".ui.dropdown").dropdown();
    $(".message .close").on("click", function () {
      $(this).closest(".message").transition("fade");
    });
    submit_message();
    scroll_bottom();
})

// Define the scroll_bottom function
function scroll_bottom() {
  var messagesContainer = $("#messages");
  if (messagesContainer.length > 0) {
    messagesContainer.scrollTop(messagesContainer[0].scrollHeight);
  }
}

var submit_message = function () {
  $("#message_body").on("keydown", function (e) {
    if (e.keyCode == 13) {
      $("button").click(); // Simulate button click to submit message
      e.target.value = ""; // Clear input field after submitting
    }
  });
};