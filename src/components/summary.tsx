import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table";

type Props = {
  ventures: number;
  spaces: number;
  score: number;
};

export function Summary({ score = 0, spaces = 0, ventures = 0 }: Props) {
  return (
    <Table className="">
      <TableBody>
        <TableRow>
          <TableCell>Ventures</TableCell>
          <TableCell>{ventures.toString().padStart(2, "0")}</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Spaces</TableCell>
          <TableCell>{spaces.toString().padStart(2, "0")}/27</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Ventures</TableCell>
          <TableCell>{score}/100</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );
}
