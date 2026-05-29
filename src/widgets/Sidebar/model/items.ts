import { FC, SVGProps } from 'react';
import { RouterPath } from 'shared/config/routerConfig/routerConfig';
import MainIcon from 'shared/assets/icons/main.svg';
import AboutIcon from 'shared/assets/icons/about.svg';
import ProfileIcon from 'shared/assets/icons/profile.svg';
import ArticleIcon from 'shared/assets/icons/article.svg';

export interface SidebarItemsType {
  path: string;
  text: string;
  Icon: FC<SVGProps<SVGSVGElement>>;
  authOnly?: boolean;
}

export const SidebarItemsList: SidebarItemsType[] = [
  {
    path: RouterPath.main,
    text: 'mainPage',
    Icon: MainIcon,
  },
  {
    path: RouterPath.about,
    text: 'aboutPage',
    Icon: AboutIcon,
  },
  {
    path: RouterPath.profile,
    text: 'profilePage',
    Icon: ProfileIcon,
    authOnly: true,
  },
  {
    path: RouterPath.articles,
    text: 'articlesPage',
    Icon: ArticleIcon,
    authOnly: true,
  },
];
