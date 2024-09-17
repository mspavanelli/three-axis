import { z } from "zod";

export const ventureSchema = z.object({
  name: z.string(),
  interface: z.enum([
    "non-digital",
    "digitally-translated",
    "digitally-designed",
  ]),
  structure: z.enum(["classic", "platform", "post-digital"]),
  tangibility: z.enum(["presence", "tangible", "intangible"]),
});
