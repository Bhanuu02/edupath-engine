export default async function handler(req: any, res: any) {
  // Set CORS headers
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  );

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { prompt, systemPrompt } = req.body || {};
  // Accepts GEMINI_API_KEY (private backend) or VITE_GEMINI_API_KEY
  const apiKey = process.env.GEMINI_API_KEY || process.env.VITE_GEMINI_API_KEY;

  if (!apiKey) {
    return res.status(400).json({ error: 'Missing GEMINI_API_KEY environment variable' });
  }

  try {
    const fullPrompt = systemPrompt ? `${systemPrompt}\n\nUser Question:\n${prompt}` : prompt;

    // 1. Try Gemini 2.0 Flash
    let response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${apiKey}`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          contents: [{ parts: [{ text: fullPrompt }] }],
          generationConfig: { temperature: 0.7, maxOutputTokens: 800 }
        })
      }
    );

    if (!response.ok) {
      // 2. Fallback to Gemini 1.5 Flash
      response = await fetch(
        `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${apiKey}`,
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            contents: [{ parts: [{ text: fullPrompt }] }],
            generationConfig: { temperature: 0.7, maxOutputTokens: 800 }
          })
        }
      );
    }

    if (response.ok) {
      const data: any = await response.json();
      const reply = data.candidates?.[0]?.content?.parts?.[0]?.text || '';
      return res.status(200).json({ reply });
    } else {
      const errText = await response.text();
      return res.status(response.status).json({ error: errText });
    }
  } catch (error: any) {
    return res.status(500).json({ error: error.message || 'Server error' });
  }
}
