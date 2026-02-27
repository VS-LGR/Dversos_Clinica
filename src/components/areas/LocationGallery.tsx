import Image from "next/image";

interface LocationGalleryProps {
  images: { src: string; alt: string }[];
  title?: string;
}

const PLACEHOLDER =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='300' viewBox='0 0 400 300'%3E%3Crect fill='%23f3f4ff' width='400' height='300'/%3E%3Ctext fill='%231a2b56' font-family='sans-serif' font-size='18' x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle'%3EFoto do espaço%3C/text%3E%3C/svg%3E";

export default function LocationGallery({
  images,
  title = "Nosso espaço",
}: LocationGalleryProps) {
  const displayImages =
    images.length > 0
      ? images
      : [
          { src: PLACEHOLDER, alt: "Foto do espaço de atendimento (placeholder)" },
          { src: PLACEHOLDER, alt: "Foto do espaço de atendimento (placeholder)" },
          { src: PLACEHOLDER, alt: "Foto do espaço de atendimento (placeholder)" },
        ];

  return (
    <section className="py-12 px-4 sm:px-6 bg-surface" aria-labelledby="gallery-title">
      <div className="max-w-6xl mx-auto">
        <h2 id="gallery-title" className="text-2xl font-bold text-primary mb-8">
          {title}
        </h2>
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {displayImages.map((img, i) => (
            <li key={i} className="rounded-xl overflow-hidden border border-primary-pale bg-white">
              <div className="aspect-[4/3] relative">
                {img.src.startsWith("data:") ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={img.src}
                    alt={img.alt}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                )}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
