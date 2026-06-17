import Image from "next/image";
import SoftTextLink from "@/components/shared/SoftTextLink";
import CareProcessTimeline, { CareSessionCard } from "@/components/shared/CareProcessTimeline";
import { ABA_PROCESS_INFOGRAPHIC } from "@/lib/constants/clinicMedia";
import { ABA_PROCESS_INFOGRAPHIC_ALT } from "@/lib/constants/processFlow";
import { CARE_SESSION_INFO } from "@/lib/constants/siteContent";

const cardShell =
  "rounded-[2rem] border border-primary/[0.08] bg-white/80 backdrop-blur-sm shadow-[0_8px_32px_-12px_rgba(26,43,86,0.08)] overflow-hidden min-w-0";

function CareProcessFooterLink() {
  return (
    <p className="mt-6 text-center">
      <SoftTextLink href={CARE_SESSION_INFO.linkHref}>
        {CARE_SESSION_INFO.linkLabel}
      </SoftTextLink>
    </p>
  );
}

/** Mobile: texto e etapas — sem infografia (legibilidade). */
function CareProcessMobileContent() {
  return (
    <article className={`${cardShell} lg:hidden`}>
      <div className="p-5 sm:p-6 min-w-0 space-y-8">
        <CareSessionCard />
        <div>
          <h3 className="text-sm font-semibold uppercase tracking-widest text-primary/60 mb-4">
            Etapas do atendimento
          </h3>
          <CareProcessTimeline variant="vertical" linkToFull />
        </div>
        <CareProcessFooterLink />
      </div>
    </article>
  );
}

/** Desktop: infografia visual do fluxo completo. */
function CareProcessDesktopInfographic() {
  return (
    <article className={`${cardShell} hidden lg:block`}>
      <div className="p-6 sm:p-8 min-w-0">
        <figure className="min-w-0">
          <Image
            src={ABA_PROCESS_INFOGRAPHIC}
            alt={ABA_PROCESS_INFOGRAPHIC_ALT}
            width={1400}
            height={700}
            className="w-full h-auto object-contain"
            sizes="(min-width: 1024px) 1152px, 0px"
            priority={false}
          />
          <figcaption className="sr-only">{ABA_PROCESS_INFOGRAPHIC_ALT}</figcaption>
        </figure>
        <CareProcessFooterLink />
      </div>
    </article>
  );
}

export default function CareProcessInfographicCard() {
  return (
    <>
      <CareProcessMobileContent />
      <CareProcessDesktopInfographic />
    </>
  );
}
