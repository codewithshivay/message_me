import consumer from "./consumer"

consumer.subscriptions.create("ChatroomChannel", {
  connected() {
    // Called when the subscription is ready for use on the server
  },

  disconnected() {
    // Called when the subscription has been terminated by the server
  },

  received(data) {
    $("#message-container").append(
      `<div class="event"><div class="content"><div class="summary"><em>${data.username}</em> => ${data.message}</div></div></div>`
    );
    scroll_bottom();
  }
});

function scroll_bottom() {
  var messagesContainer = $("#messages");
  if (messagesContainer.length > 0) {
    messagesContainer.scrollTop(messagesContainer[0].scrollHeight);
  }
}
