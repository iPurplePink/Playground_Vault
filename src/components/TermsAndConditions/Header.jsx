import React, { Component } from 'react';
import Row from 'antd/lib/row';

class Header extends Component {
    render() {
        return(
            <section>
            <Row className = 'headerTop'/>
            <Row className = 'header'/>
            </section>
        )
    }
}

export default Header;