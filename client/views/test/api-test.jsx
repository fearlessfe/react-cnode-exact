import React from 'react'
import axios from 'axios'

/* eslint-disable */
export default class TestApi extends React.Component {
  constructor() {
    super()
    this.getTopics = this.getTopics.bind(this)
    this.login = this.login.bind(this)
    this.markAll = this.markAll.bind(this)
  }

  getTopics() {
    axios.get('/api/topics')
      .then(res => {
        console.log(res)
      }).catch(err => {
        console.log(err)
      })
  }

  login() {
    axios.post('/api/user/login', {
      accessToken: '1cfd9af4-7f7a-4000-b0c4-5d392ef58061'
    }).then(res => {
      console.log(res)
    }).catch(err => {
      console.log(err)
    })
  }

  markAll() {
    axios.post('/api/message/mark_all?needAccessToken=true')
    .then(res => {
      console.log(res)
    }).catch(err => {
      console.log(err)
    })
  }

  render() {
    return (
      <div>
        <button onClick={this.getTopics}>topics</button>
        <button onClick={this.login}>login</button>
        <button onClick={this.markAll}>markAll</button>
      </div>
    )
  }
}
/* eslint-enable */
