// src/testGroqConnection.js
import groq from "groq-sdk";
import groqConfig from "./groqConfig";

const testGroqConnection = async () => {
  try {
    console.log("Initializing Groq Client with API Key:", groqConfig.apiKey);
    const client = new groq.Client(groqConfig.apiKey);

    console.log("Sending test request");
    const result = await client.predict({
      modelName: "llama3-8b-8192",
      input: "test input",
    });

    console.log("Test result:", result);
  } catch (error) {
    console.error("Error testing connection:", error);
  }
};

export default testGroqConnection;
