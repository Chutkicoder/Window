import logo from './logo.svg'
import './App.css'
import { useState } from 'react'

function App() {
  const [firstName, setFirstName] = useState('') // useState to store First Name
  const [lastName, setLastName] = useState('') // useState to store Last Name
  const [mobile, setMobile] = useState('') // useState to store Mobile Number
  const [age, setAge] = useState('') // useState to store Age
  const [email, setEmail] = useState('') // useState to store Email address of the user
  const [password, setPassword] = useState('') // useState to store Password

  // Function which will validate the input data whenever submit button is clicked.

  function validateForm() {
    // Check if the First Name is an Empty string or not.

    if (firstName.length == 0) {
      alert('Invalid Form, First Name can not be empty')
      return
    }

    // Check if the Email is an Empty string or not.

    if (email.length == 0) {
      alert('Invalid Form, Email Address can not be empty')
      return
    }

    // check if the password follows constraints or not.

    // if password length is less than 8 characters, alert invalid form.

    if (password.length < 8) {
      alert(
        'Invalid Form, Password must contain greater than or equal to 8 characters.',
      )
      return
    }

    // variable to count upper case characters in the password.
    let countUpperCase = 0
    // variable to count lowercase characters in the password.
    let countLowerCase = 0
    // variable to count digit characters in the password.
    let countDigit = 0
    // variable to count special characters in the password.
    let countSpecialCharacters = 0

    for (let i = 0; i < password.length; i++) {
      const specialChars = [
        '!',
        '@',
        '#',
        '$',
        '%',
        '^',
        '&',
        '*',
        '(',
        ')',
        '_',
        '-',
        '+',
        '=',
        '[',
        '{',
        ']',
        '}',
        ':',
        ';',
        '<',
        '>',
      ]

      if (specialChars.includes(password[i])) {
        // this means that the character is special, so increment countSpecialCharacters
        countSpecialCharacters++
      } else if (!isNaN(password[i] * 1)) {
        // this means that the character is a digit, so increment countDigit
        countDigit++
      } else {
        if (password[i] == password[i].toUpperCase()) {
          // this means that the character is an upper case character, so increment countUpperCase
          countUpperCase++
        }
        if (password[i] == password[i].toLowerCase()) {
          // this means that the character is lowercase, so increment countUpperCase
          countLowerCase++
        }
      }
    }

    if (countLowerCase == 0) {
      // invalid form, 0 lowercase characters
      alert('Invalid Form, 0 lower case characters in password')
      return
    }

    if (countUpperCase == 0) {
      // invalid form, 0 upper case characters
      alert('Invalid Form, 0 upper case characters in password')
      return
    }

    if (countDigit == 0) {
      // invalid form, 0 digit characters
      alert('Invalid Form, 0 digit characters in password')
      return
    }

    if (countSpecialCharacters == 0) {
      // invalid form, 0 special characters characters
      alert('Invalid Form, 0 special characters in password')
      return
    }

    // if all the conditions are valid, this means that the form is valid

    alert('Form is valid')
  }

  return (
    <div className="main">
      <form>
        
        <input
          placeholder="First Name"
          onChange={(e) => setFirstName(e.target.value)}
        />
        
        <input
          placeholder="Last Name"
          onChange={(e) => setLastName(e.target.value)}
        />
        
        <input
          placeholder="Mobile Number"
          onChange={(e) => setMobile(e.target.value)}
        />
        
        <input placeholder="Age" onChange={(e) => setAge(e.target.value)} />
        
        <input placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
        
        <input
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          type="submit"
          onClick={() => {
            validateForm()
          }}
        >
          Submit
        </button>
      </form>
    </div>
  )
}

export default App


//cd react-form-validation
//npm start
//npm i yup
//npm start

/*
import logo from './logo.svg'
import './App.css'
import { useState } from 'react'
import * as yup from 'yup' // importing functions from yup library

function App() {
  const [firstName, setFirstName] = useState('') // useState to store First Name
  const [lastName, setLastName] = useState('') // useState to store Last Name
  const [mobile, setMobile] = useState('') // useState to store Mobile Number
  const [age, setAge] = useState('') // useState to store Age
  const [email, setEmail] = useState('') // useState to store Email address of the user
  const [password, setPassword] = useState('') // useState to store Password

  // defining yup schema to validate our form

  const userSchema = yup.object().shape({
    // name can not be an empty string so we will use the required function
    firstName: yup.string().required(),
    lastName: yup.string(),
    // email can not be an empty string so we will use the required function
    email: yup.string().email().required(),
    // password can not be an empty string so we will use the required function. Also, we have used the `min` function to set the minimum length of the password. Yup passwords by default handle the conditions of at least one upper case, at least one lower case, and at least one special character in the password
    password: yup.string().min(8).required(),
    age: yup.string(),
    mobile: yup.string(),
  })

  // Function which will validate the input data whenever submit button is clicked.

  async function validateForm() {
    // creating a form data object

    let dataObject = {
      firstName: firstName,
      lastName: lastName,
      email: email,
      password: password,
      age: age,
      mobile: mobile,
    }

    // validating this dataObject concerning Yup userSchema

    const isValid = await userSchema.isValid(dataObject)

    if (isValid) {
      alert('Form is Valid')
    } else {
      alert('Form is Invalid')
    }
  }

  return (
    <div className="main">
      <form>
        
        <input
          placeholder="First Name"
          onChange={(e) => setFirstName(e.target.value)}
        />
        
        <input
          placeholder="Last Name"
          onChange={(e) => setLastName(e.target.value)}
        />
        
        <input
          placeholder="Mobile Number"
          onChange={(e) => setMobile(e.target.value)}
        />
        
        <input placeholder="Age" onChange={(e) => setAge(e.target.value)} />
        
        <input placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
        
        <input
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          type="submit"
          onClick={() => {
            validateForm()
          }}
        >
          Submit
        </button>
      </form>
    </div>
  )
}

export default App
*/