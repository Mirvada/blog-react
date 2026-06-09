import { FC, SVGProps } from 'react';

export interface SidebarItemsType {
  path: string;
  text: string;
  Icon: FC<SVGProps<SVGSVGElement>>;
  authOnly?: boolean;
}
