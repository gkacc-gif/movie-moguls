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
  "the devil wears prada 2": 446262196,   // Last seen: May 16
  "mortal kombat 2":          79132532,   // Last seen: May 16
  "the sheep detectives":     32285522,   // Last seen: May 16
  "hokum":                    18442719,   // Last seen: May 16
  "animal farm":               5426539    // Last seen: May 16
  // Add new entries here as films release, e.g.:
  // "toy story 5": 480000000,
  // "the mandalorian & grogu": 520000000,
};

const LAST_UPDATED = "May 16, 2026";
