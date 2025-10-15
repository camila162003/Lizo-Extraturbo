'use client'

import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { MessageSquare, X, Send, Bot, User, Sparkles } from 'lucide-react'

interface Message {
  id: string
  text: string
  isUser: boolean
  timestamp: Date
}

export function ChatBot() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([])
  const [inputText, setInputText] = useState('')
  const [isTyping, setIsTyping] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  useEffect(() => {
    if (isOpen && messages.length === 0) {
      // Mensaje de bienvenida
      setTimeout(() => {
        addBotMessage("👋 ¡Hola! Soy el asistente de Lizo Belleza. Estoy en desarrollo, pero puedo ayudarte con consejos básicos para tu cabello y recomendaciones generales. ✨")
      }, 500)
    }
  }, [isOpen])

  const addBotMessage = (text: string) => {
    const newMessage: Message = {
      id: Date.now().toString(),
      text,
      isUser: false,
      timestamp: new Date()
    }
    setMessages(prev => [...prev, newMessage])
  }

  const addUserMessage = (text: string) => {
    const newMessage: Message = {
      id: Date.now().toString(),
      text,
      isUser: true,
      timestamp: new Date()
    }
    setMessages(prev => [...prev, newMessage])
  }

  const getBotResponse = (userMessage: string): string => {
    const message = userMessage.toLowerCase()

    if (message.includes('producto') || message.includes('recomienda')) {
      return "🔍 Pronto podré darte recomendaciones personalizadas basadas en tu tipo de cabello y necesidades específicas. Por ahora, te invito a explorar nuestras categorías principales: Secadores, Planchas, Cepillos y Barbería. 💇‍♀️✨"
    }

    if (message.includes('comprar') || message.includes('dónde') || message.includes('tienda')) {
      return "🛒 Puedes explorar todas nuestras categorías desde el menú principal. También puedes usar el buscador para encontrar productos específicos. Si necesitas ayuda personalizada, escríbenos en el chat de contacto."
    }

    if (message.includes('cabello graso') || message.includes('graso')) {
      return "💡 Para cabello graso te recomiendo: usar champú clarificante, evitar acondicionar las raíces, y usar productos termoprotectores ligeros. Los secadores con tecnología iónica también ayudan mucho."
    }

    if (message.includes('cabello seco') || message.includes('seco')) {
      return "💡 Para cabello seco: usa mascarillas hidratantes semanalmente, aplica aceites naturales en medios y puntas, evita el calor excesivo y usa productos con ceramidas y queratina."
    }

    if (message.includes('rizado') || message.includes('rizos')) {
      return "💡 Para cabellos rizados: usa productos sin sulfatos, aplica cremas para peinar en cabello húmedo, difunde a temperatura media y evita cepillar en seco para mantener la definición."
    }

    if (message.includes('plancha') || message.includes('alisado')) {
      return "🔥 Siempre usa termoprotector antes de planchar, ajusta la temperatura según tu tipo de cabello (150-180°C para cabello fino, 180-210°C para cabello grueso) y evita pasar la plancha por la misma sección más de 2 veces."
    }

    if (message.includes('secador') || message.includes('secar')) {
      return "💨 Consejos para secar: pre-seca con toalla sin frotar, usa protector térmico, seca desde las raíces hacia las puntas con movimientos suaves, y termina con aire frío para sellar las cutículas."
    }

    if (message.includes('hola') || message.includes('buenos') || message.includes('saludos')) {
      return "¡Hola! 😊 Me alegra conocerte. Soy tu asistente virtual de Lizo Belleza. Aunque estoy en desarrollo, puedo compartir contigo algunos consejos básicos de cuidado capilar. ¿En qué puedo ayudarte hoy?"
    }

    if (message.includes('gracias') || message.includes('perfecto')) {
      return "¡De nada! 😊 Es un placer ayudarte. Si tienes más preguntas sobre cuidado del cabello o necesitas encontrar algún producto específico, no dudes en preguntarme. ¡Estoy aquí para ti! ✨"
    }

    if (message.includes('adiós') || message.includes('chao') || message.includes('bye')) {
      return "¡Hasta pronto! 👋 Recuerda que siempre estaré aquí cuando necesites consejos de belleza. ¡Que tengas un día hermoso! ✨"
    }

    // Respuesta por defecto
    return "🤖 Estoy aprendiendo cada día para ayudarte mejor. Por ahora, puedo aconsejarte sobre cuidado básico del cabello, tipos de productos y darte información general sobre nuestras categorías. ¿Hay algo específico en lo que pueda ayudarte? 💫"
  }

  const handleSendMessage = () => {
    if (!inputText.trim()) return

    addUserMessage(inputText)
    setInputText('')
    setIsTyping(true)

    // Simular tiempo de respuesta del bot
    setTimeout(() => {
      setIsTyping(false)
      const response = getBotResponse(inputText)
      addBotMessage(response)
    }, 1000 + Math.random() * 1000)
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      handleSendMessage()
    }
  }

  return (
    <>
      {/* Botón flotante */}
      <motion.button
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(true)}
        className={`fixed bottom-6 right-6 w-16 h-16 bg-gradient-to-r from-primary-500 to-wine-500 rounded-full shadow-lg z-50 flex items-center justify-center text-white ${
          isOpen ? 'hidden' : 'block'
        }`}
      >
        <motion.div
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <MessageSquare className="w-7 h-7" />
        </motion.div>
        
        {/* Indicador de pulso */}
        <motion.div
          className="absolute inset-0 bg-primary-400 rounded-full"
          animate={{ scale: [1, 1.3], opacity: [0.7, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        />
      </motion.button>

      {/* Ventana del chat */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, x: 20, y: 20 }}
            animate={{ opacity: 1, scale: 1, x: 0, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, x: 20, y: 20 }}
            className="fixed bottom-6 right-6 w-96 h-[500px] bg-white rounded-2xl shadow-2xl z-50 flex flex-col border border-gray-200"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-4 bg-gradient-to-r from-primary-500 to-wine-500 rounded-t-2xl text-white">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                  <Bot className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-semibold">Asistente Lizo</h3>
                  <p className="text-xs text-white/80">En línea • Beta</p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="w-8 h-8 rounded-full hover:bg-white/20 flex items-center justify-center transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Mensajes */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {messages.map((message) => (
                <motion.div
                  key={message.id}
                  initial={{ opacity: 0, y: 10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  className={`flex ${message.isUser ? 'justify-end' : 'justify-start'}`}
                >
                  <div className={`flex items-start space-x-2 max-w-[80%] ${
                    message.isUser ? 'flex-row-reverse space-x-reverse' : ''
                  }`}>
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                      message.isUser 
                        ? 'bg-primary-100 text-primary-600' 
                        : 'bg-gradient-to-r from-primary-500 to-wine-500 text-white'
                    }`}>
                      {message.isUser ? <User className="w-4 h-4" /> : <Bot className="w-4 h-4" />}
                    </div>
                    <div className={`px-4 py-2 rounded-2xl chat-bubble ${
                      message.isUser
                        ? 'bg-primary-500 text-white rounded-br-md'
                        : 'bg-gray-100 text-gray-800 rounded-bl-md'
                    }`}>
                      <p className="text-sm leading-relaxed">{message.text}</p>
                      <p className={`text-xs mt-1 ${
                        message.isUser ? 'text-primary-100' : 'text-gray-500'
                      }`}>
                        {message.timestamp.toLocaleTimeString([], { 
                          hour: '2-digit', 
                          minute: '2-digit' 
                        })}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}

              {/* Indicador de escribiendo */}
              {isTyping && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex justify-start"
                >
                  <div className="flex items-start space-x-2">
                    <div className="w-8 h-8 bg-gradient-to-r from-primary-500 to-wine-500 rounded-full flex items-center justify-center">
                      <Bot className="w-4 h-4 text-white" />
                    </div>
                    <div className="bg-gray-100 px-4 py-2 rounded-2xl rounded-bl-md">
                      <div className="flex space-x-1">
                        <motion.div
                          animate={{ opacity: [0.4, 1, 0.4] }}
                          transition={{ duration: 1.4, repeat: Infinity, delay: 0 }}
                          className="w-2 h-2 bg-gray-400 rounded-full"
                        />
                        <motion.div
                          animate={{ opacity: [0.4, 1, 0.4] }}
                          transition={{ duration: 1.4, repeat: Infinity, delay: 0.2 }}
                          className="w-2 h-2 bg-gray-400 rounded-full"
                        />
                        <motion.div
                          animate={{ opacity: [0.4, 1, 0.4] }}
                          transition={{ duration: 1.4, repeat: Infinity, delay: 0.4 }}
                          className="w-2 h-2 bg-gray-400 rounded-full"
                        />
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <div className="p-4 border-t border-gray-200">
              <div className="flex items-center space-x-2">
                <input
                  type="text"
                  value={inputText}
                  onChange={(e) => setInputText(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Escribe tu mensaje..."
                  className="flex-1 px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  disabled={isTyping}
                />
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handleSendMessage}
                  disabled={!inputText.trim() || isTyping}
                  className="w-10 h-10 bg-gradient-to-r from-primary-500 to-wine-500 rounded-full flex items-center justify-center text-white disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <Send className="w-5 h-5" />
                </motion.button>
              </div>
              <p className="text-xs text-gray-500 mt-2 text-center">
                <Sparkles className="w-3 h-3 inline mr-1" />
                Asistente en desarrollo • Consejos básicos disponibles
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}