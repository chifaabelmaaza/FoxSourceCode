import React, { useState } from 'react';
import { useRouteMatch, Switch, Route, Link } from 'react-router-dom';
import '../../scss/user.scss';
import { Alert, Tooltip } from '@mui/material';
import TransactionList from './TransactionList';

function Faq() {
  return (
    <div className='faq'>
      <div className='accordion' id='accordionExample'>
        <div className='my-1 p-3 bg-lightG rounded box-shadow'>
          <div className='accordion-item'>
            <h2 className='accordion-header' id='headingOne'>
              <button
                className='accordion-button collapsed'
                type='button'
                data-bs-toggle='collapse'
                data-bs-target='#collapseOne'
                aria-expanded='false'
                aria-controls='collapseOne'
              >
                How can I buy Codes & Scripts on SellAnyCode.com?
              </button>
            </h2>
            <div
              id='collapseOne'
              className='accordion-collapse collapse'
              aria-labelledby='headingOne'
              data-bs-parent='#accordionExample'
            >
              <div className='accordion-body'>
                <p>
                  After you logged in, you can deposit via paypal and buy the
                  script or you can buy directly by using your{' '}
                  <strong>Credit Card</strong>. Our payment systems using as a
                  payment provider <strong>Stripe</strong>.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='accordion' id='accordionExample2'>
        <div className='my-1 p-3 bg-lightG rounded box-shadow'>
          <div className='accordion-item'>
            <h2 className='accordion-header' id='heading2'>
              <button
                className='accordion-button collapsed'
                type='button'
                data-bs-toggle='collapse'
                data-bs-target='#collapse2'
                aria-expanded='false'
                aria-controls='collapse2'
              >
                How do I reset my password?
              </button>
            </h2>
            <div
              id='collapse2'
              className='accordion-collapse collapse'
              aria-labelledby='heading2'
              data-bs-parent='#accordionExample2'
            >
              <div className='accordion-body'>
                <p>
                  Click on the "Forgot your password" link on the login page and
                  you will receive an automated email to reset your password.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='accordion' id='accordionExample3'>
        <div className='my-1 p-3 bg-lightG rounded box-shadow'>
          <div className='accordion-item'>
            <h2 className='accordion-header' id='heading3'>
              <button
                className='accordion-button collapsed'
                type='button'
                data-bs-toggle='collapse'
                data-bs-target='#collapse3'
                aria-expanded='false'
                aria-controls='collapse3'
              >
                How do I get a payment?
              </button>
            </h2>
            <div
              id='collapse3'
              className='accordion-collapse collapse'
              aria-labelledby='heading3'
              data-bs-parent='#accordionExample3'
            >
              <div className='accordion-body'>
                <p>
                  Payment is sent via PayPal or Bank Transfer. Please don't
                  forget to fill in your payment profile to get paid.&nbsp;
                  <strong>
                    My Account - Payments &amp; Transactions - Payments
                  </strong>
                </p>
                <p>
                  After you logged in, you can deposit via paypal and buy the
                  script or you can buy directly by using your{' '}
                  <strong>Credit Card</strong>. Our payment systems using as a
                  payment provider <strong>Stripe</strong>.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='accordion' id='accordionExample4'>
        <div className='my-1 p-3 bg-lightG rounded box-shadow'>
          <div className='accordion-item'>
            <h2 className='accordion-header' id='heading4'>
              <button
                className='accordion-button collapsed'
                type='button'
                data-bs-toggle='collapse'
                data-bs-target='#collapse4'
                aria-expanded='false'
                aria-controls='collapse4'
              >
                Is there a long term contract or exclusivity policy?
              </button>
            </h2>
            <div
              id='collapse4'
              className='accordion-collapse collapse'
              aria-labelledby='heading4'
              data-bs-parent='#accordionExample4'
            >
              <div className='accordion-body'>
                <p>
                  Absolutely not. You can cancel anytime you want; you can also
                  work with other marketplace at the same time. It is your code
                  and you decide what you want to do, we are just here to help.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='accordion' id='accordionExample5'>
        <div className='my-1 p-3 bg-lightG rounded box-shadow'>
          <div className='accordion-item'>
            <h2 className='accordion-header' id='heading5'>
              <button
                className='accordion-button collapsed'
                type='button'
                data-bs-toggle='collapse'
                data-bs-target='#collapse5'
                aria-expanded='false'
                aria-controls='collapse5'
              >
                When and how will I get paid?
              </button>
            </h2>
            <div
              id='collapse5'
              className='accordion-collapse collapse'
              aria-labelledby='heading5'
              data-bs-parent='#accordionExample5'
            >
              <div className='accordion-body'>
                <p>
                  We pay immediately! This means that we send money immediately
                  after purchase. Minimum payout is $30 for PayPal and $50 for
                  Bank Transfer.
                  <br />
                  If you don't earn that much within one month, We will carry
                  the balance due forward to the next payment period.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='accordion' id='accordionExample6'>
        <div className='my-1 p-3 bg-lightG rounded box-shadow'>
          <div className='accordion-item'>
            <h2 className='accordion-header' id='heading6'>
              <button
                className='accordion-button collapsed'
                type='button'
                data-bs-toggle='collapse'
                data-bs-target='#collapse6'
                aria-expanded='false'
                aria-controls='collapse6'
              >
                Where can I see or get the invoice?
              </button>
            </h2>
            <div
              id='collapse6'
              className='accordion-collapse collapse'
              aria-labelledby='heading6'
              data-bs-parent='#accordionExample6'
            >
              <div className='accordion-body'>
                <p>
                  An invoice is generated automatically whenever a payment is
                  made to your account. Under tab Payments - Payment history -
                  Transactions (in PDF and HTML format)
                </p>
                <p>
                  We pay immediately! This means that we send money immediately
                  after purchase. Minimum payout is $30 for PayPal and $50 for
                  Bank Transfer.
                  <br />
                  If you don't earn that much within one month, We will carry
                  the balance due forward to the next payment period.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='accordion' id='accordionExample7'>
        <div className='my-1 p-3 bg-lightG rounded box-shadow'>
          <div className='accordion-item'>
            <h2 className='accordion-header' id='heading7'>
              <button
                className='accordion-button collapsed'
                type='button'
                data-bs-toggle='collapse'
                data-bs-target='#collapse7'
                aria-expanded='false'
                aria-controls='collapse7'
              >
                What are your company details
              </button>
            </h2>
            <div
              id='collapse7'
              className='accordion-collapse collapse'
              aria-labelledby='heading7'
              data-bs-parent='#accordionExample7'
            >
              <div className='accordion-body'>
                <p>
                  <strong>SellAnyCode.com -</strong> London, United Kingdom
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='accordion' id='accordionExample8'>
        <div className='my-1 p-3 bg-lightG rounded box-shadow'>
          <div className='accordion-item'>
            <h2 className='accordion-header' id='heading8'>
              <button
                className='accordion-button collapsed'
                type='button'
                data-bs-toggle='collapse'
                data-bs-target='#collapse8'
                aria-expanded='false'
                aria-controls='collapse8'
              >
                Do I need to invoice SellAnyCode.com?
              </button>
            </h2>
            <div
              id='collapse8'
              className='accordion-collapse collapse'
              aria-labelledby='heading8'
              data-bs-parent='#accordionExample8'
            >
              <div className='accordion-body'>
                <p>
                  No. Our payment process is completely automated so you do not
                  need to send us an invoice.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='accordion' id='accordionExample9'>
        <div className='my-1 p-3 bg-lightG rounded box-shadow'>
          <div className='accordion-item'>
            <h2 className='accordion-header' id='heading9'>
              <button
                className='accordion-button collapsed'
                type='button'
                data-bs-toggle='collapse'
                data-bs-target='#collapse9'
                aria-expanded='false'
                aria-controls='collapse9'
              >
                Do you have any suggestions or feedback?
              </button>
            </h2>
            <div
              id='collapse9'
              className='accordion-collapse collapse'
              aria-labelledby='heading9'
              data-bs-parent='#accordionExample9'
            >
              <div className='accordion-body'>
                <p>
                  If you have any suggestions, improvements or feedback, please
                  reach us at email:&nbsp;
                  <a
                    className='modal-link sparkling-modal-link'
                    href='mailto:info@sellanycode.com'
                  >
                    info@sellanycode.com
                  </a>
                  .
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='accordion' id='accordionExample10'>
        <div className='my-1 p-3 bg-lightG rounded box-shadow'>
          <div className='accordion-item'>
            <h2 className='accordion-header' id='heading10'>
              <button
                className='accordion-button collapsed'
                type='button'
                data-bs-toggle='collapse'
                data-bs-target='#collapse10'
                aria-expanded='false'
                aria-controls='collapse10'
              >
                What I can report any BUG or issue?
              </button>
            </h2>
            <div
              id='collapse10'
              className='accordion-collapse collapse'
              aria-labelledby='heading10'
              data-bs-parent='#accordionExample10'
            >
              <div className='accordion-body'>
                <p>
                  Kindly write us at email:&nbsp;
                  <a
                    className='modal-link sparkling-modal-link'
                    href='mailto:info@sellanycode.com'
                  >
                    info@sellanycode.com
                  </a>
                  , our technical team can fix any issue regarding to your
                  requirements.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='accordion' id='accordionExample11'>
        <div className='my-1 p-3 bg-lightG rounded box-shadow'>
          <div className='accordion-item'>
            <h2 className='accordion-header' id='heading11'>
              <button
                className='accordion-button collapsed'
                type='button'
                data-bs-toggle='collapse'
                data-bs-target='#collapse11'
                aria-expanded='false'
                aria-controls='collapse11'
              >
                In what currency can I get paid?
              </button>
            </h2>
            <div
              id='collapse11'
              className='accordion-collapse collapse'
              aria-labelledby='heading11'
              data-bs-parent='#accordionExample11'
            >
              <div className='accordion-body'>
                <p>
                  The default currency is USD. Payments are each month send in
                  USD currency over the PayPal transfer and Bank Transfer.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='accordion' id='accordionExample12'>
        <div className='my-1 p-3 bg-lightG rounded box-shadow'>
          <div className='accordion-item'>
            <h2 className='accordion-header' id='heading12'>
              <button
                className='accordion-button collapsed'
                type='button'
                data-bs-toggle='collapse'
                data-bs-target='#collapse12'
                aria-expanded='false'
                aria-controls='collapse12'
              >
                Where can I contact you?
              </button>
            </h2>
            <div
              id='collapse12'
              className='accordion-collapse collapse'
              aria-labelledby='heading12'
              data-bs-parent='#accordionExample12'
            >
              <div className='accordion-body'>
                <p className='contacts'>
                  You can contact us at the following addresses:
                </p>
                <p className='contacts'>
                  <strong>Sales Support: </strong>
                  <a
                    href='mailto:info@sellanycode.com'
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    info@sellanycode.com
                  </a>
                </p>
                <p className='contacts'>
                  <strong>Customer Support: </strong>
                  <a
                    href='mailto:info@sellanycode.com'
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    info@sellanycode.com
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='accordion' id='accordionExample13'>
        <div className='my-1 p-3 bg-lightG rounded box-shadow'>
          <div className='accordion-item'>
            <h2 className='accordion-header' id='heading13'>
              <button
                className='accordion-button collapsed'
                type='button'
                data-bs-toggle='collapse'
                data-bs-target='#collapse13'
                aria-expanded='false'
                aria-controls='collapse13'
              >
                I still have some questions.
              </button>
            </h2>
            <div
              id='collapse13'
              className='accordion-collapse collapse'
              aria-labelledby='heading13'
              data-bs-parent='#accordionExample13'
            >
              <div className='accordion-body'>
                <p>
                  Don't hesitate to reach out to your account manager. We are
                  happy to help!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='accordion' id='accordionExample14'>
        <div className='my-1 p-3 bg-lightG rounded box-shadow'>
          <div className='accordion-item'>
            <h2 className='accordion-header' id='heading14'>
              <button
                className='accordion-button collapsed'
                type='button'
                data-bs-toggle='collapse'
                data-bs-target='#collapse14'
                aria-expanded='false'
                aria-controls='collapse14'
              >
                I still have some questions.
              </button>
            </h2>
            <div
              id='collapse14'
              className='accordion-collapse collapse'
              aria-labelledby='heading14'
              data-bs-parent='#accordionExample14'
            >
              <div className='accordion-body'>
                <p>
                  As a seller and owner item will receive 80% of the price from
                  every sale. (Of course, If you are not satisfied, we can offer
                  you better offer than the competition)
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='accordion' id='accordionExample15'>
        <div className='my-1 p-3 bg-lightG rounded box-shadow'>
          <div className='accordion-item'>
            <h2 className='accordion-header' id='heading15'>
              <button
                className='accordion-button collapsed'
                type='button'
                data-bs-toggle='collapse'
                data-bs-target='#collapse15'
                aria-expanded='false'
                aria-controls='collapse15'
              >
                Do you offer a guarantee on items?
              </button>
            </h2>
            <div
              id='collapse15'
              className='accordion-collapse collapse'
              aria-labelledby='heading15'
              data-bs-parent='#accordionExample15'
            >
              <div className='accordion-body'>
                <p>
                  Yes, we definitely offer a 14-day warranty from the sale. We
                  guarantee quality of any digital items & scripts & codes on
                  100%.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Faq;
