"use client";
// @flow strict
import Link from "next/link";
import { useSearchParams } from 'next/navigation';
import AudienceSwitcher from './audience-switcher';


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

        <div className="flex flex-col items-end gap-3 md:flex-row md:items-center">
        <AudienceSwitcher audience={audience} />
        <ul className="mt-4 flex h-screen max-h-0 w-full flex-col items-start text-sm opacity-0 md:mt-0 md:h-auto md:max-h-screen md:w-auto md:flex-row md:space-x-1 md:border-0 md:opacity-100" id="navbar-default">
          <li>
            <Link className="block px-4 py-2 no-underline outline-none hover:no-underline" href={`/${audienceSuffix}#about`}>
              <div className="text-sm text-white transition-colors duration-300 hover:text-pink-600">ABOUT</div>
            </Link>
          </li>
          <li>
            <Link className="block px-4 py-2 no-underline outline-none hover:no-underline" href={`/${audienceSuffix}#experience`}><div className="text-sm text-white transition-colors duration-300 hover:text-pink-600">EXPERIENCE</div></Link>
          </li>
          <li>
            <Link className="block px-4 py-2 no-underline outline-none hover:no-underline" href={`/${audienceSuffix}#skills`}><div className="text-sm text-white transition-colors duration-300 hover:text-pink-600">SKILLS</div></Link>
          </li>
          <li>
            <Link className="block px-4 py-2 no-underline outline-none hover:no-underline" href={`/${audienceSuffix}#education`}><div className="text-sm text-white transition-colors duration-300 hover:text-pink-600">EDUCATION</div></Link>
          </li>
          {/* <li>
            <Link className="block px-4 py-2 no-underline outline-none hover:no-underline" href="/blog"><div className="text-sm text-white transition-colors duration-300 hover:text-pink-600">BLOGS</div></Link>
          </li> */}
          <li>
            <Link className="block px-4 py-2 no-underline outline-none hover:no-underline" href={`/${audienceSuffix}#projects`}><div className="text-sm text-white transition-colors duration-300 hover:text-pink-600">PROJECTS</div></Link>
          </li>
        </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
