import React, { Component } from "react";
import axios from "axios";
import pubsub from 'pubsub-js'

export default class List extends Component {

    SearchEvent = async() => {
        //获取用户的输入（连续解构赋值+重命名）
        const { inputElement: { value: keyWord } } = this
        console.log(keyWord);

        // this.props.saveUpdateMessage({users:[],isFirst:false,isLoading:true,err:''})
        pubsub.publish('hjw', { users: [], isFirst: false, isLoading: true, err: '' })
        //发送网络请求代理方法
        //then返回的还是一个promise对象于是还可以.then
        /*方法一*/
        // fetch(`https://api.github.com/search/users?q=${keyWord}`).then(
        //     (response) => {
        //         console.log('联系服务器成功了')
        //         return response.json()
        //     },
        //     (error) => {
        //         console.log('联系服务器失败了',error.json())
        //         return new Promise(()=>{})
        //     }
        // ).then((response)=>{
        //     console.log('获取数据成功了',response)
        // },
        // (error)=>{
        //     console.log('获取数据失败了',error)
        // }).catch(
        //     (error)=>{
        //         console.log(error)
        //     }
        // )

        /*方法二*/
        // fetch(`https://api.github.com/search/users?q=${keyWord}`).then(
        //     (response) => {
        //         console.log('联系服务器成功了')
        //         return response.json()
        //     }).then((response)=>{
        //     console.log('获取数据成功了',response)
        // }).catch(
        //     (error)=>{
        //         console.log(error)
        //     }
        // )

        /*方法三*/
        try{
            const response = await fetch(`https://api.github.com/search/users?q=${keyWord}`)
            const data =await response.json()
            console.log(data)
        }catch{(error)=>{
            console.log('请求出错',error);
        }}

        // api1/search/users
        axios.get(`https://api.github.com/search/users?q=${keyWord}`).then(
            (res) => {
                // this.props.saveUpdateMessage({users:res.data.items,isFirst:false,isLoading:false,err:''})
                pubsub.publish('hjw', { users: res.data.items, isFirst: false, isLoading: false, err: '' })
                console.log('请求成功！', res.data);
            }, (error) => {
                // this.props.saveUpdateMessage({isFirst:false,isLoading:false,err:error.message})
                pubsub.publish('hjw', { isFirst: false, isLoading: false, err: error.message })
                console.log('请求失败！', error)
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