import { Component, OnInit } from '@angular/core';
import { Finder } from '../models/finder';
import { SearchService } from '../search.service';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss']
})
export class OverviewComponent implements OnInit {

  constructor(public searchService: SearchService) {
  }

  model : Finder = new Finder("");

  response: string[] ;

  submitted = false;

  onSubmit() { 
    this.submitted = true;
    console.log(JSON.stringify(this.model));
    this.searchService.find(this.model).subscribe((x:string[]) => {
      this.response = x;
    });
  }


  ngOnInit(): void {
  }

}
