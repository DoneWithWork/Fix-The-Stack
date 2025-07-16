import React from "react";
import { SidebarMenuButton, SidebarMenuItem } from "./sidebar";
import Link from "next/link";
import { BookOpen } from "lucide-react";

export default function DocumentationBtn() {
  return (
    <SidebarMenuItem>
      <SidebarMenuButton asChild>
        <Link
          href="https://docs.fixthestack.com"
          referrerPolicy="no-referrer"
          target="_blank"
        >
          <BookOpen />
          <span>Docs</span>
        </Link>
      </SidebarMenuButton>
    </SidebarMenuItem>
  );
}
