import React, { useState } from 'react';
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import { validateEmail } from '../../utils/helpers';

function ContactForm() {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [errorMessage, setErrorMessage] = useState('');
  const { name, email, message } = formState;

  // this function is called when user submits their contact info
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!errorMessage) {
      setFormState({ [e.target.name]: e.target.value });
      console.log('Form', formState);
    }
  };

  // this function is called when the contact fields blur (are unfocused)
  const handleChange = (e) => {
    if (e.target.name === 'email') {
      const isValid = validateEmail(e.target.value);
      if (!isValid) {
        setErrorMessage('Your email is invalid.');
      } else {
        setErrorMessage('');
      }
    } else {
      if (!e.target.value.length) {
        setErrorMessage(`${e.target.name} is required.`);
      } else {
        setErrorMessage('');
      }
    }
  };

  return (
    <section>
      <h1 data-testid="h1tag">Contact me</h1>
      <form id="contact-form" onSubmit={handleSubmit}>
        <div>
          <TextField 
          onBlur={handleChange}
          type="text" name="name" defaultValue={name}
          variant="standard" color="secondary"
          >

          </TextField>
          {/* <label htmlFor="name">Name:</label>
          <input    /> */}
        </div>
        <div>
          <label htmlFor="email">Email address:</label>
          <input type="email" name="email" defaultValue={email} onBlur={handleChange} />
        </div>
        <div>
          <label htmlFor="message">Message:</label>
          <textarea name="message" rows="5" defaultValue={message} onBlur={handleChange} />
        </div>
        {errorMessage && (
          <div>
            <p className="error-text">{errorMessage}</p>
          </div>
        )}
        <Button 
        type="submit"
        variant='contained'
        > Submit </Button>
      </form>
      <article>
        <p>
          My Email: jwhusc7@gmail.com
        </p>
        <p>
          My Phone Number: 704-600-7641
        </p>
      </article>
    </section>
  );
}

export default ContactForm;