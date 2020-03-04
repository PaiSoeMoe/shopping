import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.css']
})
export class BreadcrumbComponent implements OnInit {
  paths
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.url.subscribe(paths => this.paths = paths.map(x => x.path));
  }

}
