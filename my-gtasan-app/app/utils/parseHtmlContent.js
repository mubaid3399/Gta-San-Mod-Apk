import Link from 'next/link';

/**
 * Parse HTML-like content and convert to React components
 * Handles: <a href="">, <strong>, <br/>, emojis
 */
export function parseHtmlContent(content, localePrefix = '') {
  if (!content || typeof content !== 'string') return content;

  const parts = [];
  let currentIndex = 0;
  let keyCounter = 0;

  // Regex patterns for different HTML elements
  const patterns = [
    {
      regex: /<a\s+href="([^"]+)">([^<]+)<\/a>/g,
      render: (match, href, text) => (
        <Link
          key={`link-${keyCounter++}`}
          href={href.startsWith('/') ? `${localePrefix}${href}` : href}
          className="text-[#00ff87] hover:text-[#00a2ff] underline transition-colors"
        >
          {text}
        </Link>
      )
    },
    {
      regex: /<strong>([^<]+)<\/strong>/g,
      render: (match, text) => (
        <strong key={`strong-${keyCounter++}`} className="font-bold text-white">
          {text}
        </strong>
      )
    },
    {
      regex: /<br\s*\/?>/g,
      render: () => <br key={`br-${keyCounter++}`} />
    }
  ];

  // Find all matches
  const allMatches = [];

  patterns.forEach(({ regex, render }) => {
    const tempRegex = new RegExp(regex.source, regex.flags);
    let match;

    while ((match = tempRegex.exec(content)) !== null) {
      allMatches.push({
        index: match.index,
        length: match[0].length,
        fullMatch: match[0],
        groups: match.slice(1),
        render
      });
    }
  });

  // Sort matches by index
  allMatches.sort((a, b) => a.index - b.index);

  // Build React elements
  allMatches.forEach((match) => {
    // Add text before this match
    if (match.index > currentIndex) {
      const textBefore = content.substring(currentIndex, match.index);
      if (textBefore) {
        parts.push(<span key={`text-${keyCounter++}`}>{textBefore}</span>);
      }
    }

    // Add the rendered element
    parts.push(match.render(match.fullMatch, ...match.groups));

    currentIndex = match.index + match.length;
  });

  // Add remaining text
  if (currentIndex < content.length) {
    const remainingText = content.substring(currentIndex);
    if (remainingText) {
      parts.push(<span key={`text-${keyCounter++}`}>{remainingText}</span>);
    }
  }

  // If no matches found, return original content
  return parts.length > 0 ? <>{parts}</> : content;
}

/**
 * Parse content that might contain HTML, handling line breaks
 */
export function parseContentWithLineBreaks(content, localePrefix = '') {
  if (!content || typeof content !== 'string') return content;

  // Split by actual line breaks first
  const lines = content.split('\n');

  return lines.map((line, index) => (
    <span key={index}>
      {parseHtmlContent(line, localePrefix)}
      {index < lines.length - 1 && <br />}
    </span>
  ));
}
