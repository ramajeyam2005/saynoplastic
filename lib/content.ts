export type ProblemId =
  | 'soil'
  | 'water'
  | 'wildlife'
  | 'health'
  | 'air'
  | 'environment'

export const problems: {
  id: ProblemId
  title: string
  description: string
}[] = [
  {
    id: 'soil',
    title: 'Soil Pollution',
    description:
      'Plastic damages soil quality and affects plant growth, leaving the ground that feeds our forests and farms less healthy.',
  },
  {
    id: 'water',
    title: 'Water Pollution',
    description:
      'Plastic waste contaminates rivers, lakes, and oceans, travelling far from where it was first dropped.',
  },
  {
    id: 'wildlife',
    title: 'Wildlife Danger',
    description:
      'Animals and birds may eat plastic by mistake or become trapped in it, causing injury and suffering.',
  },
  {
    id: 'health',
    title: 'Human Health',
    description:
      'Microplastics can enter our food and drinking water, and scientists are still studying what that means for our bodies.',
  },
  {
    id: 'air',
    title: 'Air Pollution',
    description:
      'Burning plastic releases harmful pollutants into the air that people, plants and animals all breathe.',
  },
  {
    id: 'environment',
    title: 'Environmental Damage',
    description:
      'Plastic takes a very long time to break down, so what we throw away today stays in nature for generations.',
  },
]

export const stats: {
  value: number
  prefix?: string
  suffix: string
  label: string
  detail: string
  source: string
  sourceUrl: string
}[] = [
  {
    value: 400,
    suffix: ' million tonnes',
    label: 'Plastic waste produced every year',
    detail: 'The world generates roughly this much plastic waste annually.',
    source: 'UN Environment Programme',
    sourceUrl: 'https://www.unep.org/plastic-pollution',
  },
  {
    value: 9,
    suffix: '%',
    label: 'Of plastic waste is recycled',
    detail: 'Most of the rest is landfilled, burned, or leaks into nature.',
    source: 'OECD Global Plastics Outlook (2019 data)',
    sourceUrl: 'https://www.oecd.org/environment/plastics/',
  },
  {
    value: 19,
    suffix: '–23 million tonnes',
    label: 'Flows into lakes, rivers and seas each year',
    detail: 'That is plastic entering aquatic ecosystems annually.',
    source: 'UN Environment Programme',
    sourceUrl: 'https://www.unep.org/plastic-pollution',
  },
  {
    value: 450,
    prefix: '~',
    suffix: ' years',
    label: 'For a plastic bottle to break down',
    detail: 'A widely cited estimate; real times vary with conditions.',
    source: 'NOAA Marine Debris Program estimate',
    sourceUrl: 'https://marinedebris.noaa.gov/',
  },
  {
    value: 8.3,
    suffix: ' billion tonnes',
    label: 'Plastic made between 1950 and 2015',
    detail: 'Most of it has become waste, and a lot of it is still around.',
    source: 'Geyer, Jambeck & Law, Science Advances (2017)',
    sourceUrl: 'https://www.science.org/doi/10.1126/sciadv.1700782',
  },
]

export const wasteFate: {
  label: string
  percent: number
  className: string
}[] = [
  { label: 'Landfilled', percent: 50, className: 'bg-bark-500' },
  { label: 'Mismanaged or littered', percent: 22, className: 'bg-sun-400' },
  { label: 'Incinerated', percent: 19, className: 'bg-bark-300' },
  { label: 'Recycled', percent: 9, className: 'bg-forest-400' },
]

export const solutions: {
  id: 'bottle' | 'bag' | 'single-use' | 'recycle' | 'alternatives'
  title: string
  description: string
}[] = [
  {
    id: 'bottle',
    title: 'Carry a reusable water bottle',
    description:
      'One refillable bottle replaces hundreds of disposable ones. Keep it in your bag and refill it wherever you go.',
  },
  {
    id: 'bag',
    title: 'Use cloth bags',
    description:
      'Say no to thin plastic bags. A cloth bag is strong, washable and ready for years of shopping trips.',
  },
  {
    id: 'single-use',
    title: 'Avoid single-use plastics',
    description:
      'Skip plastic straws, cutlery, cups and wrappers when you can. Simply saying "no thanks" makes a difference.',
  },
  {
    id: 'recycle',
    title: 'Recycle plastic properly',
    description:
      'Rinse containers, sort them by your local rules, and keep recyclables clean so they can actually be reused.',
  },
  {
    id: 'alternatives',
    title: 'Choose eco-friendly alternatives',
    description:
      'Look for glass, steel, bamboo, paper or compostable options, and support brands that cut down on packaging.',
  },
]

export const pledgeItems = [
  'I will carry a reusable water bottle',
  'I will bring my own cloth bag',
  'I will refuse one single-use plastic item every day',
  'I will sort and recycle my plastic properly',
  'I will choose a plastic-free alternative this week',
]
