import React, { Component } from 'react'
import { Navigate, NavLink, Route, Routes} from 'react-router-dom'
import About from './pages/About'
import Home from './pages/Home'
import Header from './components/Header'



export default class App extends Component {
    render() {
        return (
            <div>
                <Header />
                <div className="row">
                    <div className="col-xs-2 col-xs-offset-2">
                        <div className="list-group">
                            <NavLink style={({ isActive }) => ({ color: isActive ? "gray" : "#000", background: isActive ? "orange" : "#fff", fontWeight: isActive ? "bold" : "normal" })} className="list-group-item" to="/atguigu/about/person">About</NavLink>
                            <NavLink className={({ isActive }) => "list-group-item" + (isActive ? " demo" : "")} to="/atguigu/home">Home</NavLink>
                        </div>
                    </div>
                    <div className="col-xs-6">
                        <div className="panel">
                            <div className="panel-body">
                                {/* 注册路由 */}
                                <Routes>                 
                                    <Route path="/atguigu/about/*" element={<About />} />
                                    <Route path="/atguigu/home" element={<Home />} />      
                                </Routes>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
