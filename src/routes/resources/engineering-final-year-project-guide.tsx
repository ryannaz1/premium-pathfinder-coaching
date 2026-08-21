import { createFileRoute } from "@tanstack/react-router";

import { ArticlePage } from "@/components/ArticlePage";
import { articleHead, getArticle } from "@/lib/articles";

const slug = "engineering-final-year-project-guide";

export const Route = createFileRoute("/resources/engineering-final-year-project-guide")({
  head: () => articleHead(slug),
  component: () => <ArticlePage article={getArticle(slug)} />,
});
