import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  public fm:FormGroup;
  constructor(private fb:FormBuilder) {
  }

  ngOnInit() :void {
    this.fm = this.fb.group(
      {
        nome: ['gabriel'],
        email: ['gabrielffguimaraes@gmail.com',[Validators.required,Validators.email]],
        senha: [null]
      }
    )
    this.fm.get('email')
      .valueChanges
      .subscribe(console.log);
  }

}
