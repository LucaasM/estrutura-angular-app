import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-example-component-a',
  templateUrl: './example-component-a.component.html',
  styleUrls: ['./example-component-a.component.scss']
})
export class ExampleComponentAComponent implements OnInit {
  nome: String = 'Estrutura baseada em módulos';

  constructor(private authService: AuthService){}

  ngOnInit() {}
}
