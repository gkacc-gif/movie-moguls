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
  "spider-man":               2219901181,  // NEW — BOM lists as "Spider-Man: Brand New Day"
  "the odyssey":              1448194630,  // Last seen: Aug 25
  "toy story 5":              1128578473,  // Last seen: Aug 25
  "toy story":                1128578473,  // Same film — BOM lists as "Toy Story"
  "the devil wears prada 2":   692677651,  // Last seen: Aug 25
  "minions & monsters":        505515960,  // Last seen: Aug 25
  "backrooms":                 396586433,  // Last seen: Aug 25
  "the mandalorian & grogu":   345838060,  // Last seen: Aug 25 (BOM: Star Wars: The Mandalorian and Grogu)
  "moana":                     308159595,  // Last seen: Aug 25
  "disclosure day":            241186430,  // Last seen: Aug 25
  "scary movie":               231886052,  // Last seen: Aug 25
  "scary movie 5":             231886052,  // Same film as scary movie — alias for Cinema Toast Crunch
  "the sheep detectives":      132234419,  // Last seen: Aug 25
  "mortal kombat 2":           129470110,  // Last seen: Aug 25 (BOM: Mortal Kombat II)
  "supergirl":                 126366532,  // Last seen: Aug 25
  "masters of the universe":   113782285,  // Last seen: Aug 25
  "paw patrol":                103480242,  // NEW — BOM: PAW Patrol: The Dino Movie
  "end of oak street":          85717407,  // NEW — BOM: The End of Oak Street
  "evil dead: burn":            71491178,  // Last seen: Aug 25 (BOM: Evil Dead Burn)
  "hokum":                      24901246,  // Last seen: Aug 25
  "animal farm":                 6479768,  // Last seen: Aug 25
  "power ballad":                3338777   // Last seen: Jul 21 (off chart — held)
  // Add new entries here as films release, e.g.:
  // "resident evil": 0,
  // "practical magic 2": 0,
};
 
const LAST_UPDATED = "Aug 25, 2026";
