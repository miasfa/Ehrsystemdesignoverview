import { useLanguage } from '../contexts/LanguageContext';
import { translate } from '../translations';

/**
 * Custom hook for translations
 * Usage: const t = useTranslation();
 * Then use: t('key.name')
 */
export function useTranslation() {
  const { language } = useLanguage();
  return (key: string) => translate(key, language);
}
