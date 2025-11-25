import { MessageCircle } from "lucide-react";
import { getWhatsAppLink } from "@/config/contact";

export const WhatsAppFloat = () => {
  const handleClick = () => {
    window.open(getWhatsAppLink(), '_blank');
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 group">
      <button
        onClick={handleClick}
        className="relative flex items-center justify-center w-16 h-16 rounded-full shadow-lg transition-all duration-300 hover:scale-110 hover:shadow-2xl"
        style={{ backgroundColor: '#25D366' }}
        aria-label="Fale conosco no WhatsApp"
      >
        {/* Pulse animation ring */}
        <span className="absolute inset-0 rounded-full animate-ping opacity-30" style={{ backgroundColor: '#25D366' }} />
        
        {/* Icon */}
        <MessageCircle className="w-8 h-8 text-white relative z-10" />
        
        {/* Tooltip */}
        <span className="absolute right-full mr-3 px-3 py-2 bg-gray-900 text-white text-sm rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
          Fale conosco
        </span>
      </button>
    </div>
  );
};
