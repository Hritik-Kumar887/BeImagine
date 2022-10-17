import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import { Pchart } from '../components/Pchart/Pchart';
import { Pchart2 } from '../components/Pchart/Pchart2';

export const Reports = () => {
    return (
        <div>
            <Navbar />
            <Pchart />
            <p style={{border : "1px solid #e2e1e1"}}></p>
            <Pchart2/>
        </div>
  )
}
