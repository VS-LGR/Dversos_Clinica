import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import InstitutionalPageHero from "@/components/shared/InstitutionalPageHero";
import SpaceShowcaseBlock from "@/components/espacos/SpaceShowcaseBlock";
import ClinicTourPlayer from "@/components/shared/ClinicTourPlayer";
import CozyImageFrame from "@/components/shared/CozyImageFrame";
import WaveDivider from "@/components/shared/WaveDivider";
import { CLINIC_SPACES, SPACES_PAGE } from "@/lib/constants/spacesContent";
import {
  CONSULTORIO_GALLERIES,
  ESPACOS_HERO_IMAGE,
  TAA_GALLERY,
} from "@/lib/constants/clinicMedia";
import { PASTEL_SURFACE_SOFT, pastelByIndex } from "@/lib/constants/pastelPalette";

export const metadata: Metadata = {
  title: SPACES_PAGE.metaTitle,
  description: SPACES_PAGE.metaDescription,
  alternates: { canonical: "/espacos" },
};

export default function EspacosPage() {
  return (
    <div className="min-h-screen bg-white overflow-x-clip safe-x">
      <InstitutionalPageHero
        title={SPACES_PAGE.title}
        subtitle="Ambiente terapêutico para neurodiversidade"
        lead={SPACES_PAGE.introParagraphs[0]}
      />

      <section className="relative py-10 sm:py-14 px-4 sm:px-6 max-w-6xl mx-auto min-w-0">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center mb-10">
          <CozyImageFrame
            src={ESPACOS_HERO_IMAGE}
            alt="Recepção e ambiente acolhedor da Clínica DVERSO"
            index={0}
            priority
          />
          <p className="text-primary/85 leading-relaxed text-base sm:text-lg">
            {SPACES_PAGE.introParagraphs[1]}
          </p>
        </div>
      </section>

      <section className="relative py-16 sm:py-20 px-4 sm:px-6 bg-primary-pale/25 overflow-hidden">
        <WaveDivider overlay position="top" className="absolute top-0 inset-x-0" fill="#ffffff" />
        <div className="relative z-10 max-w-4xl mx-auto min-w-0 pt-4">
          <h2 className="text-2xl sm:text-3xl font-bold text-primary text-center mb-3">
            Tour pela clínica
          </h2>
          <p className="text-primary/80 text-center mb-8 max-w-2xl mx-auto">
            Veja os ambientes onde cuidado, previsibilidade e acolhimento se encontram.
          </p>
          <ClinicTourPlayer />
        </div>
        <WaveDivider overlay className="absolute bottom-0 inset-x-0" fill="#ffffff" />
      </section>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-16 sm:py-20 space-y-12 min-w-0">
        {CLINIC_SPACES.map((space, index) => (
          <div key={space.slug}>
            <SpaceShowcaseBlock space={space} index={index} />
            {index < CLINIC_SPACES.length - 1 && (
              <WaveDivider className="mt-12" fill="#fff8f2" />
            )}
          </div>
        ))}
      </div>

      <section className="relative py-16 sm:py-20 px-4 sm:px-6 bg-primary-pale/20 overflow-hidden">
        <WaveDivider overlay position="top" className="absolute top-0 inset-x-0" fill="#ffffff" />
        <div className="relative z-10 max-w-6xl mx-auto min-w-0 pt-4">
          <h2 className="text-2xl font-bold text-primary mb-2 text-center">Consultórios</h2>
          <p className="text-primary/75 text-center mb-10 max-w-2xl mx-auto text-sm sm:text-base">
            Salas individualizadas para cada especialidade — organizadas para segurança, engajamento e aprendizagem.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {CONSULTORIO_GALLERIES.map((room, index) => (
              <article
                key={room.label}
                className={`rounded-xl border border-primary/[0.08] p-4 min-w-0 ${pastelByIndex(PASTEL_SURFACE_SOFT, index)}`}
              >
                <h3 className="font-semibold text-primary mb-3">{room.label}</h3>
                <ul className="grid grid-cols-2 gap-2">
                  {room.images.slice(0, 4).map((src) => (
                    <li key={src} className="rounded-lg overflow-hidden border border-primary/[0.06]">
                      <div className="relative aspect-[4/3]">
                        <Image
                          src={src}
                          alt={`Consultório de ${room.label} — Clínica DVERSO`}
                          fill
                          className="object-cover"
                          sizes="(max-width: 640px) 50vw, 200px"
                        />
                      </div>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20 px-4 sm:px-6 max-w-6xl mx-auto min-w-0">
        <h2 className="text-2xl font-bold text-primary mb-2 text-center">
          Terapia assistida por animais
        </h2>
        <p className="text-primary/75 text-center mb-8 max-w-2xl mx-auto">
          Momentos de vínculo, regulação e participação em ambiente supervisionado.
        </p>
        <ul className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
          {TAA_GALLERY.slice(0, 8).map((src, i) => (
            <li key={src} className={i === 0 ? "col-span-2 row-span-2" : ""}>
              <CozyImageFrame
                src={src}
                alt="Terapia assistida por animais na Clínica DVERSO"
                variant={i === 0 ? "mosaic" : "mosaic"}
                index={i}
              />
            </li>
          ))}
        </ul>
      </section>

      <section className="py-10 px-4 sm:px-6 border-t border-primary/[0.06] text-center">
        <p className="text-primary/80 mb-4">Quer conhecer a clínica pessoalmente?</p>
        <Link
          href="/sobre"
          className="text-sm font-medium text-primary hover:underline underline-offset-2"
        >
          Saiba como funciona o atendimento →
        </Link>
      </section>
    </div>
  );
}
