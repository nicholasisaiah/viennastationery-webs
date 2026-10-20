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
    name: "Elowen Sage",
    role: "CREATIVE DIRECTION",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&q=80",
    contribution:
      '"The scrapbook layout and those little heart icons you see everywhere."',
    obsessedWith: "Matte gold paperclips",
  },
  {
    id: "t2",
    name: "Julian Reed",
    role: "INTERFACE DESIGN",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&q=80",
    contribution:
      '"Perfecting the hover effects so they feel like pressing a soft sticker."',
    obsessedWith: "Butter yellow paper",
  },
  {
    id: "t3",
    name: "Maya Chen",
    role: "WEB DEVELOPMENT",
    image: "https://images.unsplash.com/photo-1519764622345-23439dd774f7?w=300&q=80",
    contribution:
      '"Making sure all these messy elements actually stay in place on your screen."',
    obsessedWith: "Pixel-perfect kerning",
  },
];
