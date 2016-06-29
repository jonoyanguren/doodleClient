import React, {Component} from 'react';
import {connect} from 'react-redux';
import {fetchDoodles} from '../actions/index';

import SearchBar from './searchBar';
import DoodleItem from './doodle-item';

class DoodleList extends Component {
    componentWillMount() {
        this.props.fetchDoodles();
    }

    render() {
        {
            if(!this.props.doodles) {
                return (<p>No hay doodles</p>);
            }
        }  

        return (
            <div>
                <div className="search">
                    <SearchBar />
                </div>
                <div className="row">
                    {   
                        this.props.doodles.map((item, index) => {
                            return <div className="doodle-item" key={index}>
                                {item.name}
                            </div>
                        })
                    }
                </div>
            </div>
        )
    }
}


function mapStateToProps(state) {
    return{doodles: state.doodles.all}
}

export default connect(mapStateToProps, {fetchDoodles}) (DoodleList);