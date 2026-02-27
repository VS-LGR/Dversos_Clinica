import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center px-4">
      <h1 className="text-2xl font-bold text-primary mb-2">Página não encontrada</h1>
      <p className="text-primary/80 mb-6 text-center">
        O endereço que você acessou não existe ou foi movido.
      </p>
      <Link
        href="/"
        className="rounded-lg font-semibold bg-primary text-white px-5 py-3 hover:bg-primary-light transition-colors"
      >
        Voltar ao início
      </Link>
    </div>
  );
}
