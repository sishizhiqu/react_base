import React, { Component } from 'react'
import axios from 'axios'

export default class App extends Component {
    getStudents = () => {
        axios.get('http://localhost:3000/api1/students').then(
                response=> {console.log(response.data)},
                (error) => { console.log('错误了') }
            )
    }
    getCars = () => {
        axios.get('http://localhost:3000/api2/cars').then(
                response=> {console.log(response.data)},
                (error) => { console.log('错误了') }
            )
    }
    render() {
        return (
            <div>
                <button onClick={this.getStudents}>点我获取学生数据</button>
                <button onClick={this.getCars}>点我获取汽车数据</button>
            </div>
        )
    }
}