"use client";

import { useState } from "react";
import { MessageSquare, X, Send, User } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function MultiAgentChat() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { id: 1, text: "Hi! I'm Saif, the owner of Movers & Packers. How can I or my team help you today?", sender: "Saif", role: "Owner" }
  ]);
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (!input.trim()) return;
    
    // Add user message
    const newMsgs = [...messages, { id: Date.now(), text: input, sender: "You", role: "User" }];
    setMessages(newMsgs);
    setInput("");

    // Simulate agent response
    setTimeout(() => {
      setMessages(prev => [...prev, { 
        id: Date.now(), 
        text: "Thanks for reaching out! Our logistics team will review this. For immediate help, call us at 050-5385047.", 
        sender: "Sarah", 
        role: "Logistics Expert" 
      }]);
    }, 1500);
  };

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className={`fixed bottom-6 right-6 p-4 rounded-full bg-primary text-white shadow-xl hover:bg-primary-light transition-transform hover:scale-110 z-50 ${isOpen ? 'hidden' : 'block'}`}
      >
        <MessageSquare size={28} />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            className="fixed bottom-6 right-6 w-80 md:w-96 bg-white rounded-2xl shadow-2xl z-50 overflow-hidden flex flex-col"
            style={{ height: '500px' }}
          >
            {/* Header */}
            <div className="bg-primary p-4 flex justify-between items-center text-white">
              <div>
                <h3 className="font-bold">Live Support</h3>
                <p className="text-xs text-white/80">Saif & Team are online</p>
              </div>
              <button onClick={() => setIsOpen(false)} className="hover:text-gray-300">
                <X size={20} />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-grow p-4 overflow-y-auto bg-gray-50 flex flex-col gap-3">
              {messages.map((msg) => (
                <div key={msg.id} className={`flex flex-col ${msg.sender === "You" ? "items-end" : "items-start"}`}>
                  {msg.sender !== "You" && (
                    <div className="flex items-center gap-2 mb-1">
                      <div className="bg-gray-200 p-1 rounded-full"><User size={12} /></div>
                      <span className="text-xs text-gray-500 font-medium">{msg.sender} ({msg.role})</span>
                    </div>
                  )}
                  <div className={`p-3 rounded-2xl max-w-[85%] text-sm ${msg.sender === "You" ? "bg-primary text-white rounded-tr-none" : "bg-white border shadow-sm rounded-tl-none text-gray-800"}`}>
                    {msg.text}
                  </div>
                </div>
              ))}
            </div>

            {/* Input */}
            <div className="p-3 bg-white border-t flex gap-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Type a message..."
                className="flex-grow px-3 py-2 border rounded-full text-sm focus:outline-none focus:border-primary"
              />
              <button 
                onClick={handleSend}
                className="p-2 bg-primary text-white rounded-full hover:bg-primary-light"
              >
                <Send size={18} />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
