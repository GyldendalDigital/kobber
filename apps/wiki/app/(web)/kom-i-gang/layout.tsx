import { ContentLayout, ContentShell } from "@/components/content-layout";
import { SideMenu } from "@/components/menu/side-menu";
import { SideMenuItemLink } from "@/components/menu/side-menu-item-link";
import { GetStartedRoutesData } from "./routes-data";

type GetStartedLayoutProps = {
  children: React.ReactNode;
};

export default function GetStartedLayout({ children }: GetStartedLayoutProps) {
  return (
    <ContentLayout>
      <ContentShell>
        <SideMenu>
          <ul className="mx-2">
            {GetStartedRoutesData.map(({ href, hrefTitle }) => (
              <li key={href}>
                <SideMenuItemLink href={href} title={hrefTitle} />
              </li>
            ))}
          </ul>
        </SideMenu>
      </ContentShell>
      <div className="w-full pb-24 pr-24">{children}</div>
    </ContentLayout>
  );
}
