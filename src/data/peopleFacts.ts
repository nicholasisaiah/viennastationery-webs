export interface PeopleFact {
  id: string;
  category: string;
  content: string;
  bgClass: string;
  rotation: number;
  isWide?: boolean;
}

export const PEOPLE_FACTS: PeopleFact[] = [
  {
    id: "f1",
    category: "FAVORITE STATIONERY",
    content: "Glass dip pens and deep forest green ink.",
    bgClass: "bg-white text-vienna-text-heading border border-vienna-lavender/40",
    rotation: -2,
  },
  {
    id: "f2",
    category: "DESIGN WEAKNESS",
    content: "Adding 'just one more' heart icon.",
    bgClass: "bg-vienna-blush text-vienna-text-heading",
    rotation: 2,
  },
  {
    id: "f3",
    category: "FIGMA FEATURE",
    content: "Multi-edit for those 100+ tiny dots.",
    bgClass: "bg-vienna-offwhite text-vienna-text-heading border border-vienna-lavender/40",
    rotation: -1,
  },
  {
    id: "f4",
    category: "DESK ESSENTIAL",
    content: "A very large candle that smells like old libraries.",
    bgClass: "bg-white text-vienna-text-heading border border-vienna-lavender/40",
    rotation: 3,
  },
  {
    id: "f5",
    category: "SOMETHING WE LEARNED",
    content:
      "\"The web doesn't have to be cold. It can feel as warm as a handwritten letter if you put in the work.\"",
    bgClass: "bg-vienna-lavender-card text-vienna-text-heading",
    rotation: 0,
    isWide: true,
  },
];
