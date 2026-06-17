import Image from "next/image";

export interface CollageImageItem {
  src: string;
  alt: string;
}

interface EditorialCollageProps {
  hero: CollageImageItem;
  topLeft: CollageImageItem;
  topRight: CollageImageItem;
  bottomCenter: CollageImageItem;
  priority?: boolean;
}

function CollageImage({
  src,
  alt,
  className = "",
  priority = false,
}: CollageImageItem & { className?: string; priority?: boolean }) {
  return (
    <div className={`relative overflow-hidden rounded-2xl bg-primary-pale/60 ${className}`}>
      <Image
        src={src}
        alt={alt}
        fill
        className="object-cover"
        sizes="(max-width: 1024px) 90vw, 480px"
        priority={priority}
      />
    </div>
  );
}

export default function EditorialCollage({
  hero,
  topLeft,
  topRight,
  bottomCenter,
  priority = false,
}: EditorialCollageProps) {
  return (
    <div className="rounded-[2rem] sm:rounded-[2.5rem] bg-white/90 border border-primary/[0.06] shadow-[0_12px_40px_-16px_rgba(26,43,86,0.12)] p-3 sm:p-4">
      <div className="grid grid-cols-4 gap-2 sm:gap-3">
        <CollageImage
          src={hero.src}
          alt={hero.alt}
          className="col-span-4 aspect-[16/10]"
          priority={priority}
        />
        <CollageImage src={topLeft.src} alt={topLeft.alt} className="col-span-2 aspect-[4/3]" />
        <CollageImage src={topRight.src} alt={topRight.alt} className="col-span-2 aspect-[4/3]" />
        <div
          className="col-span-1 aspect-square rounded-2xl bg-pastel-peach/75 border border-pastel-peach"
          aria-hidden
        />
        <CollageImage
          src={bottomCenter.src}
          alt={bottomCenter.alt}
          className="col-span-2 aspect-[4/3]"
        />
        <div
          className="col-span-1 aspect-square rounded-2xl bg-pastel-mint/75 border border-pastel-mint"
          aria-hidden
        />
      </div>
    </div>
  );
}
