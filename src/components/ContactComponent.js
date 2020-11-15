import React, {Component} from 'react';
import { Col,  Label, Button, Row} from 'reactstrap';
import { Link } from 'react-router-dom';
import { Control, LocalForm, Errors } from 'react-redux-form';

const required = (val) => (val)&&val.length;
const maxLength = (len) => (val) => !(val) || (val.length <= len);
const minLength = (len) => (val) => val&&(val.length >= len);
const isNumber = (val) => !isNaN(Number(val));
const validEmail = (val) =>  /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(val);

class ContactPage extends Component {
    constructor(props){
        super(props);
       
        /*this.state = {
            firstname: '',
            lastname: '',
            telnum: '',
            email: '',
            agree: false,
            contactType: 'Tel.',
            message: '',
            touched:{
                firstname:false,
                lastname:false,
                telnum:false,
                email:false
            }
        };*/
        //this.handleBlur=this.handleBlur.bind(this);

        //this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);


    }
    /*handleInputChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
    
        this.setState({
          [name]: value
        });
    }*/

    handleSubmit(values) {
        console.log('Current State is: ' + JSON.stringify(values));
        alert('Current State is: ' + JSON.stringify(values));
        //event.preventDefault();
    }
    /*handleBlur = (field) => (evt) =>{
        this.setState({
            touched: {...this.state.touched, [field]:true}
         });

    }*/
    /*validate(firstname,lastname,telnum,email){
        const errors={
            firstname:'',
            lastname: '',
            telnum: '',
            email: ''
        };
    if (this.state.touched.firstname && firstname.length < 3)
        errors.firstname = 'First Name should be >= 3 characters';
    else if (this.state.touched.firstname && firstname.length > 10)
        errors.firstname = 'First Name should be <= 10 characters';

    if (this.state.touched.lastname && lastname.length < 3)
        errors.lastname = 'Last Name should be >= 3 characters';
    else if (this.state.touched.lastname && lastname.length > 10)
        errors.lastname = 'Last Name should be <= 10 characters';

    const reg = /^\d+$/;
    if (this.state.touched.telnum && !reg.test(telnum))
        errors.telnum = 'Tel. Number should contain only numbers';

    if(this.state.touched.email && email.split('').filter(x => x === '@').length !== 1)
        errors.email = 'Email should contain a @';

    return errors;

    }*/
    
