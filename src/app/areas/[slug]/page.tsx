import type { Metadata } from "next";
import { notFound } from "next/navigation";
import AreaPageContent from "@/components/areas/AreaPageContent";
import AreaServiceJsonLd from "@/components/seo/AreaServiceJsonLd";
import { CLINIC_AREAS, getAreaBySlug } from "@/lib/constants/clinicAreas";
import { buildAreaMetadata } from "@/lib/seo/metadata";

type Props = { params: { slug: string } };

export function generateStaticParams() {
  return CLINIC_AREAS.map((area) => ({ slug: area.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  return buildAreaMetadata(params.slug);
}

export default function AreaDetailPage({ params }: Props) {
  const { slug } = params;
  const area = getAreaBySlug(slug);
  if (!area) notFound();

  return (
    <>
      <AreaServiceJsonLd area={area} />
      <AreaPageContent slug={slug} />
    </>
  );
}
