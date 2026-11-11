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
    role: "VISUAL DESIGN",
    image: "/team/carmen.jpg",
    contribution:
      '"Every color, every curve, every little detail you see here — that\'s all mine."',
    obsessedWith: "Aesthetic Pinterest boards",
  },
  {
    id: "t2",
    name: "Hendri",
    role: "CREATIVE DIRECTION",
    image: "/team/hendri.jpg",
    contribution:
      '"Shaping the story and soul of Vienna — from mood boards to the voice behind every word."',
    obsessedWith: "Storytelling & visual narratives",
  },
  {
    id: "t3",
    name: "Nicholas Isaiah",
    role: "WEB DEVELOPMENT",
    image: "/team/nicholas.jpg",
    contribution:
      '"Building every pixel of this website — from database to deployment."',
    obsessedWith: "Building things that actually work",
  },
];
