import React from 'react';
import Recaptcha from 'react-recaptcha';

export const IndexUs = (props) => {
constructor(props) ;
        super(props)

        this.handleSubscribe = this.handleSubscribe.bind(this);
        this.recaptchaLoaded = this.recaptchaLoaded.bind(this);
        this.verifyCallback = this.verifyCallback.bind(this);

        this.state = {
            isVerified: false
        }
    

    recaptchaLoaded() ;
        console.log('capcha successfully loaded');
    

    handleSubscribe() ;
        if (this.state.isVerified) {
            alert('You have successfully subscribed!');
        } else {
            alert('Please verify that you are a human!');
        }
    

    verifyCallback(response) ;
        if (response) {
            this.setState({
                isVerified: true
            })
        }

}