import { FLAG_ALT, FLAG_MAP } from './flagMap'

export const PREVIEW_GROUPS = [
  {
    letter: 'A',
    color: '#0A0A0A',
    teams: [
      { flag: FLAG_MAP.BRA, name: 'Brazil', conf: 'CONM', confClass: 'conm', alt: FLAG_ALT.BRA },
      { flag: FLAG_MAP.FRA, name: 'France', conf: 'UEFA', confClass: 'uefa', alt: FLAG_ALT.FRA },
      {
        flag: FLAG_MAP.USA,
        name: 'United States',
        conf: 'CONC',
        confClass: 'conc',
        alt: FLAG_ALT.USA,
      },
      { flag: FLAG_MAP.JPN, name: 'Japan', conf: 'AFC', confClass: 'afc', alt: FLAG_ALT.JPN },
    ],
  },
  {
    letter: 'B',
    color: '#00A859',
    teams: [
      { flag: FLAG_MAP.ARG, name: 'Argentina', conf: 'CONM', confClass: 'conm', alt: FLAG_ALT.ARG },
      { flag: FLAG_MAP.ESP, name: 'Spain', conf: 'UEFA', confClass: 'uefa', alt: FLAG_ALT.ESP },
      { flag: FLAG_MAP.MAR, name: 'Morocco', conf: 'CAF', confClass: 'caf', alt: FLAG_ALT.MAR },
      { flag: FLAG_MAP.KOR, name: 'South Korea', conf: 'AFC', confClass: 'afc', alt: FLAG_ALT.KOR },
    ],
  },
]
