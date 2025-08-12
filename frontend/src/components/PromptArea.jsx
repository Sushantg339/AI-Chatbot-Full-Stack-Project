// PromptArea.jsx
import { useForm } from "react-hook-form";
import { useEffect } from "react";
import socket from "../socket";

const PromptArea = ({ messages, setMessages, setIsTyping }) => {
  const { register, handleSubmit, reset } = useForm();

  const PromptHandler = ({ prompt }) => {
    if (!prompt.trim()) return;

    setMessages((prev) => [...prev, { role: "user", text: prompt }]);
    socket.emit("ai-message", prompt);
    reset();
    setIsTyping(true);
  };

  useEffect(() => {
    socket.on("ai-message-response", (response) => {
      setMessages((prev) => [...prev, { role: "model", text: response }]);
      setIsTyping(false);
    });

    return () => socket.off("ai-message-response");
  }, [setMessages, setIsTyping]);

  return (
    <form
      onSubmit={handleSubmit(PromptHandler)}
      className="flex items-center gap-3 p-4 border-t bg-white"
    >
      <input
        {...register("prompt")}
        className="flex-1 px-4 py-3 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
        type="text"
        placeholder="Ask me anything..."
      />
      <button
        type="submit"
        className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-5 py-3 rounded-full active:scale-95 transition-transform"
      >
        <i className="ri-send-plane-fill text-lg"></i>
      </button>
    </form>
  );
};

export default PromptArea;
