import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, Image, Smile, ArrowLeft, MoreVertical } from 'lucide-react';
import { useApp } from '../context/AppContext';
import { conversations } from '../data/mockData';

export default function Messages() {
  const { activeConversation, setActiveConversation, travelers } = useApp();
  const [messageInput, setMessageInput] = useState('');

  const currentConversation = conversations.find(c => c.id === activeConversation);

  // Get traveler info if no conversation
  const traveler = activeConversation && !currentConversation
    ? travelers.find(t => t.id === activeConversation)
    : null;

  const displayName = currentConversation?.name || traveler?.name || '';
  const displayPhoto = currentConversation?.photo || traveler?.photo || '';
  const messages = currentConversation?.messages || [];

  const handleSendMessage = () => {
    if (messageInput.trim()) {
      // In a real app, this would send to backend
      setMessageInput('');
    }
  };

  return (
    <div className="min-h-screen pt-20 pb-12 px-4">
      <div className="max-w-7xl mx-auto h-[calc(100vh-8rem)]">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 h-full">
          {/* Conversation List */}
          <AnimatePresence>
            {(!activeConversation || window.innerWidth >= 1024) && (
              <motion.div
                className="lg:col-span-1 glass rounded-2xl p-4 overflow-hidden flex flex-col"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
              >
                <h2 className="font-outfit font-bold text-xl mb-4 px-2">Messages</h2>

                <div className="flex-1 overflow-y-auto space-y-2">
                  {conversations.map((conv, index) => (
                    <motion.div
                      key={conv.id}
                      className={`flex items-center gap-3 p-3 rounded-xl cursor-pointer transition-colors ${
                        activeConversation === conv.id
                          ? 'bg-primary/20'
                          : 'hover:bg-white/10'
                      }`}
                      initial={{ x: -20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: index * 0.1 }}
                      onClick={() => setActiveConversation(conv.id)}
                      whileHover={{ x: 5 }}
                    >
                      <div className="relative">
                        <img
                          src={conv.photo}
                          alt={conv.name}
                          className="w-12 h-12 rounded-full object-cover"
                        />
                        {conv.unread && (
                          <div className="absolute -top-1 -right-1 w-3 h-3 bg-primary rounded-full" />
                        )}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between">
                          <span className={`font-medium truncate ${conv.unread ? 'text-white' : 'text-text-secondary'}`}>
                            {conv.name}
                          </span>
                          <span className="text-xs text-text-secondary">{conv.time}</span>
                        </div>
                        <p className={`text-sm truncate ${conv.unread ? 'text-white' : 'text-text-secondary'}`}>
                          {conv.lastMessage}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Chat Area */}
          <motion.div
            className="lg:col-span-2 glass rounded-2xl overflow-hidden flex flex-col"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
          >
            {activeConversation ? (
              <>
                {/* Chat Header */}
                <div className="flex items-center justify-between p-4 border-b border-white/10">
                  <div className="flex items-center gap-3">
                    <motion.button
                      className="lg:hidden p-2 -ml-2 rounded-lg hover:bg-white/10 transition-colors"
                      onClick={() => setActiveConversation(null)}
                      whileTap={{ scale: 0.9 }}
                    >
                      <ArrowLeft size={20} />
                    </motion.button>
                    <img
                      src={displayPhoto}
                      alt={displayName}
                      className="w-10 h-10 rounded-full object-cover ring-2 ring-primary/50"
                    />
                    <div>
                      <h3 className="font-semibold">{displayName}</h3>
                      <span className="text-xs text-accent">Online</span>
                    </div>
                  </div>
                  <motion.button
                    className="p-2 rounded-lg hover:bg-white/10 transition-colors"
                    whileTap={{ scale: 0.9 }}
                  >
                    <MoreVertical size={20} />
                  </motion.button>
                </div>

                {/* Messages */}
                <div className="flex-1 overflow-y-auto p-4 space-y-4">
                  {messages.map((msg, index) => (
                    <motion.div
                      key={index}
                      className={`flex ${msg.sender === 'me' ? 'justify-end' : 'justify-start'}`}
                      initial={{ y: 10, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: index * 0.05 }}
                    >
                      <div
                        className={`max-w-[70%] px-4 py-2 rounded-2xl ${
                          msg.sender === 'me'
                            ? 'bg-gradient-to-r from-primary to-secondary text-white'
                            : 'bg-white/10 text-white'
                        }`}
                      >
                        <p className="text-sm">{msg.text}</p>
                        <span className="text-xs opacity-70 block text-right mt-1">
                          {msg.time}
                        </span>
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Message Input */}
                <div className="p-4 border-t border-white/10">
                  <div className="flex items-center gap-2">
                    <motion.button
                      className="p-2 rounded-lg hover:bg-white/10 transition-colors"
                      whileTap={{ scale: 0.9 }}
                    >
                      <Image size={20} />
                    </motion.button>
                    <motion.button
                      className="p-2 rounded-lg hover:bg-white/10 transition-colors"
                      whileTap={{ scale: 0.9 }}
                    >
                      <Smile size={20} />
                    </motion.button>
                    <input
                      type="text"
                      value={messageInput}
                      onChange={(e) => setMessageInput(e.target.value)}
                      placeholder="Type a message..."
                      className="flex-1 px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:outline-none focus:border-primary text-white placeholder-text-secondary"
                      onKeyDown={(e) => e.key === 'Enter' && handleSendMessage()}
                    />
                    <motion.button
                      className="p-3 rounded-xl bg-gradient-to-r from-primary to-secondary"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={handleSendMessage}
                    >
                      <Send size={18} />
                    </motion.button>
                  </div>
                </div>
              </>
            ) : (
              /* Empty State */
              <div className="flex-1 flex flex-col items-center justify-center text-center p-8">
                <div className="w-20 h-20 rounded-full bg-primary/20 flex items-center justify-center mb-4">
                  <span className="text-4xl">💬</span>
                </div>
                <h3 className="font-outfit text-xl font-semibold mb-2">No conversation selected</h3>
                <p className="text-text-secondary max-w-md">
                  Choose a conversation from the list or connect with new travelers to start chatting
                </p>
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </div>
  );
}