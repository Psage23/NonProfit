import React, { useState } from 'react';
import { TabContent, TabPane, Nav, NavItem, NavLink, Row, Col } from 'reactstrap';
import classnames from 'classnames';
import PhotoGallery from "./gallery";
import ContactPage from "./ContactPage";

const TabPage = (props) => {
  const [activeTab, setActiveTab] = useState('1');

  const toggle = tab => {
    if(activeTab !== tab) setActiveTab(tab);
  }

  return (
    <div className="TabContainer">
      <div className="NavContainer">
      <Nav tabs>
          <NavItem>
            <div className="NavBtns">
          <NavLink className={classnames({ active: activeTab === '1' })}
            onClick={() => { toggle('1'); }}><span>☖</span><br></br>Home</NavLink></div>
        </NavItem>
        <NavItem>
        <div className="NavBtns">
          <NavLink
            className={classnames({ active: activeTab === '2' })}
            onClick={() => { toggle('2'); }}><span>❒</span><br></br>Photo Gallery</NavLink></div>
        </NavItem>
        <NavItem>
        <div className="NavBtns">
          <NavLink
            className={classnames({ active: activeTab === '3' })}
            onClick={() => { toggle('3'); }}
          > <span>☏</span><br></br>Contact Us</NavLink></div>
        </NavItem>
        <NavItem>
        <div className="NavBtns">
          <NavLink
            className={classnames({ active: activeTab === '4' })}
            onClick={() => { toggle('4'); }}><span>☺</span><br></br>Donate</NavLink></div>
        </NavItem>
         </Nav>
         </div>
      <TabContent activeTab={activeTab}>
        <TabPane tabId="1">
            <div className="Home">
          <Row>
            <Col sm="12">
              <h4>Home Page</h4>
            </Col>
          </Row>
          </div>
        </TabPane>
        <TabPane tabId="2">
        <div className="Gallery">
        <Row>
            <Col sm="12">
              <h4>Photo Gallery</h4>
            </Col>
          </Row>
          <Row>
            <Col sm="12">
{   
                //edit Gallery.jsx to add photo content}
}
                <PhotoGallery/>
            </Col>
          </Row>
          </div>
        </TabPane>
        <TabPane tabId="3">
        <div className="Contact">
{   
                //edit ContactPage.jsx to modify form content}
}
        <ContactPage/>
        </div>
        </TabPane>
        <TabPane tabId="4">
            <div className="Donate">
          <Row>
            <Col sm="12">
              <h4>Donate</h4>
            </Col>
          </Row>
          </div>
        </TabPane>
      </TabContent>
      <div className="PageFooter">
          <p className="FooterText">© Copyright 2019 Poly Praise AZ </p>
      </div>
    </div>
  );
}

export default TabPage;