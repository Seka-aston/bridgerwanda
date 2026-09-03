
export interface Program {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  objectives: string[];
  duration: string;
  requirements: string[];
  tracks?: string[];
  intakeSchedule?: { intake: string; eligible: string }[];
}

export interface Testimonial {
  id: number;
  name: string;
  program: string;
  quote: string;
  imageUrl: string;
}

export interface Resource {
  id: number;
  type: 'Blog' | 'Webinar' | 'Mentorship Guide';
  title: string;
  summary: string;
  date: string;
  author?: string;
  link: string;
}

export interface Partner {
  id: number;
  name: string;
  logoUrl: string;
  website: string;
}

export interface ApplicationData {
  programId: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  dob: string;
  gender: string;
  nationality: string;
  academicLevel: string;
  fieldOfStudy: string;
  institution: string;
  lastTrimesterScore: string;
  idDocument: File | null;
  proofOfPayment: File | null;
  transcript: File | null;
  preferredUniversity: string;
  hopedChange: string;
}

export interface VenturesLabApplication {
  fullName: string;
  phone: string;
  email: string;
  location: string;
  age: string;
  gender: string;
  parentContact: string;

  tvetInstitution: string;
  tradeProgram: string;
  level: string;
  graduationYear: string;
  otherCertifications: string;

  technicalSkills: string;
  areasOfExpertise: string;
  relevantExperience: string;

  ideaName: string;
  problemSolving: string;
  whoExperiencesProblem: string;
  solution: string;
  whyImportant: string;
  whatMakesDifferent: string;
  currentStage: string;
  whatAlreadyDone: string;

  whyJoin: string;
  whySelectYou: string;
  sixWeekGoals: string;
  educationInterests: string;
  futureVision: string;

  canAttendFullProgram: boolean;
  hasLaptop: boolean;
  willingToPayFee: boolean;
  willingToParticipate: boolean;
}

export interface VolunteerApplication {
  fullName: string;
  phone: string;
  email: string;
  educationBackground: string;
  technicalArea: string;
  whyVolunteer: string;
  availability: string;
  relevantSkills: string;
}
