import { Component, OnInit } from '@angular/core';
import { Animal } from 'src/app/interfaces/Animal';
import { Moedas } from 'src/app/interfaces/Moedas';
import { ListService } from 'src/app/services/list.service';

@Component({
  selector: 'app-list-render',
  templateUrl: './list-render.component.html',
  styleUrls: ['./list-render.component.css']
})
export class ListRenderComponent implements OnInit {

  animals: Animal[] = []
  moedas?: Moedas;
  constructor(private listService: ListService) {
    this.getMoedas()
  }

  ngOnInit(): void {
  }

  animalDetails = '';

  showAge(animal: Animal) {
    this.animalDetails = `O pet ${animal.name} tem ${animal.age}`
  }

  removeAnimal(animal: Animal) {
    this.animals = this.animals.filter((a) => animal.name !== a.name)
    this.listService.remove(animal.id).subscribe();
  }

  getMoedas(): void {
    this.listService.getAllMoedas().subscribe((moedas) => this.moedas = moedas)
  }

  // getAnimals(): void {
  //   this.listService.getAll().subscribe((animals) => this.animals = animals);
  // }
}
