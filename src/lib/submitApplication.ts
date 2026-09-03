
import { supabase } from './supabase';
import { VenturesLabApplication, VolunteerApplication } from '../../types';

export async function submitVenturesLabApplication(data: VenturesLabApplication) {
  const { data: result, error } = await supabase
    .from('ventures_lab_applications')
    .insert([{
      full_name: data.fullName,
      phone: data.phone,
      email: data.email,
      location: data.location,
      age: data.age,
      gender: data.gender,
      parent_contact: data.parentContact,
      tvet_institution: data.tvetInstitution,
      trade_program: data.tradeProgram,
      level: data.level,
      graduation_year: data.graduationYear,
      other_certifications: data.otherCertifications,
      technical_skills: data.technicalSkills,
      areas_of_expertise: data.areasOfExpertise,
      relevant_experience: data.relevantExperience,
      idea_name: data.ideaName,
      problem_solving: data.problemSolving,
      who_experiences_problem: data.whoExperiencesProblem,
      solution: data.solution,
      why_important: data.whyImportant,
      what_makes_different: data.whatMakesDifferent,
      current_stage: data.currentStage,
      what_already_done: data.whatAlreadyDone,
      why_join: data.whyJoin,
      why_select_you: data.whySelectYou,
      six_week_goals: data.sixWeekGoals,
      education_interests: data.educationInterests,
      future_vision: data.futureVision,
      can_attend_full_program: data.canAttendFullProgram,
      has_laptop: data.hasLaptop,
      willing_to_pay_fee: data.willingToPayFee,
      willing_to_participate: data.willingToParticipate,
    }])
    .select()
    .single();

  if (error) throw error;
  return result;
}

export async function submitVolunteerApplication(data: VolunteerApplication) {
  const { data: result, error } = await supabase
    .from('volunteer_applications')
    .insert([{
      full_name: data.fullName,
      phone: data.phone,
      email: data.email,
      education_background: data.educationBackground,
      technical_area: data.technicalArea,
      why_volunteer: data.whyVolunteer,
      availability: data.availability,
      relevant_skills: data.relevantSkills,
    }])
    .select()
    .single();

  if (error) throw error;
  return result;
}
