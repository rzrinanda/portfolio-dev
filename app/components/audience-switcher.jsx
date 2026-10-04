import Link from 'next/link';

function AudienceSwitcher({ audience = 'recruiter' }) {
  return (
    <div role="tablist" aria-label="Portfolio audience" className="flex flex-wrap rounded-full border border-[#3a315f] p-1 text-xs font-semibold">
      <Link role="tab" aria-selected={audience === 'recruiter'} className={`rounded-full px-3 py-1.5 ${audience === 'recruiter' ? 'bg-violet-600 text-white' : 'text-[#b7b3ca] hover:text-white'}`} href="/?audience=recruiter">Recruiter</Link>
      <Link role="tab" aria-selected={audience === 'client'} className={`rounded-full px-3 py-1.5 ${audience === 'client' ? 'bg-[#16f2b3] text-[#0d1224]' : 'text-[#b7b3ca] hover:text-white'}`} href="/?audience=client">Client</Link>
    </div>
  );
}

export default AudienceSwitcher;
