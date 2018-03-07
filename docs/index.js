import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import ImageLoader from '../src';

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
      <div>
        <h1>Copy a image URL here</h1>
        <input onChange={this.onChange}/>
        <p>
          value: {value}
        </p>
        <div>
          {value && (
            <ImageLoader
              src={value}
              image={props => <PreviewImg {...props}/>}
              loading={() => <div>Loading...</div>}
              error={() => <div>Error</div>}
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
