import type { SVGProps } from "react";

/** Minimal brand marks, rendered in the current text color (no brand colors) to stay inside the one-accent system. */

export function LinkedInIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.03-1.85-3.03-1.86 0-2.15 1.45-2.15 2.94v5.66H9.35V9h3.41v1.56h.05c.47-.9 1.63-1.85 3.36-1.85 3.6 0 4.26 2.37 4.26 5.45zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12M7.12 20.45H3.56V9h3.56z" />
    </svg>
  );
}

export function InstagramIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="12" cy="12" r="4.2" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="17.4" cy="6.6" r="1.15" fill="currentColor" />
    </svg>
  );
}

export function GithubIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M12 2.2a9.8 9.8 0 0 0-3.1 19.1c.49.09.67-.21.67-.47v-1.85c-2.73.59-3.3-1.17-3.3-1.17-.45-1.13-1.1-1.44-1.1-1.44-.9-.61.07-.6.07-.6 1 .07 1.52 1.02 1.52 1.02.88 1.52 2.32 1.08 2.88.82.09-.64.35-1.08.63-1.33-2.18-.25-4.48-1.09-4.48-4.85 0-1.07.38-1.95 1.01-2.63-.1-.25-.44-1.25.1-2.6 0 0 .83-.26 2.72 1a9.4 9.4 0 0 1 4.96 0c1.89-1.28 2.72-1 2.72-1 .54 1.35.2 2.35.1 2.6.63.68 1.01 1.56 1.01 2.63 0 3.77-2.3 4.6-4.49 4.84.36.31.68.92.68 1.85v2.74c0 .26.18.57.68.47A9.8 9.8 0 0 0 12 2.2" />
    </svg>
  );
}

/** Focus-area glyphs: geometric line marks that echo the PipelineDiagram's node/rule language. */

export function DataIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <g stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
        <ellipse cx="12" cy="6" rx="7" ry="3" />
        <path d="M5 6v12c0 1.66 3.13 3 7 3s7-1.34 7-3V6" />
        <path d="M5 12c0 1.66 3.13 3 7 3s7-1.34 7-3" />
      </g>
    </svg>
  );
}

export function AiIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <g stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
        <path d="M6.4 7.2 10 10.4M17.6 8.6 13.9 10.8M15 17.4 13 14.4" />
        <circle cx="12" cy="12" r="2.6" />
        <circle cx="5" cy="6" r="1.7" />
        <circle cx="19" cy="7.5" r="1.7" />
        <circle cx="15.6" cy="19" r="1.7" />
      </g>
    </svg>
  );
}

export function AutomationIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <g stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20 12a8 8 0 0 1-13.6 5.7" />
        <path d="M4 12a8 8 0 0 1 13.6-5.7" />
        <path d="M17.4 3v3.6h-3.6" />
        <path d="M6.6 21v-3.6h3.6" />
      </g>
    </svg>
  );
}

export function CloudIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <g stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17.4 16.5H7a4 4 0 0 1-.6-7.95 5.5 5.5 0 0 1 10.7-1.1 3.8 3.8 0 0 1 .3 9.05Z" />
        <path d="M12 16.5v3.5M8.5 20h7" />
      </g>
    </svg>
  );
}

export function AppIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <g stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="4" width="18" height="16" rx="2.5" />
        <path d="M3 9h18M7.5 6.5h.01M10 6.5h.01" />
        <path d="M9 13.5 7 15.5l2 2M15 13.5l2 2-2 2" />
      </g>
    </svg>
  );
}

export function WhatsAppIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M12.03 2.5c-5.26 0-9.53 4.27-9.53 9.53 0 1.68.44 3.31 1.28 4.75L2.5 21.5l4.85-1.27a9.5 9.5 0 0 0 4.68 1.23h.01c5.26 0 9.53-4.27 9.53-9.53s-4.27-9.43-9.54-9.43m0 17.44h-.01a7.9 7.9 0 0 1-4.03-1.1l-.29-.17-3 .79.8-2.92-.19-.3a7.86 7.86 0 0 1-1.21-4.21c0-4.35 3.55-7.9 7.92-7.9a7.86 7.86 0 0 1 7.9 7.91c0 4.36-3.55 7.9-7.9 7.9m4.33-5.92c-.24-.12-1.41-.7-1.63-.77-.22-.08-.38-.12-.54.12s-.62.77-.76.93-.28.18-.51.06a6.44 6.44 0 0 1-1.9-1.17 7.1 7.1 0 0 1-1.31-1.63c-.14-.24-.02-.36.1-.48.11-.11.24-.28.36-.42.12-.14.16-.24.24-.4.08-.16.04-.3-.02-.42s-.54-1.3-.74-1.78c-.19-.46-.39-.4-.54-.41h-.46c-.16 0-.42.06-.64.3-.22.24-.84.82-.84 2s.86 2.32.98 2.48c.12.16 1.7 2.6 4.12 3.64.58.25 1.03.4 1.38.51.58.18 1.11.16 1.53.1.47-.07 1.41-.58 1.61-1.14.2-.56.2-1.04.14-1.14-.06-.1-.22-.16-.46-.28" />
    </svg>
  );
}
