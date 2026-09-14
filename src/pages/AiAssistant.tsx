import { useEffect, useRef, useState } from 'react'
import { Bot, Send, Sparkles } from 'lucide-react'
import { Card, SectionTitle, Badge } from '../components/ui'
import {
  aiSuggestedQuestions,
  matchAiAnswer,
  type ChatMessage,
} from '../data/mockData'

export default function AiAssistant() {
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      role: 'assistant',
      text: 'Good evening. I’m your ControlDeck NG CEO Assistant — offline, mock-grounded on the analysis figures (₦2.888B sales, payee gaps, COGS mix, branches). Ask a suggested question or type your own.',
    },
  ])
  const [input, setInput] = useState('')
  const [typing, setTyping] = useState(false)
  const bottomRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages, typing])

  function ask(question: string) {
    const q = question.trim()
    if (!q || typing) return
    setMessages((m) => [...m, { role: 'user', text: q }])
    setInput('')
    setTyping(true)
    window.setTimeout(() => {
      const answer = matchAiAnswer(q)
      setMessages((m) => [...m, { role: 'assistant', text: answer }])
      setTyping(false)
    }, 550)
  }

  return (
    <div className="mx-auto flex max-w-4xl flex-col" style={{ minHeight: 'calc(100vh - 8rem)' }}>
      <SectionTitle
        title="AI CEO Assistant"
        subtitle="Pre-scripted, grounded answers · no live LLM · works offline"
      />

      <div className="mb-4 flex flex-wrap gap-2">
        {aiSuggestedQuestions.map((q) => (
          <button
            key={q}
            type="button"
            onClick={() => ask(q)}
            className="rounded-full border border-gold-500/30 bg-gold-500/10 px-3 py-1.5 text-left text-xs text-gold-400 transition hover:bg-gold-500/20"
          >
            <Sparkles className="mr-1 inline h-3 w-3" />
            {q}
          </button>
        ))}
      </div>

      <Card className="flex flex-1 flex-col overflow-hidden">
        <div className="flex items-center gap-2 border-b border-navy-700/60 px-4 py-3">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gold-500/15">
            <Bot className="h-4 w-4 text-gold-400" />
          </div>
          <div>
            <p className="text-sm font-semibold text-cream">ControlDeck Advisor</p>
            <Badge tone="gold">Mock · Offline</Badge>
          </div>
        </div>

        <div className="flex-1 space-y-4 overflow-y-auto p-4" style={{ maxHeight: '55vh' }}>
          {messages.map((m, i) => (
            <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
              <div
                className={`max-w-[90%] rounded-2xl px-4 py-3 text-sm leading-relaxed sm:max-w-[80%] ${
                  m.role === 'user'
                    ? 'bg-gold-500 text-navy-950'
                    : 'border border-navy-700 bg-navy-800/80 text-cream/90'
                }`}
              >
                {m.text}
              </div>
            </div>
          ))}
          {typing && (
            <div className="flex justify-start">
              <div className="rounded-2xl border border-navy-700 bg-navy-800/80 px-4 py-3 text-sm text-cream/50">
                Analysing ControlDeck figures…
              </div>
            </div>
          )}
          <div ref={bottomRef} />
        </div>

        <form
          className="flex gap-2 border-t border-navy-700/60 p-3"
          onSubmit={(e) => {
            e.preventDefault()
            ask(input)
          }}
        >
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Ask about performance, risks, purchasing…"
            className="flex-1 rounded-xl border border-navy-700 bg-navy-950 px-4 py-2.5 text-sm text-cream placeholder:text-cream/30 outline-none focus:border-gold-500/50"
          />
          <button
            type="submit"
            disabled={!input.trim() || typing}
            className="inline-flex items-center gap-2 rounded-xl bg-gold-500 px-4 py-2.5 text-sm font-semibold text-navy-950 transition hover:bg-gold-400 disabled:opacity-40"
          >
            <Send className="h-4 w-4" />
            Send
          </button>
        </form>
      </Card>
    </div>
  )
}
