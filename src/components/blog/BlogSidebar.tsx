import Link from "next/link";
import WhatsAppButton from "@/components/shared/WhatsAppButton";
import { DEFAULT_WHATSAPP_NUMBER } from "@/lib/constants/clinicAreas";
import { BLOG_COPY } from "@/lib/constants/blogCopy";

export default function BlogSidebar() {
  return (
    <aside className="space-y-5 lg:sticky lg:top-24" aria-label="Informações e contato">
      <div className="rounded-2xl bg-gradient-to-br from-accent-mint/40 to-accent-mint/15 border border-primary/[0.08] p-6 shadow-sm">
        <h2 className="text-lg font-semibold text-primary mb-2">
          {BLOG_COPY.sidebar.visitTitle}
        </h2>
        <p className="text-sm text-primary/80 leading-relaxed mb-5">
          {BLOG_COPY.sidebar.visitText}
        </p>
        <WhatsAppButton
          phoneNumber={DEFAULT_WHATSAPP_NUMBER}
          message="Olá! Li o blog da Clínica DVERSO e gostaria de agendar uma visita ou conversar com a equipe."
          label={BLOG_COPY.sidebar.visitCta}
          className="w-full"
        />
      </div>
      <div className="rounded-2xl bg-gradient-to-br from-accent-lavender/35 to-white border border-primary/[0.08] p-6 shadow-sm">
        <h2 className="text-lg font-semibold text-primary mb-2">
          {BLOG_COPY.sidebar.areasTitle}
        </h2>
        <p className="text-sm text-primary/80 leading-relaxed mb-4">
          {BLOG_COPY.sidebar.areasText}
        </p>
        <Link
          href="/areas"
          className="inline-flex rounded-xl border-2 border-primary/20 bg-white px-4 py-2.5 text-sm font-semibold text-primary hover:border-primary hover:bg-primary-pale/30 transition-colors"
        >
          {BLOG_COPY.sidebar.areasCta}
        </Link>
      </div>
    </aside>
  );
}
