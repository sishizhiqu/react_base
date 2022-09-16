import React, { Component } from 'react'
import './index.css'
import { nanoid } from 'nanoid'

export default class List extends Component {
    render() {
        const { users, isLoading, isFirst, errorMsg } = this.props
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
