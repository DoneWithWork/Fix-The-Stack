"use client";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarTrigger,
  useSidebar,
} from "@/components/ui/sidebar";
import { Switch } from "@/components/ui/switch";
import { UserDashboardLinks } from "@/lib/constants";
import Link from "next/link";
import { useState } from "react";
import { useCookies } from "react-cookie";
import SignOutBtn from "./SignOutBtn";
import SettingsBtn from "./ui/SettingsBtn";
import { Label } from "./ui/label";

const SIDEBAR_COOKIE_MAX_AGE = 60 * 60 * 24 * 7;
interface CookieValues {
  educator?: boolean;
}
export function AppSidebar({
  iseducator = false,
  educatorCookie = false,
}: {
  iseducator: boolean;
  educatorCookie: boolean;
}) {
  const [, setCookie] = useCookies<"educator", CookieValues>(["educator"], {
    doNotParse: true,
  });
  const [educatorMode, SetEducatorMode] = useState<boolean>(
    educatorCookie || false
  );
  const { open } = useSidebar();

  const changeMode = (checked: boolean) => {
    console.log("Switch toggled:", checked);

    setCookie("educator", checked, {
      path: "/",
      maxAge: SIDEBAR_COOKIE_MAX_AGE,
    });
    SetEducatorMode(checked);
  };
  return (
    <Sidebar collapsible="icon" className="w-64">
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {UserDashboardLinks.map((project, index) => (
                <SidebarMenuItem key={index}>
                  <SidebarMenuButton asChild>
                    <Link href={`/dashboard${project.href}`}>
                      <project.icon />
                      <span>{project.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        <SidebarMenu>
          {iseducator && (
            <SidebarMenuItem className="mb-2">
              <div className="flex items-center space-x-2 h-6">
                <Switch
                  id="educator-mode"
                  checked={educatorMode}
                  onCheckedChange={changeMode}
                />
                {open && (
                  <Label htmlFor="educator-mode">
                    {educatorMode ? <span>Educator</span> : <span>User</span>}
                  </Label>
                )}
              </div>
            </SidebarMenuItem>
          )}
          <SettingsBtn />
          <SignOutBtn />
          <SidebarTrigger />
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  );
}
