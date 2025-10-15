'use client'

import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { MessageCircle, X, Send, Bot } from 'lucide-react'
import { useTheme } from '@/contexts/ThemeContext'
import { cn } from '@/lib/utils'

interface Message {
  id: string
  text: string
  sender: 'user' | 'bot'
  timestamp: Date
}

export function Chatbot() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: "Hi! I'm Maanav's AI assistant. Ask me anything about his skills, projects, or experience!",
      sender: 'bot',
      timestamp: new Date()
    }
  ])
  const [inputText, setInputText] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const { theme } = useTheme()

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const handleSendMessage = async () => {
    if (!inputText.trim()) return

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputText,
      sender: 'user',
      timestamp: new Date()
    }

    setMessages(prev => [...prev, userMessage])
    setInputText('')
    setIsLoading(true)

    // Simulate AI response (replace with actual API call)
    setTimeout(() => {
      const botResponse = generateBotResponse(inputText)
      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: botResponse,
        sender: 'bot',
        timestamp: new Date()
      }
      setMessages(prev => [...prev, botMessage])
      setIsLoading(false)
    }, 1000)
  }

  const generateBotResponse = (userInput: string): string => {
    const input = userInput.toLowerCase()
    
    if (input.includes('skill') || input.includes('technology')) {
  return "Maanav is proficient in React, Next.js, Python, Flask, and machine learning technologies like XGBoost and LightGBM. He has experience with Oracle databases, OWASP security practices, and building scalable applications."
    }
    
    if (input.includes('project') || input.includes('work')) {
      return "Maanav has built several impressive projects: Smartsolve AI (React + Flask), Nexpend (OCR automation), and Crop Price Prediction (ML with 98% accuracy). Each project demonstrates his full-stack capabilities and problem-solving skills."
    }
    
    if (input.includes('experience') || input.includes('internship')) {
  return "Maanav has interned at Nucleus Software (Noida, India, on-site/in-office, fintech apps, 1M+ records) and Nagarro (Dubai, UAE, on-site/in-office, React optimization, 15% performance gain). He's worked on enterprise applications and performance optimization."
    }
    
    if (input.includes('contact') || input.includes('email')) {
      return "You can reach Maanav via email at maanavghai1409@gmail.com, LinkedIn, or GitHub. He's currently open to full-time roles and exciting project collaborations!"
    }
    
  return "I'm here to help! Ask me about Maanav's skills, projects, experience, or how to get in touch. You can also explore the portfolio sections for detailed information."
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      handleSendMessage()
    }
  }

  return (
    <>
      {/* Chatbot Toggle Button */}
      <motion.button
        data-chatbot
        onClick={() => setIsOpen(!isOpen)}
        className={cn(
          "fixed bottom-6 right-6 z-50 p-4 rounded-full shadow-lg transition-all duration-300 hover:scale-110",
          theme === 'dark' 
            ? "bg-gradient-to-r from-cyan-500 to-purple-600 text-white" 
            : "bg-indigo-500 text-white hover:bg-indigo-600"
        )}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <MessageCircle className="w-6 h-6" />
      </motion.button>

      {/* Chatbot Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            transition={{ duration: 0.3 }}
            className={cn(
              "fixed bottom-24 right-6 z-50 w-80 h-96 rounded-2xl shadow-2xl border",
              theme === 'dark'
                ? "bg-black border-cyan-500/30"
                : "bg-white border-slate-200"
            )}
          >
            {/* Header */}
            <div className={cn(
              "flex items-center justify-between p-4 border-b rounded-t-2xl",
              theme === 'dark'
                ? "bg-gradient-to-r from-cyan-500 to-purple-600 text-white"
                : "bg-slate-50 border-slate-200"
            )}>
              <div className="flex items-center space-x-2">
                <Bot className="w-5 h-5" />
                <span className="font-semibold">Maanav{"'"}s AI</span>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="p-1 hover:bg-white/20 rounded-full transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 p-4 space-y-3 overflow-y-auto h-64 custom-scrollbar">
              {messages.map((message) => (
                <motion.div
                  key={message.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={cn(
                    "flex",
                    message.sender === 'user' ? 'justify-end' : 'justify-start'
                  )}
                >
                  <div
                    className={cn(
                      "max-w-xs px-3 py-2 rounded-lg",
                      message.sender === 'user'
                        ? theme === 'dark'
                          ? "bg-cyan-500 text-white"
                          : "bg-indigo-500 text-white"
                        : theme === 'dark'
                          ? "bg-slate-800 text-white"
                          : "bg-slate-100 text-slate-900"
                    )}
                  >
                    <p className="text-sm">{message.text}</p>
                    <p className="text-xs opacity-70 mt-1">
                      {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                    </p>
                  </div>
                </motion.div>
              ))}
              
              {isLoading && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="flex justify-start"
                >
                  <div className="bg-slate-100 dark:bg-slate-800 rounded-lg px-3 py-2">
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce"></div>
                      <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                      <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                    </div>
                  </div>
                </motion.div>
              )}
              
              <div ref={messagesEndRef} />
            </div>

            {/* Input Area */}
            <div className="p-4 border-t border-slate-200 dark:border-slate-700">
              <div className="flex space-x-2">
                <input
                  type="text"
                  value={inputText}
                  onChange={(e) => setInputText(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Ask me anything..."
                  className={cn(
                    "flex-1 px-3 py-2 rounded-lg text-sm border focus:outline-none focus:ring-2 transition-all",
                    theme === 'dark'
                      ? "bg-slate-800 border-cyan-500/30 text-white focus:ring-cyan-500/50 placeholder-slate-400"
                      : "bg-white border-slate-200 focus:ring-indigo-500/50"
                  )}
                />
                <button
                  onClick={handleSendMessage}
                  disabled={!inputText.trim() || isLoading}
                  className={cn(
                    "p-2 rounded-lg transition-colors disabled:opacity-50",
                    theme === 'dark'
                      ? "bg-cyan-500 text-white hover:bg-cyan-600"
                      : "bg-indigo-500 text-white hover:bg-indigo-600"
                  )}
                >
                  <Send className="w-4 h-4" />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
