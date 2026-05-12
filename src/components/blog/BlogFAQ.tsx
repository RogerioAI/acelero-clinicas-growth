import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

interface Props {
  items: { question: string; answer: string }[];
}

export const BlogFAQ = ({ items }: Props) => {
  if (!items || items.length === 0) return null;
  return (
    <section className="mt-16" aria-labelledby="faq">
      <h2 id="faq" className="scroll-mt-28 text-3xl md:text-4xl font-bold mb-6 text-foreground border-l-4 border-cyan pl-4">
        Perguntas frequentes
      </h2>
      <Accordion type="single" collapsible className="bg-muted/30 rounded-2xl px-6 border border-border">
        {items.map((it, i) => (
          <AccordionItem key={i} value={`item-${i}`} className="border-border">
            <AccordionTrigger className="text-left text-base md:text-lg font-semibold hover:text-cyan">
              {it.question}
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground leading-relaxed text-base">
              {it.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
};
