// @flow
import * as React from 'react';

type Props = {
  src: string,
  onLoad?: (img: Image) => void,
  onError?: (err: Event) => void,
  image?: ({src: string}) => React.Element<*>,
  loading?: () => React.Element<*>,
  error?: (err: Event) => React.Element<*>
}

type State = {
  isLoading: boolean,
  isError: boolean,
  src: ?string,
  errMsg: ?any,
}

export default class ImageLoader extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    (this: any).reload = this.reload.bind(this);

    this.state = {
      isLoading: true,
      isError: false,
      src: null,
      errMsg: null
    }
  }

  componentWillReceiveProps(nextProps: Props) {
    this.reload(nextProps);
  }

  componentDidMount() {
    this.reload(this.props);
  }

  reload(props: Props) {
    // initialize
    this.setState({
      isLoading: true,
      isError: false,
      src: null,
      errMsg: null
    });

    const image = new Image();
    image.src = props.src;
    image.onload = () => {
      this.setState({
        src: image.src,
        isLoading: false,
        isError: false,
        errMsg: null
      });
      if (props.onLoad) {
        props.onLoad(image);
      }
    };
    image.onerror = (err) => {
      this.setState({
        src: null,
        isLoading: false,
        isError: true,
        errMsg: err
      });
      if (props.onError) {
        props.onError(err);
      }
    }
  }

  render() {
    const {loading, error, image} = this.props;
    const {src, isLoading, isError, errMsg} = this.state;

    if (loading && isLoading) {
      return loading();
    } else if (error && isError && errMsg) {
      return error(errMsg);
    } else if (src && image) {
      return image({src});
    } else if (src) {
      return <img {...this.props} src={src}/>
    }

    return null;
  }
}
