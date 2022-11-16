import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Animal } from 'src/app/interfaces/Animal';
import { Moeda } from 'src/app/interfaces/Moeda';

import { ListService } from 'src/app/services/list.service';

@Component({
  selector: 'app-item-detail',
  templateUrl: './item-detail.component.html',
  styleUrls: ['./item-detail.component.css'],
})
export class ItemDetailComponent implements OnInit {
  moeda?: Moeda;
  constructor(private listService: ListService, private route: ActivatedRoute) {
    this.getMoeda();
  }

  ngOnInit(): void {}

  getMoeda() {
    const id = String(this.route.snapshot.paramMap.get('id'));
    this.listService.getMoeda(id).subscribe((moeda) => this.moeda = moeda)
  }
}
