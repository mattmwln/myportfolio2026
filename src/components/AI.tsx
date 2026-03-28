import { useState, useEffect, useRef } from "react";
import { AiOutlineMessage, AiOutlineClose } from "react-icons/ai";

const ChatAiButtonPalembang = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [response, setResponse] = useState("");
  const [requestContent, setRequestContent] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [showNotification, setShowNotification] = useState(false);

  const responseRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const showTimer = setTimeout(() => setShowNotification(true), 5000);
    const hideTimer = setTimeout(() => setShowNotification(false), 10000);
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

  const toggleChat = () => setIsChatOpen(!isChatOpen);
  const handleMessageChange = (e: React.ChangeEvent<HTMLInputElement>) => setMessage(e.target.value);

  // Rule-based responses pakai Bahasa Palembang
  const getResponse = (msg: string) => {
    // Chat AI Palembang versi percakapan berulang
const rules = [
  // Salam & sapaan
  { pattern: /halo|hi|hai/i, response: "Halo dek! Apo kabar?" },
  { pattern: /apa kabar/i, response: "Baik dek, alhamdulillah. Apo kabar kamek?" },
  { pattern: /baik|alhamdulillah/i, response: "Mantap dek 😄, lagi ngapain sekarang?" },
  { pattern: /sedih|kurang baik/i, response: "Waduh dek, semangat ya! Pasti lekas baek 😅" },

  // Info diri AI
  { pattern: /nama kamu|siapa nama kamu/i, response: "Kamek namanya Chat AI Palembang 😄" },
  { pattern: /apa hobi kamu/i, response: "Hobi kamek ngobrol sama kamek dek 😆" },
  { pattern: /programming|coding/i, response: "Kamek do suka coding, khususnya React & TypeScript 😎" },
  { pattern: /react/i, response: "React itu framework JavaScript untuk bikin website interaktif 😄" },
  { pattern: /typescript/i, response: "TypeScript itu superset JavaScript yang lebih aman, dek 😁" },

  // Info website
  { pattern: /siapa pembuat website|siapa pembuat web|web ini siapa/i, response: "Website ini dibuat oleh Rahmat Maulana 😎" },
  { pattern: /siapa pembuat chat/i, response: "Chat AI ini dibuat sama Rahmat Maulana 😎" },

  // Aktivitas & tips
  { pattern: /belajar/i, response: "Belajar itu penting dek, jangan malas 😁" },
  { pattern: /ngobrol/i, response: "Siap dek 😄, ayo ngobrol!" },
  { pattern: /makan/i, response: "Kamek ndak bisa makan, tapi kamek do suka ngobrol 😆" },
  { pattern: /cuaca/i, response: "Cuaco hari ini panas dek, jangan lupo minum" },
  { pattern: /jam kerja/i, response: "Jam kerja kito 08:00 - 17:00 dek" },
  { pattern: /alamat/i, response: "Kito berada di Palembang, dek" },
  { pattern: /bantuan|tolong/i, response: "Dek, kamek bisa bantu sebatas tanya jawab aja 😅" },

  // Percakapan berulang
  { pattern: /lagi ngapain/i, response: "Kamek lagi ngobrol sama dek 😄, dek lagi ngapain?" },
  { pattern: /lagi belajar/i, response: "Bagus dek, semangat belajar 😎" },
  { pattern: /halo lagi/i, response: "Halo balik dek 😄, senang ngobrol sama dek" },
  { pattern: /kenapa/i, response: "Hmmm, dek kenapa ya 😅" },
  { pattern: /gimana|bagaimana/i, response: "Gini dek 😄, kamek jelasin ya..." },
  { pattern: /ndak paham/i, response: "Maaf dek, kamek ndak paham 😅" },
  { pattern: /apa lagi/i, response: "Kamek bisa jawab pertanyaanmu dek 😎" },
  { pattern: /terlalu panas/i, response: "Jangan lupo minum dek, tetep semangat 😎" },

  // Terima kasih & balasan ringan
  { pattern: /terima kasih|thanks|thank/i, response: "Sama-sama dek 😁" },
  { pattern: /.*/, response: "Kamek ndak ngerti nih dek 😅, coba tanya yang lain aja" } // fallback
];

    const rule = rules.find(r => r.pattern.test(msg));
    return rule ? rule.response : "Maaf dek, kamek ndak paham pesan itu 😅";
  };

  const handleSendMessage = async () => {
    if (!message.trim()) return;

    setRequestContent(message);
    setIsLoading(true);
    setResponse("");

    const aiResponse = getResponse(message);
    await display(aiResponse);

    setIsLoading(false);
    setMessage("");
  };

  const display = async (text: string) => {
    for (let char of text) {
      setResponse(prev => prev + char);
      await new Promise(resolve => setTimeout(resolve, 10));
    }
  };

  return (
    <>
      {/* Chat Box */}
      <div className={`fixed bottom-28 left-10 ${isChatOpen ? "z-50" : "-z-50"} flex flex-col items-start`}>
        <div
          className={`transition-transform transform ${isChatOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"} bg-white dark:bg-gray-900 shadow-lg rounded-lg p-4 w-64 h-80 mb-4 flex flex-col justify-between relative`}
          style={{ transition: "opacity 0.3s ease, transform 0.3s ease", visibility: isChatOpen ? "visible" : "hidden" }}
        >
          <div>
            <div className="flex justify-between items-center mb-4">
              <h3 className="font-bold">Chat AI Palembang</h3>
              <button onClick={toggleChat} className="focus:outline-none" aria-label="Close chat">
                <AiOutlineClose size={20} />
              </button>
            </div>
            <div ref={responseRef} className="h-full overflow-y-auto flex-grow max-h-64">
              <div className="text-right mb-2 text-gray-500">{requestContent}</div>
              <div className="text-left mb-2">{isLoading ? <span>Typing...</span> : response}</div>
            </div>
          </div>

          <div className="flex items-center mt-2">
            <input
              type="text"
              value={message}
              onChange={handleMessageChange}
              className="w-full p-2 border border-gray-300 rounded-l-lg focus:outline-none dark:bg-gray-800 dark:border-gray-700 dark:text-white"
              placeholder="Tulis pesan dek..."
            />
            <button
              onClick={handleSendMessage}
              className="text-white p-2 rounded-r-lg focus:outline-none"
              style={{ backgroundColor: "#092a25" }}
            >
              Kirim
            </button>
          </div>
        </div>
      </div>

      {/* Notification */}
      {showNotification && (
        <div className="fixed bottom-20 left-7 z-50 bg-gray-800 text-white p-3 rounded-md shadow-lg">
          Cobak ngobrol AI Palembang 😎
        </div>
      )}

      {/* Chat Button */}
      <div className="fixed bottom-7 hover:scale-110 left-7 z-50">
        <button
          onClick={toggleChat}
          className="text-white p-3 rounded-full shadow-lg focus:outline-none"
          style={{ backgroundColor: "#092a25" }}
          aria-label="Open chat"
        >
          <AiOutlineMessage size={24} />
        </button>
      </div>
    </>
  );
};

export default ChatAiButtonPalembang;