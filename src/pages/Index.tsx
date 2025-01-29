import { StatsCard } from "@/components/StatsCard";
import { DistrictChart } from "@/components/DistrictChart";
import { DistrictTable } from "@/components/DistrictTable";

// Temporary mock data - replace with actual Google Sheets data
const mockDistrictData = [
  {
    district: "Colombo",
    coordinator: "Lahiruni",
    weeklyCount: 5,
    totalCount: 119,
    studentsReached: 7793,
    fbPosts: 76,
  },
  {
    district: "Kalutara",
    coordinator: "Lahiruni",
    weeklyCount: 3,
    totalCount: 105,
    studentsReached: 4696,
    fbPosts: 59,
  },
  // Add more mock data as needed
];

const mockChartData = mockDistrictData.map((d) => ({
  district: d.district,
  count: d.totalCount,
}));

const Index = () => {
  return (
    <div className="container py-8 animate-fade-in">
      <header className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Seminar Progress Tracker</h1>
        <p className="text-muted-foreground">
          GS 24/25 - SASNAKA SANSADA FOUNDATION
        </p>
      </header>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 mb-8">
        <StatsCard title="Total Seminars" value="909" />
        <StatsCard title="Students Reached" value="51,037" />
        <StatsCard title="Districts Covered" value="19" />
        <StatsCard title="FB Posts" value="709" />
      </div>

      <div className="mb-8">
        <DistrictChart data={mockChartData} />
      </div>

      <div>
        <DistrictTable data={mockDistrictData} />
      </div>
    </div>
  );
};

export default Index;