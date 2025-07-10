import Link from "next/link";
import React from "react";
import { Button } from "./ui/button";
import { Plus } from "lucide-react";

export default function NewRuleBtn() {
  return (
    <Button asChild variant={"outline"}>
      <Link href={"/dashboard/rules/new"}>
        <>
          <Plus className="size-5" />
          New Rule
        </>
      </Link>
    </Button>
  );
}
