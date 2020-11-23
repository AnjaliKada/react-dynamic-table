import React from "react";
import TableComponent from "../table";
import {getMandatoryFields} from "../../utils/api"


export default function MandatoryFields() {
  
    const headers= getMandatoryFields().headers;
    const resultSet= getMandatoryFields().resultSet;
  return (
    <TableComponent ScTy="mandatoryFields" headers={headers} resultSet={resultSet}/>
  );
}