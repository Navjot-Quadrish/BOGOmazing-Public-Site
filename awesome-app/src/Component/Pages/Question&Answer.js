import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

const QuestionAnswer = () => {
    return (
        <Container>
            <Row>
                <div className="acc">
                    <p className="question text-color mb-1 text-capitalize">How Much Is My Credit Card Charged Every Month?</p><hr
                        style={{
                            margin:"0",
                            background: "red",
                            height: "1px",
                            border: "none",
                        }}
                    />
                    <p className="answer text-capitalize">$29.95</p>

                </div>
                    <div className="acc">
                        <p className="question text-color mb-1 text-capitalize">Can I cancel anytime?<hr
                            style={{
                                margin:"0",
                                background: "red",
                                height: "1px",
                                border: "none",
                            }} /></p>
                        <p className="answer text-capitalize">YES, there is no contract and you can cancel anytime.</p>

                    </div>
                    <div className="acc">
                        <p className="question text-color mb-1 text-capitalize">How Do Charges Appear On My Credit Card Statement?</p><hr
                            style={{
                                margin:"0",
                                background: "red",
                                height: "1px",
                                border: "none",
                            }} />
                        <p className="answer text-capitalize"><a>BOGOmazing.com</a></p>

                    </div>

                    <div className="acc">
                        <p className="question text-color mb-1 text-capitalize">How much do I earn per BOGOmazing App Referral?<hr
                            style={{
                                margin:"0",
                                background: "red",
                                height: "1px",
                                border: "none",
                            }} /></p>
                        <p className="answer text-capitalize">You earn $29.95 billing credit per referral that is applied to your account 75 days from the day your referral signs up for BOGOmazing.  Thank You for any referrals!!!</p>

                    </div>
                    <div className="acc">
                        <p className="question text-color mb-1 text-capitalize">I am not able to get restaurants to sort by distance?</p><hr
                            style={{
                                margin:"0",
                                background: "red",
                                height: "1px",
                                border: "none",
                            }} />
                    <p className="answer text-capitalize">Please be sure you have permissions allowed for My Location. You can access permissions through your Settings / Apps / Permissions / BOGOmazing.</p>

                </div>
                <div className="acc">
                    <p className="question text-color mb-1 text-capitalize">Is there a limit how many referral credits I can earn?</p><hr
                        style={{
                            margin:"0",
                            background: "red",
                            height: "1px",
                            border: "none",
                        }} />
                    <p className="answer text-capitalize">NO, you can earn an unlimited number of BOGOmazing Referral Credits. Just 12 BOGOmazing Referrals earns you ONE FREE Year. </p>

                </div>
                <div className="acc">
                    <p className="question text-color mb-1 text-capitalize">What do I do if there is an incorrect charge on my credit card?</p><hr
                        style={{
                            margin:"0",
                            background: "red",
                            height: "1px",
                            border: "none",
                        }} />
                    <p className="answer text-capitalize"> If you have a charge amount different then $29.95 or a charge was made when your account should have had a BOGOmazing Referral Credit applied, please use the Contact Us option under your profile to communicate the problem so it can be rectified immediately.
                    </p>

                </div>
                <div className="acc">
                    <p className="question text-color mb-1 text-capitalize">If I have a problem redeeming any of the offers at a participating restaurant, can I email BOGOmazing App to communicate the problem?</p><hr
                        style={{
                            margin:"0",
                            background: "red",
                            height: "1px",
                            border: "none",
                        }} />
                    <p className="answer text-capitalize">If you ever have an issue using BOGOmazing App at any participating restaurant, please ask for a manager as some newer staff may have yet to receive training on how BOGOmazing APP works. If you still experience a problem, please go to Contact Us to email us the challenge you are facing. We thank you in advance for helping us assure all participating restaurants are supporting BOGOmazing App as they should be.</p>

                </div>
            </Row>
        </Container>
    )
}

export default QuestionAnswer;
