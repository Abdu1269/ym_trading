import { Lang } from "./lang.model";

export interface Service {
  id?: string;
  name?: any| Lang  ;
  description?: any|  Lang;
  content?: any |Lang;
  coverPage?: any;
}
