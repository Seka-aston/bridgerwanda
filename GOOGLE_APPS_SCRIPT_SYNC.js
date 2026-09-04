/**
 * Google Apps Script — Supabase → Google Sheets Sync
 *
 * SETUP:
 * 1. Open your Google Sheet: https://docs.google.com/spreadsheets/d/19sTKR0cDcoNQxJ6sgSfbFEwwBL9orducbxWB2s-UjXg
 * 2. Go to Extensions > Apps Script
 * 3. Delete any existing code and paste this entire script
 * 4. Click Deploy > New deployment
 * 5. Type: "Web app"
 * 6. Execute as: "Me"
 * 7. Who has access: "Anyone"
 * 8. Click Deploy, authorize when prompted
 * 9. Copy the Web app URL and share it back so we can connect the trigger
 */

function doPost(e) {
  try {
    const payload = JSON.parse(e.postData.contents);
    const record = payload.record;
    const table = payload.table;
    const ss = SpreadsheetApp.getActiveSpreadsheet();

    if (table === 'ventures_lab_applications') {
      let sheet = ss.getSheetByName('Ventures Lab');
      if (!sheet) {
        sheet = ss.insertSheet('Ventures Lab');
        sheet.appendRow([
          'Timestamp', 'Full Name', 'Phone', 'Email', 'Location', 'Age', 'Gender',
          'Parent Contact', 'TVET Institution', 'Trade/Program', 'Level',
          'Graduation Year', 'Other Certifications', 'Technical Skills',
          'Areas of Expertise', 'Relevant Experience', 'Idea Name',
          'Problem Solving', 'Who Experiences Problem', 'Solution',
          'Why Important', 'What Makes Different', 'Current Stage',
          'What Already Done', 'Why Join', 'Why Select You',
          'Six Week Goals', 'Education Interests', 'Future Vision',
          'Can Attend Full Program', 'Has Laptop', 'Willing to Pay Fee',
          'Willing to Participate'
        ]);
        sheet.getRange(1, 1, 1, sheet.getLastColumn()).setFontWeight('bold');
      }
      sheet.appendRow([
        record.created_at,
        record.full_name, record.phone, record.email, record.location,
        record.age, record.gender, record.parent_contact,
        record.tvet_institution, record.trade_program, record.level,
        record.graduation_year, record.other_certifications,
        record.technical_skills, record.areas_of_expertise,
        record.relevant_experience, record.idea_name,
        record.problem_solving, record.who_experiences_problem,
        record.solution, record.why_important, record.what_makes_different,
        record.current_stage, record.what_already_done,
        record.why_join, record.why_select_you, record.six_week_goals,
        record.education_interests, record.future_vision,
        record.can_attend_full_program, record.has_laptop,
        record.willing_to_pay_fee, record.willing_to_participate
      ]);
    }

    if (table === 'volunteer_applications') {
      let sheet = ss.getSheetByName('Volunteers');
      if (!sheet) {
        sheet = ss.insertSheet('Volunteers');
        sheet.appendRow([
          'Timestamp', 'Full Name', 'Phone', 'Email',
          'Education Background', 'Technical Area',
          'Why Volunteer', 'Availability', 'Relevant Skills'
        ]);
        sheet.getRange(1, 1, 1, sheet.getLastColumn()).setFontWeight('bold');
      }
      sheet.appendRow([
        record.created_at,
        record.full_name, record.phone, record.email,
        record.education_background, record.technical_area,
        record.why_volunteer, record.availability, record.relevant_skills
      ]);
    }

    return ContentService.createTextOutput(JSON.stringify({ status: 'success' }))
      .setMimeType(ContentService.MimeType.JSON);

  } catch (error) {
    return ContentService.createTextOutput(JSON.stringify({ status: 'error', message: error.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}
