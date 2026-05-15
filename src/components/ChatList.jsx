import { motion } from 'framer-motion';
import { useApp } from '../context/AppContext';
import { MessageCircle } from 'lucide-react';

export default function ChatList() {
  const { getConversations, setActiveConversation, setActiveTab } = useApp();
  const conversations = getConversations();

  const handleSelectChat = (conv) => {
    setActiveConversation(conv.id);
    setActiveTab('messages');
  };

  return (
    <div className="space-y-2">
      {conversations.map((conv, index) => (
        <motion.div
          key={conv.id}
          className="flex items-center gap-4 p-4 rounded-xl glass hover:bg-white/10 cursor-pointer transition-colors"
          initial={{ x: -20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: index * 0.1 }}
          whileHover={{ x: 10 }}
          onClick={() => handleSelectChat(conv)}
        >
          {/* Avatar */}
          <div className="relative">
            <img
              src={conv.photo}
              alt={conv.name}
              className="w-12 h-12 rounded-full object-cover ring-2 ring-primary/50"
            />
            {conv.unread && (
              <motion.div
                className="absolute -top-1 -right-1 w-3 h-3 bg-primary rounded-full"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1, repeat: Infinity }}
              />
            )}
          </div>

          {/* Content */}
          <div className="flex-1 min-w-0">
            <div className="flex items-center justify-between mb-1">
              <h4 className={`font-semibold truncate ${conv.unread ? 'text-white' : 'text-text-secondary'}`}>
                {conv.name}
              </h4>
              <span className="text-xs text-text-secondary">{conv.time}</span>
            </div>
            <p className={`text-sm truncate ${conv.unread ? 'text-white' : 'text-text-secondary'}`}>
              {conv.lastMessage}
            </p>
          </div>

          {/* Unread Indicator */}
          {conv.unread && (
            <div className="w-2 h-2 bg-primary rounded-full" />
          )}
        </motion.div>
      ))}

      {/* Quick Access */}
      <motion.button
        className="w-full flex items-center justify-center gap-2 py-3 mt-4 rounded-xl border border-dashed border-white/20 text-text-secondary hover:text-white hover:border-primary transition-colors"
        whileTap={{ scale: 0.95 }}
      >
        <MessageCircle size={18} />
        View All Messages
      </motion.button>
    </div>
  );
}