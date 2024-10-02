import { WikiRoute } from "@/config/routes";
import { SideMenuItemLink } from "./side-menu-item-link";

type Props = {
  slug: string;
  route: WikiRoute[0];
};

export const SideMenuItem = ({ slug, route }: Props) => {
  return (
    <li>
      <SideMenuItemLink slug={slug} {...route} />
      {route.children && (
        <ul className="pl-40">
          {Object.entries(route.children).map(([childSlug, childRoute]) => (
            <SideMenuItem key={childSlug} slug={childSlug} route={childRoute} />
          ))}
        </ul>
      )}
    </li>
  );
};
