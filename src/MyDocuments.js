import React, { Component } from "react";
import { AgGridColumn, AgGridReact } from "ag-grid-react";
import "ag-grid-community";
import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-alpine-dark.css";
import { jsonResponse } from "./fakeData";
import BootstrapModal from "./BootstrapModal";
import { Navbar, Button } from "react-bootstrap";
import CustomDownloadCellRenderer from "./CustomDownloadCellRenderer";
import CustomDocumentCellRenderer from "./CustomeDocumentCellRenderer";
import { IconContext } from "react-icons";
import { AiOutlineReload } from "react-icons/ai";

class MyDocuments extends Component {
  constructor(props) {
    super(props);
    this.state = {
      //modules: [ClientSideRowModelModule],
      showDesModel: false,
      displayData: Object,
      columnDefs: [
        {
          headerName: "",
          field: "",
          width: 90,
          cellRenderer: "customDownloadCellRenderer",
        },
        {
          headerName: "Title",
          field: "title",
          sortable: true,
          filter: true,
          cellRenderer: function (params) {
            return '<a href="#" >' + params.value + "</a>";
          },
          onCellClicked: this.documentInfo,
        },
        { headerName: "Type", field: "type" },
        {
          headerName: "File",
          field: "fileName",
          cellRenderer: "customDocumentCellRenderer",
        },
      ],
      frameworkComponents: {
        customDownloadCellRenderer: CustomDownloadCellRenderer,
        customDocumentCellRenderer: CustomDocumentCellRenderer,
      },
      rowData: jsonResponse.data.documents,
      rowSelection: "single",
      paginationPageSize: 5,
      paginationNumberFormatter: function (params) {
        return "[" + params.value.toLocaleString() + "]";
      },
    };
  }

  documentInfo = (params) => {
    //const selectedRows = params.node.rowIndex;
    const test = params.data.title;
    this.setState({
      showDesModel: !this.state.showDesModel,
      displayData: params.data,
    });
  };

  onGridReady = (params) => {
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;
    params.api.sizeColumnsToFit();
    document.querySelector(
      "#selectedRows"
    ).innerHTML = this.gridApi.getModel().getRowCount();
  };

  handleChildClick = (event) => {
    this.setState({ showDesModel: !this.state.showDesModel });
  };

  render() {
    return (
      <div>
        <Navbar bg="primary" variant="dark">
          <Navbar.Brand>
            Total :
            <span
              style={{ marginLeft: "5px", marginRight: "5px" }}
              id="selectedRows"
            ></span>
            records
          </Navbar.Brand>
          <div className="navbar-nav w-100">
            <span className="nav-item ml-auto">
              <IconContext.Provider
                value={{
                  style: { fontSize: "22px" },
                }}
              >
                <div>
                  <AiOutlineReload />
                </div>
              </IconContext.Provider>
            </span>
          </div>
        </Navbar>
        <div
          className="ag-theme-alpine-dark"
          style={{ height: "350px", width: "100%" }}
        >
          <AgGridReact
            columnDefs={this.state.columnDefs}
            rowData={this.state.rowData}
            rowSelection={this.state.rowSelection}
            onGridReady={this.onGridReady}
            frameworkComponents={this.state.frameworkComponents}
            pagination={true}
            paginationPageSize={this.state.paginationPageSize}
            paginationNumberFormatter={this.state.paginationNumberFormatter}
            // onSelectionChanged={this.onSelectionChanged.bind(this)}
            //onSelectionChanged={this.togglePopup.bind(this)}
          ></AgGridReact>
        </div>
        <BootstrapModal
          onClick={this.handleChildClick}
          showHide={this.state.showDesModel}
          displayData={this.state.displayData}
        />
      </div>
    );
  }
}

export default MyDocuments;
