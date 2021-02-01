import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-attribute-directives',
  templateUrl: './attribute-directives.component.html',
  styleUrls: ['./attribute-directives.component.scss']
})
export class AttributeDirectivesComponent implements OnInit {

  isActive: boolean = false;
  color: string = 'red';
  imageUrl: string = 'https://www.mercedes-benz.com/en/eq/concept-cars/vision-eqs/_jcr_content/image/MQ6-12-image-20190910094823/00-mercedes-benz-vision-eqs-show-car-mercedes-benz-eq-2560x1440.jpeg'
  
  result : string = `
    <p class = "text-white bg-primary">
      Demo
    </p>
  `

  constructor() { }

  ngOnInit(): void {
  }

}
