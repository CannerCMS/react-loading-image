// @flow
import React from 'react';
import Spinner from './Spinner';

export default class ImageLoader extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isLoading: true,
            src: ''
        }
    }

    componentDidMount() {
        const image = new Image();
        image.src = this.props.src;
        image.onload = () => {
            this.setState({
                src: image.src,
                isLoading: false
            });
            if (this.props.onLoad) {
                this.props.onLoad(image);
            }
        };
        image.onerror = (err) => {
            this.setState({
                src: '',
                isLoading: false
            });
            if (this.props.onError) {
                this.props.onError(err);
            }
        }
    }

    render() {
        if (this.state.isLoading) {
            return (
                <Spinner src={this.props.spinnerSrc}/>
            );
        } else {
            return (
                <img className='ril--image' src={this.state.src} alt={this.props.alt} {...this.props}/>
            );
        }
    }
}
