import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-repositories',
  templateUrl: './repositories.component.html',
  styleUrls: ['./repositories.component.css']
})
export class RepositoriesComponent implements OnInit {

  repositories : any = [];

  constructor() { }

  ngOnInit() {
    setTimeout(() => {
      this.repositories = [
        {
          name: 'Angular code for CF', 
          description: 'Proyecto demo de CF y Agular'
        },
        {
          name: 'Bootstrap', 
          description: 'Frontend Framework'
        },
        {
          name: 'PHP Ecommerce', 
          description: 'Codigo del curso Ecommerce'
        },
        {
          name: 'Ruby code', 
          description: 'Codigo con los ejemplos del curso'
        }
      ];
    }, 3000);

    setTimeout(() => {
      this.repositories = []
    }, 5000)
  }

}
