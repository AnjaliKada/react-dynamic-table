import React,{useEffect} from "react";
import TableComponent from "../table";
import {getClientNode} from "../../utils/api"


export default function ClientNode() {
  var headers= getClientNode().headers;
  var resultSet= getClientNode().resultSet;
  useEffect(() => {
    resultSet= getClientNode().resultSet;
  }
  )
    
  return (
    <div>
      <TableComponent ScTy="clientNode" headers={headers} resultSet={resultSet}/>
    </div>
    
  );
}