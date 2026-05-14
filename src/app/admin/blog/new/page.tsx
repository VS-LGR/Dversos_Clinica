import type { Metadata } from "next";
import BlogPostForm from "@/components/admin/BlogPostForm";

export const metadata: Metadata = {
  title: "Novo artigo",
};

export default function AdminBlogNewPage() {
  return (
    <div>
      <h1 className="text-2xl font-bold text-primary mb-6">Novo artigo</h1>
      <BlogPostForm mode="new" />
    </div>
  );
}
