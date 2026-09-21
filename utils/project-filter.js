export function filterProjectsByYear(projects, selectedYear) {
  return projects.filter(project => String(project.year) === String(selectedYear));
}
