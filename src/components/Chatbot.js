
// import React, { useState } from 'react';
// import './Chatbot.css';

// const Chatbot = () => {
//   const [messages, setMessages] = useState([]);
//   const [input, setInput] = useState('');

//   const handleSend = async () => {
//     if (!input.trim()) return; 

//     const newMessages = [...messages, { sender: 'user', text: input }];
//     setMessages(newMessages);
//     setInput('');

//     try {
//       // Send user input to the Flask API
//       const response = await fetch('http://127.0.0.1:5001/chat', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({ message: input }),
//       });

//       const data = await response.json();

//       // Add the chatbot's response to the messages array
//       if (data.response) {
//         setMessages([...newMessages, { sender: 'bot', text: data.response }]);
//       } else if (data.error) {
//         setMessages([...newMessages, { sender: 'bot', text: `Error: ${data.error}` }]);
//       }
//     } catch (error) {
//       console.error('Error communicating with API:', error);
//       setMessages([...newMessages, { sender: 'bot', text: "I'm having trouble understanding. Please try again." }]);
//     }
//   }
//   return (
//     <div className="chatbot-container">
//     <div className="chatbot" id="chatbot">
//       <h2>Chat with Mindly</h2>
//       <div className="chat-window">
//         <p>Hey, How you feel ?</p>
//         {messages.map((msg, index) => (
//           <div key={index} className={`chat-bubble ${msg.sender}`}>
//             {msg.text}
//           </div>
//         ))}
//       </div>
//       <div className="chat-input">
//         <input
//           type="text"
//           value={input}
//           onChange={(e) => setInput(e.target.value)}
//           placeholder="Type your message here..."
//         />
//         <button onClick={handleSend}>Send</button>
//       </div>
//     </div>
//     </div>
//   );
// };

// export default Chatbot;
import React, { useState, useRef, useEffect } from 'react';
import './Chatbot.css';

