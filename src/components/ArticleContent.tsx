import { Fragment, type ReactNode } from 'react';
import { Link } from 'react-router-dom';

// A small, safe renderer for our plain-text articles. Raw HTML is never executed.
export function inlineContent(text: string): ReactNode[] {
  return text.split(/(\[[^\]]+\]\([^)]+\)|\*\*[^*]+\*\*)/g).map((part, index) => {
    const link = part.match(/^\[([^\]]+)\]\(([^)]+)\)$/);
    if (link) {
      const [, label, href] = link;
      if (href.startsWith('/') && !href.startsWith('//')) return <Link key={index} to={href} className="text-primary underline underline-offset-2">{label}</Link>;
      if (/^https?:\/\//.test(href)) return <a key={index} href={href} target="_blank" rel="noopener noreferrer" className="text-primary underline underline-offset-2">{label}</a>;
      return <Fragment key={index}>{label}</Fragment>;
    }
    if (part.startsWith('**') && part.endsWith('**')) return <strong key={index}>{part.slice(2, -2)}</strong>;
    return part;
  });
}

export function renderArticleContent(content: string) {
  const lines = content.split(/\r?\n/);
  const elements: ReactNode[] = [];
  const headings: { id: string; text: string; level: 2 | 3 }[] = [];
  const ids = new Map<string, number>();
  let index = 0;
  const cells = (line: string) => line.trim().replace(/^\||\|$/g, '').split('|').map(cell => cell.trim());
  while (index < lines.length) {
    const line = lines[index].trim();
    if (!line) { index++; continue; }
    const heading = line.match(/^(#{2,3})\s+(.+)$/);
    if (heading) {
      const text = heading[2];
      const base = text.toLowerCase().replace(/[^a-z0-9\s-]/g, '').trim().replace(/\s+/g, '-') || 'section';
      const count = (ids.get(base) ?? 0) + 1;
      ids.set(base, count);
      const id = count === 1 ? base : `${base}-${count}`;
      const level = heading[1].length as 2 | 3;
      headings.push({ id, text, level });
      const Tag = level === 2 ? 'h2' : 'h3';
      elements.push(<Tag key={index} id={id} className="font-poppins text-xl font-semibold text-foreground mt-6 mb-3 scroll-mt-24"><a href={`#${id}`}>{inlineContent(text)}</a></Tag>);
      index++; continue;
    }
    if (line.startsWith('|') && /^\|?[\s:|-]+\|?$/.test(lines[index + 1]?.trim() ?? '')) {
      const header = cells(line);
      index += 2;
      const rows: string[][] = [];
      while (index < lines.length && lines[index].trim().startsWith('|')) rows.push(cells(lines[index++]));
      elements.push(<div key={`table-${index}`} className="max-w-full overflow-x-auto rounded-lg border"><table className="w-full text-sm text-left"><thead className="bg-muted"><tr>{header.map((cell, i) => <th key={i} scope="col" className="p-3 font-semibold">{inlineContent(cell)}</th>)}</tr></thead><tbody>{rows.map((row, i) => <tr key={i} className="border-t">{row.map((cell, j) => <td key={j} className="p-3 align-top">{inlineContent(cell)}</td>)}</tr>)}</tbody></table></div>);
      continue;
    }
    if (/^(?:- |\d+\.\s)/.test(line)) {
      const ordered = /^\d+\./.test(line);
      const pattern = ordered ? /^\d+\.\s/ : /^- /;
      const items: string[] = [];
      while (index < lines.length && pattern.test(lines[index].trim())) items.push(lines[index++].trim().replace(pattern, ''));
      const Tag = ordered ? 'ol' : 'ul';
      elements.push(<Tag key={`list-${index}`} className={`pl-6 space-y-2 ${ordered ? 'list-decimal' : 'list-disc'}`}>{items.map((item, i) => <li key={i}>{inlineContent(item)}</li>)}</Tag>);
      continue;
    }
    elements.push(<p key={index} className="font-lato text-base text-muted-foreground leading-relaxed">{inlineContent(line.replace(/^#\s+/, ''))}</p>);
    index++;
  }
  return { elements, headings };
}
