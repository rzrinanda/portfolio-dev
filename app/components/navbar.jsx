"use client";
// @flow strict
import Link from "next/link";
import { useSearchParams } from 'next/navigation';
import AudienceSwitcher from './audience-switcher';
import LanguageSwitcher from './language-switcher';


function Navbar() {
  const audienceValues = useSearchParams().getAll('audience');
  const audience = audienceValues.length === 1 && audienceValues[0] === 'client' ? 'client' : 'recruiter';
  const audienceSuffix = audience === 'client' ? '?audience=client' : '';
  return (
    <nav className="bg-transparent">
      <div className="flex items-center justify-between py-5">
        <div className="flex flex-shrink-0 items-center">
          <Link
            href={`/${audienceSuffix}`}
            className=" text-[#16f2b3] text-3xl font-bold">
            RIZAL
          </Link>
        </div>

        <div className="flex items-center gap-2 sm:gap-3">
          <AudienceSwitcher audience={audience} />
          <LanguageSwitcher />
          {/* <li>
            <Link className="block px-4 py-2 no-underline outline-none hover:no-underline" href="/blog"><div className="text-sm text-white transition-colors duration-300 hover:text-pink-600">BLOGS</div></Link>
          </li> */}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
