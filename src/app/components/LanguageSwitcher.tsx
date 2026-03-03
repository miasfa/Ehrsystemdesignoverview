import { Languages } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage();

  return (
    <button
      onClick={() => setLanguage(language === 'en' ? 'ar' : 'en')}
      className="flex items-center gap-2 px-4 py-2 rounded-lg bg-blue-50 hover:bg-blue-100 border border-blue-200 transition-colors"
      aria-label="Switch language"
    >
      <Languages className="w-4 h-4 text-blue-600" />
      <span className="text-sm font-medium text-blue-900">
        {language === 'en' ? 'العربية' : 'English'}
      </span>
    </button>
  );
}
