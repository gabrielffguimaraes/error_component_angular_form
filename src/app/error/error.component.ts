import {Component, Input, OnInit} from '@angular/core';
import {FormGroup} from "@angular/forms";

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.css']
})
export class ErrorComponent implements OnInit {
  @Input('fm') fm: FormGroup;
  @Input('name') name: string;
  constructor() { }

  ngOnInit(): void {
    console.log(this.fm.get(this.name).errors);
    console.log("sdadada");
  }
}
