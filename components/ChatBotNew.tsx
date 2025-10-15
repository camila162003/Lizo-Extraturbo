'use client'

import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { MessageCircle, X, Send, Sparkles, Heart } from 'lucide-react'

interface Message {
  id: number
  text: string
  isUser: boolean
  timestamp: Date
}

const predefinedResponses = {
  greetings: [
    "¡Hola! 💄 Soy tu Asistente Digital de LIZO BELLEZA. Estoy aquí para ayudarte a encontrar los productos perfectos para ti. ¿En qué puedo asistirte hoy?",
    "¡Bienvenid@ a LIZO BELLEZA! ✨ Soy tu consultor virtual especializado en productos de belleza profesional. ¿Cómo puedo hacer tu experiencia más increíble?",
  ],
  productos: [
    "¡Excelente elección! 🌟 En LIZO BELLEZA tenemos una línea completa de productos profesionales: secadores de última generación, planchas con tecnología iónica, cepillos especializados, tijeras profesionales y equipos para barbería. ¿Qué tipo de transformación buscas para tu cabello?",
    "¡Perfecto! Nuestros productos están cuidadosamente seleccionados para ofrecer resultados de salón en casa. Tenemos desde herramientas básicas hasta equipos premium para profesionales. ¿Te interesa algo específico para cuidado capilar o tal vez equipamiento para barbería?",
  ],
  precios: [
    "💰 En LIZO BELLEZA manejamos precios súper competitivos con calidad garantizada. Tenemos opciones desde $45.000 hasta productos premium de $950.000. ¡Además ofrecemos descuentos especiales y promociones! ¿Tienes un presupuesto en mente?",
    "¡Excelente pregunta! Nuestros precios van desde productos accesibles hasta equipos profesionales premium. Siempre ofrecemos la mejor relación calidad-precio del mercado. ¿Te gustaría conocer nuestras ofertas actuales?",
  ],
  envios: [
    "🚚 ¡Llevamos belleza a toda Colombia! Envíos GRATIS en compras superiores a $150.000. Tiempo de entrega: 2-5 días hábiles. Envío express disponible. ¡Tu producto llegará perfectamente empacado y listo para usar! ¿A qué ciudad enviarías?",
    "¡Tenemos cobertura nacional completa! Envíos seguros con seguimiento en tiempo real. Empaque especial para productos delicados. ¿Necesitas envío urgente? ¡Tenemos opciones express!",
  ],
  barberia: [
    "💈 ¡Equipamiento profesional para barberos de élite! Nuestra sección incluye: cortadoras profesionales, patilleras de precisión, navajas de acero, productos para barba y bigote, y accesorios premium. ¿Eres barbero profesional o estás iniciando tu negocio?",
    "¡Perfecto para barberos exigentes! Tenemos desde herramientas básicas hasta equipos de última generación. Productos que usan los mejores barberos del país. ¿Qué necesitas para llevar tu barbería al siguiente nivel?",
  ],
  ofertas: [
    "🔥 ¡OFERTAS INCREÍBLES! Tenemos descuentos del 20% en productos seleccionados, combos especiales, y promociones exclusivas. ¡Aprovecha nuestros precios de liquidación en productos premium! ¿Te interesa alguna categoría específica?",
    "¡Es tu día de suerte! Manejamos ofertas semanales, descuentos por volumen para profesionales y promociones especiales. ¡Síguenos en redes para no perderte ninguna ganga!",
  ],
  asesoria: [
    "👩‍💼 ¡Te conectaré con nuestro equipo de expertos! Nuestros asesores especializados te ayudarán a elegir el producto perfecto según tu tipo de cabello, presupuesto y necesidades. ¿Prefieres asesoría por WhatsApp o llamada?",
    "¡Excelente decisión! Nuestro equipo de consultores en belleza está disponible para darte la mejor recomendación personalizada. ¡Años de experiencia a tu servicio!",
  ],
  version: [
    "🤖 ¡Soy tu Asistente Digital LIZO BELLEZA versión BETA 2.0! Estoy en constante aprendizaje para servirte mejor. Si tienes alguna consulta específica que no puedo resolver, te conectaré inmediatamente con nuestro equipo humano especializado. ¡Tu satisfacción es nuestra prioridad!",
    "¡Gracias por preguntar! 🎯 Soy una versión BETA avanzada diseñada específicamente para LIZO BELLEZA. Estoy programada con conocimiento especializado en productos de belleza y barbería. ¡Cada día aprendo más para brindarte mejor servicio!",
  ],
  default: [
    "🤔 Esa es una consulta muy interesante. Como estoy en versión BETA, algunas preguntas específicas requieren atención humana especializada. ¡Te conectaré con nuestro equipo de expertos para darte la mejor respuesta! ¿Te parece bien?",
    "¡Excelente pregunta! Para brindarte la información más precisa, te recomiendo contactar directamente a nuestros especialistas. ¡Están súper capacitados y te darán la mejor asesoría! ¿Algo más en lo que pueda ayudarte?",
  ]
}

