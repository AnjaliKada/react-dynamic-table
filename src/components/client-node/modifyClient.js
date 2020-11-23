import React,{useState} from "react";
import {updateClientNode,getClientNodeById} from "../../utils/api"
export default function ModifyClient(props) {
    const clientNodeID= props.match.params.id;
    const clientNode= getClientNodeById(clientNodeID);
    const [hydraNode, setHydraNode]= useState(clientNode.hydraNode);
    const [clientNodeIdGroup,setClientNodeIdGroup]= useState(clientNode.clientNodeIdGroup);
    const [status, setStatus]= useState(clientNode.status);
    const clickHandler=()=>{
        updateClientNode({
            clientNodeID: clientNodeID,
            hydraNode: hydraNode,
            clientNodeIdGroup: clientNodeIdGroup,
            status: status
        })
        props.history.push('/client-node');
    }
    const cancelHandler=()=>{
        props.history.push('/client-node');
    }
    return(
        <div>
            <div className="container">
                <div className="row">
                    <div className="card col-md-6 offset-md-3 offset-md-3">
                        <h3 className="text-center">Update ClientNode</h3>
                        <div className="card-body">
                            <form>
                            <div className="form-group">
                                    <label>Client Node ID</label>
                                    <input  className="form-control"
                                     value={clientNodeID} readOnly/>

                                </div>
                                <div className="form-group">
                                    <label>HydraNode</label>
                                    <input  className="form-control"
                                     value={hydraNode} onChange={e => setHydraNode(e.target.value)}/>

                                </div>
                                
                                <div className="form-group">
                                    <label>Client Node ID Group</label>
                                    <input className="form-control"
                                     value={clientNodeIdGroup} onChange={e => setClientNodeIdGroup(e.target.value)}/>

                                </div>

                                <div className="form-group">
                                    <label>Status</label>
                                    <input  className="form-control"
                                    value={status} onChange={e => setStatus(e.target.value)}
                                     />

                                </div>
                                <button className="btn btn-primary" onClick={clickHandler}>Update</button>
                                <button className="btn btn-danger" onClick={cancelHandler} style={{marginLeft:"10px"}}>Clear</button>
                            </form>

                        </div>

                    </div>

                </div>

            </div>
        </div>
    )

}
