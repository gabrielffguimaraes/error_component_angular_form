import {Component, Input, OnInit} from '@angular/core';
import {FormGroup} from '@angular/forms';

@Component({
  selector: 'app-debugger',
  templateUrl: './debugger.component.html',
  styleUrls: ['./debugger.component.css']
})
export class DebuggerComponent implements OnInit {

  @Input() form: FormGroup;
  constructor() { }

  ngOnInit(): void {
  }

}
