import { GoogleGenAI } from "@google/genai";

async function main(prompt) {
  try {
    const ai = new GoogleGenAI(process.env.GEMINI_API_KEY);

    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: prompt,
    });

    // Coba berbagai cara akses
    if (response && response.text) {
      if (typeof response.text === "string") {
        return response.text;
      } else if (typeof response.text === "function") {
        return response.text();
      } else {
        return String(response.text);
      }
    } else {
      throw new Error("No text content in response");
    }
  } catch (error) {
    console.error("Gemini API Error Details:");
    console.error("- Message:", error.message);
    console.error("- Stack:", error.stack);
    console.error("- Name:", error.name);

    throw new Error(`Gemini API failed: ${error.message}`);
  }
}

export default main;
