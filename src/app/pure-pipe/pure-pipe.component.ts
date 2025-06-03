import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pure-pipe',
  templateUrl: './pure-pipe.component.html',
  styleUrls: ['./pure-pipe.component.css'],
})
export class PurePipeComponent implements OnInit {

  constructor() { }
items=["one","two","three"]
  ngOnInit(): void {
  }

}
