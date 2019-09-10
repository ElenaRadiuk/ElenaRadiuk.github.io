import React, {Component} from "react";
import "./Contact.css"; 

class Contact extends React.Component {
    constructor(props){
        super(props);
        this.state = {name:'', email:'', text:''};

        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onChangeName = this.onChangeName.bind(this);
        this.onChangeMessage = this.onChangeMessage.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onChangeName(event) {
        this.setState({name: event.target.value})
    }
    onChangeEmail(event) {
        this.setState({email: event.target.value})
    }
    onChangeMessage(event) {
        this.setState({text: event.target.value})
    }
    onSubmit(event) {
        alert(`Сообщение успешно отправлено получателю "${this.state.email}"`);
        event.preventDefault();
    }

    render(){
        return(
            <div className="contact" id="contact">
                <div className="wrap">
                    <h2>Contact Us</h2>
                    <h4>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</h4>
                    <div className="section group">
                        <div className="col span_2_of_3">
                            <div className="contact-form">
                                <form onSubmit={this.onSubmit}>
                                    <input type="text" className="textbox" value={this.state.name} onChange={this.onChangeName} />
                                    <input type="text" className="textbox" value={this.state.email} onChange={this.onChangeEmail} />
                                    <div className="clear"> </div>
                                        <div>
                                        <textarea value="Your Message:" value={this.state.text} onChange={this.onChangeMessage} />
                                        </div>
                                    <span><input type="submit" className="sbm" value="Submit"/></span>
                                    <div className="clear"></div>
					            </form>
				            </div>
  				        </div>
                        <div className="col span_1_of_3">
                            <div className="company_address">
                                <h5>INFORMATION</h5>
                                <ul className="list3">
                                    <li>
                                        <div className="extra-wrap">
                                            <p>Lorem ipsum  consectetu</p>
                                            <p>12345-Lorem ipsum  consectetu</p>
                                            <p>Lorem ipsum , consectetu</p>
                                        </div>
                                        <div className="clear"> </div>
                                    </li>
                                    <li>
                                        <div className="extra-wrap">
                                            <p>+1 800(Phone) 258 2598</p>
                                        </div>
                                        <div className="clear"> </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="clear"></div>
			        </div>
                </div>
            </div>
        )
    }
}

export default Contact