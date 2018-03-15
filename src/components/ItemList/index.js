import React, { Component } from 'react';
import { Grid, Col, Row } from 'react-bootstrap';
import './styles.css';
import Item from '../Item';

import carrotPic from '../../img/Carrot-Baby-Little-Fingers-Organic.jpg';
import basilPic from '../../img/Basil_Purple_Petra_Organic.jpg';

class ItemList extends Component {
  render() {
    return (
      <Grid className="ItemList">
        <div>
          <h1>Here is a component with items in it!</h1>
        </div>
        <Row>
          <Col xs={12} md={6} lg={4}>
            <Item name="Carrot, Baby" cultivar="Little Finger" species="Daucus carota sativus"  source="Botanical Interests" packDate="2016"  pic={carrotPic} link="https://www.botanicalinterests.com/products/view/3105/Carrot-Baby-Little-Finger-Organic-HEIRLOOM-Seeds" target="_blank"/>
          </Col>
          <Col xs={12} md={6} lg={4}>
            <Item name="Basil" cultivar="Purple Petra" species="Ocimum basilicum"  source="Botanical Interests" packDate="2014"  pic={basilPic} link="https://www.botanicalinterests.com/products/view/6093/Basil-Purple-Petra-Organic-Seeds" target="_blank"/>
          </Col>

        </Row>
      </Grid>

    )
  }
}

export default ItemList;
