import React, { Component } from 'react'
import { Route, Routes, Link } from 'react-router-dom'
import Detail from './Detail'

export default class Message extends Component {
    state = {
        messageArr: [
            { id: '001', title: '消息1' },
            { id: '002', title: '消息2' },
            { id: '003', title: '消息3' },
        ]
    }
    render() {
        return (
            <div>
                <ul>
                    {
                        this.state.messageArr.map((msgObj) => {
                            return (
                                <li key={msgObj.id}>
                                    {/* 跳转路由携带params参数 */}
                                    {/* <Link to={`/home/message/detail/${msgObj.id}/${msgObj.title}`}>{msgObj.title}</Link> */}

                                    {/* 跳转路由携带search 参数 */}
                                    {/* <Link to={`/home/message/detail?id=${msgObj.id}&title=${msgObj.title}`}>{msgObj.title}</Link> */}

                                    {/* 跳转路由携带state 参数 */}
                                    <Link to="/home/message/detail" state={{id:msgObj.id,title:msgObj.title}}>{msgObj.title}</Link>

                                </li>
                            )
                        })
                    }
                </ul>
                <hr />
                <Routes>
                    {/* 注册路由时，声明接收params参数，要用：占位符 */}
                    {/* <Route path="detail/:id/:title" element={<Detail />}></Route> */}

                    {/* 注册路由时，如果携带的是search参数，无需声明接收，直接注册即可 */}
                    {/* <Route path="detail" element={<Detail />}></Route> */}
                    
                    {/* 注册路由时，如果携带的是state参数，无需声明接收，直接注册即可 */}
                    <Route path="detail" element={<Detail />}></Route>
                </Routes>
            </div>

        )
    }
}
