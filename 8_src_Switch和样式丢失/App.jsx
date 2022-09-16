import React, { Component } from 'react'
import { NavLink, Route, Routes } from 'react-router-dom'
import About from './pages/About'
import Home from './pages/Home'
import Header from './components/Header'
import Test from './pages/Test'


export default class App extends Component {
    render() {
        return (
            <div>
                <Header />
                <div className="row">
                    <div className="col-xs-2 col-xs-offset-2">
                        <div className="list-group">
                            {/* 原生html中，我们使用a标签进行页面的跳转 */}
                            {/* <a className="list-group-item" href="./about.html">About</a>
                            <a className="list-group-item" href="./home.html">Home</a> */}

                            {/* React中，使用 进行路径的切换 */}
                            {/* V5中直接使用属性activeClassName="??" ，然后给这个类名写css就行 */}

                            <NavLink style={({ isActive }) => ({ color: isActive ? "gray" : "#000", background: isActive ? "orange" : "#fff", fontWeight: isActive ? "bold" : "normal" })} className="list-group-item" to="/atguigu/about">About</NavLink>
                            <NavLink className={({ isActive }) => "list-group-item" + (isActive ? " demo" : "")} to="/atguigu/home">Home</NavLink>


                        </div>
                    </div>
                    <div className="col-xs-6">
                        <div className="panel">
                            <div className="panel-body">
                                {/* 注册路由 */}
                                <Routes>
                                    {/* V5版本路由中会匹配所有符合路径的，都会全部展示，如果需要匹配到一个就停止，则用<Switch></Switch>包裹 */}
                                    {/* V6版本中用<Routes><Rountes/>代替了，路由只匹配第一个找到的 */}
                                    {/* <Route path="/about" element={<Test/>} /> */}

                                    <Route path="/atguigu/about" element={<About />} />
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
