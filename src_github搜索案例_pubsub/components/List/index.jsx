import React, { Component } from "react";
import './index.css'
import pubsub from 'pubsub-js'

export default class List extends Component {
    state = {
        users: [], //users初始值为数组
        isFirst: true,
        isLoading: false,
        err: '',
    }
    componentDidMount() {
        this.token = pubsub.subscribe('hjw', (_, stateObj) => {
            this.setState(stateObj)
        })
    }
    
    componentWillUnmount() {
        pubsub.unsubscribe(this.token)
    }
    render() {
        const { users, isFirst, isLoading, err } = this.state
        return (
            <div>
                <div className="row">
                    {
                        isFirst === true ? <p>欢迎登录！请进行搜索</p> :
                            isLoading === true ? <p>正在加载，请稍后！</p> :
                                err ? <h2 style={{ color: 'red' }}>{err}</h2> :
                                    users.map((itemsObj) => {
                                        return (
                                            <div key={itemsObj.id} className="card">
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