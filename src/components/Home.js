import React from 'react'
import {Component} from 'react'
import Display from './Display';
import {Container, Row,Col,Carousel} from 'react-bootstrap';
class Home extends Component{
    render(){
        return(
            <div>
                <h1>
                    HOME PAGE !! 
                </h1>

                <Row>
                <Col>
                    <Display
                    header="Product Descriptions"
                    title ="Generate Product Descriptions"
                    text = "Generate product descriptions for any types of products"
                    theLink ="/product-description"

                    />
                </Col>
                <Col>
                    <Display
                    header="Marketing Emails"
                    title ="Cold-Email Template"
                    text = "Generate product descriptions for any types of products"
                    theLink ="/cold-emails"
                    />
                </Col>
                <Col>
                    <Display
                    header="Creating tweets"
                    title ="Generate Tweets"
                    text = "Generate product descriptions for any types of products"
                    theLink ="/tweets"
                    />
                </Col>
                </Row>
            </div>
        )
    }
}


export default Home