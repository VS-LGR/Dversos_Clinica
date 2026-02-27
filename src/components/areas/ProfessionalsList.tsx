import Image from "next/image";
import type { Professional } from "@/lib/constants/professionals";

interface ProfessionalsListProps {
  professionals: Professional[];
  title?: string;
}

export default function ProfessionalsList({
  professionals,
  title = "Profissionais",
}: ProfessionalsListProps) {
  if (professionals.length === 0) return null;

  return (
    <section className="py-12 px-4 sm:px-6" aria-labelledby="professionals-title">
      <div className="max-w-6xl mx-auto">
        <h2 id="professionals-title" className="text-2xl font-bold text-primary mb-8">
          {title}
        </h2>
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {professionals.map((pro) => (
            <li
              key={pro.id}
              className="p-6 rounded-xl border border-primary-pale bg-white shadow-sm"
            >
              <div className="flex gap-4">
                {pro.imageUrl ? (
                  <div className="flex-shrink-0 w-16 h-16 rounded-full overflow-hidden bg-primary-pale">
                    <Image
                      src={pro.imageUrl}
                      alt=""
                      width={64}
                      height={64}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ) : (
                  <div
                    className="flex-shrink-0 w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-xl"
                    aria-hidden
                  >
                    {pro.name.charAt(0)}
                  </div>
                )}
                <div className="min-w-0">
                  <h3 className="font-semibold text-primary">{pro.name}</h3>
                  <p className="text-sm text-primary/80 mb-1">{pro.specialty}</p>
                  <p className="text-sm text-primary/70 leading-relaxed">{pro.bio}</p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
