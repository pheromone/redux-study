import React,{Component} from 'react';
import { bindActionCreators } from  'redux';
import OneView from '../components/oneView';
import * as oneActin from '../actions/oneAction';
import { connect } from 'react-redux';

class One extends Component {
    // 构造
      constructor(props) {
        super(props);
        // 初始状态
        this.state = {};
      }
      render() {
          const { state, actions } = this.props;
          return (
              <OneView
                  OneAction = {state.bgColor}
                  {...state}
                  {...actions}
              />
          );
      }
}

export default connect(state => ({
        state:state.OneAction
    }),
    (dispatch) => ({
        actions: bindActionCreators(oneActin,dispatch)
    })
)(One);