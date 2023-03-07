import { Component, OnInit } from '@angular/core';
import { Genre } from '../shared/models/genre';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  listGenres : Genre[] = []
  constructor() {

  }

  ngOnInit(): void {
      
  }
}
