import React, {Component} from 'react';
import Row from 'antd/lib/row';
import Col from 'antd/lib/col';
import TCEmployer from '../../modules/TermsAndConditions/Employer';
import TCAgency from '../../modules/TermsAndConditions/Agency'
import Link from 'react-router-dom/Link';

class MainContent extends Component {
    state = {
        isEmployer: true,
    }
    
    // solutionSelected = val => {
    //     console.log('pathname: ', val);
    //     if (val !== this.state.isEmployer){
    //         if (val === '/employer'){
    //             this.setState({isEmployer: true})
    //         }
    //         else if (val === '/agency'){
    //             this.setState({isEmployer: false})
    //         }
    //     }
    // }
    render() {
        console.log('state', this.state);
        // const url = window.location.pathname;
        // console.log('url', url);
        // this.solutionSelected(url);
        return(
            <section className = 'Content'>
                <div className = 'title'>Ubidy Terms and Conditions</div>
                <div className = 'subTitle'>Permanent Placement Market</div>
                <hr/>
                <div className = 'link-box'>
                <Row>
                    <Col span={4}>
                        <Link to='/employer' >
                            Employer
                        </Link>
                    </Col>
                    <Col span={4}>
                        <Link to='/agency' >
                            Agency
                        </Link>
                    </Col>
                </Row>
                </div>
                <div>
                {/* <TCEmployer/> */}
                <TCAgency/>
                </div>
            </section>
        )
    }
}

export default MainContent;