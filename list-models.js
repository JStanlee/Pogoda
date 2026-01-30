import { GoogleGenerativeAI } from "@google/generative-ai";

const API_KEY = "AIzaSyDc9vCw5Wn3BQfjkWf7W7X9b2ZACK5rmhc";

async function listModels() {
    try {
        const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models?key=${API_KEY}`);
        const data = await response.json();

        if (data.error) {
            console.error("API Error:", data.error);
        } else {
            console.log("Available Models:");
            console.log(JSON.stringify(data.models, null, 2));
        }
    } catch (error) {
        console.error("Network Error:", error);
    }
}

listModels();
