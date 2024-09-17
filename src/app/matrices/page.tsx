import { HeaderTitle } from "@/components/header-title";
import { Matrix } from "@/components/matrix";
import { Summary } from "@/components/summary";
import type { Matrix as MatrixType } from "@/types/Matrix";

export default function Page() {
  const presence: MatrixType = [
    [1, 2, 3],
    [3, 0, 2],
    [0, 1, 2],
  ];
  const tangible: MatrixType = [
    [0, 0, 0],
    [1, 1, 1],
    [2, 2, 3],
  ];

  return (
    <div>
      <div className="flex items-cente r justify-between">
        <HeaderTitle />
        <Summary ventures={9} spaces={4} score={8.64} />
      </div>
      <div className="flex justify-between gap-4">
        <div>
          <h3 className="text-center text-xl underline underline-offset-4 ">
            Presence
          </h3>
          <Matrix values={presence} />
        </div>
        <div>
          <h3 className="text-center text-xl underline underline-offset-4 ">
            Tangible
          </h3>
          <Matrix values={tangible} />
        </div>
      </div>
    </div>
  );
}
