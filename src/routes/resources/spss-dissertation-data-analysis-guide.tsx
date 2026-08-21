import { createFileRoute } from "@tanstack/react-router";

import { ArticlePage } from "@/components/ArticlePage";
import { articleHead, getArticle } from "@/lib/articles";

const slug = "spss-dissertation-data-analysis-guide";

export const Route = createFileRoute("/resources/spss-dissertation-data-analysis-guide")({
  head: () => articleHead(slug),
  component: () => <ArticlePage article={getArticle(slug)} />,
});
