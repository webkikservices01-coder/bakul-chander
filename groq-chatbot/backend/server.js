require('dotenv').config();
const express = require('express');
const cors = require('cors');
const Groq = require('groq-sdk');

const app = express();
app.use(cors());
app.use(express.json());

const groq = new Groq({ apiKey: process.env.GROQ_API_KEY });

app.post('/api/chat', async (req, res) => {
    const { message, pageData } = req.body;

    // AI ab khud live website data padhega jo frontend bhejega
    const systemPrompt = `You are Bakul Chandra's Strategic AI Advisor. 
    You do not have a hardcoded database. Instead, you must read the live website data provided below to answer the user.
    If the user asks for a phone number, email, or specific detail, look for it in the website data and TELL THEM directly.
    After giving the information, if it makes sense to redirect them to a specific page (like /contact, /works-&-portfolio), provide the URL.
    
    LIVE WEBSITE DATA FOR ANALYSIS: 
    """${pageData}"""`;

    try {
        const chatCompletion = await groq.chat.completions.create({
            messages: [
                { role: 'system', content: systemPrompt },
                { role: 'user', content: message }
            ],
            model: 'openai/gpt-oss-120b', // Ya jo model aapka chal raha hai
            temperature: 0.3,
            
            // SUPER TOOL: AI ko force kiya hai ki wo Answer aur Redirect dono de
            tools: [
                {
                    type: "function",
                    function: {
                        name: "respond_and_redirect",
                        description: "Provide the answer to the user and optionally redirect them.",
                        parameters: {
                            type: "object",
                            properties: {
                                answer: { type: "string", description: "The exact answer to the user's question based on the website data (e.g., 'The phone number is +91...')" },
                                redirect_url: { type: "string", description: "The relative URL path (e.g., /contact). Use 'NONE' if no redirect is needed." }
                            },
                            required: ["answer", "redirect_url"]
                        }
                    }
                }
            ],
            // FORCE AI TO USE THIS TOOL ALWAYS
            tool_choice: { type: "function", function: { name: "respond_and_redirect" } } 
        });

        const toolCall = chatCompletion.choices[0]?.message?.tool_calls?.[0];

        if (toolCall) {
            const args = JSON.parse(toolCall.function.arguments);
            
            // Ab backend dono cheezein bhejega: Sahi Jawab + Redirect URL
            return res.json({ 
                reply: args.answer, 
                action: args.redirect_url !== 'NONE' ? 'REDIRECT' : 'NONE', 
                url: args.redirect_url 
            });
        }

        res.json({ reply: "I couldn't analyze the website for that request.", action: 'NONE' });

    } catch (error) {
        console.error("Groq API Error:", error);
        res.status(500).json({ error: 'Failed to generate response' });
    }
});

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));