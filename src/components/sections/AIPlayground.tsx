
'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Send, Bot, Loader2 } from 'lucide-react';

export default function AIPlayground() {
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const askAI = async () => {
    if (!question.trim() || loading) return;

    setLoading(true);
    setAnswer('');
    setError('');

    try {
      const response = await fetch('/api/ask-ai', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ question }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Something went wrong.');
      }

      setAnswer(data.answer);
    } catch (err) {
      setError(
        err instanceof Error ? err.message : 'Please try again.'
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="ai-playground"
      className="relative overflow-hidden bg-[#080817] px-6 py-28 text-white"
    >
      <div className="pointer-events-none absolute left-1/2 top-20 h-72 w-72 -translate-x-1/2 rounded-full bg-purple-600/20 blur-[120px]" />

      <div className="relative mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center"
        >
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-purple-400/30 bg-purple-500/10 px-5 py-2 text-sm text-purple-300">
            <Sparkles size={16} />
            Powered by Google Gemini AI
          </div>

          <h2 className="text-4xl font-bold md:text-6xl">
            Explore My{' '}
            <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              AI Playground
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-gray-400">
            Have a coding question? Ask my AI assistant and
            experience an interactive AI-powered conversation.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-12 rounded-3xl border border-white/10 bg-white/[0.04] p-5 shadow-2xl shadow-purple-900/10 backdrop-blur-xl md:p-8"
        >
          <div className="mb-6 flex items-center gap-3">
            <div className="rounded-xl bg-purple-500/20 p-3 text-purple-300">
              <Bot size={25} />
            </div>

            <div>
              <h3 className="font-semibold">Prashanth's AI Assistant</h3>
              <p className="text-xs text-green-400">
                Ask me anything about coding
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row">
            <input
              value={question}
              onChange={(e) => setQuestion(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === 'Enter') askAI();
              }}
              placeholder="Ask something... e.g. What is React?"
              maxLength={1000}
              className="min-w-0 flex-1 rounded-xl border border-white/10 bg-black/30 px-5 py-4 text-sm text-white outline-none transition placeholder:text-gray-500 focus:border-purple-400"
            />

            <button
              onClick={askAI}
              disabled={loading || !question.trim()}
              className="flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-purple-600 to-blue-600 px-7 py-4 font-semibold transition hover:scale-[1.02] disabled:cursor-not-allowed disabled:opacity-50"
            >
              {loading ? (
                <Loader2 size={18} className="animate-spin" />
              ) : (
                <Send size={18} />
              )}
              {loading ? 'Thinking...' : 'Ask AI'}
            </button>
          </div>

          {error && (
            <div className="mt-5 rounded-xl border border-red-500/20 bg-red-500/10 p-4 text-sm text-red-300">
              {error}
            </div>
          )}

          {answer && (
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-6 rounded-2xl border border-purple-400/20 bg-purple-500/5 p-5"
            >
              <div className="mb-3 flex items-center gap-2 text-sm font-semibold text-purple-300">
                <Sparkles size={16} />
                Gemini AI Response
              </div>

              <p className="whitespace-pre-wrap text-sm leading-7 text-gray-300">
                {answer}
              </p>
            </motion.div>
          )}

          {!answer && !error && !loading && (
            <p className="mt-5 text-center text-xs text-gray-500">
              Your AI-generated response will appear here.
            </p>
          )}
        </motion.div>

        <p className="mt-5 text-center text-xs text-gray-500">
          AI responses may occasionally be inaccurate. Avoid entering
          personal or confidential information.
        </p>
      </div>
    </section>
  );
}
