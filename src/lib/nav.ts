import type { Dictionary } from '@/i18n/getDictionary';

export type NavKey = keyof Dictionary['nav'];

export interface NavItem {
  id: string;
  key: Exclude<NavKey, 'cta'>;
}

export const navItems: NavItem[] = [
  { id: 'about', key: 'about' },
  { id: 'how', key: 'how' },
  { id: 'team', key: 'team' },
  { id: 'download', key: 'download' },
  { id: 'support', key: 'support' },
  { id: 'partner', key: 'partner' },
];
