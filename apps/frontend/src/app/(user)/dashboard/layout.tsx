import { AppSidebar } from "@/components/AppSideBar";
import CookieLayout from "@/components/CookieLayout";
import { LoadingCom } from "@/components/shared/Loader";
import { SidebarProvider } from "@/components/ui/sidebar";
import { checkRole } from "@/lib/auth";
import { cookies } from "next/headers";
import { ReactNode, Suspense } from "react";
import "react-select-search/style.css";

export default async function UserDashboardLayout({
  children,
}: {
  children: ReactNode;
}) {
  const cookieStore = await cookies();
  const iseducator = await checkRole("educator");
  const educatorCookie = cookieStore.get("educator")?.value === "true";

  const defaultOpen = cookieStore.get("sidebar_state")?.value === "true";
  return (
    <SidebarProvider
      defaultOpen={defaultOpen}
      className="flex flex-row min-h-screen"
    >
      <Suspense fallback={<LoadingCom />}>
        <CookieLayout>
          <AppSidebar iseducator={iseducator} educatorCookie={educatorCookie} />
        </CookieLayout>
      </Suspense>

      <main className="flex-1 h-screen w-full">{children}</main>
    </SidebarProvider>
  );
}
