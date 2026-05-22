// ============================================================
//  ACC Movie Moguls 2026 — Box Office Data
//  Source: https://www.boxofficemojo.com/year/world/
//
//  HOW TO UPDATE:
//  1. Paste the latest BOM top 200 table in Claude chat
//  2. Claude will give you a new data.js with updated numbers
//  3. Replace this file in GitHub — all three pages update automatically
//
//  IMPORTANT — DO NOT DELETE ENTRIES:
//  Once a film has a number, keep it even if it falls off the
//  BOM top 200. Only update a film's number if the new figure
//  is HIGHER than what's already here. This file is the
//  permanent record for the season.
//
//  If a film falls off the top 200, look it up directly at:
//  https://www.boxofficemojo.com/title/[film-id]/
//  and update manually.
// ============================================================

const EARNINGS = {
  "the devil wears prada 2": 552255658,   // Last seen: May 22
  "mortal kombat 2":         108032933,   // Last seen: May 22
  "the sheep detectives":     63154101,   // Last seen: May 22
  "hokum":                    21124333,   // Last seen: May 22
  "animal farm":               5655009    // Last seen: May 22
  // Add new entries here as films release, e.g.:
  // "toy story 5": 480000000,
  // "the mandalorian & grogu": 520000000,
};
 
const LAST_UPDATED = "May 22, 2026";
