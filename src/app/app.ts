import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { Footer } from './components/footer/footer';
import { Navbar } from './components/navbar/navbar';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink, Navbar, Footer],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'dev_fast_travel';
}
