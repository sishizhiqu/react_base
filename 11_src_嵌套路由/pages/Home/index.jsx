import React, { Component } from 'react'
import { NavLink, Route, Routes } from 'react-router-dom'
import Message from './Message'
import News from './News'

export default class Home extends Component {
    render() {
        return (
            <div>
                <h2>Home组件内容</h2>
                <div>
                    <ul className="nav nav-tabs">
                        <li>
                            <NavLink className={({ isActive }) => "list-group-item" + (isActive ? " demo" : "")} to="/home/news">News</NavLink>
                        </li>
                        <li>
                            <NavLink className={({ isActive }) => "list-group-item" + (isActive ? " demo" : "")} to="/home/message">Message</NavLink>
                        </li>
                    </ul>
                    <div>
                        <Routes>
                            <Route path="news" element={<News />}></Route>
                            <Route path="message" element={<Message />}></Route>
                        </Routes>
                    </div>
                </div>
            </div>

        )
    }
}
