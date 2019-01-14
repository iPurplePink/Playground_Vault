import React, {Component} from 'react';
import TCGeneral from './General';
import TCMarketplace from './Marketplace';

class TCContent extends Component {
    render() {
        return(
            <section className='tc-content'>
                <div>
                    { this.props.isGeneral ? 
                    <TCGeneral/>
                    :
                    <TCMarketplace/>
                    }
                </div>
            </section>
        )
    }
}

export default TCContent;