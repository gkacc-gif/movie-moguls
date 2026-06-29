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
  "the devil wears prada 2":  678043803,   // Last seen: Jun 29
  "toy story 5":              585041642,   // Last seen: Jun 29
  "toy story":                585041642,   // Same film — BOM lists as "Toy Story"
  "backrooms":                330098049,   // Last seen: Jun 29
  "the mandalorian & grogu":  325253370,   // Last seen: Jun 29
  "scary movie":              215323756,   // Last seen: Jun 29
  "scary movie 5":            215323756,   // Same film as scary movie — alias for Cinema Toast Crunch
  "disclosure day":           193668140,   // Last seen: Jun 29
  "the sheep detectives":     126497429,   // Last seen: Jun 29
  "mortal kombat 2":          129285378,   // Last seen: Jun 29
  "masters of the universe":  109335163,   // Last seen: Jun 29
  "supergirl":                 68000000,   // Last seen: Jun 29
  "minions & monsters":        10349000,   // Last seen: Jun 29
  "hokum":                     24068628,   // Last seen: Jun 23 (no change)
  "animal farm":                6217058,   // Last seen: Jun 29
  "power ballad":               3270938    // Last seen: Jun 29
  // Add new entries here as films release, e.g.:
  // "the odyssey": 0,
  // "moana": 0,
};
 
const LAST_UPDATED = "Jun 29, 2026";
