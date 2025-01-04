// import React, { useState } from "react";
// import "./Chatbot.css";

// const Chatbot = () => {
//   const [userInput, setUserInput] = useState(""); // State to hold user's input
//   const [chatHistory, setChatHistory] = useState([]); // State to hold the chat history

//   // Handle changes in the input field
//   const handleInputChange = (event) => {
//     setUserInput(event.target.value);
//   };

//   // Handle the send button click event
//   const handleSendMessage = async () => {
//     if (!userInput.trim()) return; // Prevent sending empty messages

//     // Add the user's message to chat history
//     setChatHistory((prev) => [...prev, { sender: "User", message: userInput }]);

//     // Call the backend API to get advice from Gemini API
//     const response = await fetch("http://localhost:5000/get-advice", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({ symptom_query: userInput }),
//     });

//     const data = await response.json();

//     // Add the bot's response to the chat history
//     setChatHistory((prev) => [
//       ...prev,
//       { sender: "Bot", message: data.response },
//     ]);

//     // Clear the input field
//     setUserInput("");
//   };

//   return (
//     <div className="chatbot-container">
//       <div className="chat-window">
//         {chatHistory.map((chat, index) => (
//           <div key={index} className={chat.sender.toLowerCase()}>
//             <strong>{chat.sender}:</strong> {chat.message}
//           </div>
//         ))}
//       </div>
//       <div className="input-container">
//         <input
//           type="text"
//           value={userInput}
//           onChange={handleInputChange}
//           placeholder="Ask about your symptoms..."
//         />
//         <button onClick={handleSendMessage}>Send</button>
//       </div>
//     </div>
//   );
// };

// export default Chatbot;

// import React, { useState } from "react";
// import "./Chatbot.css";

// const Chatbot = () => {
//   const [userInput, setUserInput] = useState(""); // State to hold user's input
//   const [chatHistory, setChatHistory] = useState([]); // State to hold the chat history

//   // Handle changes in the input field
//   const handleInputChange = (event) => {
//     setUserInput(event.target.value);
//   };

//   // Handle the send button click event
//   const handleSendMessage = async () => {
//     if (!userInput.trim()) return; // Prevent sending empty messages

//     // Add the user's message to chat history
//     setChatHistory((prev) => [...prev, { sender: "User", message: userInput }]);

//     try {
//       // Call the backend API to get advice from Gemini API
//       const response = await fetch("http://localhost:5000/get-advice", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({ symptom_query: userInput }),
//       });

//       const data = await response.json();

//       // Add the bot's response to the chat history
//       setChatHistory((prev) => [
//         ...prev,
//         { sender: "Bot", message: data.response },
//       ]);
//     } catch (error) {
//       console.error("Error fetching advice:", error);
//       setChatHistory((prev) => [
//         ...prev,
//         { sender: "Bot", message: "Sorry, I couldn't fetch a response. Please try again later." },
//       ]);
//     }

//     // Clear the input field
//     setUserInput("");
//   };

//   // Function to render chat messages with proper formatting
//   const renderMessage = (message) => {
//     // Split by newlines to handle line breaks
//     return message.split("\n").map((line, index) => (
//       <p key={index} className="chat-line">
//         {line}
//       </p>
//     ));
//   };

//   return (
//     <div className="chatbot-container">
//       <div className="chat-window">
//         {chatHistory.map((chat, index) => (
//           <div key={index} className={`chat-message ${chat.sender.toLowerCase()}`}>
//             <strong>{chat.sender}:</strong>
//             <div>{renderMessage(chat.message)}</div>
//           </div>
//         ))}
//       </div>
//       <div className="input-container">
//         <input
//           type="text"
//           value={userInput}
//           onChange={handleInputChange}
//           placeholder="Ask about your symptoms..."
//         />
//         <button onClick={handleSendMessage}>Send</button>
//       </div>
//     </div>
//   );
// };

// export default Chatbot;



import React, { useState } from "react";
import "./Chatbot.css";

const Chatbot = () => {
  const [userInput, setUserInput] = useState(""); // State to hold user's input
  const [chatHistory, setChatHistory] = useState([]); // State to hold the chat history

  // Handle changes in the input field
  const handleInputChange = (event) => {
    setUserInput(event.target.value);
  };

  // Handle the send button click event
  const handleSendMessage = async () => {
    if (!userInput.trim()) return; // Prevent sending empty messages

    // Add the user's message to chat history
    setChatHistory((prev) => [...prev, { sender: "User", message: userInput }]);

    try {
      // Call the backend API to get advice from Gemini API
      const response = await fetch("http://localhost:5000/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ symptom_query: userInput }),
      });

      const data = await response.json();

      // Add the bot's response to the chat history
      setChatHistory((prev) => [
        ...prev,
        { sender: "Bot", message: data.response },
      ]);
    } catch (error) {
      console.error("Error fetching advice:", error);
      setChatHistory((prev) => [
        ...prev,
        {
          sender: "Bot",
          message: "Sorry, I couldn't fetch a response. Please try again later.",
        },
      ]);
    }

    // Clear the input field
    setUserInput("");
  };

  // Function to render chat messages with proper formatting
  const renderMessage = (message) => {
    // Split by newlines to handle line breaks
    return message.split("\n").map((line, index) => (
      <p key={index} className="chat-line">
        {line}
      </p>
    ));
  };

  // Handle "Enter" key press
  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      handleSendMessage();
    }
  };

  return (
    <div className="chatbot-container">
      <div className="chat-window">
        {chatHistory.map((chat, index) => (
          <div key={index} className={`chat-message ${chat.sender.toLowerCase()}`}>
            <strong>{chat.sender}:</strong>
            <div>{renderMessage(chat.message)}</div>
          </div>
        ))}
      </div>
      <div className="input-container">
        <input
          type="text"
          value={userInput}
          onChange={handleInputChange}
          onKeyPress={handleKeyPress} 
          placeholder="Ask here..."
        />
        <button onClick={handleSendMessage}>Send</button>
      </div>
    </div>
  );
};

export default Chatbot;
