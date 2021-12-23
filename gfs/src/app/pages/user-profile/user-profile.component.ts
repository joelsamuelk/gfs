import { Component, OnInit } from '@angular/core';

import axios from 'axios';

import { CookieService } from 'src/app/cookie.service';
import { User } from 'src/app/models/user.model';
import { Document } from 'src/app/models/document';
import { Shipment as Shipment } from 'src/app/models/shpiment';
import { environment } from 'src/environments/environment';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {
  private gridApi: any;
  private gridColumnApi: any;

  showModal = true;
  jwtBearer: string | null;
  user: User | undefined;
  shipments: Array<Shipment> = [];

  constructor(private cookieService: CookieService, private route: ActivatedRoute) {
    this.jwtBearer = null;
   }

  columnDefs = [
    { headerName: 'Vessel', field: 'vessel', resizable: true, sortable: true, filter: true },
    { headerName: 'Port of Load', field: 'Port_Of_Load', resizable: true, sortable: true, filter: true },
    { headerName: 'Container #', field: 'Container_No', resizable: true, sortable: true, filter: true },
    { headerName: 'Departure', field: 'Departure', resizable: true, sortable: true, filter: true },
    { headerName: 'Arrival', field: 'Arrival', resizable: true, sortable: true, filter: true },
    { headerName: 'Status', field: 'Status', resizable: true, sortable: true, filter: true },
    { headerName: 'Shipping Line', field: 'Shipping_Line', resizable: true, sortable: true, filter: true },
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

      axios
        .get(environment.strapiUrl + '/shipments?user.username=' + this.user?.username, {
          headers: {
            Authorization: `Bearer ${this.jwtBearer}`,
          },
        })
        .then((response) => {
          if (response?.data) {
            this.shipments = response.data;

            this.shipments.forEach((shipment) => {
              const currentShipment: Shipment = {
                Arrival: shipment.Arrival,
                vessel: shipment.vessel,
                Container_No: shipment.Container_No,
                Departure: shipment.Departure,
                Port_Of_Load: shipment.Port_Of_Load,
                Status: shipment.Status,
                Shipping_Line: shipment.Shipping_Line,
                Documents: shipment.Documents,
              } as Shipment;

              this.rowData = this.shipments;
            });
          }
        })
        .catch(error => {
          console.log('An error occurred:', error.response);
        });
    }
    catch (e){
      console.error(e);
    }
  }

  onFirstDataRendered(params: { api: any; }): void {
    params.api.sizeColumnsToFit();
  }

  onExportClicked(): void {
    this.gridApi.exportDataAsExcel();
  }

  onGridReady(params: { api: { sizeColumnsToFit: () => void; }; columnApi: any; }): void {
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;
    setTimeout(() => {
      params.api.sizeColumnsToFit();
    }, 500);
  }
}
