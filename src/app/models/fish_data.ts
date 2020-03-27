import { Fish } from './fish';
import { Month } from './months';
import { FishLocation } from './location';
import { Times } from './times';

export class FISH_DATA {
    data: Fish[] = [
        {
            name: 'Ray',
            image: 'https://vignette.wikia.nocookie.net/animalcrossing/images/b/b9/Ray_HHD_Icon.png/revision/latest',
            price: 3000,
            location: [FishLocation.Sea],
            shadow: 5,
            time: [Times.FourAMToNinePM],
            month: [Month.August, Month.September, Month.October, Month.November]
        },
        {
            name: 'Ocean Sunfish',
            image: 'https://vignette.wikia.nocookie.net/animalcrossing/images/b/be/Ocean_Sunfish_HHD_Icon.png/revision/latest',
            price: 4000,
            location: [FishLocation.Sea],
            shadow: 7,
            time: [Times.FourAMToNinePM],
            month: [Month.July, Month.August, Month.September]
        },
        {
            name: 'Anchovy',
            image: 'https://vignette.wikia.nocookie.net/animalcrossing/images/6/62/Anchovy_NH_Icon.png/revision/latest',
            price: 200,
            location: [FishLocation.Sea],
            shadow: 2,
            time: [Times.FourAMToNinePM],
            month: [Month.January, Month.February, Month.March, Month.April, Month.May, Month.June, Month.July, Month.August, Month.September, Month.October, Month.November, Month.December]
        },
        {
            name: 'Napoleonfish',
            image: 'https://vignette.wikia.nocookie.net/animalcrossing/images/d/d0/Napoleonfish_HHD_Icon.png/revision/latest',
            price: 10000,
            location: [FishLocation.Sea],
            shadow: 6,
            time: [Times.FourAMToNinePM],
            month: [Month.July, Month.August]
        },
        {
            name: 'Dorado',
            image: 'https://vignette.wikia.nocookie.net/animalcrossing/images/f/ff/Dorado_HHD_Icon.png/revision/latest',
            price: 15000,
            location: [FishLocation.River],
            shadow: 5,
            time: [Times.FourAMToNinePM],
            month: [Month.June, Month.July, Month.August, Month.September]
        },
        {
            name: 'Saw Shark',
            image: 'https://vignette.wikia.nocookie.net/animalcrossing/images/0/09/Saw_Shark_HHD_Icon.png/revision/latest',
            price: 12000,
            location: [FishLocation.Sea],
            shadow: 7,
            time: [Times.FourPMToNineAM],
            month: [Month.June, Month.July, Month.August, Month.September]
        },
        {
            name: 'Arapaima',
            image: 'https://vignette.wikia.nocookie.net/animalcrossing/images/7/79/Arapaima_HHD_Icon.png/revision/latest',
            price: 10000,
            location: [FishLocation.River],
            shadow: 6,
            time: [Times.FourPMToNineAM],
            month: [Month.June, Month.July, Month.August, Month.September]
        },
        {
            name: 'Gar',
            image: 'https://vignette.wikia.nocookie.net/animalcrossing/images/5/54/Gar_HHD_Icon.png/revision/latest',
            price: 6000,
            location: [FishLocation.Pond],
            shadow: 6,
            time: [Times.FourPMToNineAM],
            month: [Month.June, Month.July, Month.August, Month.September]
        },
        {
            name: 'Arowana',
            image: 'https://vignette.wikia.nocookie.net/animalcrossing/images/b/be/Arowana_HHD_Icon.png/revision/latest',
            price: 10000,
            location: [FishLocation.River],
            shadow: 4,
            time: [Times.FourPMToNineAM],
            month: [Month.June, Month.July, Month.August, Month.September]
        },
        {
            name: 'Dace',
            image: 'https://vignette.wikia.nocookie.net/animalcrossing/images/8/8c/Dace_HHD_Icon.png/revision/latest',
            price: 240,
            location: [FishLocation.River],
            shadow: 3,
            time: [Times.FourPMToNineAM],
            month: [Month.January, Month.February, Month.March, Month.April, Month.May, Month.June, Month.July, Month.August, Month.September, Month.October, Month.November, Month.December]
        },
        {
            name: 'Koi',
            image: 'https://vignette.wikia.nocookie.net/animalcrossing/images/a/a6/Koi_HHD_Icon.png/revision/latest',
            price: 4000,
            location: [FishLocation.Pond],
            shadow: 4,
            time: [Times.FourPMToNineAM],
            month: [Month.January, Month.February, Month.March, Month.April, Month.May, Month.June, Month.July, Month.August, Month.September, Month.October, Month.November, Month.December]
        },
        {
            name: 'Sotf-shelled Turtle',
            image: 'https://vignette.wikia.nocookie.net/animalcrossing/images/a/a1/Soft-Shelled_Turtle_HHD_Icon.png/revision/latest',
            price: 3750,
            location: [FishLocation.River],
            shadow: 4,
            time: [Times.FourPMToNineAM],
            month: [Month.August, Month.September]
        },
        {
            name: 'Freshwater Goby',
            image: 'https://vignette.wikia.nocookie.net/animalcrossing/images/1/19/Freshwater_Goby_HHD_Icon.png/revision/latest',
            price: 400,
            location: [FishLocation.River],
            shadow: 2,
            time: [Times.FourPMToNineAM],
            month: [Month.January, Month.February, Month.March, Month.April, Month.May, Month.June, Month.July, Month.August, Month.September, Month.October, Month.November, Month.December]
        },
        {
            name: 'Catfish',
            image: 'https://vignette.wikia.nocookie.net/animalcrossing/images/4/41/Catfish_HHD_Icon.png/revision/latest',
            price: 800,
            location: [FishLocation.Pond],
            shadow: 4,
            time: [Times.FourPMToNineAM],
            month: [Month.May, Month.June, Month.July, Month.August, Month.September, Month.October]
        },
        {
            name: 'Angelfish',
            image: 'https://vignette.wikia.nocookie.net/animalcrossing/images/4/40/Angelfish_HHD_Icon.png/revision/latest',
            price: 3000,
            location: [FishLocation.River],
            shadow: 2,
            time: [Times.FourPMToNineAM],
            month: [Month.May, Month.June, Month.July, Month.August, Month.September, Month.October]
        },
        {
            name: 'Mitten Crab',
            image: 'https://vignette.wikia.nocookie.net/animalcrossing/images/5/59/Mitten_Crab_HHD_Icon.png/revision/latest',
            price: 2000,
            location: [FishLocation.River],
            shadow: 2,
            time: [Times.FourPMToNineAM],
            month: [Month.September, Month.October, Month.November]
        },
        {
            name: 'Stringfish',
            image: 'https://vignette.wikia.nocookie.net/animalcrossing/images/5/53/Stringfish_HHD_Icon.png/revision/latest',
            price: 15000,
            location: [FishLocation.Cliff],
            shadow: 5,
            time: [Times.FourPMToNineAM],
            month: [Month.January, Month.February, Month.March, Month.December]
        },
        {
            name: 'Golden Trout',
            image: 'https://vignette.wikia.nocookie.net/animalcrossing/images/f/fc/Golden_Trout_NH_Icon.png/revision/latest',
            price: 15000,
            location: [FishLocation.Cliff],
            shadow: 3,
            time: [Times.FourPMToNineAM],
            month: [Month.March, Month.April, Month.May, Month.September, Month.October, Month.November]
        },
        {
            name: 'Char',
            image: 'https://vignette.wikia.nocookie.net/animalcrossing/images/2/2c/Char_HHD_Icon.png/revision/latest',
            price: 3800,
            location: [FishLocation.Cliff, FishLocation.Pond],
            shadow: 3,
            time: [Times.FourPMToNineAM],
            month: [ Month.March, Month.April, Month.May, Month.June, Month.September, Month.October, Month.November]
        },
        {
            name: 'Cherry Salmon',
            image: 'https://vignette.wikia.nocookie.net/animalcrossing/images/0/05/Cherry_Salmon_HHD_Icon.png/revision/latest',
            price: 1000,
            location: [FishLocation.Cliff, FishLocation.Pond],
            shadow: 3,
            time: [Times.FourPMToNineAM],
            month: [ Month.March, Month.April, Month.May, Month.June, Month.September, Month.October, Month.November]
        },
        {
            name: 'Great White Shark',
            image: 'https://vignette.wikia.nocookie.net/animalcrossing/images/5/5b/Shark_HHD_Icon.png/revision/latest',
            price: 15000,
            location: [FishLocation.Sea],
            shadow: 7,
            time: [Times.FourPMToNineAM],
            month: [Month.June, Month.July, Month.August, Month.September]
        },
        {
            name: 'Hammerhead Shark',
            image: 'https://vignette.wikia.nocookie.net/animalcrossing/images/f/fb/Hammerhead_Shark_HHD_Icon.png/revision/latest',
            price: 8000,
            location: [FishLocation.Sea],
            shadow: 7,
            time: [Times.FourPMToNineAM],
            month: [Month.June, Month.July, Month.August, Month.September]
        },
        {
            name: 'Football Fish',
            image: 'https://vignette.wikia.nocookie.net/animalcrossing/images/6/67/Football_Fish_HHD_Icon.png/revision/latest',
            price: 2500,
            location: [FishLocation.Sea],
            shadow: 4,
            time: [Times.FourPMToNineAM],
            month: [Month.January, Month.February, Month.March, Month.November, Month.December]
        },
        {
            name: 'Blowfish',
            image: 'https://vignette.wikia.nocookie.net/animalcrossing/images/6/63/Blowfish_HHD_Icon.png/revision/latest',
            price: 5000,
            location: [FishLocation.Sea],
            shadow: 3,
            time: [Times.SixPMToFourAM],
            month: [Month.January, Month.February, Month.November, Month.December]
        },
        {
            name: 'Ranchu Goldfish',
            image: 'https://vignette.wikia.nocookie.net/animalcrossing/images/3/35/Ranchu_Goldfish_NH_Icon.png/revision/latest',
            price: 4500,
            location: [FishLocation.Pond],
            shadow: 2,
            time: [Times.NineAMToFourPM],
            month: [Month.January, Month.February, Month.March, Month.April, Month.May, Month.June, Month.July, Month.August, Month.September, Month.October, Month.November, Month.December]
        },
        {
            name: 'Nibble Fish',
            image: 'https://vignette.wikia.nocookie.net/animalcrossing/images/e/e2/Nibble_Fish_HHD_Icon.png/revision/latest',
            price: 1500,
            location: [FishLocation.River],
            shadow: 2,
            time: [Times.NineAMToFourPM],
            month: [Month.May, Month.June, Month.July, Month.August, Month.September]
        },
        {
            name: 'Guppy',
            image: 'https://vignette.wikia.nocookie.net/animalcrossing/images/3/34/Guppy_HHD_Icon.png/revision/latest',
            price: 1300,
            location: [FishLocation.River],
            shadow: 1,
            time: [Times.NineAMToFourPM],
            month: [Month.April, Month.May, Month.June, Month.July, Month.August, Month.September, Month.October, Month.November]
        },
        {
            name: 'Betta',
            image: 'https://vignette.wikia.nocookie.net/animalcrossing/images/0/0b/Betta_NH_Icon.png/revision/latest',
            price: 2500,
            location: [FishLocation.River],
            shadow: 2,
            time: [Times.NineAMToFourPM],
            month: [ Month.May, Month.June, Month.July, Month.August, Month.September, Month.October]
        },
        {
            name: 'Neon Tetra',
            image: 'https://vignette.wikia.nocookie.net/animalcrossing/images/3/37/Neon_Tetra_HHD_Icon.png/revision/latest',
            price: 500,
            location: [FishLocation.River],
            shadow: 1,
            time: [Times.NineAMToFourPM],
            month: [Month.April, Month.May, Month.June, Month.July, Month.August, Month.September, Month.October, Month.November]
        },
        {
            name: 'Rainbowfish',
            image: 'https://vignette.wikia.nocookie.net/animalcrossing/images/e/e7/Rainbowfish_NH_Icon.png/revision/latest',
            price: 800,
            location: [FishLocation.River],
            shadow: 1,
            time: [Times.NineAMToFourPM],
            month: [Month.May, Month.June, Month.July, Month.August, Month.September, Month.October]
        },
        {
            name: 'Bluegill',
            image: 'https://vignette.wikia.nocookie.net/animalcrossing/images/3/35/Bluegill_HHD_Icon.png/revision/latest',
            price: 180,
            location: [FishLocation.River],
            shadow: 2,
            time: [Times.NineAMToFourPM],
            month: [Month.January, Month.February, Month.March, Month.April, Month.May, Month.June, Month.July, Month.August, Month.September, Month.October, Month.November, Month.December]
        },
        {
            name: 'Giant Snakehead',
            image: 'https://vignette.wikia.nocookie.net/animalcrossing/images/4/4f/Giant_Snakehead_HHD_Icon.png/revision/latest',
            price: 5500,
            location: [FishLocation.Pond],
            shadow: 5,
            time: [Times.NineAMToFourPM],
            month: [Month.June, Month.July, Month.August]
        },
        {
            name: 'Pop-eyed Goldfish',
            image: 'https://vignette.wikia.nocookie.net/animalcrossing/images/3/3c/Popeyed_Goldfish_HHD_Icon.png/revision/latest',
            price: 1300,
            location: [FishLocation.Pond],
            shadow: 1,
            time: [Times.NineAMToFourPM],
            month: [Month.January, Month.February, Month.March, Month.April, Month.May, Month.June, Month.July, Month.August, Month.September, Month.October, Month.November, Month.December]
        },
        {
            name: 'Pale Chub',
            image: 'https://vignette.wikia.nocookie.net/animalcrossing/images/c/c0/Pale_Chub_HHD_Icon.png/revision/latest',
            price: 200,
            location: [FishLocation.River],
            shadow: 1,
            time: [Times.NineAMToFourPM],
            month: [Month.January, Month.February, Month.March, Month.April, Month.May, Month.June, Month.July, Month.August, Month.September, Month.October, Month.November, Month.December]
        },
        {
            name: 'Piranha',
            image: 'https://vignette.wikia.nocookie.net/animalcrossing/images/5/54/Piranha_HHD_Icon.png/revision/latest',
            price: 2500,
            location: [FishLocation.River],
            shadow: 2,
            time: [Times.NineAMToFourPM, Times.NinePMToFourAM],
            month: [Month.June, Month.July, Month.August, Month.September]
        },
        {
            name: 'Saddled Bichir',
            image: 'https://vignette.wikia.nocookie.net/animalcrossing/images/b/b7/Saddled_Bichir_HHD_Icon.png/revision/latest',
            price: 4000,
            location: [FishLocation.River],
            shadow: 4,
            time: [Times.NinePMToFourAM],
            month: [Month.June, Month.July, Month.August, Month.September]
        },
        {
            name: 'Snapping Turtle',
            image: 'https://vignette.wikia.nocookie.net/animalcrossing/images/b/b1/Snapping_Turtle_NH_Icon.png/revision/latest',
            price: 5000,
            location: [FishLocation.River],
            shadow: 5,
            time: [Times.NinePMToFourAM],
            month: [Month.April, Month.May, Month.June, Month.July, Month.August, Month.September, Month.October]
        },
        {
            name: 'Barreleye',
            image: 'https://vignette.wikia.nocookie.net/animalcrossing/images/e/e0/Barreleye_NH_Icon.png/revision/latest',
            price: 15000,
            location: [FishLocation.Sea],
            shadow: 2,
            time: [Times.NinePMToFourAM],
            month: [Month.January, Month.February, Month.March, Month.April, Month.May, Month.June, Month.July, Month.August, Month.September, Month.October, Month.November, Month.December]
        },
        {
            name: 'Coelacanth',
            image: 'https://vignette.wikia.nocookie.net/animalcrossing/images/7/78/Coelacanth_HHD_Icon.png/revision/latest',
            price: 15000,
            location: [FishLocation.Rain],
            shadow: 6,
            time: [Times.AllDay],
            month: [Month.January, Month.February, Month.March, Month.April, Month.May, Month.June, Month.July, Month.August, Month.September, Month.October, Month.November, Month.December]
        },
        {
            name: 'Oarfish',
            image: 'https://vignette.wikia.nocookie.net/animalcrossing/images/f/f5/Oarfish_HHD_Icon.png/revision/latest',
            price: 9000,
            location: [FishLocation.Sea],
            shadow: 6,
            time: [Times.AllDay],
            month: [Month.January, Month.February, Month.March, Month.April, Month.May, Month.December]
        },
        {
            name: 'Suckerfish',
            image: 'https://vignette.wikia.nocookie.net/animalcrossing/images/d/de/Suckerfish_NH_Icon.png/revision/latest',
            price: 1500,
            location: [FishLocation.Sea],
            shadow: 7,
            time: [Times.AllDay],
            month: [Month.June, Month.July, Month.August, Month.September]
        },
        {
            name: 'Whale Shark',
            image: 'https://vignette.wikia.nocookie.net/animalcrossing/images/1/17/Whale_Shark_HHD_Icon.png/revision/latest',
            price: 13000,
            location: [FishLocation.Sea],
            shadow: 7,
            time: [Times.AllDay],
            month: [Month.June, Month.July, Month.August, Month.September]
        },
        {
            name: 'Olive Flounder',
            image: 'https://vignette.wikia.nocookie.net/animalcrossing/images/2/24/Olive_Flounder_HHD_Icon.png/revision/latest',
            price: 800,
            location: [FishLocation.Sea],
            shadow: 5,
            time: [Times.AllDay],
            month: [Month.January, Month.February, Month.March, Month.April, Month.May, Month.June, Month.July, Month.August, Month.September, Month.October, Month.November, Month.December]
        },
        {
            name: 'Squid',
            image: 'https://vignette.wikia.nocookie.net/animalcrossing/images/a/a3/Squid_HHD_Icon.png/revision/latest',
            price: 500,
            location: [FishLocation.Sea],
            shadow: 3,
            time: [Times.AllDay],
            month: [Month.January, Month.February, Month.March, Month.April, Month.May, Month.June, Month.July, Month.August, Month.December]
        },
        {
            name: 'Moray Eel',
            image: 'https://vignette.wikia.nocookie.net/animalcrossing/images/7/78/Moray_Eel_HHD_Icon.png/revision/latest',
            price: 2000,
            location: [FishLocation.Sea],
            shadow: 8,
            time: [Times.AllDay],
            month: [Month.August, Month.September, Month.October]
        },
        {
            name: 'Ribbon Eel',
            image: 'https://vignette.wikia.nocookie.net/animalcrossing/images/c/c6/Ribbon_Eel_HHD_Icon.png/revision/latest',
            price: 600,
            location: [FishLocation.Sea],
            shadow: 8,
            time: [Times.AllDay],
            month: [Month.June, Month.July, Month.August, Month.September, Month.October]
        },
        {
            name: 'Dab',
            image: 'https://vignette.wikia.nocookie.net/animalcrossing/images/2/26/Dab_HHD_Icon.png/revision/latest',
            price: 300,
            location: [FishLocation.Sea],
            shadow: 3,
            time: [Times.AllDay],
            month: [Month.January, Month.February, Month.March, Month.April, Month.October, Month.November, Month.December]
        },
        {
            name: 'Blue Marlin',
            image: 'https://vignette.wikia.nocookie.net/animalcrossing/images/4/42/Blue_Marlin_HHD_Icon.png/revision/latest',
            price: 10000,
            location: [FishLocation.Pier],
            shadow: 6,
            time: [Times.AllDay],
            month: [Month.January, Month.February, Month.March, Month.April, Month.July, Month.August, Month.September, Month.November, Month.December]
        },
        {
            name: 'Mahi-Mahi',
            image: 'https://vignette.wikia.nocookie.net/animalcrossing/images/d/d6/Mahi-Mahi_NH_Icon.png/revision/latest',
            price: 6000,
            location: [FishLocation.Pier],
            shadow: 5,
            time: [Times.AllDay],
            month: [Month.May, Month.June, Month.July, Month.August, Month.September, Month.October]
        },
        {
            name: 'Giant Trevally',
            image: 'https://vignette.wikia.nocookie.net/animalcrossing/images/8/8e/Giant_Trevally_HHD_Icon.png/revision/latest',
            price: 4500,
            location: [FishLocation.Pier],
            shadow: 5,
            time: [Times.AllDay],
            month: [Month.May, Month.June, Month.July, Month.August, Month.September, Month.October]
        },
        {
            name: 'Tuna',
            image: 'https://vignette.wikia.nocookie.net/animalcrossing/images/1/17/Tuna_HHD_Icon.png/revision/latest',
            price: 7000,
            location: [FishLocation.Pier],
            shadow: 6,
            time: [Times.AllDay],
            month: [Month.January, Month.February, Month.March, Month.April, Month.November, Month.December]
        },
        {
            name: 'Clown Fish',
            image: 'https://vignette.wikia.nocookie.net/animalcrossing/images/9/98/Clownfish_HHD_Icon.png/revision/latest',
            price: 650,
            location: [FishLocation.Sea],
            shadow: 1,
            time: [Times.AllDay],
            month: [Month.April, Month.May, Month.June, Month.July, Month.August, Month.September]
        },
        {
            name: 'Surgeonfish',
            image: 'https://vignette.wikia.nocookie.net/animalcrossing/images/8/83/Surgeonfish_HHD_Icon.png/revision/latest',
            price: 1000,
            location: [FishLocation.Sea],
            shadow: 2,
            time: [Times.AllDay],
            month: [Month.April, Month.May, Month.June, Month.July, Month.August, Month.September]
        },
        {
            name: 'Sea Horse',
            image: 'https://vignette.wikia.nocookie.net/animalcrossing/images/d/d2/Seahorse_%28New_Leaf_icon%29.PNG/revision/latest',
            price: 1100,
            location: [FishLocation.Sea],
            shadow: 1,
            time: [Times.AllDay],
            month: [Month.April, Month.May, Month.June, Month.July, Month.August, Month.September, Month.October, Month.November]
        },
        {
            name: 'Sea Butterfly',
            image: 'https://vignette.wikia.nocookie.net/animalcrossing/images/d/d6/Sea_Butterfly_HHD_Icon.png/revision/latest',
            price: 1000,
            location: [FishLocation.Sea],
            shadow: 1,
            time: [Times.AllDay],
            month: [Month.January, Month.February, Month.March, Month.December]
        },
        {
            name: 'Sturgeon',
            image: 'https://vignette.wikia.nocookie.net/animalcrossing/images/2/2f/Sturgeon_HHD_Icon.png/revision/latest',
            price: 10000,
            location: [FishLocation.Mouth],
            shadow: 6,
            time: [Times.AllDay],
            month: [Month.January, Month.February, Month.March, Month.September, Month.October, Month.November, Month.December]
        },
        {
            name: 'Zebra Turkeyfish',
            image: 'https://vignette.wikia.nocookie.net/animalcrossing/images/3/3d/Zebra_Turkeyfish_HHD_Icon.png/revision/latest',
            price: 500,
            location: [FishLocation.Sea],
            shadow: 3,
            time: [Times.AllDay],
            month: [Month.April, Month.May, Month.June, Month.July, Month.August, Month.September, Month.October, Month.November]
        },
        {
            name: 'Puffer Fish',
            image: 'https://vignette.wikia.nocookie.net/animalcrossing/images/e/e0/Puffer_Fish_HHD_Icon.png/revision/latest',
            price: 250,
            location: [FishLocation.Sea],
            shadow: 3,
            time: [Times.AllDay],
            month: [Month.July, Month.August, Month.September]
        },
        {
            name: 'Red Snapper',
            image: 'https://vignette.wikia.nocookie.net/animalcrossing/images/1/12/Red_Snapper_HHD_Icon.png/revision/latest',
            price: 3000,
            location: [FishLocation.Sea],
            shadow: 4,
            time: [Times.AllDay],
            month: [Month.January, Month.February, Month.March, Month.April, Month.May, Month.June, Month.July, Month.August, Month.September, Month.October, Month.November, Month.December]
        },
        {
            name: 'Sea Bass',
            image: 'https://vignette.wikia.nocookie.net/animalcrossing/images/c/c2/Sea_Bass_HHD_Icon.png/revision/latest',
            price: 400,
            location: [FishLocation.Sea],
            shadow: 5,
            time: [Times.AllDay],
            month: [Month.January, Month.February, Month.March, Month.April, Month.May, Month.June, Month.July, Month.August, Month.September, Month.October, Month.November, Month.December]
        },
        {
            name: 'Barred Knifejaw',
            image: 'https://vignette.wikia.nocookie.net/animalcrossing/images/5/52/Barred_Knifejaw_HHD_Icon.png/revision/latest',
            price: 5000,
            location: [FishLocation.Sea],
            shadow: 3,
            time: [Times.AllDay],
            month: [Month.March, Month.April, Month.May, Month.June, Month.July, Month.August, Month.September, Month.October, Month.November]
        },
        {
            name: 'Horse Mackerel',
            image: 'https://vignette.wikia.nocookie.net/animalcrossing/images/1/1d/Horse_Mackerel_HHD_Icon.png/revision/latest',
            price: 150,
            location: [FishLocation.Sea],
            shadow: 2,
            time: [Times.AllDay],
            month: [Month.January, Month.February, Month.March, Month.April, Month.May, Month.June, Month.July, Month.August, Month.September, Month.October, Month.November, Month.December]
        },
        {
            name: 'Butterfly Fish',
            image: 'https://vignette.wikia.nocookie.net/animalcrossing/images/7/75/Butterfly_Fish_%28New_Leaf_icon%29.PNG/revision/latest',
            price: 1000,
            location: [FishLocation.Sea],
            shadow: 2,
            time: [Times.AllDay],
            month: [Month.April, Month.May, Month.June, Month.July, Month.August, Month.September]
        },
        {
            name: 'Loach',
            image: 'https://vignette.wikia.nocookie.net/animalcrossing/images/2/2b/Loach_HHD_Icon.png/revision/latest',
            price: 400,
            location: [FishLocation.River],
            shadow: 2,
            time: [Times.AllDay],
            month: [Month.March, Month.April, Month.May]
        },
        {
            name: 'Crawfish',
            image: 'https://vignette.wikia.nocookie.net/animalcrossing/images/e/e2/Crawfish_HHD_Icon.png/revision/latest',
            price: 200,
            location: [FishLocation.Pond],
            shadow: 2,
            time: [Times.AllDay],
            month: [Month.April, Month.May, Month.June, Month.July, Month.August, Month.September]
        },
        {
            name: 'Tadpole',
            image: 'https://vignette.wikia.nocookie.net/animalcrossing/images/e/e7/Tadpole_HHD_Icon.png/revision/latest',
            price: 100,
            location: [FishLocation.Pond],
            shadow: 1,
            time: [Times.AllDay],
            month: [Month.March, Month.April, Month.May, Month.June, Month.July]
        },
        {
            name: 'Frog',
            image: 'https://vignette.wikia.nocookie.net/animalcrossing/images/8/8f/Frog_HHD_Icon.png/revision/latest',
            price: 120,
            location: [FishLocation.Pond],
            shadow: 2,
            time: [Times.AllDay],
            month: [Month.May, Month.June, Month.July, Month.August]
        },
        {
            name: 'Carp',
            image: 'https://vignette.wikia.nocookie.net/animalcrossing/images/e/ec/Carp_HHD_Icon.png/revision/latest',
            price: 300,
            location: [FishLocation.Pond],
            shadow: 4,
            time: [Times.AllDay],
            month: [Month.January, Month.February, Month.March, Month.April, Month.May, Month.June, Month.July, Month.August, Month.September, Month.October, Month.November, Month.December]
        },
        {
            name: 'Crucian Carp',
            image: 'https://vignette.wikia.nocookie.net/animalcrossing/images/e/e8/Crucian_Carp_HHD_Icon.png/revision/latest',
            price: 160,
            location: [FishLocation.River],
            shadow: 2,
            time: [Times.AllDay],
            month: [Month.January, Month.February, Month.March, Month.April, Month.May, Month.June, Month.July, Month.August, Month.September, Month.October, Month.November, Month.December]
        },
        {
            name: 'Bitterling',
            image: 'https://vignette.wikia.nocookie.net/animalcrossing/images/4/4a/Bitterling_HHD_Icon.png/revision/latest',
            price: 900,
            location: [FishLocation.River],
            shadow: 1,
            time: [Times.AllDay],
            month: [Month.January, Month.February, Month.March, Month.November, Month.December]
        },
        {
            name: 'Goldfish',
            image: 'https://vignette.wikia.nocookie.net/animalcrossing/images/5/5d/Goldfish_HHD_Icon.png/revision/latest',
            price: 1300,
            location: [FishLocation.Pond],
            shadow: 1,
            time: [Times.AllDay],
            month: [Month.January, Month.February, Month.March, Month.April, Month.May, Month.June, Month.July, Month.August, Month.September, Month.October, Month.November, Month.December]
        },
        {
            name: 'Killifish',
            image: 'https://vignette.wikia.nocookie.net/animalcrossing/images/3/3f/Killifish_HHD_Icon.png/revision/latest',
            price: 300,
            location: [FishLocation.Pond],
            shadow: 1,
            time: [Times.AllDay],
            month: [Month.April, Month.May, Month.June, Month.July, Month.August,]
        },
        {
            name: 'Sweetfish',
            image: 'https://vignette.wikia.nocookie.net/animalcrossing/images/5/5a/Sweetfish_HHD_Icon.png/revision/latest',
            price: 900,
            location: [FishLocation.River],
            shadow: 3,
            time: [Times.AllDay],
            month: [Month.July, Month.August, Month.September]
        },
        {
            name: 'Yellow Perch',
            image: 'https://vignette.wikia.nocookie.net/animalcrossing/images/f/f0/Yellow_Perch_HHD_Icon.png/revision/latest',
            price: 300,
            location: [FishLocation.River],
            shadow: 3,
            time: [Times.AllDay],
            month: [Month.January, Month.February, Month.March, Month.October, Month.November, Month.December]
        },
        {
            name: 'Black Bass',
            image: 'https://vignette.wikia.nocookie.net/animalcrossing/images/5/52/Black_Bass_HHD_Icon.png/revision/latest',
            price: 400,
            location: [FishLocation.River],
            shadow: 4,
            time: [Times.AllDay],
            month: [Month.January, Month.February, Month.March, Month.April, Month.May, Month.June, Month.July, Month.August, Month.September, Month.October, Month.November, Month.December]
        },
        {
            name: 'Tilapia',
            image: 'https://vignette.wikia.nocookie.net/animalcrossing/images/e/ef/Tilapia_NH_Icon.png/revision/latest',
            price: 800,
            location: [FishLocation.River],
            shadow: 3,
            time: [Times.AllDay],
            month: [Month.June, Month.July, Month.August, Month.September, Month.October]
        },
        {
            name: 'Pike',
            image: 'https://vignette.wikia.nocookie.net/animalcrossing/images/a/ab/Pike_HHD_Icon.png/revision/latest',
            price: 1800,
            location: [FishLocation.River],
            shadow: 5,
            time: [Times.AllDay],
            month: [Month.September, Month.October, Month.November, Month.December]
        },
        {
            name: 'Salmon',
            image: 'https://vignette.wikia.nocookie.net/animalcrossing/images/7/77/Salmon_HHD_Icon.png/revision/latest/',
            price: 700,
            location: [FishLocation.Mouth],
            shadow: 4,
            time: [Times.AllDay],
            month: [Month.September]
        },
        {
            name: 'King Salmon',
            image: 'https://vignette.wikia.nocookie.net/animalcrossing/images/9/92/King_Salmon_HHD_Icon.png/revision/latest',
            price: 1800,
            location: [FishLocation.Mouth],
            shadow: 6,
            time: [Times.AllDay],
            month: [Month.September]
        },
        {
            name: 'Pond Smelt',
            image: 'https://vignette.wikia.nocookie.net/animalcrossing/images/c/cf/Pond_Smelt_HHD_Icon.png/revision/latest',
            price: 500,
            location: [FishLocation.River],
            shadow: 2,
            time: [Times.AllDay],
            month: [Month.January, Month.February, Month.December]
        },
    ];
}