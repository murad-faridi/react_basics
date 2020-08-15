import React, {Component} from 'react'
import logo from '../logo192.png';

class Header extends Component {
    render() {
        return (
            <header style={{textAlign: "center"}}>
                <div>
                    <img src={logo} alt="logo" width="5%" />
                </div>
                <input type="text" 
                style={{height: 30, marginLeft: 10, width: 300}} 
                onChange={this.props.keywords} 
                />
            </header>
        )
    }
}

export default Header