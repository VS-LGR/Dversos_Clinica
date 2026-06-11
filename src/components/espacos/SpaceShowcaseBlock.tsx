import Image from "next/image";
import type { ClinicSpace } from "@/lib/constants/spacesContent";
import { spaceImageAlt, spaceMediaFor } from "@/lib/constants/clinicMedia";
import CozyImageFrame from "@/components/shared/CozyImageFrame";
import { PASTEL_SURFACE_SOFT, pastelByIndex } from "@/lib/constants/pastelPalette";

interface SpaceShowcaseBlockProps {
  space: ClinicSpace;
  index: number;
}

export default function SpaceShowcaseBlock({ space, index }: SpaceShowcaseBlockProps) {
  const media = spaceMediaFor(space);
  const reversed = index % 2 === 1;

  return (
    <article
      className={`rounded-2xl border border-primary/[0.08] overflow-hidden min-w-0 ${pastelByIndex(PASTEL_SURFACE_SOFT, index)}`}
    >
      <div
        className={`grid md:grid-cols-2 gap-6 md:gap-8 p-6 sm:p-8 items-center ${
          reversed ? "md:[&>*:first-child]:order-2" : ""
        }`}
      >
        <CozyImageFrame
          src={media.cover}
          alt={spaceImageAlt(space)}
          index={index}
          variant="landscape"
          className="w-full"
        />
        <div className="min-w-0">
          <h2 className="text-xl sm:text-2xl font-bold text-primary mb-4 break-words">
            {space.title}
          </h2>
          <div className="space-y-3 text-primary/85 leading-relaxed text-sm sm:text-base">
            {space.paragraphs.map((p) => (
              <p key={p.slice(0, 40)}>{p}</p>
            ))}
          </div>
        </div>
      </div>

      {media.gallery.length > 0 && (
        <div className="-mx-4 px-4 sm:mx-0 sm:px-8 pb-6 sm:pb-8 overflow-x-auto overscroll-x-contain">
          <ul className="flex gap-3 sm:gap-4 min-w-0">
            {media.gallery.map((src, gi) => (
              <li
                key={src}
                className="shrink-0 w-[72vw] max-w-[280px] sm:w-[220px] rounded-xl overflow-hidden border border-primary/[0.08] bg-white"
              >
                <div className="relative aspect-[4/3]">
                  <Image
                    src={src}
                    alt={spaceImageAlt(space, gi + 1)}
                    fill
                    className="object-cover"
                    sizes="280px"
                  />
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}
    </article>
  );
}
