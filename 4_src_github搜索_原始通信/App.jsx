import React, { Component } from 'react'
import Search from './components/Search'
import List from './components/List'


export default class App extends Component {
    state = {
        users: [], //用户信心
        isLoading: false, //标识是否在加载中
        isFirst: true, //是否初次展示
        errorMsg: '' //错误信息
    }



    //更新List列表的状态
    updateAppState = (stateObj) => {
        this.setState(stateObj)
    }

    render() {
        return (
            <div className="container">
                <Search updateAppState={this.updateAppState} />
                <List {...this.state} />

            </div>
        )
    }
}
