import React, { Component, PropTypes } from 'react';
import breakpoints from 'breakpoints-json';

export default class SmartRender extends Component {
    static propTypes = {
        children:    PropTypes.object.isRequired,
        breakpoints: PropTypes.string,
        views:       PropTypes.object
    };

    static defaultProps = {
        children:    {},
        breakpoints: '',
        views:       breakpoints
    };

    constructor (props, context) {
        super(props, context);

        /* eslint-disable no-multi-spaces */
        this._getActualScreenSizes = ::this._getActualScreenSizes;
        this._onResize =             ::this._onResize;
        this._currentSize =          ::this._currentSize;
        /* eslint-enable no-multi-spaces */ // eslint-disable-line
    }

    state = {
        currentSize: '',
        render:      true
    };

    componentWillMount () {
        this._currentSize();
        const breakpointsArray = this.props.breakpoints.split(' ');
        const wrongBreakpoints = [];

        for (const element of breakpointsArray) {
            if (!Object.prototype.hasOwnProperty.call(breakpoints, element)) {
                wrongBreakpoints.push(element);
            }
        }

        if (wrongBreakpoints.length) {
            throw new SyntaxError(`${wrongBreakpoints} is a wrong breakpoints for SmartRender`);
        }
    }

    componentDidMount () {
        this._currentSize();
        window.onresize = this._onResize;
    }

    _getActualScreenSizes (currentWidth, sizes) {
        return Object.keys(sizes).find((size) => {
                let actual = size;

        if (typeof size === 'object') {
            actual = size.name;
        }

        return currentWidth >= breakpoints[actual].min &&
            currentWidth <= breakpoints[actual].max;
        });
    }

    _currentSize () {
        this.setState({
            currentSize: this._getActualScreenSizes(window.innerWidth,
                this.props.views),
            render: this.props.breakpoints.includes(this.state.currentSize)
        });
    }

    _onResize () {
        this._currentSize();
    }

    render () {
        const style = {
            display: 'inline-block'
        };

        const smartRender = this.state.render
            ?
                <div style = { style }>
                    { this.props.children }
                </div>
            : null;

        return smartRender;
    }
}
