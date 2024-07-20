import { useState } from 'react';

export default function Form() {
    
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [company, setCompany] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleInputChange = (e) => {
        // Getting the value and name of the input which triggered the change
        const { name, value } = e.target;

        if (name === 'firstName') {
            return setFirstName(value);
        }
        if (name === 'lastName') {
            return setLastName(value);
        }
        if (name === 'company') {
            return setCompany(value);
        }
        if (name === 'email') {
            return setEmail(value);
        }
        if (name === 'message') {
            return setMessage(value);
        }
    };

    const handleFormSubmit = (e) => {
        // Preventing the default behavior of the form submit (which is to refresh the page)
        e.preventDefault();

        if (!validateEmail(email)) {
            alert('Please enter a valid email');
            return;
        }

        // Alert the user their first and last name, clear the inputs
        alert(`Hello ${firstName} ${lastName}. Your message has been sent to ${email}.`);
        alert(`Your other info: ${company} | ${message}`);
        setFirstName('');
        setLastName('');
        setCompany('');
        setEmail('')
        setMessage('')
    };

    const validateEmail = (email) => {
        // Checks only one @ in string and dot notation
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }

    return (
        <div>
            <h1>
                Hello {firstName} {lastName}
            </h1>
            <form className="form" onSubmit={handleFormSubmit}>
                <input required
                    value={firstName}
                    name="firstName"
                    onChange={handleInputChange}
                    type="text"
                    placeholder="First Name"
                />
                <input
                    value={lastName}
                    name="lastName"
                    onChange={handleInputChange}
                    type="text"
                    placeholder="Last Name (Optional)"
                />
                <input
                    value={company}
                    name="company"
                    onChange={handleInputChange}
                    type="text"
                    placeholder="Company (Optional)"
                />
                <input required
                    value={email}
                    name="email"
                    onChange={handleInputChange}
                    type="text"
                    placeholder="Email"
                />
                <input required
                    value={message}
                    name="message"
                    onChange={handleInputChange}
                    type="text"
                    placeholder="Message"
                />
                <button type="submit">
                    Submit
                </button>
            </form>
        </div>
    );
}