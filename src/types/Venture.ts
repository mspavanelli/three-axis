export type Structure = "classic" | "platform" | "post-digital";
export type Interface =
  | "non-digital"
  | "digitally-translated"
  | "digitally-designed";
export type Tangibility = "presence" | "tangible" | "intangible";

export type Venture = {
  name: string;
  structure: Structure;
  interface: Interface;
  tangibility: Tangibility;
};
