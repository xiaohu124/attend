import React, { Component } from 'react'
import CommentTitle from './CommentTitle'
import CommentMain from './CommentMain'
import CommentReport from './CommentReport'

class CommentBox extends Component {
  constructor() {
    super()
    this.state = {
      comments: [],
      datas:{
        startDate: '11.21',
        endDate: '12.20',
        weekdays: '周一',
        closingDate: '12月18日'
      }
    }
  }
  render() {
    return (
      <div className='entry-container'>
        <div className='entry-container-center'>
          <CommentTitle datas={this.state.datas}/>
          <CommentMain />
          <CommentReport />
        </div>
      </div>
    )
  }
}

export default CommentBox