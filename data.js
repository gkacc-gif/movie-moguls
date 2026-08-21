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
  "toy story 5":              1116376834,  // Last seen: Aug 21
  "toy story":                1116376834,  // Same film — BOM lists as "Toy Story"
  "the devil wears prada 2":   692330651,  // Last seen: Aug 21
  "backrooms":                 396497717,  // Last seen: Aug 21
  "minions & monsters":        493835855,  // Last seen: Aug 21
  "the mandalorian & grogu":   345724060,  // Last seen: Aug 21
  "the odyssey":              1305674795,  // Last seen: Aug 21
  "disclosure day":            240689748,  // Last seen: Aug 21
  "scary movie":               231886052,  // Last seen: Aug 21
  "scary movie 5":             231886052,  // Same film as scary movie — alias for Cinema Toast Crunch
  "moana":                     294099435,  // Last seen: Aug 21
  "the sheep detectives":      132234419,  // Last seen: Aug 21
  "mortal kombat 2":           129470110,  // Last seen: Aug 21 (no change)
  "supergirl":                 126360945,  // Last seen: Aug 21
  "masters of the universe":   113782285,  // Last seen: Aug 21
  "evil dead: burn":            71458287,  // Last seen: Aug 21
  "hokum":                      24590727,  // Last seen: Aug 21
  "animal farm":                 6456679,  // Last seen: Aug 21
  "power ballad":                3338777,  // Last seen: Jul 21 (off chart — held)
  "spider-man":               2046432089,  // NEW: BOM lists as "Spider-Man: Brand New Day"
  "paw patrol":                 79950745,  // NEW: BOM lists as "PAW Patrol: The Dino Movie"
  "end of oak street":          63375831   // NEW: BOM lists as "The End of Oak Street"
  // Add new entries here as films release, e.g.:
  // "resident evil": 0,
  // "practical magic 2": 0,
};
 
const LAST_UPDATED = "Aug 21, 2026";
