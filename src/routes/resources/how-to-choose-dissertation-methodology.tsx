import { createFileRoute } from "@tanstack/react-router";

import { ArticlePage } from "@/components/ArticlePage";
import { articleHead, getArticle } from "@/lib/articles";

const slug = "how-to-choose-dissertation-methodology";

export const Route = createFileRoute("/resources/how-to-choose-dissertation-methodology")({
  head: () => articleHead(slug),
  component: () => <ArticlePage article={getArticle(slug)} />,
});
