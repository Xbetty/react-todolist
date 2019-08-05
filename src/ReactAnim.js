import React, {Component, Fragment} from 'react';

class ReactAnim extends Component{
    constructor(props) {
        super(props)
        this.state = {
            show: true
        }
        this.handleToggle = this.handleToggle.bind(this)
    }
    handleToggle() {
        console.log('handleToggle')
        this.setState({
            show: this.state.show ? false : true
        })
    }
    render() {
        return (
            <Fragment>
                <div className={this.state.show ? 'show' : 'hide'}>Hello!</div>
                <button onClick={this.handleToggle}>toggle</button>
            </Fragment>
        )
    }
}
export default ReactAnim;