import React, {Component} from 'react';
import Row from 'antd/lib/row';
import Col from 'antd/lib/col';
import Tabs from 'antd/lib/tabs'
// import Panel from './Panel';
import Content from './Content'
// import Link from 'react-router-dom/Link';
import General from './Panel/General';
import Marketplace from './Panel/Marketplace';

const TabPane = Tabs.TabPane;

// function callback(key) {
//     console.log(key);
//     // let mainContent = new MainContent(key);
//     // return mainContent;
//   }

class MainContent extends Component {
    state = {
        isGeneral: true,
    }


    isGeneral = (key) => {
       console.log('key', key)

       if (key === '1'){
           this.setState({isGeneral: true})
       }
        else if (key === '2') {
        this.setState({isGeneral: false})
       }
    //    console.log('updateState', this.state.isGeneral);
    }
            
    render() {
        console.log('renderState', this.state.isGeneral);
        return(
            <section className = 'tc-mainContent'>
                <Row>
                    <Col span={5}>
                    <section className = 'tc-panel'>
                {/* <Row> */}
                    <Tabs onChange={this.isGeneral} type="card">
                    <TabPane tab="General" key="1">
                        <General/>
                    </TabPane>
                    <TabPane tab="Marketplace" key="2">
                        <Marketplace/>
                        {/* {console.log('render():', this.tabKey)} */}
                        
                    </TabPane>
                    </Tabs> 
                {/* </Row> */}
            </section>
                    </Col>
                    <Col span={19}>
                        <Content
                        isGeneral={this.state.isGeneral}/>
                    </Col>
                </Row>
            </section>
        )
    }
}

export default MainContent;