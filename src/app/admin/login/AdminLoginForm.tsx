"use client";

import { useMemo, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Link from "next/link";
import { createSupabaseBrowserClient } from "@/lib/supabase/browser";

export default function AdminLoginForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const redirect = searchParams.get("redirect") || "/admin/blog";
  const supabase = useMemo(() => createSupabaseBrowserClient(), []);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    if (!supabase) {
      setError("Configure NEXT_PUBLIC_SUPABASE_URL e NEXT_PUBLIC_SUPABASE_ANON_KEY.");
      return;
    }
    setLoading(true);
    const { error: signError } = await supabase.auth.signInWithPassword({
      email: email.trim(),
      password,
    });
    setLoading(false);
    if (signError) {
      setError(signError.message);
      return;
    }
    router.push(redirect);
    router.refresh();
  };

  return (
    <div className="max-w-md mx-auto rounded-2xl border border-primary/10 bg-white p-8 shadow-sm">
      <h1 className="text-xl font-bold text-primary mb-2">Entrar no painel</h1>
      <p className="text-sm text-primary/70 mb-6">
        Acesso restrito à equipe. Em caso de dúvida, contate o administrador do site.
      </p>
      <form onSubmit={handleSubmit} className="space-y-4">
        {!supabase && (
          <p className="text-sm text-amber-900 bg-amber-50 border border-amber-100 rounded-lg px-3 py-2">
            Defina as variáveis de ambiente do Supabase para habilitar o login.
          </p>
        )}
        {error && (
          <p className="text-sm text-red-700 bg-red-50 border border-red-100 rounded-lg px-3 py-2" role="alert">
            {error}
          </p>
        )}
        <div>
          <label htmlFor="login-email" className="block text-sm font-medium text-primary mb-1">
            E-mail
          </label>
          <input
            id="login-email"
            type="email"
            autoComplete="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full rounded-xl border border-primary/15 px-4 py-2.5 text-primary focus:outline-none focus:ring-2 focus:ring-primary/30"
          />
        </div>
        <div>
          <label htmlFor="login-password" className="block text-sm font-medium text-primary mb-1">
            Senha
          </label>
          <input
            id="login-password"
            type="password"
            autoComplete="current-password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full rounded-xl border border-primary/15 px-4 py-2.5 text-primary focus:outline-none focus:ring-2 focus:ring-primary/30"
          />
        </div>
        <button
          type="submit"
          disabled={loading || !supabase}
          className="w-full rounded-xl bg-primary py-3 text-sm font-semibold text-white hover:bg-primary-light disabled:opacity-50"
        >
          {loading ? "Entrando…" : "Entrar"}
        </button>
      </form>
      <p className="mt-6 text-center text-sm text-primary/60">
        <Link href="/" className="underline underline-offset-2 hover:text-primary">
          Voltar ao site
        </Link>
      </p>
    </div>
  );
}
