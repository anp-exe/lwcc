/* ============================================================================
   LWCC EVENTS AND FIXTURES DATA
   This is the ONLY file you need to edit to change what is on the website.

   The home page banner, the events page and the fixtures table all read
   from here. Anything whose date has passed hides itself automatically,
   so nothing goes stale if you forget to come back and delete it.

   TO ADD OR CHANGE AN EVENT
   -------------------------
   Copy one of the blocks below, edit the values, save, push. Done.
     date      "2026-09-19"   always YYYY-MM-DD
     ends      "2026-09-20"   only for multi day events, otherwise delete the line
     title     what the event is called
     where     the venue
     time      "9am to 7pm", free text, or delete the line
     note      one short extra line, or delete the line
     link      booking or RSVP url, or delete the line
     cta       the words on the button, e.g. "Register" or "RSVP"
     photo     "images/something.jpg" for the big card, or delete the line
     featured  true puts it in the big banner on the home page and the
               events page. If several are featured, the soonest one wins.
   ============================================================================ */

const LWCC_EVENTS = [
  {
    date: "2026-09-19",
    ends: "2026-09-20",
    title: "Women & Girls FIDE / ECF Classical Congress",
    where: "Pancras Square Library",
    time: "9am to 7pm",
    note: "Two day FIDE rated congress",
    link: "https://pci.jotform.com/form/260317120773349",
    cta: "Register",
    featured: true
  }
];

/* ============================================================================
   LEAGUE FIXTURES, 2026/27 SEASON
   Taken from the LWCC_League_Management_2026-27 sheet, Fixtures tab.
   Only the soonest month shows by default. Visitors can open the full season.

     date  "2026-09-07"      always YYYY-MM-DD
     time  "18:30"
     comp  the competition
     team  which LWCC team is playing
     opp   the opponent, or a description for one off events
     ha    "Home", "Away" or "Neutral"
     venue where it is played
   ============================================================================ */

