const STORIES = {
  drawer: {
    id: 'drawer',
    title: 'The Song That Stayed in the Drawer',
    lines: [
      'There was a song that lived in a drawer for fourteen years.',
      'He nearly threw it away twice. It felt ordinary. Too small. Too predictable.',
      'It just existed.',
      'For years, fear decided what was allowed outside the room.',
      'The drawer became an archive of restraint.',
      'It removed the drawer.',
      "Some songs aren't waiting to be better. They're waiting to be heard.",
    ],
  },
  kitchen: {
    id: 'kitchen',
    title: 'The Night Nothing Happened',
    lines: [
      'There was a night he almost told someone he wrote music.',
      "He didn't.",
      'He went home and wrote two more songs instead.',
      "He didn't lack ideas. He lacked permission.",
      'Watch. Write. Stay quiet.',
      "There's a particular loneliness in creating something you don't believe deserves daylight.",
      "Nothing happened that night in the kitchen. That's the point.",
    ],
  },
  chord: {
    id: 'chord',
    title: 'The Ordinary Chord',
    lines: [
      "He once spent three hours trying to change a chord because it sounded 'too obvious.'",
      'It ruined the song.',
      'He put the ordinary chord back.',
      'The Great Howl is built on ordinary chords.',
      'AI did not make them sophisticated. It made them audible.',
      'This music is built to admit something.',
      'The ordinary chord stayed. That feels right.',
    ],
  },
}

export default STORIES

export function getStory(id) {
  return STORIES[id]
}
