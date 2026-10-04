"use client";

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { BsBook, BsBriefcase, BsCodeSlash, BsFolder, BsHouse, BsPerson, BsList } from 'react-icons/bs';

const sections = [
  { id: 'about', label: 'About', Icon: BsPerson },
  { id: 'experience', label: 'Experience', Icon: BsBriefcase },
  { id: 'skills', label: 'Skills', Icon: BsCodeSlash },
  { id: 'education', label: 'Education', Icon: BsBook },
  { id: 'projects', label: 'Projects', Icon: BsFolder },
];

export default function FloatingSectionNav({ audience = 'recruiter' }) {
  const [isOpen, setIsOpen] = useState(false);
  const [active, setActive] = useState('about');
  const suffix = audience === 'client' ? '?audience=client' : '';

  useEffect(() => {
    const desktop = window.matchMedia('(min-width: 1280px)');
    const setDefaultMenuState = () => setIsOpen(desktop.matches);
    setDefaultMenuState();
    desktop.addEventListener('change', setDefaultMenuState);
    return () => desktop.removeEventListener('change', setDefaultMenuState);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const visible = entries.filter((entry) => entry.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
      if (visible) setActive(visible.target.id);
    }, { rootMargin: '-180px 0px -240px 0px', threshold: [0.1, 0.3] });
    sections.forEach(({ id }) => document.getElementById(id) && observer.observe(document.getElementById(id)));
    return () => observer.disconnect();
  }, []);

  return (
    <aside className="fixed bottom-24 right-4 z-[60] xl:bottom-auto xl:left-3 xl:right-auto xl:top-1/2 xl:-translate-y-1/2">
      <div className="rounded-2xl border border-[#3a315f] bg-[#11152c]/95 p-1.5 shadow-2xl backdrop-blur">
        <button type="button" aria-label={isOpen ? 'Hide section navigation' : 'Show section navigation'} aria-expanded={isOpen} onClick={() => setIsOpen(!isOpen)} className="flex h-10 w-10 items-center justify-center rounded-xl text-[#16f2b3] hover:bg-[#1a1443]"><BsList size={21} /></button>
        <nav aria-label="Page sections" className={isOpen ? 'mt-1 space-y-1 border-t border-[#2a2450] pt-1' : 'hidden'}>
          <Link href={`/${suffix}`} className="flex h-9 items-center gap-3 rounded-xl px-2 text-xs font-medium text-[#b7b3ca] hover:bg-[#1a1443] hover:text-white"><BsHouse size={17} /><span>Home</span></Link>
          {sections.map(({ id, label, Icon }) => <Link key={id} href={`/${suffix}#${id}`} aria-current={active === id ? 'location' : undefined} className={`flex h-9 items-center gap-3 rounded-xl px-2 text-xs font-medium ${active === id ? 'bg-violet-600 text-white' : 'text-[#b7b3ca] hover:bg-[#1a1443] hover:text-white'}`}><Icon size={17} /><span>{label}</span></Link>)}
        </nav>
      </div>
    </aside>
  );
}
