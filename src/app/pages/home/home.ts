import { Component, Input } from '@angular/core';
import { ChDeveloper } from '../childrens/ch-developer/ch-developer';
import { ChFrameworks } from "../childrens/ch-frameworks/ch-frameworks";
import { ChIntArtificial } from '../childrens/ch-int-artificial/ch-int-artificial';
import { ChMultimidia } from '../childrens/ch-multimidia/ch-multimidia';
import { ChRepositorio } from "../childrens/ch-repositorio/ch-repositorio";
import { ChFerramentas } from "../childrens/ch-ferramentas/ch-ferramentas";
import { ChIndex } from '../childrens/ch-index/ch-index';


@Component({
  selector: 'app-home',
  imports: [
    ChDeveloper, 
    ChFrameworks, 
    ChIntArtificial, 
    ChMultimidia, 
    ChRepositorio, 
    ChFerramentas,
    ChIndex
  ],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  @Input() menuAtual: string = 'index';
}
