import { createFileRoute } from "@tanstack/react-router";

import { ArticlePage } from "@/components/ArticlePage";
import { articleHead, getArticle } from "@/lib/articles";

const slug = "architecture-maquette-guide";

export const Route = createFileRoute("/resources/architecture-maquette-guide")({
  head: () => articleHead(slug),
  component: () => <ArticlePage article={getArticle(slug)} />,
});
