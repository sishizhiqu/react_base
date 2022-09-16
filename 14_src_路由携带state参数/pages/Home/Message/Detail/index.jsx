import React, { Component } from 'react'
import {useLocation} from 'react-router-dom'

const mock = [
    {id:'001',content:"你好，这是消息1"},
    {id:'002',content:"你好，这是消息2"},
    {id:'003',content:"你好，这是消息3"},
]

export default function Detail(){
  const state = useLocation().state
    // console.log(location)
    return (
        <ul>
          <li>ID:{state.id}</li>
          <li>Title:{state.title}</li>
          <li>Content:{mock.find(detailObj=>detailObj.id===state.id).content}</li>
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
