import { languageSupport, logoMark, navPage } from "./global";

export const footerQuery = `*[_type=="footer"][0]{...,footerRoutes[]{...,routes[]{...,${navPage}}},policies[]{...,${navPage}},"langSupport":${languageSupport},"logo":${logoMark}}`;
