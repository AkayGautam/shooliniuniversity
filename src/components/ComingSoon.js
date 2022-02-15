import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Styles } from '../components/common/styles/comingsoon';
import Header from './Header';
import Footer from './Footer';
import BreadcrumbBox from './common/Breadcrumb';


const ComingSoon = () => {
    return (
        <>

            <Styles>
                {/* Main Wrapper */}
                <div className="main-wrapper error-page">

                    {/* Header 2 */}
                    <Header />
                    <BreadcrumbBox title="Coming Soon" />
                    {/* 404 Area */}
                    <section className="error-area">
                        <Container>
                            <Row>
                                <Col md="12">
                                    <div className="error-box text-center">
                                        <h1>Coming<span>Soon</span></h1>

                                    </div>
                                </Col>
                            </Row>
                        </Container>
                    </section>

                    {/* Footer 2 */}
                    <Footer />
                </div>
            </Styles>

        </>
    );
};

export default ComingSoon;
