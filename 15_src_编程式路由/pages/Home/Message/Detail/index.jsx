import React, { Component } from 'react'
import {useParams} from 'react-router-dom'

const mock = [
    {id:'001',content:"你好，这是消息1"},
    {id:'002',content:"你好，这是消息2"},
    {id:'003',content:"你好，这是消息3"},
]

export default function Detail(){
  const params = useParams()
    // console.log(location)
    return (
        <ul>
          <li>ID:{params.id}</li>
          <li>Title:{params.title}</li>
          <li>Content:{mock.find(detailObj=>detailObj.id===params.id).content}</li>
        </ul>
      )
}


/* function HocDetail(wrap){
    const params = useParams()
    return class extends Component {
        render(){
            return (
                <wrap params={params}/>
            )
        }
    }
}
class Detail extends Component {
  render() {
    const {params} = this.props
    console.log(params)
    return (
      <ul>
        <li>ID</li>
        <li>Title:</li>
        <li>Content:</li>
      </ul>
    )
  }
}

export default HocDetail(Detail); */
