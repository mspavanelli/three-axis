"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { Button } from "@/components/ui/button";

export function HeaderTitle() {
  const pathname = usePathname();
  const isVentures = pathname === "/ventures";

  return (
    <header className="space-y-4">
      <h1 className="text-4xl font-bold">
        Three Axis
        <br /> Powered
        <br /> By Aerolito
      </h1>
      <div className="flex flex-col items-start">
        <Button variant="link" className="dark:text-white p-0">
          Restart assessment
        </Button>
        {!isVentures && (
          <Link href="/ventures">
            <Button variant="link" className="dark:text-white p-0">
              Edit
            </Button>
          </Link>
        )}
      </div>
    </header>
  );
}
