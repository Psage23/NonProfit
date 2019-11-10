import React, { useState } from 'react';
import { TabContent, TabPane, Nav, NavItem, NavLink, Row, Col } from 'reactstrap';
import classnames from 'classnames';
import PhotoGallery from "./gallery"
import ContactPage from "./ContactPage"

const TabPage = (props) => {
  const [activeTab, setActiveTab] = useState('1');

  const toggle = tab => {
    if(activeTab !== tab) setActiveTab(tab);
  }

  return (
    <div>
      <Nav tabs>
        <NavItem>
          <NavLink className={classnames({ active: activeTab === '1' })}
            onClick={() => { toggle('1'); }}>Home</NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            className={classnames({ active: activeTab === '2' })}
            onClick={() => { toggle('2'); }}> Photo Gallery
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            className={classnames({ active: activeTab === '3' })}
            onClick={() => { toggle('3'); }}
          > Contact Us
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            className={classnames({ active: activeTab === '4' })}
            onClick={() => { toggle('4'); }}> Donate</NavLink>
        </NavItem>
      </Nav>
      <TabContent activeTab={activeTab}>
        <TabPane tabId="1">
          <Row>
            <Col sm="12">
              <h4>Home Page</h4>
            </Col>
          </Row>
        </TabPane>
        <TabPane tabId="2">
        <Row>
            <Col sm="12">
              <h4>Photo Gallery</h4>
            </Col>
          </Row>
          <Row>
              <Col sm="12">
          <PhotoGallery/>
          </Col>
          </Row>
        </TabPane>
        <TabPane tabId="3">
        <ContactPage/>
        </TabPane>
        <TabPane tabId="4">
          <Row>
            <Col sm="12">
              <h4>Donate</h4>
            </Col>
          </Row>
        </TabPane>
      </TabContent>
    </div>
  );
}

export default TabPage;