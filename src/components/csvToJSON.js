import React from "react";
import * as XLSX from "xlsx/xlsx.mjs";
import { saveDataToLocalStorage, getDataFromLocalStorage } from "./LocalStorageManager.js";
import { addUploadedData } from "../screens/impuestos/CargaFacturasScreen.js";

class CsvToJson extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.state = {
      file: "",
    };
  }

  handleClick(e) {
    this.refs.fileUploader.click();
  }

  filePathset(e) {
    e.stopPropagation();
    e.preventDefault();
    var file = e.target.files[0];
    console.log(file);
    this.setState({ file });

    if (file !== undefined)
    {
      this.readFile(file)
    }
  }

  readFile(f) {
    // var f = this.state.file;
    // var name = f.name;
    const reader = new FileReader();
    reader.onload = (evt) => {
      const bstr = evt.target.result;
      const wb = XLSX.read(bstr, { type: "binary" });

      const wsname = wb.SheetNames[0];
      const ws = wb.Sheets[wsname];

      const data = XLSX.utils.sheet_to_csv(ws, { header: 1 });

      // console.log("Data from file >>>" + data); // show file data

      const json_data = this.convertToJson(data);

      saveDataToLocalStorage(this.props.key, json_data); // save data to localStorage

      // console.log(json_data); // shows data in json format

      addUploadedData(this.props.key, this.props.setImpuestoData);
    };
    reader.readAsBinaryString(f);
  }

  loadFromLocalStorage = (key) => {
    const data = getDataFromLocalStorage(key);
    console.log(data);
  };

  convertToJson(csv) {
    var lines = csv.split("\n");
    var result = [];
    var headers = lines[0].split(",");

    for (var i = 1; i < lines.length; i++) {
      var obj = {};
      var currentline = lines[i].split(",");

      for (var j = 0; j < headers.length; j++) {
        obj[headers[j]] = currentline[j];
      }

      result.push(obj);
    }

    //return result; //JavaScript object
    return JSON.stringify(result); //JSON
  }

  render() {
    return (
      <div>
        <input type="button" className='btn btn-success w-100 text-center' id="import_button" value="Importar CSV" onClick={() => { document.getElementById('file').click() }}></input>
        <input type="file" className="d-none" accept=".csv" id="file" ref="fileUploader" onChange={ this.filePathset.bind(this) } />
        {/* <input type="file" accept=".csv" id="file" ref="fileUploader" onChange={this.filePathset.bind(this)}/>
        <br /><br />  
        <button onClick={() => { this.readFile(); }}>Read File</button>
        <br /><br />
        <button onClick={() => { this.loadFromLocalStorage("facturas"); }}>Load from localStrorage</button> */}
      </div>
    );
  }
}

export default CsvToJson;
