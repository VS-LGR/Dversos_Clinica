import Image from "next/image";

export interface CollageImageItem {
  src: string;
  alt: string;
}

type AboutCollageProps = {
  variant?: "about";
  hero: CollageImageItem;
  /** Imagem média vertical (coluna direita) */
  vertical: CollageImageItem;
  /** Quadrado superior esquerdo */
  squareTop: CollageImageItem;
  /** Quadrado inferior esquerdo */
  squareBot: CollageImageItem;
  priority?: boolean;
};

type ClassicCollageProps = {
  variant: "classic";
  hero: CollageImageItem;
  topLeft: CollageImageItem;
  topRight: CollageImageItem;
  bottomCenter: CollageImageItem;
  priority?: boolean;
};

type EditorialCollageProps = AboutCollageProps | ClassicCollageProps;

function CollageImage({
  src,
  alt,
  className = "",
  fit = "cover",
  priority = false,
}: CollageImageItem & {
  className?: string;
  fit?: "cover" | "contain";
  priority?: boolean;
}) {
  return (
    <div className={`relative overflow-hidden rounded-2xl bg-primary-pale/60 min-h-0 ${className}`}>
      <Image
        src={src}
        alt={alt}
        fill
        className={fit === "contain" ? "object-contain p-2" : "object-cover"}
        sizes="(max-width: 1024px) 90vw, 480px"
        priority={priority}
      />
    </div>
  );
}

function isAbaGraphic(src: string) {
  return src.includes("Therapy_ABA");
}

function AboutCollage({
  hero,
  vertical,
  squareTop,
  squareBot,
  priority = false,
}: Omit<AboutCollageProps, "variant">) {
  return (
    <div className="rounded-[2rem] sm:rounded-[2.5rem] bg-white/90 border border-primary/[0.06] shadow-[0_12px_40px_-16px_rgba(26,43,86,0.12)] p-3 sm:p-4 w-full">
      <div className="flex flex-col gap-2 sm:gap-3">
        <CollageImage
          src={hero.src}
          alt={hero.alt}
          className="aspect-[16/10] w-full"
          priority={priority}
        />
        {/* Esquerda: 2 quadrados | Direita: 1 média vertical */}
        <div className="grid grid-cols-2 grid-rows-2 gap-2 sm:gap-3">
          <CollageImage
            src={squareTop.src}
            alt={squareTop.alt}
            className="aspect-square"
            fit={isAbaGraphic(squareTop.src) ? "contain" : "cover"}
          />
          <CollageImage
            src={vertical.src}
            alt={vertical.alt}
            className="row-span-2"
            fit={isAbaGraphic(vertical.src) ? "contain" : "cover"}
          />
          <CollageImage
            src={squareBot.src}
            alt={squareBot.alt}
            className="aspect-square"
            fit={isAbaGraphic(squareBot.src) ? "contain" : "cover"}
          />
        </div>
      </div>
    </div>
  );
}

function ClassicCollage({
  hero,
  topLeft,
  topRight,
  bottomCenter,
  priority = false,
}: Omit<ClassicCollageProps, "variant">) {
  return (
    <div className="rounded-[2rem] sm:rounded-[2.5rem] bg-white/90 border border-primary/[0.06] shadow-[0_12px_40px_-16px_rgba(26,43,86,0.12)] p-3 sm:p-4 w-full">
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

export default function EditorialCollage(props: EditorialCollageProps) {
  if (props.variant === "classic") {
    return (
      <ClassicCollage
        hero={props.hero}
        topLeft={props.topLeft}
        topRight={props.topRight}
        bottomCenter={props.bottomCenter}
        priority={props.priority}
      />
    );
  }

  return (
    <AboutCollage
      hero={props.hero}
      vertical={props.vertical}
      squareTop={props.squareTop}
      squareBot={props.squareBot}
      priority={props.priority}
    />
  );
}
