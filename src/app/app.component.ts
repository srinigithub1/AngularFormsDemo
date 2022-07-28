import { Component, VERSION } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Angular ' + VERSION.major;
  title = 'Forms demo';

  public formData: any = {
    username: 'srinivas',
  };
  public showmessge: boolean = false;

  ngInit(): void {}

  registeruser(formData: NgForm): void {
    this.formData = formData.value;
    this.showmessge = true;
  }
}
