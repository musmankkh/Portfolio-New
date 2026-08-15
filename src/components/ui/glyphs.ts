import type { ReactElement, SVGProps } from "react";
import type { GlyphKey } from "../../data/types";
import { AiIcon, AppIcon, AutomationIcon, CloudIcon, DataIcon } from "./icons";

/** Single lookup shared by FocusAreas and Skills so glyph choices stay data-driven. */
export const glyphs: Record<GlyphKey, (props: SVGProps<SVGSVGElement>) => ReactElement> = {
  data: DataIcon,
  ai: AiIcon,
  automation: AutomationIcon,
  cloud: CloudIcon,
  app: AppIcon,
};
