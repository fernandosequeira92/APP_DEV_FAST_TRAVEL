import { Component } from '@angular/core';
import { ChDeveloper } from '../childrens/childrens/ch-developer/ch-developer';
import { ChFrameworks } from "../childrens/childrens/ch-frameworks/ch-frameworks";

@Component({
  selector: 'app-home',
  imports: [ChDeveloper, ChFrameworks],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {

}
