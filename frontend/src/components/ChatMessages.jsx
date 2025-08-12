// ChatMessages.jsx
import { useEffect, useRef } from "react";

const ChatMessages = ({ messages, isTyping }) => {
  const bottomRef = useRef(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isTyping]);

  return (
    <div className="flex flex-col gap-4 p-4 px-6 max-h-[77vh] overflow-y-auto">
      {messages.map((msg, idx) => (
        <div
          key={idx}
          className={`max-w-[70%] px-4 py-2 rounded-2xl shadow-md animate-fadeIn ${
            msg.role === "user"
              ? "bg-gradient-to-br from-blue-500 to-purple-500 text-white self-end"
              : "bg-white text-gray-800 self-start border"
          }`}
        >
          {msg.text}
        </div>
      ))}

      {isTyping && (
        <div className="bg-white text-gray-800 px-4 py-2 rounded-2xl self-start border shadow-sm flex gap-1">
          <span className="animate-bounce h-2 w-2 bg-gray-500 rounded-full"></span>
          <span className="animate-bounce h-2 w-2 bg-gray-500 rounded-full delay-100"></span>
          <span className="animate-bounce h-2 w-2 bg-gray-500 rounded-full delay-200"></span>
        </div>
      )}

      <div ref={bottomRef} />
    </div>
  );
};

export default ChatMessages;
