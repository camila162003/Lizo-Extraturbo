'use client'

import { useState, useEffect } from 'react'
import { supabase } from '@/lib/supabase'

export default function SupabaseTest() {
  const [connectionStatus, setConnectionStatus] = useState('Testing...')
  const [data, setData] = useState<any>(null)

  useEffect(() => {
    const testConnection = async () => {
      try {
        console.log('🔄 Testing Supabase connection...')
        
        // Test basic connection
        const { data: testData, error } = await supabase
          .from('customers')
          .select('count')
          .limit(1)

        if (error) {
          throw error
        }

        setConnectionStatus('✅ Connected!')
        setData(testData)
        console.log('✅ Supabase connection successful:', testData)
      } catch (err: any) {
        console.error('❌ Supabase connection error:', err)
        setConnectionStatus(`❌ Error: ${err.message || 'Unknown error'}`)
      }
    }

    testConnection()
  }, [])

  return (
    <div className="p-8 bg-white border border-pink-200 rounded-lg">
      <h2 className="text-2xl font-bold mb-4">Supabase Connection Test</h2>
      <p className="mb-4">Status: {connectionStatus}</p>
      {data && (
        <pre className="bg-gray-100 p-4 rounded text-sm">
          {JSON.stringify(data, null, 2)}
        </pre>
      )}
    </div>
  )
}