import React from 'react'
import Row from 'react-bootstrap/Row';

const TermsConditions = () => {
    return (
        <div style={{
            fontfamily: "Helvetica Neue,Helvetica,Arial,sans-serif !important",
            fontSize: "14px !important",
            lineHeight: "1.42857143 !important",
            color: "#000 !important",
            backgroundColor: "#fff !important",
            padding: "1rem"
        }}>

            <Row>
                <div className='text-danger'>
                    <p className="terms">You Can Cancel Anytime</p>
                    <p className="terms">$29.95 Billed Every 30 Days Appearing As BOGOmazing App</p>
                    <p className="terms">Earn $29.95 Billing Credit For Each Referral I Understand My Membership Can Be Cancelled If I Do Not Show</p>

                    <p className="terms">Good Faith & Integrity When Using BOGOmazing App</p>
                </div>
            </Row>
        </div>

    )
}

export default TermsConditions;
