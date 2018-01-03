import React, { Component } from 'react';
import 'antd/dist/antd.css';
import './css/Dashboard.css';

import example_map from './img/example_map.png';

import { Layout, Menu, Breadcrumb, Icon, Input, Card, Row, Col } from 'antd';
const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;
const { Search } = Input;
const { Meta } = Card;


class Dashboard extends Component {
  state = {
    collapsed: false,
  };
  
  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  }

  render() {
    return (
      <Layout style={{ minHeight: '100vh' }}>
        <Sider
          trigger={null}
          collapsible
          collapsed={this.state.collapsed}
          style={{background: '#ffffff'}}
          width={240}
          collapsedWidth={0}
        >
          {/* <div className="logo" /> */}
          <Search
            placeholder="Zipcode"
            onSearch={value => console.log(value)}
            enterButton
          />
          <Menu defaultSelectedKeys={['1']} mode="inline">
            <SubMenu
              key="sub1"
              title={<span><Icon type="apple-o" /><span>Food</span></span>}
            >
              <Menu.Item key="1">Community Gardens</Menu.Item>
              <Menu.Item key="2">Emergency Food</Menu.Item>
              <Menu.Item key="3">Food Delivery</Menu.Item>
              <Menu.Item key="4">Food Pantry</Menu.Item>
              <Menu.Item key="5">Help Pay For Food</Menu.Item>
              <Menu.Item key="6">Meals</Menu.Item>
              <Menu.Item key="7">Nutrition Education</Menu.Item>
            </SubMenu>
            <SubMenu
              key="sub2"
              title={<span><Icon type="home" /><span>Housing</span></span>}
            >
              <Menu.Item key="8">Help Find Housing (18)</Menu.Item>
              <Menu.Item key="9">Help Pay For Housing</Menu.Item>
              <Menu.Item key="10">Housing Advice</Menu.Item>
              <Menu.Item key="11">Maintenance & Repairs</Menu.Item>
              <Menu.Item key="12">Residential Housing</Menu.Item>
              <Menu.Item key="13">Temporary Shelter</Menu.Item>
            </SubMenu>
            <SubMenu
              key="sub3"
              title={<span><Icon type="shopping-cart" /><span>Goods</span></span>}
            >
              <Menu.Item key="14">Baby Supplies</Menu.Item>
              <Menu.Item key="15">Clothing</Menu.Item>
              <Menu.Item key="16">Home Goods</Menu.Item>
              <Menu.Item key="17">Medical Supplies</Menu.Item>
              <Menu.Item key="18">Personal Safety</Menu.Item>
              <Menu.Item key="19">Toys & Gifts</Menu.Item>
              <Menu.Item key="20">Baby Clothes</Menu.Item>
              <Menu.Item key="21">Diapers & Formula</Menu.Item>
            </SubMenu>
            <SubMenu
              key="sub4"
              title={<span><Icon type="car" /><span>Transit</span></span>}
            >
              <Menu.Item key="22">Help Pay For Transit</Menu.Item>
              <Menu.Item key="23">Transportation</Menu.Item>
              <Menu.Item key="24">Bus Passes</Menu.Item>
              <Menu.Item key="25">Help Pay For Gas</Menu.Item>
            </SubMenu>
            <SubMenu
              key="sub5"
              title={<span><Icon type="medicine-box" /><span>Health</span></span>}
            >
              <Menu.Item key="26">Addiction & Recovery</Menu.Item>
              <Menu.Item key="27">Dental Care</Menu.Item>
              <Menu.Item key="28">Drug Testing</Menu.Item>
              <Menu.Item key="29">End-Of-Life Care</Menu.Item>
              <Menu.Item key="30">Health Education</Menu.Item>
              <Menu.Item key="31">Help Pay For Healthcare</Menu.Item>
              <Menu.Item key="32">Medical Care</Menu.Item>
              <Menu.Item key="33">Mental Health Care</Menu.Item>
              <Menu.Item key="34">Vision Care</Menu.Item>
              <Menu.Item key="35">12-Step</Menu.Item>
              <Menu.Item key="36">Detox</Menu.Item>
              <Menu.Item key="37">Outpatient Treatment</Menu.Item>
              <Menu.Item key="38">Residential Treatment</Menu.Item>
              <Menu.Item key="39">Sober Living</Menu.Item>
            </SubMenu>
          </Menu>
        </Sider>
        <Layout>
          <Header style={{ background: '#ffff', padding: 0 }} >
            <Icon
              className="trigger"
              type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
              onClick={this.toggle}
            />
          </Header>
          <Content style={{ margin: '0 16px' }}>
            <Breadcrumb style={{ margin: '16px 0' }}>
              {/* TODO: find way to dynamic this  */}
              <Breadcrumb.Item>Housing</Breadcrumb.Item> 
              <Breadcrumb.Item>Help Find Housing</Breadcrumb.Item>
            </Breadcrumb>
            <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>
              Testing prototype ...
              <Row gutter={40}>
              <Col xs={{span: 24}} sm={{span: 24}} md={{span: 8}} >
                <Card
                  style={{ width: 312 }}
                  cover={<img alt="example" src={example_map} />}
                  
                >
                  <Meta
                    avatar={<Icon type="home" style={{ fontSize: 20 }}/>}
                    title="Example Service Title"
                    description="This is the description. Lorem ipsum dolor sit amet, at tantas quaeque 
                    feugait vim, ei sit nemore voluptatibus, per cu nibh ludus concludaturque. No usu modus 
                    nemore mollis, est atqui ornatus an."
                  />
                </Card>
              </Col>
              <Col xs={{span: 24}} sm={{span: 24}} md={{span: 8}} >
                <Card
                  style={{ width: 312 }}
                  cover={<img alt="example" src={example_map} />}
                  
                >
                  <Meta
                    avatar={<Icon type="home" style={{ fontSize: 20 }}/>}
                    title="Example Service Title"
                    description="This is the description. Lorem ipsum dolor sit amet, at tantas quaeque 
                    feugait vim, ei sit nemore voluptatibus, per cu nibh ludus concludaturque. No usu modus 
                    nemore mollis, est atqui ornatus an."
                  />
                </Card>
              </Col>
              <Col xs={{span: 24}} sm={{span: 24}} md={{span: 8}} >
                <Card
                  style={{ width: 312 }}
                  cover={<img alt="example" src={example_map} />}
                  
                >
                  <Meta
                    avatar={<Icon type="home" style={{ fontSize: 20 }}/>}
                    title="Example Service Title"
                    description="This is the description. Lorem ipsum dolor sit amet, at tantas quaeque 
                    feugait vim, ei sit nemore voluptatibus, per cu nibh ludus concludaturque. No usu modus 
                    nemore mollis, est atqui ornatus an."
                  />
                </Card>
              </Col>
            </Row>
              
            </div>
          </Content>
          <Footer style={{ textAlign: 'center' }}>
            Aunt Bertha prototype ©2018 - github.com/ntt2k
          </Footer>
        </Layout>
      </Layout>
    );
  }
}

export default Dashboard;
          