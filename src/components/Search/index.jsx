import React, { Component } from "react";
import axios from "axios";
export default class List extends Component {

    SearchEvent=()=>{
        //获取用户的输入（连续解构赋值+重命名）
        const {inputElement:{value:keyWord}} = this
        console.log(keyWord);
        //发送网络请求
        axios.get(`http://localhost:3000/search/users?q=${keyWord}`).then(
            (res)=>{
                console.log('请求成功！',res.data);
            },(error)=>{
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