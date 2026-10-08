// SITE SETTINGS FOR THE BLACK HAT REPORT
// Change only the words inside the quote marks "like this".
// Keep every quote mark, comma and bracket exactly as they are.
// "Other" is added to companies and trades by itself. "Other" and "N/A" are added to areas by itself.
// Save this file, then put the whole folder on Netlify.

window.SITE = {

  // Company name shown at the top of the form
  company: "CSK Stålindustri",

  // Short company name for the "Who stopped you?" button
  ownShort: "CSK",

  // Project or site name. It also goes on every report.
  project: "CPH03 / CPH04",

  // Main contractor. Used in "Who stopped you?" and "Instruction from ... or anyone else?"
  mainContractor: "Sisk",

  // Companies working in the black hats' teams
  companies: ["CSK", "MBMN", "LNW", "LCK"],

  // Work areas the black hats pick from, one per line, in this order.
  // To add an area: copy a whole line, paste it under, change the words.
  // Keep the quote marks and the comma at the end of every line.
  areas: [
    "CPH04 Admin",
    "CPH04 Colo 1",
    "CPH04 Colo 2",
    "CPH04 Colo 3",
    "CPH04 Gantry",
    "CPH03 Colo 4",
    "CPH03 Colo 5",
    "CPH03 RAB wall North",
    "CPH03 RAB wall South",
    "CPH03 RAB wall East",
    "CPH03 RAB wall West",
  ],

  // Trades in a team
  trades: ["Steel erectors", "Black hats", "Riggers", "Crane operator", "Spotters", "Painters", "Deckers", "Fitters", "Logistics"]

};