const LWCC_FIXTURES = [
  { date: "2026-09-07", time: "18:00", comp: "City Chess Association Rapid", team: "LWCC", opp: "Season opening rapid, evening 1", ha: "Neutral", venue: "Evelyn Partners, 45 Gresham St" },
  { date: "2026-09-10", time: "18:30", comp: "Central London League, Division 4", team: "LWCC", opp: "Kings Head 2", ha: "Away", venue: "Pimlico Chess Club" },
  { date: "2026-09-21", time: "18:00", comp: "City Chess Association Rapid", team: "LWCC", opp: "Season opening rapid, evening 2", ha: "Neutral", venue: "Evelyn Partners, 45 Gresham St" },
  { date: "2026-09-28", time: "18:00", comp: "City Chess Association Rapid", team: "LWCC", opp: "Season opening rapid, evening 3", ha: "Neutral", venue: "Evelyn Partners, 45 Gresham St" },
  { date: "2026-10-06", time: "18:30", comp: "London Chess League, Women", team: "London Women Hou", opp: "Yas Queen! Women", ha: "Home", venue: "Charing Cross Library" },
  { date: "2026-10-10", time: "14:00", comp: "4NCL", team: "LWCC 4NCL Team", opp: "Weekend 1, round 1", ha: "Neutral", venue: "Mercure Bedford Centre Hotel" },
  { date: "2026-10-11", time: "11:00", comp: "4NCL", team: "LWCC 4NCL Team", opp: "Weekend 1, round 2", ha: "Neutral", venue: "Mercure Bedford Centre Hotel" },
  { date: "2026-10-12", time: "18:00", comp: "House of Parliament rapid and visit", team: "LWCC Parli", opp: "MPs", ha: "Away", venue: "Portcullis House, SW1A 2LW" },
  { date: "2026-10-29", time: "18:30", comp: "London Chess League, Women", team: "London Women Hou", opp: "London Universities Women", ha: "Away", venue: "KCL" },
  { date: "2026-11-05", time: "18:30", comp: "Central London League, Division 4", team: "LWCC", opp: "Hackney 2", ha: "Home", venue: "Pimlico Chess Club" },
  { date: "2026-11-10", time: "18:30", comp: "London Chess League, Minor", team: "London Women Cobra", opp: "Hammersmith Mackenzie", ha: "Home", venue: "Charing Cross Library" },
  { date: "2026-11-24", time: "18:30", comp: "London Chess League, Minor", team: "London Women Cobra", opp: "Battersea Minor", ha: "Home", venue: "Charing Cross Library" },
  { date: "2026-11-26", time: "18:30", comp: "Central London League, Division 4", team: "LWCC", opp: "Streatham 3", ha: "Home", venue: "Pimlico Chess Club" },
  { date: "2026-12-03", time: "18:30", comp: "Central London League, Division 4", team: "LWCC", opp: "Pimlico 4", ha: "Away", venue: "Pimlico Chess Club" },
  { date: "2026-12-08", time: "18:30", comp: "London Chess League, Women", team: "London Women Hou", opp: "Charlton Women", ha: "Home", venue: "Charing Cross Library" },
  { date: "2027-01-07", time: "18:30", comp: "Central London League, Division 4", team: "LWCC", opp: "Wanstead 2", ha: "Away", venue: "Pimlico Chess Club" },
  { date: "2027-01-12", time: "18:30", comp: "London Chess League, Minor", team: "London Women Cobra", opp: "Battersea Minor", ha: "Home", venue: "Charing Cross Library" },
  { date: "2027-01-14", time: "18:30", comp: "Central London League, Division 4", team: "LWCC", opp: "Kings Head 2", ha: "Home", venue: "Pimlico Chess Club" },
  { date: "2027-01-19", time: "18:30", comp: "London Chess League, Women", team: "London Women Hou", opp: "Hammersmith W2", ha: "Home", venue: "Charing Cross Library" },
  { date: "2027-01-23", time: "14:00", comp: "4NCL", team: "LWCC 4NCL Team", opp: "Weekend 2, round 3", ha: "Neutral", venue: "Holiday Inn Peterborough" },
  { date: "2027-01-24", time: "11:00", comp: "4NCL", team: "LWCC 4NCL Team", opp: "Weekend 2, round 4", ha: "Neutral", venue: "Holiday Inn Peterborough" },
  { date: "2027-02-02", time: "18:30", comp: "London Chess League, Minor", team: "London Women Cobra", opp: "Hammersmith Mackenzie", ha: "Home", venue: "Charing Cross Library" },
  { date: "2027-02-27", time: "14:00", comp: "4NCL", team: "LWCC 4NCL Team", opp: "Weekend 3, round 5", ha: "Neutral", venue: "Holiday Inn Coventry M6 Jct 2" },
  { date: "2027-02-28", time: "11:00", comp: "4NCL", team: "LWCC 4NCL Team", opp: "Weekend 3, round 6", ha: "Neutral", venue: "Holiday Inn Coventry M6 Jct 2" },
  { date: "2027-03-09", time: "19:00", comp: "London Chess League, Women", team: "London Women Hou", opp: "Wimbledon Women", ha: "Away", venue: "BLC" },
  { date: "2027-03-11", time: "18:30", comp: "Central London League, Division 4", team: "LWCC", opp: "Hackney 2", ha: "Away", venue: "Pimlico Chess Club" },
  { date: "2027-03-16", time: "18:30", comp: "London Chess League, Minor", team: "London Women Cobra", opp: "Hammersmith Mackenzie", ha: "Home", venue: "Charing Cross Library" },
  { date: "2027-03-20", time: "14:00", comp: "4NCL", team: "LWCC 4NCL Team", opp: "Weekend 4, round 7", ha: "Neutral", venue: "Holiday Inn Peterborough" },
  { date: "2027-03-21", time: "11:00", comp: "4NCL", team: "LWCC 4NCL Team", opp: "Weekend 4, round 8", ha: "Neutral", venue: "Holiday Inn Peterborough" },
  { date: "2027-04-06", time: "18:30", comp: "London Chess League, Minor", team: "London Women Cobra", opp: "Battersea Minor", ha: "Home", venue: "Charing Cross Library" },
  { date: "2027-04-08", time: "18:30", comp: "Central London League, Division 4", team: "LWCC", opp: "Streatham 3", ha: "Away", venue: "Pimlico Chess Club" },
  { date: "2027-04-15", time: "18:30", comp: "Central London League, Division 4", team: "LWCC", opp: "Pimlico 4", ha: "Home", venue: "Pimlico Chess Club" },
  { date: "2027-04-27", time: "18:30", comp: "London Chess League, Women", team: "London Women Hou", opp: "Battersea Women", ha: "Home", venue: "Charing Cross Library" },
  { date: "2027-05-01", time: "14:00", comp: "4NCL", team: "LWCC 4NCL Team", opp: "Weekend 5, round 9", ha: "Neutral", venue: "Holiday Inn Coventry M6 Jct 2" },
  { date: "2027-05-02", time: "14:00", comp: "4NCL", team: "LWCC 4NCL Team", opp: "Weekend 5, round 10", ha: "Neutral", venue: "Holiday Inn Coventry M6 Jct 2" },
  { date: "2027-05-03", time: "11:00", comp: "4NCL", team: "LWCC 4NCL Team", opp: "Weekend 5, round 11", ha: "Neutral", venue: "Holiday Inn Coventry M6 Jct 2" },
  { date: "2027-05-06", time: "18:30", comp: "Central London League, Division 4", team: "LWCC", opp: "Wanstead 2", ha: "Home", venue: "Pimlico Chess Club" },
  { date: "2027-05-18", time: "18:30", comp: "London Chess League, Minor", team: "London Women Cobra", opp: "Hammersmith Mackenzie", ha: "Home", venue: "Charing Cross Library" },
  { date: "2027-06-15", time: "18:30", comp: "London Chess League, Minor", team: "London Women Cobra", opp: "Battersea Minor", ha: "Home", venue: "Charing Cross Library" },
  { date: "2027-06-22", time: "18:30", comp: "London Chess League, Women", team: "London Women Hou", opp: "Hammersmith W1", ha: "Home", venue: "Charing Cross Library" }
];
