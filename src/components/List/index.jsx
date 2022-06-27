import React, { Component } from "react";
import './index.css'
export default class List extends Component {
    render() {
        return (
            <div>
                <div className="row">
                    {
                        this.props.users.map((itemsObj)=>{
                            return(
                                <div key ={itemsObj.id} className="card">
                                    <a rel="noreferrer" href={itemsObj.html_url} target="_blank">
                                        <img src={itemsObj.avatar_url} style={{ width: "100px" }} />
                                    </a>
                                    <p className="card-text">{itemsObj.login}</p>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        )
    }
}