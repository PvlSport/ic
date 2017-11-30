import {Comment} from './comment';

export interface Dish {
    id: number;
    name: string;
    category: string;
    image: string;
    label: string;
    price: string;
    featured: string;
    description: string;
    comments: Comment[];
}