const quickReplies = [
  "🌟 Ver productos estrella",
  "💈 Equipos para barbería", 
  "💰 Ofertas y promociones",
  "🚚 Envíos y entregas",
  "👩‍💼 Asesoría personalizada",
  "🤖 ¿Qué versión eres?"
]

export function ChatBot() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "¡Hola! 🌟 Soy tu Asistente Digital LIZO BELLEZA versión BETA 2.0. Estoy aquí para ayudarte a encontrar los productos perfectos y brindarte la mejor experiencia de compra. ¿En qué puedo asistirte hoy?",
      isUser: false,
      timestamp: new Date()
    }
  ])
  const [inputValue, setInputValue] = useState('')
  const [isTyping, setIsTyping] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const getResponse = (message: string): string => {
    const lowerMessage = message.toLowerCase()
    
    if (lowerMessage.includes('hola') || lowerMessage.includes('buenos') || lowerMessage.includes('buenas') || lowerMessage.includes('saludos')) {
      return predefinedResponses.greetings[Math.floor(Math.random() * predefinedResponses.greetings.length)]
    }
    if (lowerMessage.includes('producto') || lowerMessage.includes('cabello') || lowerMessage.includes('plancha') || lowerMessage.includes('secador') || lowerMessage.includes('estrella') || lowerMessage.includes('catálogo')) {
      return predefinedResponses.productos[Math.floor(Math.random() * predefinedResponses.productos.length)]
    }
    if (lowerMessage.includes('precio') || lowerMessage.includes('costa') || lowerMessage.includes('valor') || lowerMessage.includes('oferta') || lowerMessage.includes('promoción') || lowerMessage.includes('descuento') || lowerMessage.includes('barato')) {
      return predefinedResponses.ofertas[Math.floor(Math.random() * predefinedResponses.ofertas.length)]
    }
    if (lowerMessage.includes('envio') || lowerMessage.includes('entrega') || lowerMessage.includes('shipping') || lowerMessage.includes('domicilio')) {
      return predefinedResponses.envios[Math.floor(Math.random() * predefinedResponses.envios.length)]
    }
    if (lowerMessage.includes('barber') || lowerMessage.includes('cortador') || lowerMessage.includes('navaja') || lowerMessage.includes('máquina') || lowerMessage.includes('patillera')) {
      return predefinedResponses.barberia[Math.floor(Math.random() * predefinedResponses.barberia.length)]
    }
    if (lowerMessage.includes('asesor') || lowerMessage.includes('consulta') || lowerMessage.includes('ayuda') || lowerMessage.includes('personalizada') || lowerMessage.includes('experto')) {
      return predefinedResponses.asesoria[Math.floor(Math.random() * predefinedResponses.asesoria.length)]
    }
    if (lowerMessage.includes('versión') || lowerMessage.includes('beta') || lowerMessage.includes('bot') || lowerMessage.includes('robot') || lowerMessage.includes('desarrollo') || lowerMessage.includes('qué eres')) {
      return predefinedResponses.version[Math.floor(Math.random() * predefinedResponses.version.length)]
    }
    
    return predefinedResponses.default[Math.floor(Math.random() * predefinedResponses.default.length)]
  }

  const sendMessage = async (messageText?: string) => {
    const text = messageText || inputValue.trim()
    if (!text) return

    const userMessage: Message = {
      id: Date.now(),
      text,
      isUser: true,
      timestamp: new Date()
    }

    setMessages(prev => [...prev, userMessage])
    setInputValue('')
    setIsTyping(true)

    // Simular tiempo de respuesta
    setTimeout(() => {
      const botResponse: Message = {
        id: Date.now() + 1,
        text: getResponse(text),
        isUser: false,
        timestamp: new Date()
      }
      setMessages(prev => [...prev, botResponse])
      setIsTyping(false)
    }, 1000 + Math.random() * 1000)
  }

  const handleQuickReply = (reply: string) => {
    sendMessage(reply)
  }

  return (
    <>
      {/* Botón flotante */}
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(true)}
        className={`fixed bottom-6 right-6 z-40 w-16 h-16 bg-gradient-to-r from-pink-500 to-pink-600 text-white rounded-full shadow-2xl flex items-center justify-center transition-all duration-300 ${
          isOpen ? 'opacity-0 pointer-events-none' : 'opacity-100'
        }`}
      >
        <MessageCircle className="w-7 h-7" />
        <motion.div
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute -top-1 -right-1 w-4 h-4 bg-white rounded-full flex items-center justify-center"
        >
          <Heart className="w-2 h-2 text-pink-500" />
        </motion.div>
      </motion.button>

      {/* Ventana del chat */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 50 }}
            className="fixed bottom-6 right-6 z-50 w-80 sm:w-96 h-[500px] bg-white rounded-3xl shadow-2xl overflow-hidden border border-pink-200"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-pink-500 to-pink-600 text-white p-4 flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                  <Sparkles className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-semibold">Asistente LIZO BELLEZA</h3>
                  <p className="text-xs text-pink-100">Consultor Digital • BETA 2.0</p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Messages */}
            <div className="h-80 overflow-y-auto p-4 space-y-4 bg-gradient-to-b from-elegant-50/30 to-white">
              {messages.map((message) => (
                <motion.div
                  key={message.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex ${message.isUser ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[75%] p-3 rounded-2xl ${
                      message.isUser
                        ? 'bg-gradient-to-r from-pink-500 to-pink-600 text-white rounded-br-md'
                        : 'bg-white border border-pink-200 text-pink-800 rounded-bl-md shadow-sm'
                    }`}
                  >
                    <p className="text-sm leading-relaxed">{message.text}</p>
                    <p className={`text-xs mt-1 ${
                      message.isUser ? 'text-pink-100' : 'text-pink-400'
                    }`}>
                      {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                    </p>
                  </div>
                </motion.div>
              ))}

              {isTyping && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="flex justify-start"
                >
                  <div className="bg-white border border-pink-200 p-3 rounded-2xl rounded-bl-md">
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 bg-pink-400 rounded-full animate-bounce" />
                      <div className="w-2 h-2 bg-pink-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }} />
                      <div className="w-2 h-2 bg-pink-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }} />
                    </div>
                  </div>
                </motion.div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Quick Replies */}
            <div className="px-4 py-2 border-t border-pink-100">
              <div className="flex flex-wrap gap-2">
                {quickReplies.slice(0, 3).map((reply) => (
                  <button
                    key={reply}
                    onClick={() => handleQuickReply(reply)}
                    className="text-xs px-3 py-1 bg-pink-100 text-pink-700 rounded-full hover:bg-pink-200 transition-colors"
                  >
                    {reply}
                  </button>
                ))}
              </div>
            </div>

            {/* Input */}
            <div className="p-4 border-t border-pink-100 bg-white">
              <div className="flex space-x-2">
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && sendMessage()}
                  placeholder="Escribe tu pregunta..."
                  className="flex-1 px-4 py-2 border border-pink-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent text-sm"
                />
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => sendMessage()}
                  disabled={!inputValue.trim()}
                  className="w-10 h-10 bg-gradient-to-r from-pink-500 to-pink-600 text-white rounded-xl flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed hover:shadow-lg transition-all duration-200"
                >
                  <Send className="w-4 h-4" />
                </motion.button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}