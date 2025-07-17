"use client";
import { SidebarMenuButton, SidebarMenuItem } from "@/components/ui/sidebar";
import { SignOutButton } from "@clerk/nextjs";
import { LogOutIcon } from "lucide-react";
export default function SignOutBtn() {
  return (
    <SidebarMenuItem>
      <SidebarMenuButton asChild className="hover:cursor-pointer">
        <SignOutButton>
          <div className="flex flex-row items-center">
            <LogOutIcon />
            <span>Logout</span>
          </div>
        </SignOutButton>
      </SidebarMenuButton>
    </SidebarMenuItem>
  );
}
