// ChatArea.jsx
import { useState } from "react";
import PromptArea from "./PromptArea";
import Welcome from "./Welcome";
import ChatMessages from "./ChatMessages";

const ChatArea = () => {
  const [messages, setMessages] = useState([]);
  const [isTyping, setIsTyping] = useState(false);

  return (
    <div className="h-full w-full max-w-4xl flex flex-col rounded-2xl shadow-lg overflow-hidden bg-white">
      {/* Header */}
      <div className="flex items-center gap-3 px-5 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white">
        <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center font-bold">
          🤖
        </div>
        <div className="flex-1">
          <div className="font-semibold">AI Assistant</div>
          <div className="text-sm text-blue-100">Online</div>
        </div>
      </div>

      {/* Messages */}
      <div className="flex-grow overflow-y-auto bg-gray-50">
        {messages.length === 0 ? (
          <Welcome />
        ) : (
          <ChatMessages messages={messages} isTyping={isTyping} />
        )}
      </div>

      {/* Prompt */}
      <PromptArea messages={messages} setMessages={setMessages} setIsTyping={setIsTyping} />
    </div>
  );
};

export default ChatArea;
