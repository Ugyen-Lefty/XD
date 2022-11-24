import { ApiService } from './../api.service';
import { Component, OnInit } from '@angular/core';
import { SwiperOptions } from 'swiper';
import { switchMap } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  memes: any;
  isLoading = true;
  showMore = false;

  config: SwiperOptions = {
    slidesPerView: 1,
    spaceBetween: 50,
    direction: 'vertical',
    // navigation: true,
    // scrollbar: { draggable: true },
  };

  constructor(private api: ApiService) { }

  ngOnInit(): void {
    this.api.getMemes().pipe(
      switchMap((res: any) => {
        this.memes = res?.data?.children;
        return this.api.getMemes2()
      }),
      switchMap((res: any) => {
        this.memes = this.memes.concat(res?.data?.children);
        return this.api.getMemes3()
      }),
      switchMap((res: any) => {
        this.memes = this.memes.concat(res?.data?.children);
        return this.api.getMemes4()
      }),
    ).subscribe((res: any) => {
      this.memes = this.memes.concat(res?.data?.children).sort(() => {
        return 0.5 - Math.random();
      });
      this.isLoading = false;
    });
  }
}
