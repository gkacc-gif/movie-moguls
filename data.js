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
  "the devil wears prada 2":  664822425,   // Last seen: Jun 12
  "the mandalorian & grogu":  297271900,   // Last seen: Jun 12
  "backrooms":                220638624,   // Last seen: Jun 12
  "scary movie":              121969488,   // Last seen: Jun 12
  "mortal kombat 2":          128190032,   // Last seen: Jun 12
  "the sheep detectives":     115953209,   // Last seen: Jun 12
  "masters of the universe":   61613511,   // Last seen: Jun 12
  "hokum":                     23940823,   // Last seen: Jun 12
  "animal farm":                6099901    // Last seen: Jun 12
  // Add new entries here as films release, e.g.:
  // "toy story 5": 0,
  // "supergirl": 0,
};
 
const LAST_UPDATED = "Jun 12, 2026";
