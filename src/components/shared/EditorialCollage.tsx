import Image from "next/image";

export interface CollageImageItem {
  src: string;
  alt: string;
}

interface EditorialCollageProps {
  hero: CollageImageItem;
  midLeft: CollageImageItem;
  midRight: CollageImageItem;
  botLeft: CollageImageItem;
  botRight: CollageImageItem;
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
  midLeft,
  midRight,
  botLeft,
  botRight,
  priority = false,
}: EditorialCollageProps) {
  return (
    <div className="h-full rounded-[2rem] sm:rounded-[2.5rem] bg-white/90 border border-primary/[0.06] shadow-[0_12px_40px_-16px_rgba(26,43,86,0.12)] p-3 sm:p-4">
      <div className="grid grid-cols-2 gap-2 sm:gap-3 h-full">
        <CollageImage
          src={hero.src}
          alt={hero.alt}
          className="col-span-2 aspect-[16/10]"
          priority={priority}
        />
        <CollageImage src={midLeft.src} alt={midLeft.alt} className="aspect-[4/3]" />
        <CollageImage src={midRight.src} alt={midRight.alt} className="aspect-[4/3]" />
        <CollageImage src={botLeft.src} alt={botLeft.alt} className="aspect-[4/3]" />
        <CollageImage src={botRight.src} alt={botRight.alt} className="aspect-[4/3]" />
      </div>
    </div>
  );
}
