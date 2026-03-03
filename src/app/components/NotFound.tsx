import { Link } from 'react-router';
import { useTranslation } from '../hooks/useTranslation';

export function NotFound() {
  const t = useTranslation();

  return (
    <div className="flex items-center justify-center min-h-[60vh]">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-slate-300 mb-4">404</h1>
        <p className="text-slate-600 mb-6">{t('notFound.message')}</p>
        <Link 
          to="/" 
          className="inline-block px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
        >
          {t('notFound.goBack')}
        </Link>
      </div>
    </div>
  );
}