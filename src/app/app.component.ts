import { Component, OnInit } from '@angular/core';
import { Month } from './models/months';
import { FISH_DATA } from './models/fish_data';
import { FishLocation } from './models/location';
import { Shadow } from './models/shadow';
import { Fish } from './models/fish';
import { Times } from './models/times';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'zeebaars';

  month = Month[new Date().getMonth()];
  time = new Date().getHours();
  hemisphere: string;
  spheres: string[] = ['Northern', 'Southern'];

  location: string;

  fishList;
  displayedColumns: string[] = ['name', 'price','boxprice', 'shadow', 'time' ];

  constructor(private fishData: FISH_DATA) { }

  ngOnInit(): void {
    this.fishList = this.fishData.data;
  }

  test(){
    console.log('test');
  }

  selectLocation(location: number) {
    let currentLocation = FishLocation[FishLocation[location]];
    this.location = FishLocation[location];

    let filteredByMonth = this.fishData.data.filter(this.filterByMonth);
    let filteredByTime = filteredByMonth.filter(this.filterByTime);
    let filteredByLocation = [];

    let locations = [];
    locations.push(currentLocation);
    if (currentLocation == FishLocation.Mouth){
      locations.push(FishLocation.River);
    }
    if (currentLocation == FishLocation.Cliff){
      locations.push(FishLocation.River);
    }
    if (currentLocation == FishLocation.Pier){
      locations.push(FishLocation.Sea);
    }

    filteredByTime.forEach(fish => {
      if (fish.location.some(item => locations.includes(item))){
        filteredByLocation.push(fish);
      }

    });

    this.fishList = filteredByLocation;
  }

  filterByMonth(fish: Fish) {
    let m: Month = Month[Month[new Date().getMonth()]];
    return fish.month.includes(m);
  }

  filterByTime(fish: Fish) {
    let time = new Date().getHours();
    let timeEnum: Times[] = [];
    timeEnum.push(Times.AllDay);

    if (time >= 9 && time < 16) {
      timeEnum.push(Times.NineAMToFourPM);
    }
    if (time >= 4  && time < 21) {
      timeEnum.push(Times.FourAMToNinePM);
    }
    if (time >= 21 || time < 4){
      timeEnum.push(Times.NinePMToFourAM);
    }
    if (time >= 18 || time < 4){
      timeEnum.push(Times.SixPMToFourAM);
    }
    if (time >= 16 || time < 9){
      timeEnum.push(Times.FourPMToNineAM);
    }

    console.log(time);
    console.log(timeEnum);

    return timeEnum.some(item => fish.time.includes(item));
  }

  getShadowType(index: number) : string {
    return Shadow[index - 1];
  }

  getBoxPrice(originalPrice: number) : number {
    return originalPrice * 0.8;
  }
}
