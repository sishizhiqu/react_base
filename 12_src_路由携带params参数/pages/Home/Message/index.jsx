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
                            return <li key={msgObj.id}><Link to={`/home/message/detail/${msgObj.id}/${msgObj.title}`}>{msgObj.title}</Link></li>
                        })
                    }
                </ul>
                <hr />
                <Routes>
                    <Route path="detail/:id/:title" element={<Detail />}></Route>
                </Routes>
            </div>

        )
    }
}
