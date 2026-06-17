import Image from "next/image";
import SoftTextLink from "@/components/shared/SoftTextLink";
import {
  ABA_PROCESS_INFOGRAPHIC,
} from "@/lib/constants/clinicMedia";
import { ABA_PROCESS_INFOGRAPHIC_ALT } from "@/lib/constants/processFlow";
import { CARE_SESSION_INFO } from "@/lib/constants/siteContent";

export default function CareProcessInfographicCard() {
  return (
    <article className="rounded-[2rem] border border-primary/[0.08] bg-white/80 backdrop-blur-sm shadow-[0_8px_32px_-12px_rgba(26,43,86,0.08)] overflow-hidden min-w-0">
      <div className="p-5 sm:p-8 min-w-0">
        <p className="text-xs text-primary/50 mb-4 sm:hidden" aria-hidden>
          Deslize para ver o fluxo completo →
        </p>
        <figure className="min-w-0">
          <div className="-mx-5 px-5 sm:mx-0 sm:px-0 overflow-x-auto overscroll-x-contain lg:overflow-visible">
            <div className="min-w-[640px] sm:min-w-[720px] lg:min-w-0 w-max lg:w-full mx-auto lg:mx-0">
              <Image
                src={ABA_PROCESS_INFOGRAPHIC}
                alt={ABA_PROCESS_INFOGRAPHIC_ALT}
                width={1400}
                height={700}
                className="w-full h-auto object-contain"
                sizes="(max-width: 1024px) 720px, 1152px"
                priority={false}
              />
            </div>
          </div>
          <figcaption className="sr-only">{ABA_PROCESS_INFOGRAPHIC_ALT}</figcaption>
        </figure>
        <p className="mt-6 text-center">
          <SoftTextLink href={CARE_SESSION_INFO.linkHref}>
            {CARE_SESSION_INFO.linkLabel}
          </SoftTextLink>
        </p>
      </div>
    </article>
  );
}
