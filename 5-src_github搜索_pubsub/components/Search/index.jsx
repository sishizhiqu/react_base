import React, { Component } from 'react'
import axios from 'axios'
import PubSub from 'pubsub-js'

export default class Search extends Component {
    search = () => {
        const { keyWord } = this
        //请求之前要将List组件的：isLoading变为true，将isFirst变为false

        PubSub.publish('update_list_state', { isLoading: true, isFirst: false })
        //使用axios发送请求
        axios.get(`http://localhost:3000/search/users?q=${keyWord.value}`).then(
            //请求成功了，将List组件的isLoading变为false，传入users
            response => {
                PubSub.publish('update_list_state',{users: response.data.items,isLoading: false})

            },
            //请求失败了，存储错误信息，将List组件的isLoading变为false
            error => {
                PubSub.publish('update_list_state',{errorMsg: error.message,isLoading: false})

            }
        )

        //使用Fetch发送请求
        /* fetch(`http://localhost:3000/search/users?q=${keyWord.value}`)
        .then(
            response => { 
                console.log('联系服务器成功了', response);
                return response.json()
            }
        )
        .then( response => { console.log('获取数据成功了',response)} )
        .catch(reason => {console.log('失败了',reason)}) */
    }

    render() {
        return (
            <section className="jumbotron">
                <h3 className="jumbotron-heading">Github用户搜索案例</h3>
                <div>
                    <input ref={c => { this.keyWord = c }} type="text" placeholder="请输入用户名" />&nbsp;
                    <button onClick={this.search}>搜索</button>
                </div>
            </section>
        )
    }
}
