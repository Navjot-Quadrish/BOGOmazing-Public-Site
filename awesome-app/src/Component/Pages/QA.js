import React from 'react';
import Image from '../../Images/about/6.png';
import { Link } from 'react-router-dom';

const Questions = () => {
  return (
    <>
      <br />
      <div id="Q-A" className="about-area spc-small">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
              <div className="inner">

                <h3 className="sec-sub-title fw-bolder fs-1"><font color="#FF0000">Question & Answers</font> </h3>
                <br />

              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
              <div id="Q-A" className="about-area">
                <img src={Image} alt="about" style={{ float: "right", width: "340px", padding: "10px" }} />
                <h3 className="mb-1 fs-4">How much is BOGOmazing per month?</h3>
                <p >$29.95</p>

                <h3 className="mb-1 fs-4">What exactly qualifies for a BOGO at participating restaurants?</h3>
                <p>Any item typically $15 or more that are Entrees excluding A la Carte Selections, Appetizers and Desserts. Other items may be included at the discretion of each individual participating restaurant. You can access complete BOGO menus through the BOGOmazing App as well as at <Link to="https://www.bogomazing.com">www.bogomazing.com.</Link><span>When redeeming, you only need to purchase 1 beverage per person and 1 select appetizer & 1 select entree per 2 people (up to 6 people) to receive the 2nd menu selection free from the 2nd FREE selection menu featured on the app.</span></p>

                <h3 className="mb-1 fs-4">How many BOGO's can I qualify for at a restaurant?</h3>
                <p>You are eligible for up to 3 BOGO offers with a table of 6. You must have a table of 2 to be eligible for a single BOGO offer. All people must purchase a beverage & 1 appetizer per 2 people in the party.</p>

                <h3 className="mb-1 fs-4">How much can I save if I use BOGOmazing only once per day with me and a friend?</h3>

                <p>Assuming an average entrée price of $25.00, using BOGOmazing once per day will save you $750+ per month.  </p>


                <h3 className="mb-1 fs-4">How many times per day can I use BOGOmazing?</h3>
                <p>You can use BOGOmazing up to 3 times per day at 3 different restaurants.  You are able to visit the same restaurant once per day if you do have a favorite.</p>

                <h3 className="mb-1 fs-4">Is there any referral programs or bonuses with the BOGOmazing App?</h3>

                <p>YES, for every referral you send a BOGOmazing invite to who becomes a member, you earn a FREE Month ($29.95 Billing Credit) once your referral has been a member for 75 days.  There is no limit to how many FREE Months you can earn.</p>

                <h3 className="mb-1 fs-4">Am I able to track and see who I have referred to the BOGOmazing App?</h3>

                <p>YES, when you login into your BOGOmazing Account, just click the Referral Summary Link and you can see the status of all you have referred to BOGOmazing which will include referral name, status and if and/or when the $29.95 referral credit has been applied to your account.</p>

                <h3 className="mb-1 fs-4">Is there any long term contract with BOGOmazing?</h3>

                <p>NO, you may cancel anytime. The day you do cancel will terminate your Monthly Auto Draft as well as the ability to use the BOGOmazing App immediately.</p>

                <h3 className="mb-1 fs-4">Is there a way for me to send invites about the BOGOmazing App to my contact list?</h3>

                <p>YES, just like with Uber, Lyft or other apps, you can choose who to send the BOGOmazing App offer to which will automatically link back to you to give you credit for the referral. You are notified the moment your referral signs up for the BOGOmazing App and when the referral credit applied to your account.</p>

                <h3 className="mb-1 fs-4">How much should I tip when using BOGOmazing at a restaurant?</h3>

                <p>It is customary to tip at least 18% on the total check BEFORE your free menu selection(s) were deducted. If you get great service... Big Tippers average 25% or more in gratuity.</p>




              </div>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-4 col-xs-4"> </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Questions;