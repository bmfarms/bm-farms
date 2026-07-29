'use client';

import { useState } from 'react';
import { MessageSquare, X, Send } from 'lucide-react';

export default function WhatsAppWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [userMessage, setUserMessage] = useState('');

  const phoneNumber = '923006333064';

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    const message = userMessage.trim() 
      ? encodeURIComponent(userMessage) 
      : encodeURIComponent('Hello BM Farms Team, I have an inquiry regarding your services/products.');
    
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;
    window.location.href = whatsappUrl;
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      {/* Chat Popup Box */}
      {isOpen && (
        <div className="mb-4 w-80 sm:w-96 bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden transition-all duration-300 animate-in fade-in slide-in-from-bottom-5">
          {/* Header */}
          <div className="bg-emerald-800 p-4 text-white flex justify-between items-center">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-emerald-700 border-2 border-emerald-400 flex items-center justify-center font-bold text-sm">
                BM
              </div>
              <div>
                <h4 className="font-bold text-sm">BM Farms Support</h4>
                <p className="text-[11px] text-emerald-200 flex items-center gap-1">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 inline-block animate-pulse"></span>
                  Typically replies within minutes
                </p>
              </div>
            </div>
            <button 
              onClick={() => setIsOpen(false)}
              className="text-emerald-200 hover:text-white p-1 rounded-lg transition-colors"
              aria-label="Close Chat"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Body */}
          <div className="p-4 bg-gray-50 max-h-60 overflow-y-auto">
            <div className="bg-white p-3 rounded-2xl rounded-tl-none border border-gray-200 text-xs text-gray-700 shadow-sm max-w-[85%] leading-relaxed">
              👋 Salam! Welcome to BM Farms. How can we help you today with Feed, Packaging, or Solar Solutions?
            </div>
          </div>

          {/* Input Form */}
          <form onSubmit={handleSendMessage} className="p-3 bg-white border-t border-gray-100 flex items-center gap-2">
            <input
              type="text"
              placeholder="Type your message..."
              value={userMessage}
              onChange={(e) => setUserMessage(e.target.value)}
              className="flex-1 text-xs px-3 py-2.5 border border-gray-200 rounded-xl focus:outline-none focus:border-emerald-700 text-gray-800"
            />
            <button
              type="submit"
              className="bg-emerald-800 hover:bg-emerald-900 text-white p-2.5 rounded-xl transition-colors shadow-sm shrink-0"
              aria-label="Send Message"
            >
              <Send className="w-4 h-4" />
            </button>
          </form>
        </div>
      )}

      {/* Floating Action Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-emerald-700 hover:bg-emerald-800 text-white p-4 rounded-full shadow-2xl flex items-center justify-center transition-all duration-300 hover:scale-105 active:scale-95 group relative"
        aria-label="Open WhatsApp Chat"
      >
        <span className="absolute -top-1 -right-1 w-3.5 h-3.5 bg-emerald-400 border-2 border-white rounded-full"></span>
        {isOpen ? (
          <X className="w-6 h-6 transition-transform duration-200" />
        ) : (
          <MessageSquare className="w-6 h-6 transition-transform duration-200" />
        )}
      </button>
    </div>
  );
}