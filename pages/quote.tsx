import React, { useState } from 'react';
import axios from 'axios';
import mixpanel from 'mixpanel-browser';
import Button from 'components/atoms/Button';
import ButtonLink from 'components/atoms/Button/ButtonLink';
import InputGroup from 'components/molecules/FormGroup/InputGroup';
import SelectGroup from 'components/molecules/FormGroup/SelectGroup';
import TextAreaGroup from 'components/molecules/FormGroup/TextAreaGroup';
import PageSentence from 'components/molecules/PageSentence';
import PageTemplate from 'components/templates/PageTemplate';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Quote = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [yourProblem, setYourProblem] = useState('');

    // Phone number validation regex
  const phoneRegex = /^(\+)?(\d{1,4})?[\s.-]?\(?(\d{1,3})\)?[\s.-]?(\d{1,3})[\s.-]?(\d{1,4})$/;

  // Email validation regex
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  mixpanel.track('Quote Page');
  const handleFormSubmit = () => {
    mixpanel.track('Send Quote Form Submission', {
      'Name': name,
      'Email': email,
      'Phone number': phoneNumber,
      'Tell us your problem': yourProblem,
    });
    // Add any additional logic for form submission here

    // console.log('Name: ', name, email, phoneNumber, yourProblem);
    console.log('name: ',name, 'email: ', email, 'phoneNumber: ', phoneNumber, 'yourProblem: ', yourProblem)

    if(name === '' || email === '' || phoneNumber === '' || yourProblem === '') {
      toast.error('Please fill all the fields', {
        position: 'bottom-right',
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
    })
  }
  else{
    axios.post('https://eol2lhcifrly7ly.m.pipedream.net', {
      name: name,
      email: email,
      phoneNumber: phoneNumber,
      yourProblem: yourProblem,
    }).then(() => {
        toast.success('Thank you! Your quote has been sent', {
        position: 'bottom-right',
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }).catch((error) => {
      toast.error('Something went wrong', {
        position: 'bottom-right',
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
    })
    });
    setName('');
    setEmail('');
    setPhoneNumber('');
    setYourProblem('');
  } 
  };
  return (
    <>
      <ToastContainer />
      <PageTemplate title='Send Quote - Vada Innovation'>
        <section className="grid grid-cols-1 place-items-center gap-5 lg:grid-cols-2">
          <aside className="w-full sm:w-10/12 md:w-8/12 grid grid-cols-1 place-items-center gap-12 lg:w-full lg:place-items-start" data-aos="fade-down-right">
            <div className="text-center lg:text-left">
              <PageSentence
                title="Tell us about your problem and how we can help"
                description="We are happy to help you, tell us what is the problem with your company, and we are ready to answer these problems. It usually takes a few minutes for us to respond."
                badge="SEND QUOTE"
              />
            </div>
            <div className="w-fit">
              <ButtonLink
                value="Ask Us"
                href="/faq"
                color="white"
                style="light"
              />
            </div>
          </aside>
          <aside className="w-full sm:w-10/12 md:w-8/12 lg:w-full lg:flex lg:justify-end" data-aos="fade-up-left">
            <div className="grid grid-cols-1 gap-7 p-6 md:p-9 bg-light rounded-md lg:w-10/12 ">
              <div className="grid grid-cols-2 gap-4">
                <InputGroup label="Name" value={name} onChange={(e) => setName(e.target.value)} />
                <InputGroup label="Email" type='email' value={email} onChange={(e) => setEmail(e.target.value)} />
              </div>
              <div className="grid grid-cols-1 gap-4">
                <InputGroup label="Phone Number" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} />
                {/* <InputGroup label="Company" />
                <SelectGroup
                  label="Company Size"
                  options={[
                    { label: 'Small', value: 'small' },
                    { label: 'Medium', value: 'medium' },
                    { label: 'Large', value: 'large' },
                  ]}
                /> */}
              </div>
              <TextAreaGroup label="Tell Us Your Problem" 
                value={yourProblem} onChange={(e) => setYourProblem(e.target.value)} />
              <Button value="Send Quote" onClick={handleFormSubmit} />
            </div>
          </aside>
        </section>
      </PageTemplate>
    </>
  )
}

export default Quote;
