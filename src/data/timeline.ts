export interface TimelineStep {
  stepNumber: string;
  title: string;
  description: string;
  bgClass: string;
}

export const TIMELINE_STEPS: TimelineStep[] = [
  {
    stepNumber: "01",
    title: "Idea",
    description: "Scattered notes on a napkin in late 2023",
    bgClass: "bg-vienna-paper-gray border border-vienna-lavender/40",
  },
  {
    stepNumber: "02",
    title: "Moodboards",
    description: "Pinning 400+ references of vintage labels",
    bgClass: "bg-vienna-blush",
  },
  {
    stepNumber: "03",
    title: "Designing",
    description: "Finding the 'perfect' cream #FAF9F6",
    bgClass: "bg-white border border-vienna-lavender/40",
  },
  {
    stepNumber: "04",
    title: "Building",
    description: "Translating scrapbook logic into clean code",
    bgClass: "bg-vienna-offwhite border border-vienna-lavender/40",
  },
  {
    stepNumber: "05",
    title: "Tiny Details",
    description: "Adding the tape effects and grainy textures",
    bgClass: "bg-vienna-lavender-card",
  },
  {
    stepNumber: "06",
    title: "Finally Here",
    description: "Welcome to our little corner of the web",
    bgClass: "bg-vienna-pink-pastel",
  },
];
