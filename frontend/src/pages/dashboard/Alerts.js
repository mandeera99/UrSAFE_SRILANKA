import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Alerts() {
  const [messages, setMessages] = useState([]);
 const [displayedMessages, setDisplayedMessages] = useState([]);


  

  useEffect(() => {
    const fetchMessages = async () => {
      const msgRes = await axios.get('http://localhost:4000/getmsgs');
      
      const messagesArray = msgRes.data.data.map((msg) => ({
        id: msg._id,
        message: msg.message,
        userType: msg.userType,
      }));
      const newMessages = messagesArray.filter((msg) => {
        return !displayedMessages.includes(msg.message);
      });
      setMessages(prevMessages => [...prevMessages, ...newMessages]);
     setDisplayedMessages(prevDisplayedMessages => [...prevDisplayedMessages, ...newMessages.map(msg => msg.message)]);
    };
      
    fetchMessages();
  }, []);

  const handleRefresh = () => {
    setMessages([]);
    setDisplayedMessages([]);
  };

  return (
    <div>
      <button 
        style={{
          backgroundColor: '#4CAF50', 
          border: 'none', 
          color: 'white', 
          padding: '10px 20px', 
          textAlign: 'center', 
          textDecoration: 'none', 
          display: 'inline-block', 
          fontSize: '16px', 
          margin: '10px', 
          cursor: 'pointer',
        }}
        onClick={handleRefresh}
      >
        Refresh
      </button>
      {messages.map((msg, index) => (
        <p key={index}>{msg.message}</p>
      ))}
    </div>
  );
}

export default Alerts;
