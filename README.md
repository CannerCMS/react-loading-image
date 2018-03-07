# react-imgloader [![NPM version][npm-image]][npm-url]  [![Dependency Status][daviddm-image]][daviddm-url]
> A react image loader component

## Installation

```sh
$ npm install --save react-imgloader
```

## Usage

```js
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
              loading={() => <div>Loading...</div>}
              error={() => <div>Error</div>}
              />
          )}
        </div>
      </div>
    );
  }
}
```

## Props

| Name         | Type    | Default | Description |
| ------------ | ------- | ------- | ----------- |
| src | string | null | Image URL |
| onLoad | (img: Image) => void | null | This function will be called when image is loaded |
| onError | (err: Event) => void | null | This function will be called when image is failed |
| loading | () => React.Element<*> | null | Return a React element that will show when image is loading |
| error | () => React.Element<*> | null | Return a React element that will show when image is crashed |

## Start example server

```
npm start
```

## generate demo

```js
npm run gh-pages
```

## License

MIT © [chilijung](github.com/chilijung)


[npm-image]: https://badge.fury.io/js/react-imgloader.svg
[npm-url]: https://npmjs.org/package/react-imgloader
[travis-image]: https://travis-ci.org/Canner/react-imgloader.svg?branch=master
[travis-url]: https://travis-ci.org/Canner/react-imgloader
[daviddm-image]: https://david-dm.org/Canner/react-imgloader.svg?theme=shields.io
[daviddm-url]: https://david-dm.org/Canner/react-imgloader
