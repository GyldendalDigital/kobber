import { ContentLayout, ContentShell } from "@/components/content-layout";
import { SideMenu } from "@/components/menu/side-menu";
import { SideMenuItemLink } from "@/components/menu/side-menu-item-link";
import { GetStartedRoutesData } from "@/data/routes-data";

type GetStartedLayoutProps = {
  children: React.ReactNode;
};

export default function GetStartedLayout({ children }: GetStartedLayoutProps) {
  return (
    <ContentLayout>
      <ContentShell>
        <SideMenu>
          <ul className="mx-2">
            {GetStartedRoutesData.map(({ slug, hrefTitle }) => (
              <li key={slug}>
                <SideMenuItemLink slug={slug} title={hrefTitle} />
              </li>
            ))}
          </ul>
        </SideMenu>
      </ContentShell>
      <div className="w-full pb-24 pr-24">{children}</div>
    </ContentLayout>
  );
}
