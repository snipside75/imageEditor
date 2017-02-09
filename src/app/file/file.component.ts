import {Component, OnInit, ViewChild, ElementRef, AfterViewInit, OnChanges, SimpleChanges} from '@angular/core';
import {ImageService} from "../services/image.service";

@Component({
  selector: 'app-file',
  templateUrl: './file.component.html',
  styleUrls: ['./file.component.css']
})
export class FileComponent implements OnInit {

  constructor(private imageService: ImageService) {
  }

  ngOnInit() {
  }

  private fileChange = (fileElement: any) => {
    this.imageService.filetoCanvas(fileElement);
  }

}
