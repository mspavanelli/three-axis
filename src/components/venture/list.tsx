import { Minus } from "lucide-react";

import { useVenturesStore } from "@/store/ventures";

import { Button } from "../ui/button";

export function VentureList() {
  const { ventures, removeVenture } = useVenturesStore();

  return (
    <div className="flex flex-col gap-4 text-white divide-y">
      {ventures.map((venture) => (
        <div key={venture.name} className="flex items-center pt-4">
          <span className="flex-[2]">{venture.name}</span>
          <span className="flex-1">{venture.structure}</span>
          <span className="flex-1">{venture.interface}</span>
          <span className="flex-1">{venture.tangibility}</span>
          <Button
            className="ml-auto size-9 p-0"
            variant="outline"
            onClick={() => removeVenture(venture.name)}
          >
            <Minus className="size-4" />
          </Button>
        </div>
      ))}
    </div>
  );
}
