import React from "react";
import { ContactFormTitle } from "@/data";
import HubspotForm from 'react-hubspot-form'

const ContactForm = () => {
  const { subTitle, title, description } = ContactFormTitle;
  return (
    <section className="commonSection ContactPage">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 text-center">
            <h2 className="sec_title">{title}</h2>
            <p className="sec_desc">{description}</p>
          </div>
        </div>
        <div className="row" >
          <div className="col-lg-12 col-sm-12 col-md-10 w-100">
            <form
              action="#"
              method="post"
              className="contactFrom"
              id="contactForm"
            >
            <HubspotForm
                   portalId='1948713'
                   formId='bdc112ab-b88a-4908-b130-2aa0fcb36669'
                   onSubmit={() => console.log('Submit!')}
                   onReady={(form) => console.log('Form ready!')}
                   loading={<div>Loading...</div>}
                   />
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
