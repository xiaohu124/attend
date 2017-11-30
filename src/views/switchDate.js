import React, { Component } from 'react'

export default (WrappedComponent, datas) => {
  class NewComponent extends Component {
    constructor () {
      super()
      this.state = {
        newDates: {
          startDate: '',
          endDate: ''
        }
      }
    }

    componentWillMount () {
      this.state.newDates.startDate = datas.startDate.split('.')[0] + '月' + datas.startDate.split('.')[1] + '日'
      this.state.newDates.endDate = datas.endDate.split('.')[0] + '月' + datas.endDate.split('.')[1] + '日'
      this.setState({
        newDates: this.state.newDates
      })
    }

    render () {
      return <WrappedComponent newDates={this.state.newDates} />
    }
  }
  return NewComponent
}