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
  "spider-man":                        2496384465,   // Final: Sep 30
  "spider-man: brand new day":         2496384465,   // Same film — BOM lists full title
  "the odyssey":                       1752803340,   // Final: Sep 30
  "toy story 5":                       1147460805,   // Final: Sep 30
  "toy story":                         1147460805,   // Same film — BOM lists as "Toy Story"
  "the devil wears prada 2":            693205651,   // Final: Sep 30
  "minions & monsters":                 523559980,   // Final: Sep 30
  "backrooms":                          400685080,   // Final: Sep 30
  "the mandalorian & grogu":            345602060,   // Final: Sep 30
  "star wars: the mandalorian and grogu": 345602060, // Same film — BOM lists full title
  "moana":                              323447663,   // Final: Sep 30
  "disclosure day":                     241492397,   // Final: Sep 30
  "scary movie":                        231886052,   // Final: Sep 30
  "scary movie 5":                      231886052,   // Same film as scary movie — alias for Cinema Toast Crunch
  "resident evil":                      202298709,   // Final: Sep 30
  "paw patrol":                         154931093,   // Final: Sep 30
  "paw patrol: the dino movie":         154931093,   // Same film — BOM lists full title
  "the sheep detectives":               133125236,   // Final: Sep 30
  "mortal kombat 2":                    129570110,   // Final: Sep 30
  "supergirl":                          126466532,   // Final: Sep 30
  "end of oak street":                  121181510,   // Final: Sep 30
  "the end of oak street":              121181510,   // Same film — BOM lists with "The"
  "masters of the universe":            113792300,   // Final: Sep 30
  "coyote v. acme":                      93809809,   // Final: Sep 30
  "coyote vs. acme":                     93809809,   // Same film — BOM lists with "vs."
  "practical magic 2":                   93610456,   // Final: Sep 30
  "evil dead: burn":                     72373081,   // Final: Sep 30
  "evil dead burn":                      72373081,   // Same film — BOM lists without colon
  "hokum":                               25023390,   // Final: Sep 30
  "animal farm":                          6603826,   // Final: Sep 30
  "power ballad":                         3338777    // Last seen: Jul 21 (off chart — carried forward)
};
 
const LAST_UPDATED = "Oct 1, 2026";
