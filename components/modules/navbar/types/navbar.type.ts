import { INavDropdown } from "@/sanity/schemaTypes/objects/nav-dropdown";
import { INavLink } from "@/sanity/schemaTypes/objects/navlink";
import { INavPage } from "@/sanity/schemaTypes/objects/navpage";
import { SanityImageSource } from "@sanity/image-url/lib/types/types";

export interface NavbarProps {
  logo?: SanityImageSource;
  items?: Array<INavPage | INavLink | INavDropdown>;
}
