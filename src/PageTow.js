import React, { Component } from 'react'

class PageTow extends Component {
    constructor(props) {
        super(props)

        this.state = {

        }
    }

    render() {
        return (
            <div>
                <div className="page1-content">
                    <img src={logo} alt="avatar" />
                    <span className="title">衡阳极速模型(134)</span>
                    <span className="sub-title">胡俊邀请你加入群聊</span>
                </div>
                <div className="page1-footer">
                    <span onClick={this.handleClick}>同意加入</span>
                </div>
            </div>
        )
    }
}

export default PageTow
