export interface TeamMember {
  id: string;
  name: string;
  role: string;
  image: string;
  contribution: string;
  obsessedWith: string;
}

export const TEAM_DATA: TeamMember[] = [
  {
    id: "t1",
    name: "Carmen Jessalyn Tjong Malik",
    role: "DESIGN",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&q=80",
    contribution:
      '"Every color, every curve, every little detail you see here — that\'s all mine."',
    obsessedWith: "Washi tape collections",
  },
  {
    id: "t2",
    name: "Hendri",
    role: "CREATIVE DIRECTION",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&q=80",
    contribution:
      '"Shaping the story and soul of Vienna — from mood boards to the voice behind every word."',
    obsessedWith: "Moodboards at 2am",
  },
  {
    id: "t3",
    name: "Nicholas Isaiah",
    role: "WEB DEVELOPMENT",
    image: "https://images.unsplash.com/photo-1519764622345-23439dd774f7?w=300&q=80",
    contribution:
      '"Building every pixel of this website — from database to deployment."',
    obsessedWith: "Clean TypeScript types",
  },
];
