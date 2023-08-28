import React from 'react';

const Popup = ({ isOpen, onClose }) => {
  return (
    <div className={`popup ${isOpen ? 'open' : ''}`}>
      <div className="popup-content">
        <span className="close-btn" onClick={onClose}>
          &times;
        </span>
        <h2>Terms & Conditions</h2>
        <p>You Can Cancel Anytime<br />

            $29.95 Billed Every 30 Days Appearing As BOGOmazing App<br />

            Earn $29.95 Billing Credit For Each Referral I Understand My Membership Can Be Cancelled If I Do Not Show<br />

            Good Faith & Integrity When Using BOGOmazing App</p>
      </div>
    </div>
  );
};

export default Popup;
