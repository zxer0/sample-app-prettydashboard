import React from 'react';
var ReactDOM = require('react-dom');
import { connect } from 'react-redux';
import Tree  from './config';
import _ from 'lodash/core';

const mapStateToProps = (state) => {
    return {
        data: state.chartData.tmapEventData.data,
        zoom: state.dashboard.zoom,
    }
};

const loadTreeMap = (data, width, height, type, zoom) => {
  if (!data) {
    return (
        <div className="loading">
          <div className="preloader-wrapper big active">
            <div className="spinner-layer spinner-blue-only">
              <div className="circle-clipper left">
                <div className="circle"></div>
              </div><div className="gap-patch">
                <div className="circle"></div>
              </div><div className="circle-clipper right">
                <div className="circle"></div>
              </div>
            </div>
          </div>
        </div>
    );
  } else {
    return (
        <Tree 
          items={data}
          type={type}
          width={width}
          height={height}
          zoom={zoom}
        />
    );
  }
}

class TreeMapEvent extends React.Component{

    render(){
        let height = this.props.height - 40;
        let width = this.props.width  - 10;
        if(this.props.zoom == 'TREEMAPEVENT')
            {
                height = 550;
                width = 1110
            }
        return(
            //jsx code
                <div className="treemapevent">
                    {loadTreeMap(this.props.data, 
                               width, 
                               height, 
                               this.props.type, 
                               this.props.zoom)}
                </div>
              )
    }
}

export default connect(mapStateToProps)(TreeMapEvent);