class MessagesController < ApplicationController

  before_action :require_user

  def create
    message = current_user.messages.build(message_params)
    if message.save
      ActionCable.server.broadcast "chatroom_channel", username: message.user.username, message: message.body
    end
  end

  private

  def message_params
    params.require(:message).permit(:body)
  end

end
