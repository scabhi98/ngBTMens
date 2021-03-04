import {PostType} from "./post-type.enum";

export interface PostData {
  title: string;
  content: string;
  url?: string;
  type: PostType;
  author: string;
}