    render(){

        //const errors = this.validate(this.state.firstname,this.state.lastname,this.state.telnum,this.state.email);

        return(
            <div className="container">
                 <div className="row">
                            
                                <div className="col-12 col-md m-1">
                                    <h3>Contact Us</h3>
                                </div>
    
                            </div>
                <div className="row row-content">
                    <div className="col-12">
                    <h3>Location Information</h3>
                    </div>
                    <div className="col-12 col-sm-4 offset-sm-1">
                            <h5>Our Address</h5>
                            <address className="address1">
                            121, Clear Water Bay Road<br />
                            Clear Water Bay, Kowloon<br />
                            HONG KONG<br />
                            <i className="fa fa-phone"></i>: +852 1234 5678<br />
                            <i className="fa fa-fax"></i>: +852 8765 4321<br />
                            <i className="fa fa-envelope"></i>: <a href="mailto:confusion@food.net">confusion@food.net</a>
                            </address>
                    </div>
                    <div className="col-12 col-sm-6 offset-sm-1">
                        <h5>Map of our Location</h5>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d59301.68011949991!2d72.96861029491949!3d21.727758569587152!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be020a2b22ac421%3A0xa4116c424622fd2a!2sBharuch%2C%20Gujarat!5e0!3m2!1sen!2sin!4v1601374422312!5m2!1sen!2sin" width="300" height="300" frameborder="0" allowfullscreen="" ></iframe>
                    </div>
                    <div className="col-12 col-sm-11 offset-sm-1">
                        <div className="btn-group" role="group">
                            <a role="button" className="btn btn-primary" href="tel:+85212345678"><i className="fa fa-phone"></i> Call</a>
                            <a role="button" className="btn btn-info"><i className="fa fa-skype"></i> Skype</a>
                            <a role="button" className="btn btn-success" href="mailto:confusion@food.net"><i className="fa fa-envelope-o"></i> Email</a>
                        </div>
                    </div>
                </div>
                <div className="row row-content">
                   <div className="col-12">
                      <h3>Send us your Feedback</h3>
                   </div>
                    <div className="col-12 col-md-9">
                        <LocalForm onSubmit={(values)=>this.handleSubmit(values)}>
                        <Row className="form-group">
                                <Label htmlFor="firstname" md={2}>First Name</Label>
                                <Col md={10}>
                                    <Control.text model=".firstname" id="firstname" name="firstname"
                                        placeholder="First Name"
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
                                            model=".firstname"
                                            messages={{
                                                required: 'Required ',
                                                minLength: 'Must be greater than 3 characters',
                                                maxLength:'Lesser than 15 characters'
                                            }}
                                        
                                        />
                                    
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Label htmlFor="lastname" md={2}>Last Name</Label>
                                <Col md={10}>
                                    <Control.text model=".lastname" id="lastname" name="lastname"
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
                                            model=".lastname"
                                            messages={{
                                                required: 'Required ',
                                                minLength: 'Must be greater than 3 characters',
                                                maxLength:'Lesser than 15 characters'
                                            }}
                                        
                                        />
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Label htmlFor="telnum" md={2}>Contact Tel.</Label>
                                <Col md={10}>
                                    <Control.text model=".telnum" id="telnum" name="telnum"
                                        placeholder="Tel. Number"
                                        className="form-control"
                                        validators={{
                                            required, minLength:minLength(3),maxLength:maxLength(10),isNumber
                                        }}
                                        //value={this.state.telnum}
                                        //valid={errors.telnum === ''}
                                        //invalid={errors.telnum !== ''}
                                        //onBlur={this.handleBlur('telnum')}
                                        //onChange={this.handleInputChange} 
                                        />
                                    {/*<FormFeedback>{errors.telnum}</FormFeedback>*/}
                                    <Errors
                                            className="text-danger"
                                            show="touched"
                                            model=".telnum"
                                            messages={{
                                                required: 'Required ',
                                                minLength: 'Must be greater than 3 numbers',
                                                maxLength:'Lesser than 10 numbers',
                                                isNumber: 'Must be digits'
                                            }}
                                        
                                        />
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Label htmlFor="email" md={2}>Email</Label>
                                <Col md={10}>
                                    <Control.text model=".email" id="email" name="email"
                                        placeholder="Email"
                                        className="form-control"
                                        validators={{
                                            required,validEmail
                                        }}
                                        //value={this.state.email}
                                        //valid={errors.email === ''}
                                        //invalid={errors.email !== ''}
                                        //onBlur={this.handleBlur('email')}
                                        //onChange={this.handleInputChange} 
                                        />
                                    {/*<FormFeedback>{errors.email}</FormFeedback>*/}
                                    <Errors
                                            className="text-danger"
                                            show="touched"
                                            model=".email"
                                            messages={{
                                                required: 'Required ',
                                                validEmail:'Enter valid Email Address'
                                            }}
                                        
                                        />
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Col md={{size: 6, offset: 2}}>
                                    <div className="form-check">
                                        <Label check>
                                            <Control.checkbox model=".agree"
                                                name="agree"
                                                className="form-check-input"
                                                //checked={this.state.agree}
                                                //onChange={this.handleInputChange} 
                                                /> {' '}
                                            <strong>May we contact you?</strong>
                                        </Label>
                                    </div>
                                </Col>
                                <Col md={{size: 3, offset: 1}}>
                                    <Control.select model=".controlType" name="contactType"
                                            //value={this.state.contactType}
                                            //onChange={this.handleInputChange}
                                            className="form-control"
                                            >
                                        <option>Tel.</option>
                                        <option>Email</option>
                                    </Control.select>
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Label htmlFor="message" md={2}>Your Feedback</Label>
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
                                        Send Feedback
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

export default ContactPage;