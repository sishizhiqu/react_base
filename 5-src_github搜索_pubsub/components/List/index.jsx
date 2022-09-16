import React, { Component } from 'react'
import PubSub from 'pubsub-js'
import './index.css'
import { nanoid } from 'nanoid'

export default class List extends Component {
    state = {
        users: [], //用户信心
        isLoading: false, //标识是否在加载中
        isFirst: true, //是否初次展示
        errorMsg: '' //错误信息
    } 
    componentDidMount(){
        //订阅消息
        this.token = PubSub.subscribe('update_list_state',(msg,stateObj)=>{
            this.setState(stateObj)
        })
    }
    componentWillUnmount(){
        //取消订阅
        PubSub.unsubscribe()
    }
    render() {
        const { users, isLoading, isFirst, errorMsg } = this.state
        return (
            <div className="row">
                {
                    isFirst ? <h1>欢迎使用</h1> :
                    isLoading ? <h1>正在加载中</h1> :
                    errorMsg ? <h1>{errorMsg}</h1> :
                    users.map((user) => {
                        return (
                        <div key={nanoid()} className="card">
                            <a href={user.html_url} rel="noreferrer" target="_blank">
                                <img src={user.avatar_url} style={{ width: '100px' }} alt="pic" />
                            </a>
                            <p className="card-text">{user.login}</p>
                        </div>
                        )
                    })
                }

             </div>
        )
    }
}
