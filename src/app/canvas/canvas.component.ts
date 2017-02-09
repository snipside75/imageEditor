import {Component, OnInit, ViewChild, ElementRef, AfterViewInit} from '@angular/core';
import {ImageService} from "../services/image.service";

@Component({
  selector: 'app-canvas',
  templateUrl: './canvas.component.html',
  styleUrls: ['./canvas.component.css']
})
export class CanvasComponent implements OnInit,  AfterViewInit {

  @ViewChild('myCanvas') canvasRef: ElementRef;


  constructor(private imageService: ImageService) { }

  ngOnInit() {}

  ngAfterViewInit(){
    const canvas = this.canvasRef.nativeElement;
    this.imageService.setCanvas(canvas);
  }

}
