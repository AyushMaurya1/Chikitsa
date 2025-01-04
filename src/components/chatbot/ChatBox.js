import React, { useState, useEffect, useRef } from 'react';
import './ChatBox.css';

function ChatBox() {
    const [messages, setMessages] = useState([]);
    const [input, setInput] = useState('');
    const messageEndRef = useRef(null);

    const handleSend = async () => {
        if (input.trim()) {
            const userMessage = { text: input, sender: 'user' };
            setMessages(prevMessages => [...prevMessages, userMessage]);
            setInput('');

            try {
                const response = await fetch('http://127.0.0.1:5000/chat', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ message: input }),
                });

                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }

                const data = await response.json();
                const botMessage = { text: data.response, sender: 'bot' };
                setMessages(prevMessages => [...prevMessages, botMessage]);

                // Scroll to the bottom of the chat
                messageEndRef.current?.scrollIntoView({ behavior: 'smooth' });
            } catch (error) {
                console.error('Failed to send message:', error);
            }
        }
    };

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            e.preventDefault(); // Prevent the default action of the Enter key (which could submit the form or trigger another event)
            handleSend(); // Call the handleSend function
        }
    };

    useEffect(() => {
        // Scroll to the bottom whenever messages change
        messageEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [messages]);

    return (
        <div className="chatbox">
            <div className="chatbox-header">
                Chat
            </div>
            <div className="chatbox-body">
                {messages.map((msg, index) => (
                    <div key={index} className={`message ${msg.sender}`}>
                        {msg.text}
                    </div>
                ))}
                <div ref={messageEndRef} />
            </div>
            <div className="chatbox-footer">
                <input
                    type="text"
                    placeholder="Type a message..."
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyPress={handleKeyPress}
                />
                <button onClick={handleSend}>Send</button>
            </div>
        </div>
    );
}

export default ChatBox;
