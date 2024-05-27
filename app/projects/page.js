// @flow strict
'use client';

import {projectsData} from '@/utils/data/projects-data';
import ProjectList from './project-list';
import {HiChevronDown} from 'react-icons/hi2';

import {useState, useEffect} from 'react';

const page = () => {
  const yearsDropdown = Array.from (
    new Set (
      projectsData.map (project => {
        return project.year;
      })
    )
  );

  const [selectedYear, setSelectedYear] = useState (yearsDropdown[0]);
  const handleChange = event => {
    setSelectedYear (event.target.value);
  };

  let filteredProjects = projectsData.filter (
    project => project.year === parseInt (selectedYear)
  );

  //use to suppress hydration error
  const [isMounted, setIsMounted] = useState (false);

  useEffect (() => {
    setIsMounted (true);
  }, []);

  if (!isMounted) {
    return null;
  }
  //end suppress

  return (
    <div className="py-8">
      <div className="flex justify-center my-5 lg:py-8">
        <div className="flex  items-center">
          <span className="w-24 h-[2px] bg-[#1a1443]" />
          <span className="bg-[#1a1443] w-fit text-white p-2 px-5 text-2xl rounded-md">
            All Projects
          </span>
          <span className="w-24 h-[2px] bg-[#1a1443]" />
        </div>
      </div>

      <div className="flex justify-center gap-3 md:gap-5 lg:gap-8 xl:gap-10 py-8">
        <label className="inline-flex justify-start px-0 py-2">Year: </label>
        <select
          className="inline-flex w-40 justify-start bg-[#10172d] border rounded-md border-[#353a52] focus:border-[#16f2b3] ring-0 outline-0 transition-all duration-300 px-3 py-2"
          value={selectedYear}
          onChange={handleChange}
        >
          <HiChevronDown
            className="-mr-1 h-5 w-5 text-[#16f2b3] text-base"
            aria-hidden="true"
          />
          {yearsDropdown.map (option => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
        <span className="inline-flex justify-end px-0 py-2 justify-items-end">
          {filteredProjects.length} of {projectsData.length} projects total
        </span>
      </div>

      <ProjectList projectsData={filteredProjects} />
    </div>
  );
};

export default page;
