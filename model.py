from flask import Flask, request, jsonify
from transformers import pipeline
from flask_cors import CORS
import openai

# Initialize emotion classification model
emotion_classifier = pipeline("text-classification", model="j-hartmann/emotion-english-distilroberta-base", return_all_scores=True)

app = Flask(__name__, static_folder='build')
CORS(app)


openai.api_key = ""

# Emotion detection function (placeholder, replace with actual implementation)
def detect_emotion(text):
    # Dummy emotion detection logic for demonstration
    # Replace this with your actual emotion detection model
    if "happy" in text or "good" in text:
        return "joy"
    elif "sad" in text or "down" in text:
        return "sadness"
    elif "angry" in text or "mad" in text:
        return "anger"
    elif "surprised" in text or "shocked" in text:
        return "surprise"
    else:
        return "neutral"

# Generate emotional response using OpenAI's GPT
def generate_emotional_response(user_input, emotion):
    prompt = f"""
    You are a chatbot that responds like a human. Your responses should match the detected emotion:
    - Emotion: {emotion}
    - User: {user_input}
    - Chatbot:"""

    response = openai.chat.completions.create(
        model="gpt-3.5-turbo",
        messages=[
            {"role": "system", "content": "You are an empathetic chatbot."},
            {"role": "user", "content": prompt}
        ]
    )
    return response["choices"][0]["message"]["content"]

# Interactive chatbot
if __name__ == "__main__":
    print("Chatbot: Hi there! How are you feeling today?")
    while True:
        user_input = input("You: ")  # Get user input
        if user_input.lower() in ["exit", "quit"]:
            print("Chatbot: Goodbye! Take care.")
            break
        emotion = detect_emotion(user_input)  # Detect emotion from user input
        response = generate_emotional_response(user_input, emotion)  # Generate response
        print(f"Chatbot: {response}")

# Route for home page
@app.route('/')
def home():
    return "Welcome to the Emotion and Intent-Based Chatbot API"


@app.route('/chat', methods=['POST'])
def chat():
    try:
        # Get user message from request JSON
        user_message = request.json.get('message')
        print(f"Received message: {user_message}")  # Debug log

        if not user_message:
            return jsonify({"error": "No message provided."}), 400

        # Generate chatbot response
        response = generate_response(user_message)
        print(f"Generated response: {response}")  # Debug log

        return jsonify({"response": response})
    except Exception as e:
        print(f"Error: {str(e)}")  # Debug log
        return jsonify({"error": str(e)}), 500

# Run the Flask app
if __name__ == '__main__':
    app.run(debug=True, port=5000)
