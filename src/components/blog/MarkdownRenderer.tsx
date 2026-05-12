import { slugify } from "@/lib/dateUtils";

interface Props {
  content: string;
}

const inline = (text: string): string => {
  // bold
  let out = text.replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>');
  // italic (avoid touching **)
  out = out.replace(/(^|[^*])\*([^*\n]+)\*/g, '$1<em>$2</em>');
  // links [text](url)
  out = out.replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" target="_blank" rel="noopener noreferrer">$1</a>');
  return out;
};

const startsWithHtmlBlock = (line: string): boolean => {
  return /^<(div|img|a|p|figure|section|iframe|video|ul|ol|table|button)\b/i.test(line.trim());
};

export const renderMarkdown = (md: string): string => {
  const lines = md.split('\n');
  const out: string[] = [];
  let i = 0;
  let inUl = false;
  let inBlockquote = false;
  const closeUl = () => { if (inUl) { out.push('</ul>'); inUl = false; } };
  const closeBq = () => { if (inBlockquote) { out.push('</blockquote>'); inBlockquote = false; } };

  while (i < lines.length) {
    const raw = lines[i];
    const line = raw.trimEnd();
    const trimmed = line.trim();

    // blank line
    if (!trimmed) {
      closeUl();
      closeBq();
      i++;
      continue;
    }

    // hr
    if (/^---+$/.test(trimmed)) {
      closeUl(); closeBq();
      out.push('<hr class="my-12 border-t border-border" />');
      i++;
      continue;
    }

    // headings
    const h = trimmed.match(/^(#{2,4})\s+(.+)$/);
    if (h) {
      closeUl(); closeBq();
      const level = h[1].length;
      const text = inline(h[2]);
      const id = slugify(h[2]);
      if (level === 2) {
        out.push(`<h2 id="${id}" class="scroll-mt-28 text-3xl md:text-4xl font-bold mt-14 mb-6 text-foreground border-l-4 border-cyan pl-4 leading-tight">${text}</h2>`);
      } else if (level === 3) {
        out.push(`<h3 id="${id}" class="scroll-mt-28 text-2xl font-bold mt-10 mb-4 text-cyan leading-tight">${text}</h3>`);
      } else {
        out.push(`<h4 id="${id}" class="scroll-mt-28 text-xl font-bold mt-6 mb-3 text-foreground">${text}</h4>`);
      }
      i++;
      continue;
    }

    // table
    if (trimmed.startsWith('|') && trimmed.endsWith('|')) {
      closeUl(); closeBq();
      const tableLines: string[] = [];
      while (i < lines.length && lines[i].trim().startsWith('|')) {
        tableLines.push(lines[i].trim());
        i++;
      }
      let html = '<div class="overflow-x-auto my-8"><table class="min-w-full divide-y divide-border">';
      tableLines.forEach((row, idx) => {
        const cells = row.split('|').slice(1, -1).map(c => c.trim());
        if (idx === 1 && cells.every(c => /^:?-+:?$/.test(c))) return;
        if (idx === 0) {
          html += '<thead><tr>' + cells.map(c => `<th class="px-4 py-3 bg-muted text-left text-sm font-semibold">${inline(c)}</th>`).join('') + '</tr></thead><tbody>';
        } else {
          html += '<tr>' + cells.map(c => `<td class="px-4 py-3 border-t border-border text-muted-foreground">${inline(c)}</td>`).join('') + '</tr>';
        }
      });
      html += '</tbody></table></div>';
      out.push(html);
      continue;
    }

    // blockquote
    if (trimmed.startsWith('>')) {
      if (!inBlockquote) {
        closeUl();
        out.push('<blockquote class="border-l-4 border-cyan bg-muted/30 py-4 px-6 rounded-r-lg my-6 italic text-foreground">');
        inBlockquote = true;
      }
      out.push(`<p class="my-2">${inline(trimmed.replace(/^>\s?/, ''))}</p>`);
      i++;
      continue;
    } else {
      closeBq();
    }

    // list item
    if (/^[-*]\s+/.test(trimmed)) {
      if (!inUl) {
        out.push('<ul class="list-disc pl-6 my-6 space-y-2 text-muted-foreground">');
        inUl = true;
      }
      out.push(`<li class="leading-relaxed">${inline(trimmed.replace(/^[-*]\s+/, ''))}</li>`);
      i++;
      continue;
    } else {
      closeUl();
    }

    // raw HTML block — pass through
    if (startsWithHtmlBlock(trimmed)) {
      out.push(raw);
      i++;
      continue;
    }

    // paragraph (collect consecutive non-empty non-special lines)
    const buf: string[] = [trimmed];
    i++;
    while (i < lines.length) {
      const nxt = lines[i].trim();
      if (!nxt) break;
      if (/^(#{2,4})\s/.test(nxt) || nxt.startsWith('|') || nxt.startsWith('>') || /^[-*]\s/.test(nxt) || /^---+$/.test(nxt) || startsWithHtmlBlock(nxt)) break;
      buf.push(nxt);
      i++;
    }
    out.push(`<p class="text-muted-foreground leading-relaxed my-5 text-base md:text-lg">${inline(buf.join(' '))}</p>`);
  }

  closeUl();
  closeBq();
  return out.join('\n');
};

export const MarkdownRenderer = ({ content }: Props) => (
  <div
    className="prose-headings:font-bold max-w-none prose-a:text-cyan prose-strong:text-foreground"
    dangerouslySetInnerHTML={{ __html: renderMarkdown(content) }}
  />
);

export const extractHeadings = (md: string): { id: string; text: string; level: 2 | 3 }[] => {
  const headings: { id: string; text: string; level: 2 | 3 }[] = [];
  md.split('\n').forEach(line => {
    const m = line.trim().match(/^(##|###)\s+(.+)$/);
    if (m) {
      const level = (m[1].length as 2 | 3);
      const text = m[2].replace(/\*\*/g, '');
      headings.push({ id: slugify(text), text, level });
    }
  });
  return headings;
};
