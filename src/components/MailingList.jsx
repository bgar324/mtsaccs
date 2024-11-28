import React from 'react';
import '../styles/MailingList.css';

const MailingList = () => {
  return (
    <div className="mailing-list-master">
      <div className="container d-flex align-items-center justify-content-center">
        <div className="row align-items-center justify-content-center w-100">
          <div className="col-12 col-md-auto text-center">
            <h1 className="mb-3 mb-md-0">Stay informed on everything that's going on!</h1>
          </div>
          <div className="col-12 col-md-auto text-center">
            <a href="https://docs.google.com/forms/d/13sxHl6DJUDpSmCvsqQg0Gb6iGum2pA31XZ0mEClDvyc/edit" target="_blank">
              <button type="button" className="btn btn-dark mailing-btn">Join our mailing list</button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MailingList;
