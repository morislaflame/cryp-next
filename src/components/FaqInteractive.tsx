'use client'

import { useState } from 'react'
import { faqData, type FaqItem } from './FaqServerContent'

export default function FaqInteractive() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <div className="w-full min-h-screen text-gray-100 p-4">
      <div className="max-w-4xl mx-auto">
        <div className="bg-emerald-950/50 backdrop-blur-sm rounded-lg border border-emerald-700/50 p-8">
          <h1 className="text-3xl font-bold mb-4 text-emerald-400">Часто задаваемые вопросы (FAQ)</h1>
          <p className="text-gray-400 mb-8">Ответы на самые популярные вопросы о работе нашего сервиса обмена</p>

          <div className="space-y-4">
            {faqData.map((item: FaqItem, index: number) => (
              <div 
                key={index} 
                className="border border-emerald-700/50 rounded-lg overflow-hidden bg-emerald-950/30 hover:border-emerald-800 transition-colors"
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full text-left p-4 flex justify-between items-center gap-4 hover:bg-emerald-800/30 transition-colors"
                >
                  <span className="font-semibold text-gray-200">{item.question}</span>
                  <svg
                    className={`w-5 h-5 text-emerald-400 transition-transform flex-shrink-0 ${
                      openIndex === index ? 'rotate-180' : ''
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {openIndex === index && (
                  <div className="px-4 pb-4 text-gray-100 border-t border-emerald-700/50 pt-4">
                    {item.answer}
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="mt-8 p-6 bg-emerald-900/20 border border-emerald-800 rounded-lg">
            <h3 className="text-lg font-semibold mb-2 text-emerald-300">Не нашли ответ на свой вопрос?</h3>
            <p className="text-gray-400 mb-4">
              Если вы не нашли ответ на свой вопрос в разделе FAQ, пожалуйста, свяжитесь с нашей службой поддержки. 
              Мы работаем 24/7 и всегда готовы помочь вам.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
