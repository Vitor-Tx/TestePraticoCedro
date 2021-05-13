import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-termo',
  templateUrl: './termo.component.html',
  styleUrls: ['./termo.component.scss']
})
export class TermoComponent implements OnInit {
  
  checked = false;

  constructor() { }

  ngOnInit(): void {
  }

}
