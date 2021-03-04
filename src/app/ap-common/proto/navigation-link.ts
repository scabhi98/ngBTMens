import {Link} from "./link";
import {ApIcon} from "./ap-icon";

export interface NavigationLink extends Link{
  icon?: ApIcon;
  children?: Link[];
}
