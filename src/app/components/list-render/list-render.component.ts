import { Component, OnInit } from '@angular/core';
import { Animal } from 'src/app/interfaces/Animal';

@Component({
  selector: 'app-list-render',
  templateUrl: './list-render.component.html',
  styleUrls: ['./list-render.component.css']
})
export class ListRenderComponent implements OnInit {

  animals: Animal[] = [
    {name: "Nilo", type: "Dog", age: 5},
    {name: "Bart", type: "Cat", age: 5},
    {name: "Frida", type: "Dog", age: 10},
    {name: "Bob", type: "Horse", age: 20}
  ]
  constructor() { }

  ngOnInit(): void {
  }

  animalDetails = '';

  showAge(animal: Animal) {
    this.animalDetails = `O pet ${animal.name} tem ${animal.age}`
  }

}
