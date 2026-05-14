"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useMemo } from "react";
import { createSupabaseBrowserClient } from "@/lib/supabase/browser";

export default function AdminNav() {
  const pathname = usePathname();
  const router = useRouter();
  const supabase = useMemo(() => createSupabaseBrowserClient(), []);

  const handleSignOut = async () => {
    if (!supabase) return;
    await supabase.auth.signOut();
    router.push("/admin/login");
    router.refresh();
  };

  if (pathname === "/admin/login") {
    return (
      <div className="flex justify-end border-b border-primary/10 pb-4 mb-8">
        <Link href="/" className="text-sm font-medium text-primary/80 hover:text-primary underline underline-offset-2">
          Voltar ao site
        </Link>
      </div>
    );
  }

  return (
    <div className="flex flex-wrap items-center justify-between gap-4 border-b border-primary/10 pb-4 mb-8">
      <div className="flex flex-wrap items-center gap-4 text-sm">
        <Link href="/admin/blog" className="font-semibold text-primary">
          Painel
        </Link>
        <Link href="/admin/blog/new" className="text-primary/80 hover:text-primary">
          Novo artigo
        </Link>
        <Link href="/blog" className="text-primary/80 hover:text-primary">
          Ver blog público
        </Link>
        <Link href="/" className="text-primary/80 hover:text-primary">
          Site
        </Link>
      </div>
      <button
        type="button"
        onClick={handleSignOut}
        className="text-sm font-medium text-primary/80 hover:text-primary underline underline-offset-2"
      >
        Sair
      </button>
    </div>
  );
}
