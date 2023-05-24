// import { ChatEngine, sendMessage } from 'react-chat-engine';
// import { useState, useEffect } from 'react';
// import axios from 'axios';
// import { useAuth } from '../contexts/AuthContext';

// function AdminChatPage() {
//     const [chatData, setChatData] = useState(null);
//     const [loading, setLoading] = useState(true);
//     const [error, setError] = useState(null);
//     const [messages, setMessages] = useState([]);
//     const [message, setMessage] = useState('');
//     const { user } = useAuth();

//     useEffect(() => {
//         axios.get('https://api.chatengine.io/chats/', {
//             headers: {
//                 "Project-ID": "50859311-2fa3-4a32-bd97-b6d0c9fc3476",
//                 "User-Name": "nomashi",
//                 "User-Secret": "nomashi123@"
//               }
//         })
//             .then(response => {
//                 setChatData(response.data);
//                 setLoading(false);
//             })
//             .catch(error => {
//                 setError(error);
//                 setLoading(false);
//             });
//     }, []);

//     const createChatRoom = async () => {
//         try {
//             const response = await axios.post('https://api.chatengine.io/chats/', {}, {
//                 headers: {
//                     "Project-ID": "50859311-2fa3-4a32-bd97-b6d0c9fc3476",
//                     "User-Name": "nomashi",
//                     "User-Secret": "nomashi123@"
//                   }
//             });
//             const chatID = response.data.id;
//             const data = {
//                 "usernames": ["admin", "customer"],
//                 "title": "Customer Support"
//             };
//             await axios.post(`https://api.chatengine.io/chats/${chatID}/people/`, data, {
//                 headers: {
//                     "Project-ID": "50859311-2fa3-4a32-bd97-b6d0c9fc3476",
//                     "User-Name": "nomashi",
//                     "User-Secret": "nomashi123@"
//                   }
             
//             });
//         } catch (error) {
//             console.log(error);
//         }
//     };

//     useEffect(() => {
//         if (chatData && chatData.length === 0) {
//             createChatRoom();
//         }
//     }, [chatData]);

//     const handleSend = (event) => {
//         event.preventDefault();
//         sendMessage(chatData[0].id, { text: message }, {
           
//                 "Project-ID": "50859311-2fa3-4a32-bd97-b6d0c9fc3476",
//                 "User-Name": "nomashi",
//                 "User-Secret": "nomashi123@"
             
//         }, () => {
//             setMessage('');
//         });
//     };

//     const handleMessageChange = (event) => {
//         setMessage(event.target.value);
//     };



//     return (
//         <div>
//             {loading ? (
//                 <p>Loading...</p>
//             ) : error ? (
//                 <p>{error.message}</p>
//             ) : (
//                 <ChatEngine
//                     height='100vh'
//                     projectID='50859311-2fa3-4a32-bd97-b6d0c9fc3476'

//                     userName="nomashi"
//                     userSecret="nomashi123@"
//                     renderChatFeed={(chatAppProps) => (
//                         <ChatFeed {...chatAppProps} messages={messages} />
//                     )}
//                     renderChatForm={(chatAppProps) => (
//                         <form onSubmit={handleSubmit}>
//                             <input
//                                 type="text"
//                                 value={message}
//                                 onChange={handleChange}
//                                 placeholder="Send a message..."
//                             />
//                             <button type="submit">Send</button>
//                         </form>
//                     )}
//                 />
//             )}
//         </div>
//     );
              

//           }
// export default AdminChatPage;
import { ChatEngine, sendMessage } from 'react-chat-engine';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useAuth } from '../contexts/AuthContext';

function AdminChatPage() {
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
                "User-Name": "nomashi",
                "User-Secret": "nomashi123@"
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
                    "User-Name": "nomashi",
                    "User-Secret": "nomashi123@"
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
                    "User-Name": "nomashi",
                    "User-Secret": "nomashi123@"
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
            "User-Name": "nomashi",
            "User-Secret": "nomashi123@"
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
              height="100vh"
              projectID="7f2e3b60-a8b9-4d84-b4e8-2add86ea6b05"
              userName="nomashi" // Change to your admin username
              userSecret="nomashi123@" // Change to your admin user secret
              onConnect={() => {
                const chatID = chatData[0].id;
                const aliceID = chatData[0].people.find((person) => person.person.username !== 'admin').person.username;
                setMessages((prevMessages) => [...prevMessages, ...chatData[0].recent_messages]);
              }}
              renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} messages={messages} />}
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
export default AdminChatPage;
