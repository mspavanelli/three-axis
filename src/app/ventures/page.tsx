"use client";
import Link from "next/link";

import { HeaderTitle } from "@/components/header-title";
import { Button } from "@/components/ui/button";
import { VentureForm } from "@/components/venture/form";
import { VentureList } from "@/components/venture/list";

export default function Page() {
  return (
    <div>
      <div className="flex items-center justify-between">
        <HeaderTitle />
        <div>
          <Link href="/matrices">
            <Button variant="secondary">View Matrix</Button>
          </Link>
        </div>
      </div>
      <VentureForm />
      <VentureList />
    </div>
  );
}
