import { ParsedContent } from "@nuxt/content/dist/runtime/types";
import type { MarkdownParsedContent } from "@nuxt/content/dist/runtime/types";

export interface Articles extends ParsedContent {
  description: string;
  category?: string;
  created?: string;
}

export interface Article extends MarkdownParsedContent {
  thumbnail?: string;
}
