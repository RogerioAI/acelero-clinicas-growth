export const CONTACT_CONFIG = {
  whatsappNumber: "5541920048382",
  whatsappLink: "https://wa.me/5541920048382",
  defaultMessage: "Olá! Quero saber mais sobre a mentoria A.C.E.L.E.R.O"
};

// Função helper para gerar link com mensagem personalizada
export const getWhatsAppLink = (message?: string) => {
  const encodedMessage = encodeURIComponent(message || CONTACT_CONFIG.defaultMessage);
  return `${CONTACT_CONFIG.whatsappLink}?text=${encodedMessage}`;
};
