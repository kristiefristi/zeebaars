import { FishLocation } from './location';
import { Times } from './times';
import { Month } from './months';

export interface Fish {
    name: string;
    image: string;
    price: number;
    location: FishLocation[];
    shadow: number;
    time: Times[];
    month: Month[];
}
