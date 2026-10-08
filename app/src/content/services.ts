import data from "./services.json";
export type Service={slug:string;title:string;short:string;summary:string;problem:string;examine:string[];change:string[];deliver:string[]};
export const services:Service[]=data;
export function serviceHref(s:Service){return s.slug==="microsoft-ai-governance"?"/microsoft-ai":"/services/"+s.slug;}
