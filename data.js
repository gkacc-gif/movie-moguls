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
  "toy story 5":              957537644,   // Last seen: Jul 21
  "toy story":                957537644,   // Same film — BOM lists as "Toy Story"
  "the devil wears prada 2":  690275339,   // Last seen: Jul 21
  "backrooms":                384382240,   // Last seen: Jul 21
  "minions & monsters":       358447700,   // Last seen: Jul 21
  "the mandalorian & grogu":  344818222,   // Last seen: Jul 21
  "the odyssey":              263799900,   // Last seen: Jul 21
  "disclosure day":           234615711,   // Last seen: Jul 21
  "scary movie":              230077799,   // Last seen: Jul 21
  "scary movie 5":            230077799,   // Same film as scary movie — alias for Cinema Toast Crunch
  "moana":                    177331028,   // Last seen: Jul 21
  "the sheep detectives":     130574611,   // Last seen: Jul 21
  "mortal kombat 2":          129470110,   // Last seen: Jul 21
  "supergirl":                120807906,   // Last seen: Jul 21
  "masters of the universe":  113474410,   // Last seen: Jul 21
  "evil dead: burn":           51084445,   // Last seen: Jul 21
  "hokum":                     24071317,   // Last seen: Jul 21
  "animal farm":                6259778,   // Last seen: Jun 29 (no change)
  "power ballad":               3338777    // Last seen: Jul 21 (off chart — updated)
  // Add new entries here as films release, e.g.:
  // "spider-man: brand new day": 0,
  // "paw patrol": 0,
};

const LAST_UPDATED = "Jul 21, 2026";
