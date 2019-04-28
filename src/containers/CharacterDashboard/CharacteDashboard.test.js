import React from 'react'

import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import CharaterDashboard from './index'
import CharaterInforBoard from '../../components/CharacterInforBoard'
import Loading from '../../components/Loading'

configure({ adapter: new Adapter() });

describe('<CharaterDashboard/>', () => {

    const defaultProps = {
        match: { params: { page: 0 } }
    }

    it('should render one <Footer/>', () => {
        let wrapper = shallow(<CharaterDashboard {...defaultProps} />);
        expect(wrapper.dive().find(Loading)).toHaveLength(1);
    });
})