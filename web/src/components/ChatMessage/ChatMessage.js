import React from "react";
import Avatar from '../../assets/avatar';

export const ChatMessage = ({message}) => {
  return (
    <div className={
        `chat-message ${message.user === 'gpt'} &&
        'gpt-message'}`}>
            <div className="chat-message-center">
                <div className={
                    `avatar ${message.user === 'gpt' && "chatgpt"}`}>
                    {message.user === 'gpt' && (
                        <Avatar/>
                    )}
                </div>
                <div className="message">
                    {message.message}
                </div>
            </div>
      </div>
  );
}