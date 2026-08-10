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
  "spider-man":               1665088528,  // Last seen: Aug 10 (BOM: "Spider-Man: Brand New Day")
  "the odyssey":              1104804890,  // Last seen: Aug 10
  "toy story 5":              1093981614,  // Last seen: Aug 10
  "toy story":                1093981614,  // Same film — BOM lists as "Toy Story"
  "the devil wears prada 2":   691379651,  // Last seen: Aug 10
  "minions & monsters":        473539045,  // Last seen: Aug 10
  "backrooms":                 395180370,  // Last seen: Aug 10
  "the mandalorian & grogu":   345168060,  // Last seen: Aug 10 (BOM: "Star Wars: The Mandalorian and Grogu")
  "moana":                     280441267,  // Last seen: Aug 10
  "disclosure day":            240689748,  // Last seen: Aug 10
  "scary movie":               231467451,  // Last seen: Aug 10
  "scary movie 5":             231467451,  // Same film as scary movie — alias for Cinema Toast Crunch
  "the sheep detectives":      131880924,  // Last seen: Aug 10
  "mortal kombat 2":           129470110,  // Last seen: Aug 10 (BOM: "Mortal Kombat II")
  "supergirl":                 126118944,  // Last seen: Aug 10
  "masters of the universe":   113775940,  // Last seen: Aug 10
  "evil dead: burn":            61626028,  // Last seen: Aug 10 (BOM: "Evil Dead Burn")
  "paw patrol":                 25000000,  // Last seen: Aug 10 (BOM: "PAW Patrol: The Dino Movie" — early debut)
  "hokum":                      24117049,  // Last seen: Aug 10
  "animal farm":                 6390950,  // Last seen: Aug 10
  "power ballad":                3338777   // Last seen: Jul 21 (off chart — held)
  // Add new entries here as films release, e.g.:
  // "coyote v. acme": 0,
  // "end of oak street": 0,
};
 
const LAST_UPDATED = "Aug 10, 2026";
