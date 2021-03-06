import React, { Component } from 'react'
import CommentInstruction from './CommentInstruction'

class CommentMain extends Component {
  constructor () {
    super()
    this.state = {
      username: '',
      department: '',
      dates: '',
      times: '8:30-17:30',
      workreason: '',
      remark: '',
      usernameErrorMsg: '',
      departmentErrorMsg: '',
      dateErrorMsg: '',
      timeErrorMsg: '',
      reasonErrorMsg: '',
      usernameErrorColor: 'comment-main-input',
      departmentErrorColor: 'comment-main-input',
      dateErrorColor: 'comment-main-input',
      timeErrorColor: 'comment-main-input',
      reasonErrorColor: 'comment-main-input'
    }
  }
  handleUsernameChange (event) {
    this.setState({
      username: event.target.value
    })
    if(this.state.username) {
      this.setState({
        usernameErrorMsg: ''
      })
    }
  }
  handleUsernameBlur () {
    this.setState({
      usernameErrorMsg: !this.state.username?'请填写姓名':'',
      usernameErrorColor: !this.state.username?'comment-main-input comment-main-error-input':'comment-main-input'
    })
  }
  handleDepartmentChange (event) {
    this.setState({
      department: event.target.value
    });
    if(this.state.department) {
      this.setState({
        departmentErrorMsg: ''
      })
    }
  }
  handleDepartmentBlur () {
    this.setState({
      departmentErrorMsg: !this.state.department?'请填写所属部门':'',
      departmentErrorColor: !this.state.department?'comment-main-input comment-main-error-input':'comment-main-input'
    })
  }
  handleDatesChange (event) {
    this.setState({
      dates: event.target.value
    })
    if(this.state.dates) {
      this.setState({
        dateErrorMsg: ''
      })
    }
  }
  handleDatesBlur () {
    this.setState({
      dateErrorMsg: !this.state.dates?'请填写日期':'',
      dateErrorColor: !this.state.dates?'comment-main-input comment-main-error-input':'comment-main-input'
    })
  }
  handleTimesChange (event) {
    this.setState({
      times: event.target.value
    });
    if(this.state.times) {
      this.setState({
        timeErrorMsg: ''
      })
    }
  }
  handleTimesBlur () {
    this.setState({
      timeErrorMsg: !this.state.times?'请填写时间段':'',
      timeErrorColor: !this.state.times?'comment-main-input comment-main-error-input':'comment-main-input'
    })
  }
  handleWorkreasonChange (event) {
    this.setState({
      workreason: event.target.value
    });
    if(this.state.workreason) {
      this.setState({
        reasonErrorMsg: ''
      })
    }
  }
  handleWorkreasonBlur () {
    this.setState({
      reasonErrorMsg: !this.state.workreason?'请填写加班事由':'',
      reasonErrorColor: !this.state.workreason?'comment-main-input comment-main-error-input':'comment-main-input'
    })
  }
  handleRemarkChange (event) {
    this.setState({
      remark: event.target.value
    })
  }
  handleSubmit () {
    this.setState({
      usernameErrorMsg: !this.state.username?'请填写姓名':'',
      usernameErrorColor: !this.state.username?'comment-main-input comment-main-error-input':'comment-main-input'
    })
    this.setState({
      departmentErrorMsg: !this.state.department?'请填写所属部门':'',
      departmentErrorColor: !this.state.department?'comment-main-input comment-main-error-input':'comment-main-input'
    })
    this.setState({
      dateErrorMsg: !this.state.dates?'请填写日期':'',
      dateErrorColor: !this.state.dates?'comment-main-input comment-main-error-input':'comment-main-input'
    })
    this.setState({
      timeErrorMsg: !this.state.times?'请填写时间段':'',
      timeErrorColor: !this.state.times?'comment-main-input comment-main-error-input':'comment-main-input'
    })
    this.setState({
      reasonErrorMsg: !this.state.workreason?'请填写加班事由':'',
      reasonErrorColor: !this.state.workreason?'comment-main-input comment-main-error-input':'comment-main-input'
    })
  }
  render() {
    return (
      <div>
        <div className='comment-main'>
          <div className='comment-main-name'>
            <h3>姓名<span className='font-col-up'> *</span></h3>
            <input className={this.state.usernameErrorColor} valve={this.state.username} onChange={this.handleUsernameChange.bind(this)} onBlur={this.handleUsernameBlur.bind(this)} type='text' />
            <div className='error-message font-col-up'>{this.state.usernameErrorMsg}</div>
          </div>
          <div className='comment-main-department'>
            <h3>所属部门<span className='font-col-up'> *</span></h3>
            <p>请正确选择自己所属的二级部门，不要都选择信息技术总部。</p>
            <select className={this.state.departmentErrorColor} value={this.state.department} onChange={this.handleDepartmentChange.bind(this)} onBlur={this.handleDepartmentBlur.bind(this)}>
              <option value=''>请选择</option>
              <option value='j3Hd'>信息技术总部</option>
              <option value='3y41'>技术管理部</option>
              <option value='71OU'>系统维护部</option>
              <option value='8wsk'>系统运行部</option>
              <option value='oQ8a'>基础架构与灾备部</option>
              <option value='Pi7E'>交易运营支持部</option>
              <option value='pSzt'>金融产品支持部</option>
              <option value='7DQj'>营销服务产品部</option>
              <option value='g88x'>机构与高端交易支持部</option>
              <option value='abxn'>投行与后台支持部</option>
              <option value='UIig'>设计与终端研发部</option>
              <option value='AlEQ'>中后端研发部</option>
              <option value='pdyU'>质控与部署部</option>
              <option value='hPnW'>网络系统部</option>
              <option value='cCTj'>信息安全部</option>
              <option value='kr4C'>数据研发服务部</option>
            </select>
            <div className='error-message font-col-up'>{this.state.departmentErrorMsg}</div>
          </div>
          <div className='comment-main-date'>
            <h3>日期(请选择2017-11-21到2017-12-18之间的日期)<span className='font-col-up'> *</span></h3>
            <input type='date' placeholder='年-月-日' min='2017-11-21' max='2017-12-18' value={this.state.dates} onChange={this.handleDatesChange.bind(this)} onBlur={this.handleDatesBlur.bind(this)} className={this.state.dateErrorColor} />
            <div className='error-message font-col-up'>{this.state.dateErrorMsg}</div>
          </div>
          <div className='comment-main-time'>
            <h3>时间段<span className='font-col-up'> *</span></h3>
            <p>填写示例：8:30-17:30；</p>
            <p>默认时间段为8:30-17:30，如需修改请删掉默认值后重新填写</p>
            <input className={this.state.timeErrorColor} type='text' value={this.state.times} onChange={this.handleTimesChange.bind(this)} onBlur={this.handleTimesBlur.bind(this)} />
            <div className='error-message font-col-up'>{this.state.timeErrorMsg}</div>
          </div>
          <div className='comment-main-workreason'>
            <h3>加班事由<span className='font-col-up'> *</span></h3>
            <p>清算加班的统一写清算</p>
            <input className={this.state.reasonErrorColor} type='text' value={this.state.workreason} onChange={this.handleWorkreasonChange.bind(this)} onBlur={this.handleWorkreasonBlur.bind(this)} />
            <div className='error-message font-col-up'>{this.state.reasonErrorMsg}</div>
          </div>
          <div className='comment-main-remark'>
            <h3>备注</h3>
            <input className='comment-main-input' type='text' value={this.state.remark} onChange={this.handleRemarkChange.bind(this)}/>
          </div>
          <CommentInstruction />
        </div>
        <div className='comment-submit'>
          <button className='comment-submit-button' onClick={this.handleSubmit.bind(this)}>提交</button>
        </div>
      </div>
    )
  }
}

export default CommentMain