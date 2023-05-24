// import { ChatEngine, sendMessage } from 'react-chat-engine';
// import { useState, useEffect } from 'react';
// import axios from 'axios';
// import { useAuth } from '../contexts/AuthContext';

// function ChatPage() {
//   const [chatData, setChatData] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [messages, setMessages] = useState([]);
//   const [message, setMessage] = useState('');
//   const { user } = useAuth();

//   useEffect(() => {
//     axios.get('https://api.chatengine.io/chats/', {
//       headers: {
//         "Project-ID": "50859311-2fa3-4a32-bd97-b6d0c9fc3476",
//         "User-Name": user.email,
//         "User-Secret": user.email
//       }
//     })
//     .then(response => {
//       setChatData(response.data);
//       setLoading(false);
//     })
//     .catch(error => {
//       setError(error);
//       setLoading(false);
//     });
//   }, []);

//   const createChatRoom = async () => {
//     try {
//       const response = await axios.post('https://api.chatengine.io/chats/', {}, {
//         headers: {
//             "Project-ID": "50859311-2fa3-4a32-bd97-b6d0c9fc3476",
//             "User-Name": user.email,
//             "User-Secret": user.email
//         }
//       });
//       const chatID = response.data.id;
//       const data = {
//         "usernames": ["admin", "customer"],
//         "title": "Customer Support"
//       };
//       await axios.post(`https://api.chatengine.io/chats/${chatID}/people/`, data, {
//         headers: {
//           "Project-ID": "50859311-2fa3-4a32-bd97-b6d0c9fc3476",
//           "User-Name": user.email,
//           "User-Secret": user.email
//         }
//       });
//       setChatID(chatID);
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   useEffect(() => {
//     createChatRoom();
//   }, []);

//   useEffect(() => {
//     if (chatID) {
//       axios.get(`https://api.chatengine.io/chats/${chatID}/messages/`, {
//         headers: {
//           "Project-ID": "50859311-2fa3-4a32-bd97-b6d0c9fc3476",
//           "User-Name": user.email,
//           "User-Secret": user.email
//         }
//       })
//       .then(response => {
//         setMessages(response.data);
//       })
//       .catch(error => {
//         console.log(error);
//       });
//     }
//   }, [chatID]);

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     sendMessage(chatID, { text: message }, authToken, () => {
//       setMessage('');
//     });
//   };

//   const handleChange = (event) => {
//     setMessage(event.target.value);
//   };



//       return (
//         <div>
//           {loading ? (
//             <p>Loading...</p>
//           ) : error ? (
//             <p>{error.message}</p>
//           ) : (
//             <ChatEngine
//             height='100vh'
//             projectID='50859311-2fa3-4a32-bd97-b6d0c9fc3476'
//             userName={user.email}
//             userSecret={user.email} 
//             renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} messages={messages} />}
//             renderChatForm={(chatAppProps) => (
//               <form onSubmit={handleSubmit}>
//                 <input
//                   type='text'
//                   value={message}
//                   onChange={handleChange}
//                   placeholder='Send a message...'
//                 />
//                 <button type='submit'>Send</button>
//               </form>
//             )}
//           />
//           )}
//         </div>
//       );
//           }
// export default ChatPage;
import { ChatEngine, sendMessage } from 'react-chat-engine';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useAuth } from '../contexts/AuthContext';

function ChatPage() {
  const [chatData, setChatData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState('');
  const { user } = useAuth();

  useEffect(() => {
    axios.get('https://api.chatengine.io/chats/', {
      headers: {
        "Project-ID": "7f2e3b60-a8b9-4d84-b4e8-2add86ea6b05",
        "User-Name": "alice",
"User-Secret": "Qwert123@"
    }
    })
      .then(response => {
        setChatData(response.data);
        setLoading(false);
      })
      .catch(error => {
        setError(error);
        setLoading(false);
      });
  }, []);

  const createChatRoom = async () => {
    try {
      const response = await axios.post('https://api.chatengine.io/chats/', {}, {
        headers: {
          "Project-ID": "7f2e3b60-a8b9-4d84-b4e8-2add86ea6b05",
          "User-Name": "alice",
  "User-Secret": "Qwert123@"
      }
      });
      const chatID = response.data.id;
      const data = {
        "usernames": ["admin", "customer"],
        "title": "Customer Support"
      };
      await axios.post(`https://api.chatengine.io/chats/${chatID}/people/`, data, {
        headers: {
          "Project-ID": "7f2e3b60-a8b9-4d84-b4e8-2add86ea6b05",
          "User-Name": "alice",
  "User-Secret": "Qwert123@"
      }
      });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (chatData && chatData.length === 0) {
      createChatRoom();
    }
  }, [chatData]);

  const handleSend = (event) => {
    event.preventDefault();
    sendMessage(chatData[0].id, { text: message }, {
      "Project-ID": "7f2e3b60-a8b9-4d84-b4e8-2add86ea6b05",
      "User-Name": "alice",
      "User-Secret": "Qwert123@",
      "Receiver-User-Name": "nomashi",
      "Receiver-User-Secret": "nomashi123@",
    }, () => {
      setMessage('');
    });
  };

  const handleMessageChange = (event) => {
    setMessage(event.target.value);
  };



  return (
    <div>
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>{error.message}</p>
      ) : (
        <ChatEngine
          height='100vh'
          projectID='7f2e3b60-a8b9-4d84-b4e8-2add86ea6b05'

          userName="alice"
          userSecret="alice123@"
          renderChatFeed={(chatAppProps) => (
            <ChatFeed {...chatAppProps} messages={messages} />
          )}
          renderChatForm={(chatAppProps) => (
            <form onSubmit={handleSend}>
              <input
                type="text"
                value={message}
                onChange={handleMessageChange}
                placeholder="Send a message..."
              />
              <button type="submit">Send</button>
            </form>
          )}
        />
      )}
    </div>
  );


}
export default ChatPage;