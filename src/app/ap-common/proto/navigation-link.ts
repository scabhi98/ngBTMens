import {ChildNavigationLink} from "./child-navigation-link";

export interface NavigationLink extends ChildNavigationLink{
  children?: ChildNavigationLink[];
}
