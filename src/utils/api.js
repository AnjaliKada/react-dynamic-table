var mfHeaders= ["Message Formats", "Message Type", "Processing Code", "Hydra Node", "Mandatory Fields","Status", "Action"];
var mfResultSet=[{messageFormat: "mf1", messageType: "T1", processingCode: "PC1", hydraNode: "HN1", mandatoryFields: "m1", status: "active"},
                     {messageFormat: "mf2", messageType: "T2", processingCode: "PC2", hydraNode: "HN2", mandatoryFields: "m2", status: "active"}
                    ];
var cnHeaders=["Client Node ID", "Hydra Node", "Client Node ID Group", "Status", "Action"];
var cnResultSet=[{clientNodeID: "CN1", hydraNode: "HN1", clientNodeIdGroup: "CN", status: "Active"},
                    {clientNodeID: "CN2", hydraNode: "HN2", clientNodeIdGroup: "CN", status: "Active"}];
export  function getMandatoryFields() {
   
    return (
        {headers: mfHeaders,
            resultSet: mfResultSet
           }

    ) 
}

export  function getClientNode() {
    
    return (
        {headers: cnHeaders,
            resultSet: cnResultSet
           }
    )      
}
export function getClientNodeById(id){
  return cnResultSet.find(clientNode=>clientNode.clientNodeID===id)
}
export function updateClientNode(clientNode){
  for(var i=0;i<cnResultSet.length;i++){
    if(cnResultSet[i].clientNodeID===clientNode.clientNodeID){
      cnResultSet[i].hydraNode= clientNode.hydraNode;
      cnResultSet[i].clientNodeIdGroup= clientNode.clientNodeIdGroup;
      cnResultSet[i].status= clientNode.status;

    }

  }

  
}
