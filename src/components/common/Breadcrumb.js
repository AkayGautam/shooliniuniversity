import React, { Component } from 'react'
import { Container, Row, Col, Breadcrumb } from 'react-bootstrap'
import { Styles } from '../common/styles/breadcrumb'

export class BreadcrumbBox extends Component {
  state = {
    backgroundImage: 'breadcrumb-bg.jpg',
  }

  render() {
    return (
      <Styles>
        <section
          className="breadcrumb-area"
          style={{
            backgroundImage: `url(/assets/images/${this.state.backgroundImage})`,
          }}
        >
          <Container>
            <Row>
              <Col md="12" className="text-center">
                <div className="breadcrumb-box mt-5">
                  <h2 className="breadcrumb-title">{this.props.title}</h2>
                </div>
              </Col>
            </Row>
          </Container>
        </section>
      </Styles>
    )
  }
}

export default BreadcrumbBox
