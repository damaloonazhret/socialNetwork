import OpenAI from 'openai';

export async function getCompletion(apiKey, prompt) {
  const openai = new OpenAI({ apiKey });

  const res = await openai.chat.completions.create({
    model: 'gpt-4o',
    messages: [
      { role: 'system', content: 'Ты придираешься к коду, как самый токсичный сеньор.' },
      { role: 'user', content: prompt },
    ],
    temperature: 0.4,
    max_tokens: 1000,
  });

  return res.choices[0].message.content;
}
