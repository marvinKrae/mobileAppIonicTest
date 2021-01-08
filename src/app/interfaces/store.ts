import { LocationComment } from "./comment";

export interface Store {
    _id?: any;
    name: string;
    address: string;
    category: string;
    coordinates?: string[];
    comments?: LocationComment[];
}
