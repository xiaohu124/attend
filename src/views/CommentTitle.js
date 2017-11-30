import React, { Component } from 'react'

class CommentTitle extends Component {
  static defaultProps = {
    datas: {}
  }
  render() {
    return (
      <div className='comment-title'>
        <div className='comment-title-text'>
          <h3>信息技术总部{this.props.datas.startDate}-{this.props.datas.endDate}加班填报表</h3>
          <p>本表单填写截至日期为{this.props.datas.closingDate}12：00（{this.props.datas.weekdays}）。请及时填写，以防忘记。</p>
        </div>
      </div>
    )
  }
}

export default CommentTitle