import React, { Component } from "react";
import './index.css'
export default class List extends Component {
    render() {
        const {users,isFirst,isLoading,err} =this.props
        return (
            <div>
                <div className="row">
                    {
                        isFirst===true? <p>欢迎登录！请进行搜索</p>: 
                        isLoading===true?<p>正在加载，请稍后！</p>:
                        err?<h2 style={{color:'red'}}>{err}</h2>:
                        users.map((itemsObj)=>{
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