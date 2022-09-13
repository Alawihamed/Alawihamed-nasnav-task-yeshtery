import React, { Component } from 'react';
import MidHeader from '../MidHeader/MidHeader';
import Nav from '../Nav/Nav';
import TopHeader from '../TopHeader/TopHeader';

export default class Header extends Component {
    render() {
        return (
            <div>
                <TopHeader/>
                <MidHeader/>
                <Nav/>
            </div>
        )
    }
}