const Chatbot = () => {
  const [messages, setMessages] = useState([
    { sender: 'bot', text: "Hey there! I'm Emocare, your emotional wellness assistant. How are you feeling today?", emotion: "neutral" }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [emotionDetected, setEmotionDetected] = useState(null);
  const chatWindowRef = useRef(null);

  // Sample emotions for demonstration
  const emotions = {
    happy: ['happy', 'joy', 'great', 'good', 'excited', 'wonderful'],
    sad: ['sad', 'unhappy', 'depressed', 'miserable', 'down', 'upset'],
    angry: ['angry', 'mad', 'frustrated', 'annoyed', 'irritated'],
    anxious: ['anxious', 'worried', 'nervous', 'stress', 'overwhelmed', 'panic'],
    neutral: []
  };

  // Detect emotion from text (simple implementation)
  const detectEmotion = (text) => {
    const lowercaseText = text.toLowerCase();
    
    for (const [emotion, keywords] of Object.entries(emotions)) {
      for (const keyword of keywords) {
        if (lowercaseText.includes(keyword)) {
          return emotion;
        }
      }
    }
    return 'neutral';
  };

  // Auto-scroll to the bottom when new messages are added
  useEffect(() => {
    if (chatWindowRef.current) {
      chatWindowRef.current.scrollTop = chatWindowRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim()) return;

    const userEmotion = detectEmotion(input);
    setEmotionDetected(userEmotion);
    
    const newMessages = [...messages, { sender: 'user', text: input, emotion: userEmotion }];
    setMessages(newMessages);
    setInput('');
    setIsTyping(true);

    try {
      // Send user input to the Flask API
      const response = await fetch('http://127.0.0.1:5001/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 
          message: input,
          emotion: userEmotion // Optionally send detected emotion to backend
        }),
      });

      const data = await response.json();

      // Simulate typing delay for more natural conversation feel
      setTimeout(() => {
        setIsTyping(false);
        // Add the chatbot's response to the messages array
        if (data.response) {
          setMessages([...newMessages, { 
            sender: 'bot', 
            text: data.response,
            emotion: data.emotion || 'neutral' // Use emotion from API if available
          }]);
        } else if (data.error) {
          setMessages([...newMessages, { 
            sender: 'bot', 
            text: `I'm sorry, I encountered a problem. Please try again.`,
            emotion: 'neutral'
          }]);
        }
      }, 1000);
    } catch (error) {
      console.error('Error communicating with API:', error);
      setTimeout(() => {
        setIsTyping(false);
        setMessages([...newMessages, { 
          sender: 'bot', 
          text: "I'm having trouble connecting right now. Please check your internet connection and try again.",
          emotion: 'neutral'
        }]);
      }, 1000);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSend();
    }
  };

  // Get emoji based on emotion
  const getEmotionEmoji = (emotion) => {
    const emojis = {
      happy: '😊',
      sad: '😔',
      angry: '😠',
      anxious: '😰',
      neutral: '😐'
    };
    return emojis[emotion] || emojis.neutral;
  };

  // Get time for message timestamp
  const getMessageTime = () => {
    const now = new Date();
    return `${now.getHours().toString().padStart(2, '0')}:${now.getMinutes().toString().padStart(2, '0')}`;
  };

  return (
    <div className={`chatbot ${isMinimized ? 'minimized' : ''}`}>
    <div className={`chatbot-container ${isMinimized ? 'minimized' : ''}`}>
      <div className="chatbot-wrapper">
        <div className="chatbot-header">
          <div className="header-left">
            <div className="bot-avatar">
      
            </div>
            <div className="bot-info">
              <h2>Emocare</h2>
              <span className="status">Online</span>
            </div>
          </div>
          <div className="header-controls">
            {emotionDetected && emotionDetected !== 'neutral' && (
              <div className="emotion-indicator">
                <span className={`emotion-badge ${emotionDetected}`}>
                  {emotionDetected} {getEmotionEmoji(emotionDetected)}
                </span>
              </div>
            )}
            <button 
              className="minimize-btn"
              onClick={() => setIsMinimized(!isMinimized)}
            >
              {isMinimized ? '↑' : '↓'}
            </button>
          </div>
        </div>
        
        <div className="chat-window" ref={chatWindowRef}>
          <div className="chat-date-divider">
            <span>Today</span>
          </div>
          
          {messages.map((msg, index) => (
            <div key={index} className={`chat-message ${msg.sender}`}>
              {msg.sender === 'bot' && (
                <div className="avatar">
                  <span>{getEmotionEmoji(msg.emotion || 'neutral')}</span>
                </div>
              )}
              <div className="message-content">
                <div className="message-bubble">
                  {msg.emotion && msg.emotion !== 'neutral' && msg.sender === 'user' && (
                    <div className={`emotion-tag ${msg.emotion}`}>
                      {msg.emotion} {getEmotionEmoji(msg.emotion)}
                    </div>
                  )}
                  <p>{msg.text}</p>
                </div>
                <div className="message-time">{getMessageTime()}</div>
              </div>
            </div>
          ))}
          
          {isTyping && (
            <div className="chat-message bot">
              <div className="avatar">
                <span>{getEmotionEmoji('neutral')}</span>
              </div>
              <div className="message-content">
                <div className="message-bubble typing">
                  <div className="typing-indicator">
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
        
        <div className="chat-input-container">
          <div className="input-wrapper">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Type your message here..."
              disabled={isTyping}
            />
            <div className="input-actions">
              <button className="emoji-btn">😊</button>
              <button 
                className={`send-btn ${input.trim() ? 'active' : ''}`}
                onClick={handleSend}
                disabled={!input.trim() || isTyping}
              >
                <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="22" y1="2" x2="11" y2="13"></line>
                  <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                </svg>
              </button>
            </div>
          </div>
          
          <div className="quick-responses">
            <button onClick={() => setInput("I'm feeling happy today")}>I'm feeling happy</button>
            <button onClick={() => setInput("I'm feeling anxious")}>I'm feeling anxious</button>
            <button onClick={() => setInput("I'm feeling sad")}>I'm feeling sad</button>
            <button onClick={() => setInput("Need some advice")}>Need advice</button>
          </div>
        </div>
      </div>
      
      {isMinimized && (
        <div className="chat-bubble-button" onClick={() => setIsMinimized(false)}>
          <div className="bot-avatar">
            <span>{getEmotionEmoji('neutral')}</span>
          </div>
          <span>Chat with Emocare</span>
        </div>
      )}
    </div>
    </div>
  );
};

export default Chatbot;