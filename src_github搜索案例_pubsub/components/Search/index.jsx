import React, { Component } from "react";
import axios from "axios";
import pubsub from 'pubsub-js'

export default class List extends Component {

    SearchEvent=()=>{
        //获取用户的输入（连续解构赋值+重命名）
        const {inputElement:{value:keyWord}} = this
        console.log(keyWord);

        // this.props.saveUpdateMessage({users:[],isFirst:false,isLoading:true,err:''})
        pubsub.publish('hjw',{users:[],isFirst:false,isLoading:true,err:''})
        //发送网络请求代理方法
        // api1/search/users
        axios.get(`https://api.github.com/search/users?q=${keyWord}`).then(
            (res)=>{
                // this.props.saveUpdateMessage({users:res.data.items,isFirst:false,isLoading:false,err:''})
                pubsub.publish('hjw',{users:res.data.items,isFirst:false,isLoading:false,err:''})
                console.log('请求成功！',res.data);
            },(error)=>{
                // this.props.saveUpdateMessage({isFirst:false,isLoading:false,err:error.message})
                pubsub.publish('hjw',{isFirst:false,isLoading:false,err:error.message})
                console.log('请求失败！',error)
            }
        )
    }
    
    render() {
        return (
            <div>
                <section className="jumbotron">
                    <h3 className="jumbotron-heading">搜索gitHub用户数据</h3>
                    <div>
                        <input ref={v => this.inputElement = v} type="text" placeholder="输入关键词进行搜索" />&nbsp;
                        <button onClick={this.SearchEvent}>搜索</button>
                    </div>
                </section>
            </div>
        )
    }
}