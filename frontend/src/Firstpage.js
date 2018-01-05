import React, { Component } from 'react';
import { Row, Col, Input } from 'antd';
import 'antd/dist/antd.css';
import './css/Firstpage.css';
import usmap from './img/usmap.jpg';
import logo from './img/auntbertha_logo.png';
import bertha from './img/bertha.png'

const Search = Input.Search;

class Firstpage extends Component {
  render() {
    let backgroundImg = {
      minHeight: '100vh',
      height: '100vh',
      justifyContent: 'flex-end',
      alignItems: 'center',
      position: 'relative',
      background: `linear-gradient( rgba(82, 82, 82, 0.6), rgba(61, 114, 180, 0.6) ), 
                    url(${usmap}) no-repeat center center`,
      backgroundSize: 'cover'    
    };

  return (
    <div >
      <Col xs={0} sm={0} md={16} style={backgroundImg}></Col>
      <Col xs={24} sm={24} md={8} className="Logo-center">
        
          <Row><img src={logo} alt="Logo" /></Row>
          <Row><img src={bertha} alt="Aunt Bertha" width="200" height="300"/></Row>

        <div className="Content-container">  
          <h2>
            Connecting People and Programs
          </h2>
          <h3>
            Search for free or reduced cost services like medical care, food, job training, and more.
          </h3>
          <Search placeholder="Zipcode" enterButton="Search" size="large" 
                  onSearch={value => console.log(value)} 
          />
        </div>
      </Col>
    </div>
      
    );
  }
}

export default Firstpage;
