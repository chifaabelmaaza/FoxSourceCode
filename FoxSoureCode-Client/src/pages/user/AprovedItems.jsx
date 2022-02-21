import React, { useState } from 'react';
import { useRouteMatch, Switch, Route, Link } from "react-router-dom";
import ItemsMenu from './ItemsMenu';
import "../../scss/user.scss"
import { Alert, Tooltip } from '@mui/material';

function AprovedItems() {

    let { path, url } = useRouteMatch();
    const [active, setActive] = useState("my-products")

    return <div className="my-items">

        <ItemsMenu url={url} active={active} setActive={setActive} />

        <div id="transactions" className="collapse show mt-2">
            <div className="table-responsive">
                <table className="table table-striped table-bordered table-hover">
                    <thead>
                        <tr>
                            <th width="87"></th>
                            <th width="190">Item Name</th>
                            <th>Price</th>
                            <th>Status</th>
                            <th width="55">Views</th>
                            <th>Sales</th>
                            <th style={{ width: "88px" }}>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr height="58px">
                            <td>
                                <img className="card-img-top" style={{ width: "45px", borderRadius: "3px", position: "relative", left: "9px", verticalAlign: "middle" }} src="https://www.sellanycode.com/images/sellanycode-min.png" alt="" />
                            </td>
                            <td>

                            </td>
                            <td align="center" style={{ verticalAlign: "middle" }}>
                                <Tooltip title="Free Item" placement="top">
                                    <span className="badge bg-primary text-white" >Free</span>
                                </Tooltip>
                            </td>
                            <td align="center" style={{ verticalAlign: "middle" }}>
                                <Tooltip title="New Item" placement="top">
                                    <span className="badge bg-primary text-white">New</span>
                                </Tooltip>
                            </td>
                            <td>3</td>
                            <td>0</td>
                            <td>
                                <div className="d-flex align-items-center">
                                    <Tooltip title="View Item" placement="top">
                                        <Link to="/view/item">
                                            <button className="btn btn-sm btn-success"><i className="fas fa-search-plus"></i></button>
                                        </Link>
                                    </Tooltip>

                                    <Tooltip title="Edit Item" placement="top">
                                        <Link to="/edite/item">
                                            <button className="btn btn-sm btn-primary"><i className="fas fa-pencil-alt"></i></button>
                                        </Link>
                                    </Tooltip>
                                    <Tooltip title="Delete Item" placement="top">
                                        <Link to="/delete/item">
                                            <button className="btn btn-sm btn-danger"><i className="fas fa-trash-alt"></i></button>
                                        </Link>
                                    </Tooltip>

                                </div>
                            </td>
                        </tr>
                    </tbody>
                    <tfoot>
                        <tr>
                            <th colSpan="7">
                                <Alert severity="warning" className="my-2">No Items Added! Upload your Item & Code <Link to="/user/add-product">Here in 3 easy steps!</Link> 🚀🙂</Alert>
                            </th>
                        </tr>
                    </tfoot>
                </table>
            </div>
        </div>
    </div>;
}

export default AprovedItems;
