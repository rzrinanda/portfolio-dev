import Link from 'next/link';
import { useLanguage } from './language-provider';

function AudienceSwitcher({ audience = 'recruiter' }) {
  const { t } = useLanguage();
  return (
    <nav aria-label="Portfolio audience" className="flex flex-wrap rounded-full border border-[#3a315f] p-1 text-xs font-semibold">
      <Link scroll={false} aria-current={audience === 'recruiter' ? 'page' : undefined} className={`rounded-full px-3 py-1.5 ${audience === 'recruiter' ? 'bg-violet-600 text-white' : 'text-[#b7b3ca] hover:text-white'}`} href="/?audience=recruiter">{t('recruiter')}</Link>
      <Link scroll={false} aria-current={audience === 'client' ? 'page' : undefined} className={`rounded-full px-3 py-1.5 ${audience === 'client' ? 'bg-[#16f2b3] text-[#0d1224]' : 'text-[#b7b3ca] hover:text-white'}`} href="/?audience=client">{t('client')}</Link>
    </nav>
  );
}

export default AudienceSwitcher;
