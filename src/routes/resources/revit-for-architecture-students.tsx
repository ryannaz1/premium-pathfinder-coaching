import { createFileRoute } from "@tanstack/react-router";

import { ArticlePage } from "@/components/ArticlePage";
import { articleHead, getArticle } from "@/lib/articles";

const slug = "revit-for-architecture-students";

export const Route = createFileRoute("/resources/revit-for-architecture-students")({
  head: () => articleHead(slug),
  component: () => <ArticlePage article={getArticle(slug)} />,
});
