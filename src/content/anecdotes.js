const ANECDOTES = [
  // Story 1 — The Song That Stayed in the Drawer
  {
    id: 'drawer_1',
    story: 'drawer',
    text: 'There was a song that lived in a drawer for fourteen years.',
    suggestedLocations: ['home_mid'],
  },
  {
    id: 'drawer_2',
    story: 'drawer',
    text: 'The drawer became an archive of restraint.',
    suggestedLocations: ['home_mid', 'work_tracks'],
  },
  {
    id: 'drawer_3',
    story: 'drawer',
    text: "Some songs aren't waiting to be better. They're waiting to be heard.",
    suggestedLocations: ['home_mid', 'track_footer'],
  },
  {
    id: 'drawer_4',
    story: 'drawer',
    text: 'For years, fear decided what was allowed outside the room.',
    suggestedLocations: ['home_mid', 'work_tracks'],
  },

  // Story 2 — The Night Nothing Happened
  {
    id: 'kitchen_1',
    story: 'kitchen',
    text: "There's a particular loneliness in creating something you don't believe deserves daylight.",
    suggestedLocations: ['home_mid', 'global_footer'],
  },
  {
    id: 'kitchen_2',
    story: 'kitchen',
    text: "He didn't lack ideas. He lacked permission.",
    suggestedLocations: ['home_mid', 'work_tracks'],
  },
  {
    id: 'kitchen_3',
    story: 'kitchen',
    text: "Nothing happened that night in the kitchen. That's the point.",
    suggestedLocations: ['global_footer', 'home_mid'],
  },
  {
    id: 'kitchen_4',
    story: 'kitchen',
    text: 'Watch. Write. Stay quiet.',
    suggestedLocations: ['global_footer', 'track_footer'],
  },

  // Story 3 — The Ordinary Chord
  {
    id: 'chord_1',
    story: 'chord',
    text: 'The Great Howl is built on ordinary chords.',
    suggestedLocations: ['work_tracks', 'track_footer'],
  },
  {
    id: 'chord_2',
    story: 'chord',
    text: 'AI did not make them sophisticated. It made them audible.',
    suggestedLocations: ['work_tracks', 'track_footer'],
  },
  {
    id: 'chord_3',
    story: 'chord',
    text: 'The ordinary chord stayed. That feels right.',
    suggestedLocations: ['work_tracks', 'track_footer'],
  },
]

export default ANECDOTES

export function getAnecdote(id) {
  return ANECDOTES.find((a) => a.id === id)
}
