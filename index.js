import React from 'react';
import ReactDOM from 'react-dom';
import {Input, Icon, Alert} from 'antd';
import styled from 'styled-components';
import ImageLoader from '../src';

import "antd/dist/antd.css";

const PreviewImg = styled.div`
  background-image: url(${props => props.src});
  width: 100%;
  height: 300px;
  background-size: contain;
  background-repeat: no-repeat;
`;

class Demo extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: null
    };
  }

  onChange = (e) => {
    this.setState({
      value: e.target.value
    });
  }

  render() {
    const {value} = this.state;
    return (
      <div style={{padding: '20px'}}>
        <h1>Copy a image URL here</h1>
        <Input onChange={this.onChange} placeholder="Your image url here"/>

        <div style={{marginTop: '10px'}}>
          {value && (
            <ImageLoader
              src={value}
              image={props => <PreviewImg {...props}/>}
              error={() => (
                <Alert
                  message="Please check if your image url is valid"
                  type="error"
                />
              )}
              loading={() => {
                return (
                  <div>
                    <Icon type="loading" style={{ fontSize: 24 }} spin />
                  </div>
                );
              }}
              />
          )}
        </div>
      </div>
    );
  }
}

ReactDOM.render(
  <Demo/>
, document.getElementById('root'));
