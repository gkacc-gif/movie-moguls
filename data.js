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
  "toy story 5":              1144467589,  // Last seen: Sep 15
  "toy story":                1144467589,  // Same film — BOM lists as "Toy Story"
  "the devil wears prada 2":   693121651,  // Last seen: Sep 15
  "backrooms":                 394122453,  // Last seen: Sep 15
  "minions & monsters":        519033384,  // Last seen: Sep 15
  "the mandalorian & grogu":   345562060,  // Last seen: Sep 15
  "the odyssey":              1685556025,  // Last seen: Sep 15
  "disclosure day":            241288350,  // Last seen: Sep 15
  "scary movie":               231886052,  // Last seen: Sep 15
  "scary movie 5":             231886052,  // Same film as scary movie — alias for Cinema Toast Crunch
  "moana":                     321929887,  // Last seen: Sep 15
  "the sheep detectives":      133065980,  // Last seen: Sep 15
  "mortal kombat 2":           129470110,  // Last seen: Sep 15
  "supergirl":                 126366532,  // Last seen: Sep 15
  "masters of the universe":   113791362,  // Last seen: Sep 15
  "evil dead: burn":            72361568,  // Last seen: Sep 15
  "hokum":                      25023390,  // Last seen: Sep 15
  "animal farm":                 6554447,  // Last seen: Sep 15
  "power ballad":                3338777,  // Last seen: Jul 21 (off chart — kept)
  "spider-man":               2451432584,  // Spider-Man: Brand New Day — released, Last seen: Sep 15
  "paw patrol":                146503529,  // PAW Patrol: The Dino Movie — released, Last seen: Sep 15
  "practical magic 2":          46002526,  // Released, Last seen: Sep 15
  "coyote v. acme":             65002915,  // Coyote vs. Acme — released, Last seen: Sep 15
  "end of oak street":         118381105   // The End of Oak Street — released, Last seen: Sep 15
};
 
const LAST_UPDATED = "Sep 15, 2026";
