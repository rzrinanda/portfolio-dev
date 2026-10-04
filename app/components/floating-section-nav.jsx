"use client";

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { BsBook, BsBriefcase, BsCodeSlash, BsFolder, BsPerson, BsList } from 'react-icons/bs';

const sections = [
  { id: 'about', label: 'About', Icon: BsPerson },
  { id: 'experience', label: 'Experience', Icon: BsBriefcase },
  { id: 'skills', label: 'Skills', Icon: BsCodeSlash },
  { id: 'education', label: 'Education', Icon: BsBook },
  { id: 'projects', label: 'Projects', Icon: BsFolder },
];

export default function FloatingSectionNav({ audience = 'recruiter' }) {
  const [expanded, setExpanded] = useState(false);
  const [active, setActive] = useState('about');
  const suffix = audience === 'client' ? '?audience=client' : '';

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const visible = entries.filter((entry) => entry.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
      if (visible) setActive(visible.target.id);
    }, { rootMargin: '-35% 0px -55% 0px', threshold: [0.1, 0.3] });
    sections.forEach(({ id }) => document.getElementById(id) && observer.observe(document.getElementById(id)));
    return () => observer.disconnect();
  }, []);

  return (
    <aside className={`fixed left-3 top-1/2 z-40 -translate-y-1/2 ${expanded ? 'w-40' : 'w-12'}`}>
      <div className="rounded-2xl border border-[#3a315f] bg-[#11152c]/95 p-1.5 shadow-2xl backdrop-blur">
        <button type="button" aria-label={expanded ? 'Collapse section navigation' : 'Expand section navigation'} aria-expanded={expanded} onClick={() => setExpanded(!expanded)} className="flex h-9 w-full items-center justify-center rounded-xl text-[#16f2b3] hover:bg-[#1a1443]"><BsList size={21} /></button>
        <nav aria-label="Page sections" className="mt-1 space-y-1">
          {sections.map(({ id, label, Icon }) => <Link key={id} href={`/${suffix}#${id}`} aria-current={active === id ? 'location' : undefined} className={`flex h-9 items-center gap-3 rounded-xl px-2 text-xs font-medium ${active === id ? 'bg-violet-600 text-white' : 'text-[#b7b3ca] hover:bg-[#1a1443] hover:text-white'}`}><Icon size={17} /><span className={expanded ? 'block' : 'sr-only'}>{label}</span></Link>)}
        </nav>
      </div>
    </aside>
  );
}
