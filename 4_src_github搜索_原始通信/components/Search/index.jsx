import React, { Component } from 'react'
import axios from 'axios'

export default class Search extends Component {
    search = ()=> {
        const {keyWord} = this
        //请求之前要将：isLoading变为true，将isFirst变为false
        this.props.updateAppState({
            isLoading: true,
            isFirst: false
        })
        //发送请求了
        axios.get(`http://localhost:3000/search/users?q=${keyWord.value}`).then(
            //请求成功了，将isLoading变为false，传入users
            response => {
                this.props.updateAppState({
                    users: response.data.items,
                    isLoading: false

                })
            },
            //请求失败了，存储错误信息，将isLoading变为false
            error => {
                this.props.updateAppState({
                    errorMsg: error.message,
                    isLoading: false

                })
            }
        )
    }
    render() {
        return (
            <section className="jumbotron">
                <h3  className="jumbotron-heading">Github用户搜索案例</h3>
                <div>
                    <input ref={c=>{this.keyWord = c}} type="text" placeholder="请输入用户名" />&nbsp;
                    <button onClick={this.search}>搜索</button>
                </div>
            </section>
        )
    }
}
