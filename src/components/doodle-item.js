import React, {Component} from 'react';

class DoodleItem extends Component {
    render() {
        return (
            <div>
                {this.props.name}
            </div>
        )
    }
}

export default DoodleItem;