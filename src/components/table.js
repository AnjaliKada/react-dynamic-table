import React from "react";
import {Link} from "react-router-dom"

export default function TableComponent(props) {
    const headers= props.headers;
    const tableData= props.resultSet;

    const generateClientTableData= ()=>{
      return tableData.map(data=>
        <tr key={data.clientNodeID}>
            <td>{data.clientNodeID}</td>
            <td>{data.hydraNode}</td>
            <td>{data.clientNodeIdGroup}</td>
            <td>{data.status}</td>
            <td>
           <div className="dropdown">
                <button className="horizontal-dots"></button>
                <div className="dropdown-content">
                   <Link to={`/modify-client/${data.clientNodeID}`} >Modify</Link>
                </div>
            </div>
            </td>
        </tr>
        )

    }
    const generateMandatoryTableData= ()=>{

    return tableData.map(data=>
        <tr key={tableData.toString()}>
            <td>{data.messageFormat}</td>
            <td>{data.messageType}</td>
            <td>{data.processingCode}</td>
            <td>{data.hydraNode}</td>
            <td>{data.mandatoryFields}</td>
            <td>{data.status}</td>
            <td>
            <div className="dropdown">
                 <button className="horizontal-dots"></button>
                 <div className="dropdown-content">
                    <a href="#">Modify</a>
                    <a href="#">Delete</a>
                </div>
             </div>
             </td>
        </tr>
        )

    

    }
  return (
    <table className = "table table-striped">
        <thead>
            <tr>
            {
                headers.map(header=><th key={header.toString()}>{header}</th>)
            }
            </tr>
        </thead>
        <tbody>
            {(props.ScTy==="clientNode") && generateClientTableData()}
            {(props.ScTy==="mandatoryFields") && generateMandatoryTableData()}
        </tbody>
    </table>
                
  )
}