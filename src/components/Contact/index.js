import React, { useState } from 'react';
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import { ThemeProvider, createTheme } from '@mui/material/styles'
import { orange } from '@mui/material/colors'
import { validateEmail } from '../../utils/helpers';

function ContactForm() {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [errorMessage, setErrorMessage] = useState('');
  const { name, email, message } = formState;

  // this function is called when user submits their contact info
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!errorMessage) {
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
    if (!errorMessage) {
      setFormState({ ...formState, [e.target.name]: e.target.value });
    }
  };

  const theme = createTheme({
    palette: {
      primary: {
        main: orange[300]
      },
      warning: {
        main: orange[400]
      },

    }
  })
  return (
    <section className='margin-top flex-col-center'>
      <h1 className="text-center title" data-testid="h1tag">Contact Form</h1>
      <form className='flex-col-center' onSubmit={handleSubmit}>
        <ThemeProvider theme={theme}>
          {/* name */}
          <TextField 
          onBlur={handleChange}
          type="text" name="name" defaultValue={name}
          variant="filled" color="warning" label="name"
          placeholder="your name here"
          >
          </TextField>
          {/* email */}
          <TextField 
          onBlur={handleChange}
          type="text" name="email" defaultValue={email}
          variant="filled" color="warning" label="Email Address"
          placeholder="email@email.com"
          >
          </TextField>
          {/* message */}
          <TextField 
          onBlur={handleChange}
          type="multiline" name="message" defaultValue={message}
          variant="filled" color="warning" label="message" multiline='true'
          minRows='5' minColumns='20'
          >
          </TextField>
          {errorMessage && (
            <div>
              <p className="error-text">{errorMessage}</p>
            </div>
          )}
          <div className='submit-button'>
            <Button 
            type="submit"
            variant='contained'
            color='primary'
            > Submit </Button>
          </div>
        </ThemeProvider>

      </form>
      <article>
      <h1 className="text-center title">My Contact Info</h1>
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