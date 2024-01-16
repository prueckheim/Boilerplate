import { Pathnames } from 'next-intl/navigation';

export const locales = ['en', 'de'] as const;

export const pathnames = {
  '/': '/'
  //   '/pathnames': {
  //     en: '/',
  //     de: '/'
  //   }
} satisfies Pathnames<typeof locales>;

export type AppPathnames = keyof typeof pathnames;
