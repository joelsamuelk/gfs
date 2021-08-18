import { Component, OnInit } from '@angular/core';
import { CookieService } from 'src/app/cookie.service';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user.model';
import axios from 'axios';
import { Shipment as Shipment } from 'src/app/models/shpiment';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {

  _jwtBearer: string | null;
  user: User | undefined;
  Shipments: Array<Shipment> = [];
  private gridApi: any;
  private gridColumnApi: any;

  constructor(private cookieService: CookieService, private _router: Router) {
    this._jwtBearer = null;
   }

  async ngOnInit(): Promise<any> {
    try{
      this.user = await this.cookieService.verifyUser();
      this._jwtBearer = this.cookieService.readCookie('__jwtBearer');

      var customer = await axios.get("http://localhost:1337/customers?user.username=" + this.user?.username, {
        headers: {
          Authorization: `Bearer ${this._jwtBearer}`
        }
      });

      var documents = await axios.get("http://localhost:1337/documents?customer.user=" + this.user?.id, {
        headers: {
          Authorization: `Bearer ${this._jwtBearer}`
        }
      });

      console.log(documents);
      var userDocuments: any[] = [];
      if(documents.data.length > 0)
      {
        userDocuments = documents.data.filter((x: { customer: { user: number | undefined; }; }) => x.customer.user == this.user?.id);
      }

      if(customer.data[0].shipments != null)
      {
        customer.data[0].shipments.forEach((element: any) => {
          var shipmentDocuments = new Array<Document>();
          if(documents.data.length > 0)
          {
            shipmentDocuments = userDocuments.find((x: { shipment: { id: any; }; }) => x.shipment.id == element.id).documents;
          }
          var currentShipment: Shipment = {
            Arrival: element.Arrival,
            vessel: element.vessel,
            Container_No: element.Container_No,
            Departure: element.Departure,
            Port_Of_Load: element.Port_Of_Load,
            Status: element.Status,
            Documents: shipmentDocuments.length > 0 ? shipmentDocuments : undefined
          } as Shipment;
          this.Shipments?.push(currentShipment)
        });
      }

      this.rowData = this.Shipments;
      
    }
    catch(e){
      console.error(e);
    }
    
  }

  columnDefs = [
    { headerName: "Vessel", field: "vessel", suppressSizeToFit: true, resizable: true, sortable: true, filter: true, checkBoxSelection: true },
    { headerName: "Port of Load", field: "Port_Of_Load", suppressSizeToFit: true, resizable: true, sortable: true, filter: true },
    { headerName: "Container #", field: "Container_No", suppressSizeToFit: true, resizable: true, sortable: true, filter: true },
    { headerName: "Departure", field: "Departure", suppressSizeToFit: true, resizable: true, sortable: true, filter: true },
    { headerName: "Arrival", field: "Arrival", suppressSizeToFit: true, resizable: true, sortable: true, filter: true },
    { headerName: "Status", field: "Status", suppressSizeToFit: true, resizable: true, sortable: true, filter: true },

    {
      headerName: 'Documents', 
      suppressSizeToFit: true, 
      resizable: true,
      cellRenderer: (data: any) => {
          if(data.data.Documents.length > 0)
          {
            let returnHtml = `<a class="dropdown-toggle" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Documents</a>
            <div class="dropdown-menu" aria-labelledby="navbarDropdown">`;
            
              data.data.Documents.forEach((element: { url: string; name: string; }) => {
                returnHtml += `<a href="http://localhost:1337` + element.url +`" target="_blank">` + element.name + `</a>`
              });

            returnHtml += `</div>`;
            // let returnHtml = `<div class="btn-group">
            //       <button type="button" class="btn btn-default dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            //           Actions <span class="caret"></span>
            //       </button>
            //       <ul class="dropdown-menu">
            //           <li><a href='#'>Edit</a></li>
            //           <li><a href='#'">Delete</a></li>
            //           <li role="separator" class="divider"></li>
            //           <li><a href='#'>Print</a></li>
            //       </ul>
            //   </div>`;
            return returnHtml;
          }
          else{
            return 'No documents found';
          }
      },
      suppressSorting: true
  }
  ];

  rowData: any;

  onFirstDataRendered(params: { api: any; }) {
    params.api.sizeColumnsToFit();
  }

  onGridReady(params: { api: { sizeColumnsToFit: () => void; }; columnApi: any; }) {
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;   
    params.api.sizeColumnsToFit(); 
    }
}
