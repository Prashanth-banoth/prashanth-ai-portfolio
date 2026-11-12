
export async function POST(request: Request) {
  try {
    const { question } = await request.json();

    if (!question || typeof question !== "string" || !question.trim()) {
      return Response.json(
        { error: "Please enter a question." },
        { status: 400 }
      );
    }

    if (question.length > 1000) {
      return Response.json(
        { error: "Question is too long. Maximum 1000 characters." },
        { status: 400 }
      );
    }

    const apiKey = process.env.GEMINI_API_KEY;

    if (!apiKey) {
      return Response.json(
        { error: "Gemini API key is not configured." },
        { status: 500 }
      );
    }

    const response = await fetch(
      "https://generativelanguage.googleapis.com/v1beta/models/gemini-3.6-flash:generateContent",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-goog-api-key": apiKey,
        },
        body: JSON.stringify({
          contents: [
            {
              parts: [
                {
                  text: `You are Prashanth's portfolio AI assistant.
Answer coding and technology questions clearly and concisely.
If asked about Prashanth, describe him as a frontend developer
with React, Next.js, TypeScript and basic Generative AI knowledge.

Question: ${question.trim()}`,
                },
              ],
            },
          ],
        }),
      }
    );

    const data = await response.json();

    if (!response.ok) {
      return Response.json(
        { error: "Gemini could not process your request." },
        { status: response.status }
      );
    }

    const answer =
      data.candidates?.[0]?.content?.parts
        ?.map((part: { text?: string }) => part.text ?? "")
        .join("") || "No response received.";

    return Response.json({ answer });
  } catch {
    return Response.json(
      { error: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }
}
