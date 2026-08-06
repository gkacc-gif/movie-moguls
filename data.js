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
  "spider-man":              1155469617,   // Spider-Man: Brand New Day — dropped this week
  "toy story 5":              1069518777,   // Last seen: Aug 6 — crossed $1B
  "toy story":                1069518777,   // Same film — BOM lists as "Toy Story"
  "the odyssey":               930896155,   // Last seen: Aug 6 — massive jump
  "the devil wears prada 2":   691379651,   // Last seen: Aug 6
  "minions & monsters":        451746275,   // Last seen: Aug 6
  "backrooms":                 394981001,   // Last seen: Aug 6
  "the mandalorian & grogu":   345166617,   // Last seen: Aug 6
  "moana":                     263832434,   // Last seen: Aug 6
  "disclosure day":            240659748,   // Last seen: Aug 6
  "scary movie":               231467451,   // Last seen: Aug 6
  "scary movie 5":             231467451,   // Same film as scary movie — alias for Cinema Toast Crunch
  "the sheep detectives":      131550648,   // Last seen: Aug 6
  "mortal kombat 2":           129470110,   // Last seen: Aug 6 (no change)
  "supergirl":                 125901095,   // Last seen: Aug 6
  "masters of the universe":   113763426,   // Last seen: Aug 6
  "evil dead: burn":            66692700,   // Last seen: Aug 6 (BOM lists as "Evil Dead Burn")
  "hokum":                      24117049,   // Last seen: Aug 6
  "animal farm":                 6390950,   // Last seen: Aug 6
  "power ballad":                3384158    // Last seen: Aug 6 (off chart — updated manually)
  // Add new entries here as films release, e.g.:
  // "paw patrol": 0,
  // "coyote v. acme": 0,
};
 
const LAST_UPDATED = "Aug 6, 2026";
