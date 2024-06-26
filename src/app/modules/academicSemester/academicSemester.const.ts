import { TAcademicSemesterNameCodeMapper, TMonths, TSemesterCodes, TSemesters } from "./academicSemester.interface";


// define the semester enum
export const AcademicSemesters: TSemesters[] = ['Autumn', 'Summer', 'Fall'];

// define the semester enum
export const SemesterCodes: TSemesterCodes[] = ['01', '02', '03'];

export const Months: TMonths[] = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];


export const academicSemesterCodeMapper: TAcademicSemesterNameCodeMapper = {
  Autumn: '01',
  Summer: '02',
  Fall: '03',
};