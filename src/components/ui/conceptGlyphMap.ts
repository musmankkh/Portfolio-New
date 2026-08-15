import type { ReactElement, SVGProps } from "react";
import {
  AmplifyGlyph,
  ApiGlyph,
  BucketGlyph,
  ChatGlyph,
  EtlGlyph,
  EventGlyph,
  GatewayGlyph,
  LambdaGlyph,
  PipelineGlyph,
  ProcessGlyph,
  PromptGlyph,
  RagGlyph,
  ServerGlyph,
  SocketGlyph,
  SparkGlyph,
  SqlGlyph,
  StepsGlyph,
  StoreGlyph,
} from "./conceptGlyphs";

/** Skill label -> glyph, for everything simple-icons can't supply. */
export const conceptGlyphs: Record<string, (props: SVGProps<SVGSVGElement>) => ReactElement> = {
  // Data engineering & backend
  SQL: SqlGlyph,
  APIs: ApiGlyph,
  "ETL / ELT": EtlGlyph,
  "Data Pipelines": PipelineGlyph,
  "Data Processing": ProcessGlyph,
  "Backend Services": ServerGlyph,

  // Cloud & serverless
  "AWS Lambda": LambdaGlyph,
  "API Gateway": GatewayGlyph,
  S3: BucketGlyph,
  "AWS S3": BucketGlyph,
  "Step Functions": StepsGlyph,
  DynamoDB: SqlGlyph,
  EventBridge: EventGlyph,
  "AWS Amplify": AmplifyGlyph,

  // AI & automation
  "OpenAI APIs": SparkGlyph,
  "Vector Search / RAG": RagGlyph,
  "Prompt Engineering": PromptGlyph,

  // Frontend & integrations
  Zustand: StoreGlyph,
  Slack: ChatGlyph,
  "REST APIs": SocketGlyph,
  WebSockets: SocketGlyph,
};
