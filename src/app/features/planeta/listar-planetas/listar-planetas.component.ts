import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Title } from '@angular/platform-browser';
import { NotificationService } from 'src/app/core/services/notification.service';

export interface StarWarsPlanetas {
  name: string;
  rotation_period: string
  orbital_period: string;
  diameter: string;
  climate: string;
  population: string;
}

const data: StarWarsPlanetas[] = [
  {
      "name": "Tatooine", 
      "rotation_period": "21", 
      "orbital_period": "304", 
      "diameter": "10465", 
      "climate": "arid",
      "population": "200000", 
  }, 
  {
      "name": "Alderaan", 
      "rotation_period": "23", 
      "orbital_period": "364", 
      "diameter": "12500", 
      "climate": "temperate",
      "population": "2000000000"
  }, 
  {
      "name": "Yavin IV", 
      "rotation_period": "24", 
      "orbital_period": "4818", 
      "climate": "ice",
      "diameter": "10200", 
      "population": "1000", 
  }, 
  {
      "name": "Hoth", 
      "rotation_period": "23", 
      "orbital_period": "549", 
      "diameter": "7200", 
      "climate": "frozen",
      "population": "unknown",
  }, 
  {
      "name": "Dagobah", 
      "rotation_period": "22", 
      "orbital_period": "341", 
      "diameter": "8900", 
      "climate": "forests",
      "population": "Unknown"
  }, 
  {
      "name": "Bespin", 
      "rotation_period": "24", 
      "orbital_period": "5110", 
      "diameter": "118000", 
      "climate": "gaseous",
      "population": "6000000"
  }, 
  {
      "name": "Endor", 
      "rotation_period": "18", 
      "orbital_period": "402", 
      "diameter": "4900", 
      "climate": "forests",
      "population": "30000000"
  }, 
  {
      "name": "Naboo", 
      "rotation_period": "26", 
      "orbital_period": "312", 
      "diameter": "12365", 
      "climate": "earth-like",
      "population": "4500000000"
  }, 
  {
      "name": "Coruscant", 
      "rotation_period": "24", 
      "orbital_period": "368", 
      "diameter": "12240", 
      "climate": "planetary city",
      "population": "1000000000000"
  }, 
  {
      "name": "Kamino", 
      "rotation_period": "27", 
      "orbital_period": "463", 
      "diameter": "19720", 
      "climate": "ocean planet",
      "population": "1000000000"
  }
];

@Component({
  selector: 'app-listar-planeta',
  templateUrl: './listar-planetas.component.html',
  styleUrls: ['./listar-planetas.component.scss']
})
export class ListarPlanetasComponent implements OnInit {
  displayedColumns: string[] = ['name', 'rotation_period', 'orbital_period', 'diameter','climate','population'];
  dataSource = new MatTableDataSource(data);

  @ViewChild(MatSort, { static: true })
  sort: MatSort = new MatSort;

  constructor(
    private notificationService: NotificationService,
    private titleService: Title
  ) { }

  ngOnInit() {
    this.titleService.setTitle('Planeta');
    
    // this.notificationService.abrirSnackBar('Customers loaded');
    this.dataSource.sort = this.sort;
  }
}
