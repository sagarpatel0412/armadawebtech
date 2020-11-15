import React,{Component} from 'react';
import {Alert} from 'reactstrap';
import { Control, LocalForm, Errors } from 'react-redux-form';
import { Col,  Label, Button, Row} from 'reactstrap';

const required = (val) => (val)&&val.length;
const maxLength = (len) => (val) => !(val) || (val.length <= len);
const minLength = (len) => (val) => val&&(val.length >= len);

class ServicePage extends Component{
    constructor(props){
        super(props);
        this.state={

        }
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleSubmit(values) {
        console.log('Current State is: ' + JSON.stringify(values));
        alert('Current State is: ' + JSON.stringify(values));
        //event.preventDefault();
    }
    render(){
        return(
            <div className="container">
            <div className="row row-content">
                <div className="col-12">
                    <h1> Under Service</h1>
                </div>
                <div>
          <Alert color="primary">
            <h4 className="alert-heading">Our Service</h4>
            <p>
              Aww yeah, you successfully read this important alert message. This example text is going
              to run a bit longer so that you can see how spacing within an alert works with this kind
              of content.
            </p>
            <hr />
            <p className="mb-0">
              Whenever you need to, be sure to use margin utilities to keep things nice and tidy.
            </p>
          </Alert>
        </div>
        </div>
        
        <div className="row row-content">
            <div className="col-12">
                <LocalForm onSubmit={(values)=>this.handleSubmit(values)}>
                <Row className="form-group">
                                <Label htmlFor="fullname" md={2}><b>Full Name</b></Label>
                                <Col md={10}>
                                    <Control.text model=".fullname" id="fullname" name="fullname"
                                        placeholder="Full Name"
                                        className="form-control"
                                        validators={{
                                            required, minLength:minLength(3),maxLength:maxLength(15)
                                        }}
                                        //value={this.state.firstname}
                                        //valid={errors.firstname === ''}
                                        //invalid={errors.firstname !== ''}
                                        //onBlur={this.handleBlur('firstname')}
                                        //onChange={this.handleInputChange} 
                                        
                                        />
                                        <Errors
                                            className="text-danger"
                                            show="touched"
                                            model=".fullname"
                                            messages={{
                                                required: 'Required ',
                                                minLength: 'Must be greater than 3 characters',
                                                maxLength:'Lesser than 15 characters'
                                            }}
                                        
                                        />
                                    
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Label htmlFor="service" md={2}><b>Name of Service</b></Label>
                                <Col md={10}>
                                    <Control.text model=".service" id="service" name="service"
                                        placeholder="Last Name"
                                        className="form-control"
                                        validators={{
                                            required, minLength:minLength(3),maxLength:maxLength(15)
                                        }}
                                        //value={this.state.lastname}
                                        //valid={errors.lastname === ''}
                                        //invalid={errors.lastname !== ''}
                                        //onBlur={this.handleBlur('lastname')}
                                        //onChange={this.handleInputChange} 
                                        />
                                    {/*<FormFeedback>{errors.lastname}</FormFeedback>*/}
                                    <Errors
                                            className="text-danger"
                                            show="touched"
                                            model=".service"
                                            messages={{
                                                required: 'Required ',
                                                minLength: 'Must be greater than 3 characters',
                                                maxLength:'Lesser than 15 characters'
                                            }}
                                        
                                        />
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Label htmlFor="message" md={2}><b>Your Service Discription</b></Label>
                                <Col md={10}>
                                    <Control.textarea model=".message" id="message" name="message"
                                        rows="12"
                                        className="form-control"
                                        //value={this.state.message}
                                        //onChange={this.handleInputChange}
                                        
                                        />
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Col md={{size: 10, offset: 2}}>
                                    <Button type="submit" color="primary">
                                        Send Your Service Request
                                    </Button>
                                </Col>
                            </Row>

                </LocalForm>
            </div>

        </div>
    
            </div>
            
        );
    }

}
export default ServicePage;