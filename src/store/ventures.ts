import { create } from "zustand";

import { Venture } from "@/types/Venture";

interface VentureState {
  ventures: Venture[];
  addVenture: (venture: Venture) => void;
  removeVenture: (name: string) => void;
}

export const useVenturesStore = create<VentureState>((set) => ({
  ventures: [
    {
      interface: "digitally-designed",
      name: "Venture 1",
      structure: "classic",
      tangibility: "intangible",
    },
    {
      interface: "non-digital",
      name: "Venture 2",
      structure: "platform",
      tangibility: "presence",
    },
    {
      interface: "digitally-designed",
      name: "Venture 3",
      structure: "classic",
      tangibility: "intangible",
    },
    {
      interface: "non-digital",
      name: "Venture 4",
      structure: "platform",
      tangibility: "presence",
    },
  ],
  addVenture: (venture: Venture) =>
    set((state) => ({
      ventures: [...state.ventures, venture],
    })),
  removeVenture: (name: string) => {
    set((state) => ({
      ventures: state.ventures.filter((venture) => venture.name !== name),
    }));
  },
}));
