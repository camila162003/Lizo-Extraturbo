'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { supabase, initializeDatabase } from '@/lib/supabase'
import { CheckCircle, XCircle, Clock, AlertTriangle, Database, Link, Settings } from 'lucide-react'

export default function SupabaseSetup() {
  const [steps, setSteps] = useState([
    { id: 1, title: 'Conexión a Supabase', status: 'pending', message: '', icon: Link },
    { id: 2, title: 'Verificar tablas', status: 'pending', message: '', icon: Database },
    { id: 3, title: 'Cargar datos iniciales', status: 'pending', message: '', icon: Settings },
    { id: 4, title: 'CRM listo', status: 'pending', message: '', icon: CheckCircle }
  ])

  const updateStep = (stepId: number, status: 'success' | 'error' | 'pending', message: string) => {
    setSteps(prev => prev.map(step => 
      step.id === stepId ? { ...step, status, message } : step
    ))
  }

  useEffect(() => {
    const setupSupabase = async () => {
      try {
        // Step 1: Test connection
        updateStep(1, 'pending', 'Conectando a Supabase...')
        
        const { data: connectionTest, error: connectionError } = await supabase
          .from('customers')
          .select('count')
          .limit(1)

        if (connectionError) {
          updateStep(1, 'error', `Error de conexión: ${connectionError.message}`)
          return
        }

        updateStep(1, 'success', '✅ Conexión establecida')

        // Step 2: Check tables
        updateStep(2, 'pending', 'Verificando estructura de la base de datos...')
        
        const { data: tablesData, error: tablesError } = await supabase
          .from('customers')
          .select('*')
          .limit(1)

        if (tablesError) {
          updateStep(2, 'error', `❌ Las tablas no existen. Ejecuta el archivo supabase-schema.sql en Supabase`)
          updateStep(3, 'error', 'Pendiente: Crear tablas primero')
          updateStep(4, 'error', 'Pendiente: Completar configuración')
          return
        }

        updateStep(2, 'success', '✅ Tablas encontradas')

        // Step 3: Initialize data
        updateStep(3, 'pending', 'Inicializando datos...')
        
        await initializeDatabase()
        
        updateStep(3, 'success', '✅ Datos inicializados')
        updateStep(4, 'success', '🚀 ¡CRM PROFESIONAL LISTO!')

      } catch (error: any) {
        console.error('Setup error:', error)
        updateStep(1, 'error', `Error: ${error.message}`)
      }
    }

    setupSupabase()
  }, [])

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'success': return CheckCircle
      case 'error': return XCircle
      case 'pending': return Clock
      default: return Clock
    }
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'success': return 'text-green-600 bg-green-100'
      case 'error': return 'text-red-600 bg-red-100'
      case 'pending': return 'text-yellow-600 bg-yellow-100'
      default: return 'text-gray-600 bg-gray-100'
    }
  }

  const allSuccess = steps.every(step => step.status === 'success')
  const hasError = steps.some(step => step.status === 'error')

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-pink-50 to-pink-100 p-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-black text-gray-800 mb-4">
            LIZO EXTRATURBO <span className="text-pink-600">CRM PROFESSIONAL</span>
          </h1>
          <p className="text-xl text-gray-600">Configuración de Base de Datos Real con Supabase</p>
        </div>

        {/* Setup Steps */}
        <div className="bg-white rounded-3xl p-8 border border-pink-200 mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Estado de Configuración</h2>
          
          <div className="space-y-4">
            {steps.map((step, index) => {
              const StatusIcon = getStatusIcon(step.status)
              return (
                <motion.div
                  key={step.id}
                  className="flex items-center space-x-4 p-4 rounded-2xl bg-gray-50"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center ${getStatusColor(step.status)}`}>
                    <StatusIcon className="w-5 h-5" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-800">{step.title}</h3>
                    <p className="text-sm text-gray-600">{step.message}</p>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>

        {/* Error Instructions */}
        {hasError && (
          <div className="bg-red-50 border border-red-200 rounded-3xl p-8 mb-8">
            <div className="flex items-center space-x-3 mb-4">
              <AlertTriangle className="w-8 h-8 text-red-600" />
              <h3 className="text-2xl font-bold text-red-800">Configuración Requerida</h3>
            </div>
            <div className="space-y-4 text-red-700">
              <p className="text-lg font-semibold">📋 INSTRUCCIONES PASO A PASO:</p>
              <ol className="list-decimal list-inside space-y-2 text-sm">
                <li>Abre <strong>https://app.supabase.com</strong> en una nueva pestaña</li>
                <li>Selecciona tu proyecto LIZO</li>
                <li>Ve a <strong>"SQL Editor"</strong> en el panel lateral</li>
                <li>Haz clic en <strong>"New Query"</strong></li>
                <li>Copia y pega todo el contenido del archivo <code>supabase-schema.sql</code></li>
                <li>Haz clic en <strong>"Run"</strong> para ejecutar el script</li>
                <li>Recarga esta página para continuar</li>
              </ol>
              <div className="bg-red-100 p-4 rounded-xl">
                <p className="font-semibold">📁 Archivo a ejecutar: <code>supabase-schema.sql</code></p>
                <p className="text-sm">Este archivo contiene todas las tablas y datos necesarios para el CRM</p>
              </div>
            </div>
          </div>
        )}

        {/* Success Message */}
        {allSuccess && (
          <motion.div
            className="bg-gradient-to-r from-green-500 to-green-600 rounded-3xl p-8 text-white text-center"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <CheckCircle className="w-16 h-16 mx-auto mb-4" />
            <h3 className="text-3xl font-bold mb-2">¡CRM PROFESIONAL ACTIVADO!</h3>
            <p className="text-xl mb-6">Base de datos conectada y funcionando con datos reales</p>
            
            <motion.button
              onClick={() => window.location.href = '/admin/dashboard'}
              className="bg-white text-green-600 px-8 py-3 rounded-full font-bold hover:bg-gray-100 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              🚀 ACCEDER AL DASHBOARD
            </motion.button>
          </motion.div>
        )}

        {/* Connection Info */}
        <div className="bg-white rounded-3xl p-8 border border-pink-200">
          <h3 className="text-xl font-bold text-gray-800 mb-4">Información de Conexión</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
            <div className="bg-gray-50 p-4 rounded-xl">
              <p className="font-semibold text-gray-700">Supabase URL:</p>
              <p className="text-gray-600 break-all">https://qlgtbreqoyjhycpnbzoz.supabase.co</p>
            </div>
            <div className="bg-gray-50 p-4 rounded-xl">
              <p className="font-semibold text-gray-700">Estado:</p>
              <p className="text-gray-600">
                {allSuccess ? '✅ Conectado y funcionando' : '⏳ Configurando...'}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}