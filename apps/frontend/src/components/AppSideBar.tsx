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
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { useCookies } from "react-cookie";
import SignOutBtn from "./shared/utils/SignOutBtn";
import SettingsBtn from "./ui/SettingsBtn";
import { Label } from "./ui/label";
import DocumentationBtn from "./ui/DocumentationBtn";

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
  const pathName = usePathname();
  const changeMode = (checked: boolean) => {
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
              {UserDashboardLinks.map(({ href, icon: Icon, title }) => {
                const fullPath = `/dashboard${href}`;
                const isActive = fullPath === pathName;

                return (
                  <SidebarMenuItem key={fullPath}>
                    <SidebarMenuButton asChild>
                      <Link
                        href={fullPath}
                        className={cn({
                          "bg-input/60": isActive,
                          "": !isActive,
                        })}
                      >
                        <Icon className="w-5 h-5" />
                        <span>{title}</span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                );
              })}
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
          <DocumentationBtn />
          <SettingsBtn />
          <SignOutBtn />
          <SidebarTrigger />
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  );
}
