import React from 'react'
import {Component} from 'react'
import {Container, Form, Button, Card} from 'react-bootstrap'


const {Configuration, OpenAIApi} = require("openai");
class ProductDescription extends Component{
    constructor(){
        super()
        this.state = {
            heading :'The Response from AI will be shown here',
            response:"....await the response"
        }
    }
        onFormSubmit = e=> {
            e.preventDefault()
            const formData = new FormData(e.target),
            formDataObj = Object.fromEntries(formData.entries())
            console.log(formDataObj.productName)

            
const configuration = new Configuration({
    apiKey: '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',
  });
  const openai = new OpenAIApi(configuration);
  
  openai.createCompletion({
    model: "text-davinci-003",
    prompt: `Write a detailed smart,innovative and professional product description for ${formDataObj.productName}`,
    temperature: 0.8,
    max_tokens: 80,
    top_p: 1,
    frequency_penalty: 0,
    presence_penalty: 0,
  })
    .then((response)=>{
      this.setState({
          heading:`AI Product Description Suggestions for:${formDataObj.productName}`,
          response:`${response.data.choices[0].text}`
      })
    });
  
  
  
 

      
        }

    
    render(){
        return(
            <div>
                <h1>
                Generate ProductDescription :)))
                </h1>


                <Form onSubmit = {this.onFormSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>What Product would you like to get a description for ?</Form.Label>
        <Form.Control type="text" placeholder="Enter Product Name" name="productName"/>
        <Form.Text className="text-muted">
          Enter as much info as possible
        </Form.Text>
      </Form.Group>

      
      <Button variant="primary" type="submit">
        Get AI Suggestions
      </Button>
    </Form>

    <Card>
            <Card.Body>
                <Card.Title>{this.state.heading}</Card.Title>
                <br/>
                <Card.Text>{this.state.response}</Card.Text>
            </Card.Body>

    </Card>

            </div>
        )
    }
}


export default ProductDescription
















// const response = await openai.createCompletion("text-davinci-001",{
//   prompt: "Write a detailed smart,innovative and professional product description for ${formDataObj.productName}",
//   temperature: 1,
//   max_tokens: 120,
//   top_p: 1,
//   frequency_penalty: 0,
//   presence_penalty: 0,
// })













