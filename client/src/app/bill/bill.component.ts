import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { PeriodicElement } from '../interfaces';

@Component({
  selector: 'app-bill',
  templateUrl: './bill.component.html',
  styleUrls: ['./bill.component.scss'],
})
export class BillComponent implements OnInit {
  @Input() products: Array<Object>;
  @Input() client: string;
  @Input() sender: string;
  @Input() total: number;
  @Input() loading: Boolean;
  @Output() submitBill = new EventEmitter();
  @Output() toggleBill = new EventEmitter();
  @ViewChild('template') template: any;
  constructor() {}

  displayedColumns: string[] = ['Description', 'Amount', 'Unit Price', 'Total'];
  dataSource: PeriodicElement[] = [];
  date: string = new Date().toLocaleDateString();

  submit(): void {
    this.submitBill.emit();
  }

  back(): void {
    this.toggleBill.emit();
  }

  ngOnInit(): void {
    this.products.forEach((element: any) => {
      this.dataSource.push({
        description: element.description,
        amount: element.amount,
        unitPrice: element.price,
        total: Number((element.amount * element.price).toFixed(2)),
      });
    });
    this.dataSource.push({
      description: 'Total',
      total: this.total,
    });
  }
}
