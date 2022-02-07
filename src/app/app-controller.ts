import {ElementRef, Injector} from '@angular/core';


export class AppController { // Var Declaration
    // public test = 'test'
  
    public displayApprovalRemarks : boolean = false;
    public displaySearchDialogBox : boolean = false;
  
    constructor(public injector : Injector) {
     
    }

    manageEachColumn(
        title,
        dataIndx,
        filter: boolean = false,
        sortable: boolean = true,
        dataType: string = 'string',
        action: any = false,
        that: any = [],
        gridConfig: object = {},
        align?
      ): Object {
        let columns: Object = {
          title: title,
          dataType: dataType,
          dataIndx: dataIndx,
          editable: false,
          sortable: sortable,
          halign: 'center',
          align: align, // set header align center
        };
    
        if (filter) {
          columns['filter'] = {
            crules: [{ condition: 'contain' }],
            listeners: [
              {
                change: function (evt, ui) {
                  let filterRules = [
                    {
                      dataIndx: ui.dataIndx,
                      condition: 'contain',
                      value: ui.value,
                    },
                  ];
                  this.filter({
                    oper: 'add',
                    rules: filterRules,
                  });
                },
              },
            ],
          };
        }
        let here = this;
        if (action) {
          columns['width'] = 200;
          columns['maxWidth'] = 300;
          columns['align'] = 'center';
          columns['render'] = (ui) => {
            return this.pqGridActionButtons(action, ui, that, gridConfig);
          };
          columns['postRender'] = function (ui) {
            var grid = this,
              $cell = grid.getCell(ui);
            let selectedRow = gridConfig['useRowData'] ? ui.rowData : ui.rowData;
            /**
             * view button
             **/
            $cell
              .find('.view_btn')
              .button({ icons: '' })
              .off('click')
              .on('click', function (evt) {
                here.view(selectedRow);
              });
            /**
             * edit button
             **/
            $cell
              .find('.edit_btn')
              .button({ icons: '' })
              .off('click')
              .on('click', function (evt) {
                here.view(selectedRow);
              });
    
            /**
             * delete button
             **/
            $cell
              .find('.delete_btn')
              .button({ icons: '' })
              .off('click')
              .on('click', function (evt) {
                here.view(selectedRow);
              });
          };
        }
    
        if (Object.keys(gridConfig).length > 0) {
          Object.assign(columns, gridConfig);
        }
        return columns;
      }

      pqGridActionButtons(action, ui, that, config) {
        let edit = `<button type="button" class="edit_btn" mat-button>edit</button>`;
        let drop = `<button type="button" class="delete_btn" mat-button>delete</button>`;
        let view = `<button type="button" class="view_btn" mat-button>view</button>`;
        
        return edit + drop + view;
      }

      view(selectedRow){
          console.log(selectedRow);

        //   let dialogRef = this.dialog.open(ViewDataComponent, {
        //     data: selectedRow,
        //     panelClass: 'product-dialog'
        // });
      }

}