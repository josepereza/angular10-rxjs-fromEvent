import { Component } from '@angular/core';
import {AfterViewInit, ElementRef, OnInit, ViewChild} from '@angular/core';
import { fromEvent } from 'rxjs';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit  {
  title = 'ejemplofromevent';
  @ViewChild('hola') button: ElementRef;
  ngAfterViewInit() {
    const mouseMoves = fromEvent(this.button.nativeElement, 'click')
      .subscribe((res:any) => console.log(`Coords: ${res.clientX} X ${res.clientY}`));

  }
}
