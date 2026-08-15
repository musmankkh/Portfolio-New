import type { SVGProps } from "react";

/**
 * Line glyphs for skills that have no brand mark — AWS services, generic
 * concepts (ETL, RAG, prompting), and marks that simple-icons dropped for
 * trademark reasons (AWS, OpenAI, Slack). Drawn in the same 24x24 / 1.5-stroke
 * / currentColor language as ui/icons.tsx so they sit beside the real brand
 * paths without looking borrowed.
 */

function Line({ children, ...props }: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <g
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        {children}
      </g>
    </svg>
  );
}

/* ---- Data engineering ---- */

export const SqlGlyph = (p: SVGProps<SVGSVGElement>) => (
  <Line {...p}>
    <ellipse cx="12" cy="5.5" rx="7" ry="2.8" />
    <path d="M5 5.5v13c0 1.55 3.13 2.8 7 2.8s7-1.25 7-2.8v-13" />
    <path d="M5 12c0 1.55 3.13 2.8 7 2.8s7-1.25 7-2.8" />
  </Line>
);

export const ApiGlyph = (p: SVGProps<SVGSVGElement>) => (
  <Line {...p}>
    <path d="M9 3v5M15 3v5" />
    <rect x="6" y="8" width="12" height="6" rx="2" />
    <path d="M12 14v3.5a3.5 3.5 0 0 1-3.5 3.5H7" />
  </Line>
);

export const EtlGlyph = (p: SVGProps<SVGSVGElement>) => (
  <Line {...p}>
    <path d="M3 7h13l-3-3M21 17H8l3 3" />
    <circle cx="19" cy="7" r="2" />
    <circle cx="5" cy="17" r="2" />
  </Line>
);

export const PipelineGlyph = (p: SVGProps<SVGSVGElement>) => (
  <Line {...p}>
    <circle cx="4.5" cy="12" r="2.2" />
    <circle cx="12" cy="12" r="2.2" />
    <circle cx="19.5" cy="12" r="2.2" />
    <path d="M6.7 12h3.1M14.2 12h3.1" />
  </Line>
);

export const ProcessGlyph = (p: SVGProps<SVGSVGElement>) => (
  <Line {...p}>
    <rect x="4" y="4" width="16" height="16" rx="3" />
    <path d="M9 9h6v6H9z" />
    <path d="M9 2v2M15 2v2M9 20v2M15 20v2M2 9h2M2 15h2M20 9h2M20 15h2" />
  </Line>
);

export const ServerGlyph = (p: SVGProps<SVGSVGElement>) => (
  <Line {...p}>
    <rect x="3" y="4" width="18" height="6" rx="2" />
    <rect x="3" y="14" width="18" height="6" rx="2" />
    <path d="M7 7h.01M7 17h.01" />
  </Line>
);

/* ---- AWS / cloud services ---- */

export const LambdaGlyph = (p: SVGProps<SVGSVGElement>) => (
  <Line {...p}>
    <path d="M4 20 11.2 4h2.4L21 20" />
    <path d="M9.4 12.4 4.6 20" />
  </Line>
);

export const GatewayGlyph = (p: SVGProps<SVGSVGElement>) => (
  <Line {...p}>
    <path d="M4 20v-7a8 8 0 0 1 16 0v7" />
    <path d="M2 20h20" />
    <path d="M9 20v-6.5a3 3 0 0 1 6 0V20" />
  </Line>
);

export const BucketGlyph = (p: SVGProps<SVGSVGElement>) => (
  <Line {...p}>
    <path d="M4 6h16l-1.6 13.2a2 2 0 0 1-2 1.8H7.6a2 2 0 0 1-2-1.8Z" />
    <ellipse cx="12" cy="6" rx="8" ry="2.6" />
  </Line>
);

export const StepsGlyph = (p: SVGProps<SVGSVGElement>) => (
  <Line {...p}>
    <path d="M3 20h5v-5h5.5v-5H19V5" />
    <circle cx="19" cy="5" r="1.8" />
    <circle cx="3" cy="20" r="1.8" />
  </Line>
);

export const EventGlyph = (p: SVGProps<SVGSVGElement>) => (
  <Line {...p}>
    <path d="M13 2 5.5 13H11l-1 9 8-11.5h-5.4z" />
  </Line>
);

export const AmplifyGlyph = (p: SVGProps<SVGSVGElement>) => (
  <Line {...p}>
    <path d="M8.6 4h3.6l7.2 12.6M4 20h11.4" />
    <path d="m9.2 12.4-4.4 7.6" />
  </Line>
);

/* ---- AI ---- */

export const SparkGlyph = (p: SVGProps<SVGSVGElement>) => (
  <Line {...p}>
    <path d="M12 3.2 13.9 9l5.8 1.9-5.8 1.9L12 18.6l-1.9-5.8L4.3 10.9 10.1 9z" />
    <path d="M18.6 3v2.6M19.9 4.3h-2.6" />
  </Line>
);

export const RagGlyph = (p: SVGProps<SVGSVGElement>) => (
  <Line {...p}>
    <circle cx="10.5" cy="10.5" r="6.2" />
    <path d="m15.2 15.2 5 5" />
    <path d="M8 10.5h5M10.5 8v5" />
  </Line>
);

export const PromptGlyph = (p: SVGProps<SVGSVGElement>) => (
  <Line {...p}>
    <rect x="2.5" y="4.5" width="19" height="15" rx="2.5" />
    <path d="m6.5 10 2.5 2-2.5 2M12 14h5" />
  </Line>
);

/* ---- Frontend / integrations ---- */

export const StoreGlyph = (p: SVGProps<SVGSVGElement>) => (
  <Line {...p}>
    <path d="m12 3 8.5 4.5L12 12 3.5 7.5z" />
    <path d="m3.5 12 8.5 4.5 8.5-4.5" />
    <path d="m3.5 16.5 8.5 4.5 8.5-4.5" />
  </Line>
);

export const ChatGlyph = (p: SVGProps<SVGSVGElement>) => (
  <Line {...p}>
    <path d="M9.5 3v18M14.5 3v18" />
    <path d="M3 9.5h18M3 14.5h18" />
  </Line>
);

export const SocketGlyph = (p: SVGProps<SVGSVGElement>) => (
  <Line {...p}>
    <path d="M3 8.5h13l-3-3M21 15.5H8l3 3" />
    <circle cx="19.5" cy="8.5" r="1.6" />
    <circle cx="4.5" cy="15.5" r="1.6" />
  </Line>
);

/* The label -> glyph registry lives in ./conceptGlyphMap so this file exports
   components only (keeps React Fast Refresh working). */
