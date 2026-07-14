import SoftTextLink from "@/components/shared/SoftTextLink";
import EditorialCollage from "@/components/shared/EditorialCollage";
import { HOME_ABOUT_COLLAGE } from "@/lib/constants/clinicMedia";
import { HOME_ABOUT_PREVIEW } from "@/lib/constants/siteContent";
import { PASTEL_CARD_BG, pastelByIndex } from "@/lib/constants/pastelPalette";

type HighlightIcon = (typeof HOME_ABOUT_PREVIEW.highlights)[number]["icon"];

function HighlightIconGlyph({ type }: { type: HighlightIcon }) {
  const className = "w-5 h-5 text-primary";
  switch (type) {
    case "people":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden>
          <circle cx="9" cy="8" r="3" stroke="currentColor" strokeWidth="1.75" />
          <circle cx="17" cy="9" r="2.5" stroke="currentColor" strokeWidth="1.75" />
          <path d="M4 19c0-2.8 2.2-5 5-5s5 2.2 5 5M14 19c0-2 1.6-3.5 3.5-3.5" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" />
        </svg>
      );
    case "heart":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden>
          <path d="M12 20s-7-4.5-7-10a4 4 0 0 1 7-2 4 4 0 0 1 7 2c0 5.5-7 10-7 10Z" stroke="currentColor" strokeWidth="1.75" strokeLinejoin="round" />
        </svg>
      );
    case "aba":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden>
          <path d="M4 18V6l8-3 8 3v12l-8 3-8-3Z" stroke="currentColor" strokeWidth="1.75" strokeLinejoin="round" />
          <path d="M12 3v18M4 6l8 3 8-3M4 12l8 3 8-3" stroke="currentColor" strokeWidth="1.75" strokeLinejoin="round" />
        </svg>
      );
    case "dog":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden>
          <path d="M8 10V7a2 2 0 1 1 4 0v3M6 12a6 6 0 1 0 12 0 6 6 0 0 0-12 0Z" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" />
          <circle cx="9" cy="11" r="1" fill="currentColor" />
          <circle cx="15" cy="11" r="1" fill="currentColor" />
        </svg>
      );
    case "space":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden>
          <path d="M4 10.5 12 4l8 6.5V20a1 1 0 0 1-1 1h-5v-6H10v6H5a1 1 0 0 1-1-1v-9.5Z" stroke="currentColor" strokeWidth="1.75" strokeLinejoin="round" />
        </svg>
      );
    case "network":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden>
          <circle cx="6" cy="6" r="2.5" stroke="currentColor" strokeWidth="1.75" />
          <circle cx="18" cy="6" r="2.5" stroke="currentColor" strokeWidth="1.75" />
          <circle cx="12" cy="18" r="2.5" stroke="currentColor" strokeWidth="1.75" />
          <path d="M8 7.5 10.5 15M16 7.5 13.5 15" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" />
        </svg>
      );
    default:
      return null;
  }
}

export default function HomeAboutPreviewSection() {
  return (
    <section
      className="py-20 sm:py-24 px-4 sm:px-6 bg-pastel-aqua/30 overflow-hidden safe-x"
      aria-labelledby="home-about-title"
    >
      <div className="max-w-6xl mx-auto min-w-0">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-center">
          <div className="min-w-0 order-2 lg:order-1">
            <EditorialCollage
              hero={HOME_ABOUT_COLLAGE.hero}
              topLeft={HOME_ABOUT_COLLAGE.aba}
              topRight={HOME_ABOUT_COLLAGE.dog}
              bottomCenter={HOME_ABOUT_COLLAGE.family}
              priority
            />
          </div>

          <div className="min-w-0 order-1 lg:order-2 text-center lg:text-left">
            <p className="text-primary/65 text-[10px] sm:text-xs font-semibold uppercase tracking-widest mb-2.5">
              {HOME_ABOUT_PREVIEW.eyebrow}
            </p>
            <h2
              id="home-about-title"
              className="text-2xl sm:text-3xl md:text-[2rem] font-bold text-primary tracking-tight leading-tight text-balance mb-6 sm:mb-8"
            >
              {HOME_ABOUT_PREVIEW.title}
            </h2>

            <div className="grid sm:grid-cols-2 gap-3 sm:gap-4 mb-8">
              {HOME_ABOUT_PREVIEW.highlights.map((item, index) => (
                <article
                  key={item.title}
                  className="rounded-2xl border border-primary/[0.06] bg-white/85 p-4 sm:p-5 text-left shadow-[0_6px_20px_-10px_rgba(26,43,86,0.1)] min-w-0"
                >
                  <div
                    className={`inline-flex h-10 w-10 items-center justify-center rounded-full border border-accent/50 ${pastelByIndex(PASTEL_CARD_BG, index)} mb-3`}
                  >
                    <HighlightIconGlyph type={item.icon} />
                  </div>
                  <h3 className="font-semibold text-primary text-sm sm:text-base mb-1.5 text-balance">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-primary/80 leading-relaxed">
                    {item.description}
                  </p>
                </article>
              ))}
            </div>

            <SoftTextLink href={HOME_ABOUT_PREVIEW.linkHref} className="text-sm sm:text-base">
              {HOME_ABOUT_PREVIEW.linkLabel}
            </SoftTextLink>
          </div>
        </div>
      </div>
    </section>
  );
}
