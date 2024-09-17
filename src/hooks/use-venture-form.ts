import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { ventureSchema } from "@/schemas/venture";
import { useVenturesStore } from "@/store/ventures";

type FormType = z.infer<typeof ventureSchema>;

export function useVentureForm() {
  const form = useForm<FormType>({
    resolver: zodResolver(ventureSchema),
  });

  const { addVenture } = useVenturesStore();

  function onSubmit(venture: FormType) {
    addVenture(venture);
  }

  return {
    form,
    onSubmit,
  };
}
