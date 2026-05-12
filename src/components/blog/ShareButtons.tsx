import { Linkedin, Link2, Check } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

interface Props {
  url: string;
  title: string;
  className?: string;
}

const WhatsAppIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M17.5 14.4c-.3-.2-1.7-.8-2-.9-.3-.1-.5-.2-.7.2-.2.3-.8.9-1 1.1-.2.2-.4.2-.7.1-.3-.2-1.3-.5-2.4-1.5-.9-.8-1.5-1.8-1.7-2.1-.2-.3 0-.5.1-.6.1-.1.3-.4.4-.5.1-.2.2-.3.3-.5.1-.2 0-.4 0-.5-.1-.2-.7-1.6-.9-2.2-.2-.6-.5-.5-.7-.5h-.6c-.2 0-.5.1-.8.4-.3.3-1.1 1.1-1.1 2.6 0 1.5 1.1 3 1.3 3.2.2.2 2.2 3.4 5.4 4.7.8.3 1.4.5 1.8.7.8.2 1.5.2 2 .1.6-.1 1.7-.7 2-1.4.2-.7.2-1.3.2-1.4-.1-.2-.3-.3-.6-.4z M12 2C6.5 2 2 6.5 2 12c0 1.8.5 3.5 1.4 5L2 22l5.2-1.4c1.4.8 3.1 1.2 4.8 1.2 5.5 0 10-4.5 10-10S17.5 2 12 2zm0 18.2c-1.5 0-3-.4-4.3-1.2l-.3-.2-3.1.8.8-3-.2-.3C4.1 14.9 3.7 13.5 3.7 12 3.7 7.4 7.4 3.7 12 3.7s8.3 3.7 8.3 8.3-3.7 8.2-8.3 8.2z" />
  </svg>
);

const XIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M18.244 2H21l-6.5 7.43L22 22h-6.844l-4.78-6.27L4.8 22H2l7-8L2 2h7l4.32 5.71L18.244 2zm-1.2 18h1.62L7.06 4H5.34l11.704 16z"/>
  </svg>
);

export const ShareButtons = ({ url, title, className = "" }: Props) => {
  const [copied, setCopied] = useState(false);
  const { toast } = useToast();
  const enc = encodeURIComponent;

  const links = [
    { label: "WhatsApp", href: `https://wa.me/?text=${enc(`${title} — ${url}`)}`, Icon: WhatsAppIcon, color: "hover:bg-[#25D366]/15 hover:text-[#25D366]" },
    { label: "LinkedIn", href: `https://www.linkedin.com/sharing/share-offsite/?url=${enc(url)}`, Icon: Linkedin, color: "hover:bg-[#0A66C2]/15 hover:text-[#0A66C2]" },
    { label: "X / Twitter", href: `https://twitter.com/intent/tweet?text=${enc(title)}&url=${enc(url)}`, Icon: XIcon, color: "hover:bg-foreground/15" },
  ];

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      toast({ title: "Link copiado", description: "Pronto para compartilhar." });
      setTimeout(() => setCopied(false), 2000);
    } catch {
      toast({ title: "Não foi possível copiar", variant: "destructive" });
    }
  };

  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <span className="text-xs text-muted-foreground font-semibold mr-1">Compartilhar:</span>
      {links.map(({ label, href, Icon, color }) => (
        <a
          key={label}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Compartilhar no ${label}`}
          className={`w-9 h-9 rounded-full bg-muted flex items-center justify-center transition-colors ${color}`}
        >
          <Icon className="w-4 h-4" />
        </a>
      ))}
      <button
        type="button"
        onClick={copy}
        aria-label="Copiar link"
        className="w-9 h-9 rounded-full bg-muted flex items-center justify-center hover:bg-cyan/20 hover:text-cyan transition-colors"
      >
        {copied ? <Check className="w-4 h-4" /> : <Link2 className="w-4 h-4" />}
      </button>
    </div>
  );
};
