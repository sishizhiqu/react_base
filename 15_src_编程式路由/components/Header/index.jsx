import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'

// 该组件是一般组件，没有那些props，需要用withRoute API 来做一个转换
class Header extends Component {
    back = () => {
        this.props.history.goBack()
    }
    forward = () => {
        this.props.history.goForward()
    }
    render() {
        return (
            <div className="row">
                <div className="col-xs-offset-2 col-xs-8">
                    <div className="page-header">
                        <h2>React Router Demo</h2>
                        <button onClick={this.back}>回退</button>
                        <button onClick={this.forward}>前进</button>
                    </div>

                </div>

            </div>
        )
    }
}
export default withRouter(Header)
