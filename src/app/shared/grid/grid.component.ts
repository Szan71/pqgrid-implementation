import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import pq from './../../../assets/paramquery';


@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss']
})
export class GridComponent implements OnInit {

  @ViewChild('pqgrid', {static: true}) pqgridDiv: ElementRef;
  @Input() columns: any;
  @Input() data: any;
  @Input() pagination: boolean = true;
  @Input() height: any = 'flex';
  @Input() wordWrap?: boolean;
  @Input() headerWrap?: boolean;

  options: pq.gridT.options;
  grid: pq.gridT.instance;

  public pageModel = {
    type: 'local',
    rPP: 5,
    strRpp: '{0}',
    strDisplay: 'Displaying {0} to {1} of {2} Items',
    strPage: 'Page {0} of {1}',
    layout: ['first', 'prev', 'next','last', '|', 'strRpp', '|', 'strPage'],
    rPPOptions: [5, 10, 20, 50, 100, 500, 1000],
  }

  constructor() {}

  ngOnInit(){
    this.options = {
      width: 'flex',
      height: this.height ? this.height : 'flex',
      wrap: this.wordWrap ? this.wordWrap : false,
      hwrap: this.headerWrap ? this.headerWrap : false,
      scrollModel: { autoFit: true },
      resizable: true,
      reactive: true,
      locale: 'en',
      rowHt: 28,
      numberCell: { show: true, width: 40 },
      postRenderInterval: -1, 
      columnTemplate: { width: 100 },
      dataModel: { data: this.data },
      colModel: this.columns,
      animModel: { on: true },
      filterModel: { on: true, header: true, type: 'local', menuIcon: false },
      sortModel: { on: true, type: 'local' },
      pageModel: this.pageModel,
      strNoRows: 'No Data To Display',
      hoverMode: 'row',
      showTop: true,
      showTitle: false,
    };
    this.grid = pq.grid(this.pqgridDiv.nativeElement, this.options);
  }

}
