import { Component, OnInit } from '@angular/core';
import { process, State } from '@progress/kendo-data-query';
import { products } from './products';
import { SortDescriptor, orderBy } from '@progress/kendo-data-query';
import {
    GridComponent,
    GridDataResult,
    PageChangeEvent, 
    DataStateChangeEvent
} from '@progress/kendo-angular-grid';

@Component({
  selector: 'app-atlas-typography',
  templateUrl: './atlas-typography.component.html'
})
export class AtlasTypographyComponent implements OnInit {

  constructor() { 
    this.loadProducts();
  }

  ngOnInit() {
  }

  public gridView: GridDataResult;

  public pageSize = 10;
  public skip = 0;
  public gridData: any[] = products;
  public pageChange(event: PageChangeEvent): void {
    this.skip = event.skip;
    this.loadItems();
}

  private loadItems(): void {
      this.gridView = {
          data: this.gridData.slice(this.skip, this.skip + this.pageSize),
          total: this.gridData.length
      };
  }

  public multiple = false;
  public allowUnsort = true;

  public sort: SortDescriptor[] = [{
    field: 'ProductName',
    dir: 'asc'
  }];

  public sortChange(sort: SortDescriptor[]): void {
    this.sort = sort;
    this.loadProducts();
  }

  private loadProducts(): void {
      this.gridView = {
          data: orderBy(this.gridData, this.sort),
          total: this.gridData.length
      };
  }

}
