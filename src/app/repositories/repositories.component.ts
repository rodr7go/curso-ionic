import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-repositories',
  templateUrl: './repositories.component.html',
  styleUrls: ['./repositories.component.css']
})

export class RepositoriesComponent implements OnInit {

  repositories: any = [];

  repository: IRepository;
  newRepository: IRepository = {name: '', description: ''};

  constructor() { }

  ngOnInit() {
    this.repository = {
      name: 'Angular code for CF',
      description: 'Proyecto demo de CF y Agular'
    };

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
  }

  setMainRepository(repository) {
    this.repository = repository;
  }

  addNewRepo(){
    this.repositories.unshift(this.newRepository);
    this.newRepository = {name: '', description: ''};
  }

}

interface IRepository {
  name: String,
  description: String,
}
