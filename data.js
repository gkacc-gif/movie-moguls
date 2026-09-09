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
  "toy story 5":                     1141503594,   // Last seen: Sep 9
  "toy story":                       1141503594,   // Same film — BOM lists as "Toy Story"
  "the devil wears prada 2":          693065651,   // Last seen: Sep 9
  "backrooms":                        394122453,   // Last seen: Sep 9
  "minions & monsters":               519016139,   // Last seen: Sep 9
  "the mandalorian & grogu":          345545060,   // Last seen: Sep 9 (BOM: "Star Wars: The Mandalorian and Grogu")
  "star wars: the mandalorian and grogu": 345545060, // Alias — BOM title
  "the odyssey":                     1637931982,   // Last seen: Sep 9
  "disclosure day":                   241288350,   // Last seen: Sep 9
  "scary movie":                      231886052,   // Last seen: Sep 9
  "scary movie 5":                    231886052,   // Same film as scary movie — alias for Cinema Toast Crunch
  "moana":                            319893609,   // Last seen: Sep 9
  "the sheep detectives":             132804068,   // Last seen: Sep 9
  "mortal kombat 2":                  129470110,   // Last seen: Sep 9 (BOM: "Mortal Kombat II")
  "mortal kombat ii":                 129470110,   // Alias — BOM title
  "supergirl":                        126366532,   // Last seen: Sep 9
  "masters of the universe":          113787587,   // Last seen: Sep 9
  "evil dead: burn":                   72326382,   // Last seen: Sep 9 (BOM: "Evil Dead Burn")
  "evil dead burn":                    72326382,   // Alias — BOM title
  "hokum":                             25023390,   // Last seen: Sep 9
  "animal farm":                        6503698,   // Last seen: Sep 9
  "power ballad":                       3338777,   // Last seen: Jul 21 (off chart — carried forward)
  // New entries this week (Sep 9):
  "spider-man":                      2408466178,   // Last seen: Sep 9 (BOM: "Spider-Man: Brand New Day")
  "spider-man: brand new day":       2408466178,   // Alias — BOM title
  "paw patrol":                       138489610,   // Last seen: Sep 9 (BOM: "PAW Patrol: The Dino Movie")
  "paw patrol: the dino movie":       138489610,   // Alias — BOM title
  "end of oak street":                115517893,   // Last seen: Sep 9 (BOM: "The End of Oak Street")
  "the end of oak street":            115517893,   // Alias — BOM title
  "coyote v. acme":                    49504410,   // Last seen: Sep 9 (BOM: "Coyote vs. Acme")
  "coyote vs. acme":                   49504410    // Alias — BOM title
};
 
const LAST_UPDATED = "Sep 9, 2026";
