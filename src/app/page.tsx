import { prayers } from "@/data/prayers";
import PageHeader from "@/components/PageHeader";
import NavIndex from "@/components/NavIndex";
import PrayerCard from "@/components/PrayerCard";

export default function Home() {
  return (
    <div className="page-wrapper">
      <PageHeader />
      <NavIndex prayers={prayers} />
      <main>
        {prayers.map((p) => (
          <PrayerCard key={p.id} prayer={p} />
        ))}
      </main>
    </div>
  );
}
