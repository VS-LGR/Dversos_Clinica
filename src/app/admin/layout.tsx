import type { Metadata } from "next";
import AdminNav from "@/components/admin/AdminNav";

export const metadata: Metadata = {
  title: {
    default: "Administração",
    template: "%s | Admin Clínica DVERSO",
  },
  robots: { index: false, follow: false },
};

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-[#fafbfc] py-10 px-4 sm:px-6">
      <div className="max-w-5xl mx-auto">
        <AdminNav />
        {children}
      </div>
    </div>
  );
}
