import SideNav from "@/app/ui/components/sidenav";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div style={{ display: "flex" }}>
      <div style={{ width: "10%" }}>
        <SideNav />
      </div>
      <div>{children}</div>
    </div>
  );
}