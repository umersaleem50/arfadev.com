import { fullLogo, navPage } from "./global";

export const menuLink = `_type == "menuLink" =>{...,title,page->{slug}}`;

export const menuQuery = `*[_type=="menu"][0]{...,items[]{...,${navPage},_type == "navDropdown" =>{dropdownItems[]{...,${menuLink}}},featured{...,page->}},"logo":${fullLogo}}`;
