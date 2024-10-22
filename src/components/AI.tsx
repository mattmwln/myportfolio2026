import { useState, useEffect, useRef } from "react";
import { AiOutlineMessage, AiOutlineClose } from "react-icons/ai";

const ChatAiButton = ({ initialResponse = "", initialRequestContent = "" }) => {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [response, setResponse] = useState(initialResponse);
  const [requestContent, setRequestContent] = useState(initialRequestContent);
  const [isLoading, setIsLoading] = useState(false);
  const [showNotification, setShowNotification] = useState(false);

  const responseRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const showTimer = setTimeout(() => {
      setShowNotification(true);
    }, 5000);

    const hideTimer = setTimeout(() => {
      setShowNotification(false);
    }, 10000);

    return () => {
      clearTimeout(showTimer);
      clearTimeout(hideTimer);
    };
  }, []);

  useEffect(() => {
    if (responseRef.current) {
      responseRef.current.scrollTop = responseRef.current.scrollHeight;
    }
  }, [response]);

  const toggleChat = () => {
    setIsChatOpen(!isChatOpen);
  };

  const handleMessageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMessage(e.target.value);
  };

  const handleSendMessage = async () => {
    if (message.trim()) {
      setRequestContent(message);
      setIsLoading(true);
      try {
        const response = await fetch(
          "https://flask-ai-three.vercel.app/v1/chat",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              content: message,
            }),
          }
        );
        const data = await response.json();
        display(data.response);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
      setIsLoading(false);
      setMessage("");
    }
  };

  const display = async (text: string) => {
    for (let char of text) {
      setResponse((prevResponse) => prevResponse + char);
      await new Promise((resolve) => setTimeout(resolve, 3));
    }
  };

  return (
    <>
      <div
        className={`fixed bottom-28 left-10 ${isChatOpen ? "z-50" : "-z-50"} flex flex-col items-start`}
      >
        <div
          className={`transition-transform transform ${
            isChatOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          } bg-white dark:bg-gray-900 shadow-lg rounded-lg p-4 w-64 h-80 mb-4 flex flex-col justify-between relative`}
          style={{
            transition: "opacity 0.3s ease, transform 0.3s ease",
            visibility: isChatOpen ? "visible" : "hidden",
          }}
        >
          <div>
            <div className="flex justify-between items-center mb-4">
              <h3 className="font-bold">Chat with mimin</h3>
              <button
                onClick={toggleChat}
                className="focus:outline-none"
                aria-label="Close chat"
              >
                <AiOutlineClose size={20} />
              </button>
            </div>
            <div
              ref={responseRef}
              className="h-full overflow-y-auto flex-grow max-h-64"
            >
              <div className="text-right mb-2 text-gray-500">
                {requestContent}
              </div>
              <div className="text-left mb-2">
                {isLoading ? <span>Loading...</span> : response}
              </div>
            </div>
          </div>
          <div className="flex items-center mt-2">
            <input
              type="text"
              value={message}
              onChange={handleMessageChange}
              className="w-full p-2 border border-gray-300 rounded-l-lg focus:outline-none dark:bg-gray-800 dark:border-gray-700 dark:text-white"
              placeholder="Type a message..."
            />
            <button
              onClick={handleSendMessage}
              className="text-white p-2 rounded-r-lg focus:outline-none"
              style={{ backgroundColor: '#092a25' }}
            >
              Send
            </button>
            <button
              onClick={handleSendMessage}
              className="text-white p-2 rounded-r-lg focus:outline-none"
              style={{ backgroundColor: '#092a25' }}
            >
              Send
            </button>
          </div>
        </div>
      </div>
      {showNotification && (
        <div className="fixed bottom-20 left-7 z-50 bg-gray-800 text-white p-3 rounded-md shadow-lg">
          Let&rsquo;s try AI
        </div>
      )}
      <div className="fixed bottom-7 hover:scale-110 left-7 z-50">
        <button
          onClick={toggleChat}
          className="text-white p-3 rounded-full shadow-lg focus:outline-none"
          style={{ backgroundColor: '#092a25' }}
          aria-label="Open chat"
        >
          <AiOutlineMessage size={24} />
        </button>
      </div>
    </>
  );
};

export default ChatAiButton;
