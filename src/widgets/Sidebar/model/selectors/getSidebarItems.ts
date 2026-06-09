import { createSelector } from '@reduxjs/toolkit';
import { getUserAuthData } from 'entities/User';
import MainIcon from 'shared/assets/icons/main.svg';
import AboutIcon from 'shared/assets/icons/about.svg';
import { RouterPath } from 'shared/config/routerConfig/routerConfig';
import ProfileIcon from 'shared/assets/icons/profile.svg';
import ArticleIcon from 'shared/assets/icons/article.svg';
import { SidebarItemsType } from '../types/sidebar';

export const getSidebarItems = createSelector(
  getUserAuthData,
  (userData) => {
    const sidebarItemsList: SidebarItemsType[] = [
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
    ];

    if (userData) {
      sidebarItemsList.push(
        {
          path: RouterPath.profile + userData.id,
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
      );
    }

    return sidebarItemsList;
  },
);
