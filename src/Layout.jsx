import React, { Component } from 'react';
import {Row, Col} from 'antd';
import './css/main.scss';
import Header from '../src/components/TermsAndConditions/Header';
import Content from '../src/components/TermsAndConditions/Content';

class App extends Component {
  render() {
    return (
     <section>
          <Header/>
       <Row type="flex" justify="center">
       <Col>
          <Content/>
      </Col>
       </Row>

     </section> 
    );
  }
}

export default App;
