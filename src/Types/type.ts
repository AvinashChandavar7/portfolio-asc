export interface BlogData {
  uid: string;
  title: string;
  date: Date;
  tags: string[];
  hover_image: string;
}

export interface ProjectData {
  uid: string;
  title: string;
  date: Date;
  tags: string[];
  hover_image: string;
}

export type MainDataProps = {
  heading: string;
  content_type: "Blog" | "Project";
  description: string;
  view_more_text: string;
  fallback_item_image: string;
}
