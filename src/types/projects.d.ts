interface Projects {
  id: number;
  title: string;
  category: string;
  img_url: string;
  tech_stack: { name: string; logo: string }[];
  navigate_url: string | null;
  award: string | null;
  description: string;
}
