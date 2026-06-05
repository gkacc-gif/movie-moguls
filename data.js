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
  "the devil wears prada 2":  643882487,   // Last seen: Jun 5
  "the mandalorian & grogu":  253353367,   // Last seen: Jun 5
  "backrooms":                140969775,   // Last seen: Jun 5
  "mortal kombat 2":          126825685,   // Last seen: Jun 5
  "the sheep detectives":     105093325,   // Last seen: Jun 5
  "hokum":                     23716471,   // Last seen: Jun 5
  "animal farm":                5768854    // Last seen: Jun 5
  // Add new entries here as films release, e.g.:
  // "toy story 5": 480000000,
  // "masters of the universe": 0,
};

const LAST_UPDATED = "Jun 5, 2026";