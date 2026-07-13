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
  "toy story 5":              879072720,   // Last seen: Jul 13
  "toy story":                879072720,   // Same film — BOM lists as "Toy Story"
  "the devil wears prada 2":  688171934,   // Last seen: Jul 13
  "backrooms":                363328808,   // Last seen: Jul 13
  "the mandalorian & grogu":  340470989,   // Last seen: Jul 13
  "minions & monsters":       280034335,   // Last seen: Jul 13
  "scary movie":              228193031,   // Last seen: Jul 13
  "scary movie 5":            228193031,   // Same film as scary movie — alias for Cinema Toast Crunch
  "disclosure day":           228994915,   // Last seen: Jul 13
  "the sheep detectives":     129767635,   // Last seen: Jul 13
  "mortal kombat 2":          129455207,   // Last seen: Jul 13
  "supergirl":                115401114,   // Last seen: Jul 13
  "masters of the universe":  112580092,   // Last seen: Jul 13
  "moana":                     95000000,   // Last seen: Jul 13
  "evil dead: burn":           40700000,   // Last seen: Jul 13
  "hokum":                     24063412,   // Last seen: Jun 29 (off chart — preserved)
  "animal farm":                6259778,   // Last seen: Jul 13
  "power ballad":               3324456    // Last seen: Jun 29 (off chart — preserved)
  // Add new entries here as films release, e.g.:
  // "the odyssey": 0,
  // "spider-man: brand new day": 0,
};
 
const LAST_UPDATED = "Jul 13, 2026";
 
