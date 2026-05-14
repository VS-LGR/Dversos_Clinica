import { Suspense } from "react";
import AdminLoginForm from "./AdminLoginForm";

export default function AdminLoginPage() {
  return (
    <Suspense fallback={<p className="text-center text-primary/70 text-sm">Carregando…</p>}>
      <AdminLoginForm />
    </Suspense>
  );
}
