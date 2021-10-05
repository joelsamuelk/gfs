import { Component, OnInit } from '@angular/core';

import axios from 'axios';

import { CookieService } from 'src/app/cookie.service';
import { User } from 'src/app/models/user.model';
import { Document } from 'src/app/models/document';
import { Shipment as Shipment } from 'src/app/models/shpiment';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {

  constructor(private cookieService: CookieService) {
    this.jwtBearer = null;
   }

  showModal = true;
  jwtBearer: string | null;
  user: User | undefined;
  Shipments: Array<Shipment> = [];
  private gridApi: any;
  private gridColumnApi: any;

  columnDefs = [
    { headerName: 'Vessel', field: 'vessel', resizable: true, sortable: true, filter: true },
    { headerName: 'Port of Load', field: 'Port_Of_Load', resizable: true, sortable: true, filter: true },
    { headerName: 'Container #', field: 'Container_No', resizable: true, sortable: true, filter: true },
    { headerName: 'Departure', field: 'Departure', resizable: true, sortable: true, filter: true },
    { headerName: 'Arrival', field: 'Arrival', resizable: true, sortable: true, filter: true },
    { headerName: 'Status', field: 'Status', resizable: true, sortable: true, filter: true },
    {
      headerName: 'Documents',
      suppressSizeToFit: true,
      resizable: true,
      cellRenderer: (data: any) => {
          if (data.data.hasOwnProperty('Documents') && data.data.Documents.length > 0) {
            let returnHtml = '<select style="max-width: 160px;" class="btn btn-sm" onChange="browseToDocument(this)"><option value="0">View document(s)</option>';

            data.data.Documents.forEach((element: { url: string; name: string; }) => {
              returnHtml += `<option value="` + environment.strapiUrl + element.url + `">` + element.name + `</option>`;
            });

            returnHtml += `</select>`;

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

  async ngOnInit(): Promise<any> {
    try{
      this.user = await this.cookieService.verifyUser();
      this.jwtBearer = this.cookieService.readCookie('__jwtBearer');

      const customer = await axios.get(environment.strapiUrl + '/customers?user.username=' + this.user?.username, {
        headers: {
          Authorization: `Bearer ${this.jwtBearer}`
        }
      });

      const documents = await axios.get(environment.strapiUrl + '/documents?customer.user=' + this.user?.id, {
        headers: {
          Authorization: `Bearer ${this.jwtBearer}`
        }
      });

      let userDocuments: any[] = [];

      if (documents.data.length > 0) {
        userDocuments = documents.data.filter((x: { customer: { user: number | undefined; }; }) => x.customer.user === this.user?.id);
      }

      if (customer.data[0].shipments != null)
      {
        customer.data[0].shipments.forEach((element: any) => {
          let shipmentDocuments = new Array<Document>();

          if (documents.data.length > 0) {
            shipmentDocuments = userDocuments.find((x: { shipment: { id: any; }; }) => x.shipment.id === element.id)?.documents;
          }

          const currentShipment: Shipment = {
            Arrival: element.Arrival,
            vessel: element.vessel,
            Container_No: element.Container_No,
            Departure: element.Departure,
            Port_Of_Load: element.Port_Of_Load,
            Status: element.Status,
            Documents: shipmentDocuments
          } as Shipment;

          this.Shipments?.push(currentShipment);
        });
      }

      this.rowData = this.Shipments;

    }
    catch (e){
      console.error(e);
    }
  }

  onFirstDataRendered(params: { api: any; }): void {
    params.api.sizeColumnsToFit();
  }

  onGridReady(params: { api: { sizeColumnsToFit: () => void; }; columnApi: any; }): void {
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;
    setTimeout(() => {
      params.api.sizeColumnsToFit();
    }, 500);
  }
}
