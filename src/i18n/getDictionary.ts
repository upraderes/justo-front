import type { Locale } from './config';
import fr from './dictionaries/fr.json';
import en from './dictionaries/en.json';

export type Dictionary = typeof fr;

const dictionaries: Record<Locale, Dictionary> = {
  en,
  fr: fr as Dictionary,
};

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale];
}
