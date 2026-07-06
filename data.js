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
  "toy story 5":              764348690,   // Last seen: Jul 6
  "toy story":                764348690,   // Same film — BOM lists as "Toy Story"
  "the devil wears prada 2":  678382322,   // Last seen: Jul 6
  "backrooms":                349792472,   // Last seen: Jul 6
  "the mandalorian & grogu":  329028400,   // Last seen: Jul 6
  "scary movie":              223702451,   // Last seen: Jul 6
  "scary movie 5":            223702451,   // Same film as scary movie — alias for Cinema Toast Crunch
  "disclosure day":           216557885,   // Last seen: Jul 6
  "minions & monsters":       159870395,   // Last seen: Jul 6
  "the sheep detectives":     128530387,   // Last seen: Jul 6
  "mortal kombat 2":          129419161,   // Last seen: Jul 6
  "masters of the universe":  110540345,   // Last seen: Jul 6
  "supergirl":                100500000,   // Last seen: Jul 6
  "hokum":                     24068628,   // Last seen: Jun 29 (off chart — preserved)
  "animal farm":                6217058,   // Last seen: Jun 29 (no change)
  "power ballad":               3270938    // Last seen: Jun 29 (off chart — preserved)
  // Add new entries here as films release, e.g.:
  // "the odyssey": 0,
  // "moana": 0,
};
 
const LAST_UPDATED = "Jul 6, 2026";
