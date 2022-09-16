import React, { Component } from 'react'
import { NavLink, Route, Routes , Navigate} from 'react-router-dom'
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
    

                            <NavLink style={({ isActive }) => ({ color: isActive ? "gray" : "#000", background: isActive ? "orange" : "#fff", fontWeight: isActive ? "bold" : "normal" })} className="list-group-item" to="/about">About</NavLink>
                            <NavLink className={({ isActive }) => "list-group-item" + (isActive ? " demo" : "")} to="/home">Home</NavLink>


                        </div>
                    </div>
                    <div className="col-xs-6">
                        <div className="panel">
                            <div className="panel-body">
                                {/* 注册路由 */}
                                <Routes>
                                    {/* V6自动严格匹配，需要模糊匹配在后面加/*
                                    
                                        V5是模糊匹配，前面的路径必须要一致。开启严格匹配：exact={true} */}
                                    <Route path="/about" element={<About />} />
                                    <Route path="/home/*" element={<Home />} />        
                                    <Route path="*" element={<Navigate replace to="/home" />} />        
                                </Routes>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
