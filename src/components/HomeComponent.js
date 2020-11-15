import React from 'react';
import {Alert,Progress} from 'reactstrap';

function HomePage(props){
    return(
        <div className="container">
        <div className="row">
            <div className="col-12">
                <h1> Under Service</h1>
            </div>
        </div>
        <div className="row row-content">
            <div className="col-12">
        <Alert color="primary">
            our website is currentely under construction!
        </Alert>
        <div className="text-center">2 of 5 pages are ready</div>
         <Progress value="2" max="5" />
         <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.

The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.</p>
        </div>
        </div>
        <div className="row row-content">
        <div className="col-12">
            <h1>Lets Show where we live</h1>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d59301.68011949991!2d72.96861029491949!3d21.727758569587152!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be020a2b22ac421%3A0xa4116c424622fd2a!2sBharuch%2C%20Gujarat!5e0!3m2!1sen!2sin!4v1602405213823!5m2!1sen!2sin" className="map1"  aria-hidden="false" tabindex="0"></iframe>
        </div>
        </div>
        </div>
    );

}
export default HomePage;