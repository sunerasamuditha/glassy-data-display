import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

interface DistrictData {
  district: string;
  coordinator: string;
  weeklyCount: number;
  totalCount: number;
  studentsReached: number;
  fbPosts: number;
}

interface DistrictTableProps {
  data: DistrictData[];
}

export function DistrictTable({ data }: DistrictTableProps) {
  return (
    <div className="glass-card overflow-hidden">
      <h3 className="text-lg font-semibold mb-4">District-wise Progress</h3>
      <div className="overflow-x-auto">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>District</TableHead>
              <TableHead>Coordinator</TableHead>
              <TableHead className="text-right">Weekly Count</TableHead>
              <TableHead className="text-right">Total Count</TableHead>
              <TableHead className="text-right">Students Reached</TableHead>
              <TableHead className="text-right">FB Posts</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {data.map((row) => (
              <TableRow key={row.district} className="glass-hover">
                <TableCell className="font-medium">{row.district}</TableCell>
                <TableCell>{row.coordinator}</TableCell>
                <TableCell className="text-right">{row.weeklyCount}</TableCell>
                <TableCell className="text-right">{row.totalCount}</TableCell>
                <TableCell className="text-right">{row.studentsReached}</TableCell>
                <TableCell className="text-right">{row.fbPosts}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}