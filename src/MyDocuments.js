import React, { Component, useState } from "react";
import { render } from "react-dom";
import { AgGridColumn, AgGridReact } from "ag-grid-react";
//import { ClientSideRowModelModule } from "@ag-grid-community/client-side-row-model";
import "ag-grid-community";
import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-alpine-dark.css";
import { jsonResponse } from "./fakeData";
import Popup from "./Popup";
//import pdf from "./logo192.png";

class MyDocuments extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
      //modules: [ClientSideRowModelModule],
      columnDefs: [
        { headerName: "Title", field: "title", sortable: true, filter: true },
        { headerName: "Type", field: "type" },
        {
          headerName: "File",
          field: "fileName",
          cellRenderer: this.documentRenderer,
        },
      ],
      rowData: jsonResponse.data.documents,
      rowSelection: "single",
    };
  }

  documentRenderer(params) {
    return '<span class="pdf-image">' + params.value + "</span>";
  }

  togglePopup = () => {
    alert("inside" + this.isOpen);
    //this.setIsOpen = false;
    //this.isOpen = !this.isOpen;
    this.setState({ isOpen: true });
  };

  onGridReady = (params) => {
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;
  };

  onSelectionChanged = () => {
    var selectedRows = this.gridApi.getSelectedRows();
    document.querySelector("#selectedRows").innerHTML =
      selectedRows.length === 1 ? selectedRows[0].title : "";
  };

  render() {
    return (
      <div>
        <div className="example-header">
          Selection:
          <span id="selectedRows"></span>
        </div>
        <div
          className="ag-theme-alpine-dark"
          style={{ height: "250px", width: "700px" }}
        >
          <AgGridReact
            columnDefs={this.state.columnDefs}
            rowData={this.state.rowData}
            rowSelection={this.state.rowSelection}
            onGridReady={this.onGridReady}
            onSelectionChanged={this.onSelectionChanged.bind(this)}
            //onSelectionChanged={this.togglePopup.bind(this)}
          ></AgGridReact>
        </div>
        {this.isOpen && (
          <Popup
            content={
              <>
                <b>Design your Popup</b>
                <p>Sample text</p>
                <button>Test button</button>
              </>
            }
            handleClose={this.togglePopup}
          />
        )}
      </div>
    );
  }
}

export default MyDocuments;
