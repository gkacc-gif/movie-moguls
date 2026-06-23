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
  "the devil wears prada 2":  677407223,   // Last seen: Jun 19
  "the mandalorian & grogu":  322039029,   // Last seen: Jun 19
  "toy story 5":              311677837,   // Last seen: Jun 19
  "backrooms":                273531857,   // Last seen: Jun 19
  "scary movie":              201649724,   // Last seen: Jun 19
  "scary movie 5":            201649724,   // Same film as scary movie — alias for Cinema Toast Crunch
  "disclosure day":           160858640,   // Last seen: Jun 19
  "mortal kombat 2":          129154140,   // Last seen: Jun 19
  "the sheep detectives":     126208518,   // Last seen: Jun 19
  "masters of the universe":  102489787,   // Last seen: Jun 19
  "hokum":                     24068628,   // Last seen: Jun 19
  "animal farm":                6206841,   // Last seen: Jun 19
  "power ballad":               3251256    // Last seen: Jun 19
  // Add new entries here as films release, e.g.:
  // "supergirl": 0,
  // "moana": 0,
};
 
const LAST_UPDATED = "Jun 23, 2026";
