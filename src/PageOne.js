import React, { Component } from 'react'
import logo from './logo.svg';

class PageOne extends Component {
    constructor(props) {
        super(props)

        this.state = {
            agreeJoin: false,
            num: 134
        }
    }

    handleClick = () => {

    }

    render() {
        const { agreeJoin, num } = this.state
        return (
            <div>
                <div className="page1-content">
                    <img src={logo} alt="avatar" />
                    <span className="title">衡阳极速模型({num})</span>
                    <span className="sub-title">胡俊邀请你加入群聊</span>
                </div>
                <div className="page1-footer">
                    {agreeJoin ? <span className="page-button" onClick={this.handleClick}>同意加入</span> : <span className="page-text">你已经加入，等待管理员审核</span>}
                </div>
            </div>
        )
    }
}

export default PageOne
