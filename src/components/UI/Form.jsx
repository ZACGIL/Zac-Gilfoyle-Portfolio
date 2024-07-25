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
        alert(`Hello ${firstName} ${lastName}. Your message has been sent with ${email}.`);
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
        <div className='w-full'>
            <h1 className='text-center my-12 text-xl'>
                Hello {firstName} {lastName}
            </h1>
            <p className='text-center my-12'>For any queries, enter your contact information below and I will respond as soon as possible.</p>
            <form className="bg-white shadow-md rounded px-60 pt-6 pb-8 mb-4" onSubmit={handleFormSubmit}>
                <div className='mb-4'>
                    <label class="block text-gray-700 text-sm font-bold mb-2" for="firstName">
                        First Name
                    </label>
                </div>
                <div className='mb-6'>
                    <input required
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        value={firstName}
                        name="firstName"
                        onChange={handleInputChange}
                        type="text"
                        placeholder="First Name"
                    />
                </div>
                <div className='mb-4'>
                    <label class="block text-gray-700 text-sm font-bold mb-2" for="firstName">
                        Last Name
                    </label>
                </div>
                <div className='mb-6'>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        value={lastName}
                        name="lastName"
                        onChange={handleInputChange}
                        type="text"
                        placeholder="Last Name (Optional)"
                    />
                </div>
                <div className='mb-4'>
                    <label class="block text-gray-700 text-sm font-bold mb-2" for="firstName">
                        Company
                    </label>
                </div>
                <div className='mb-6'>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        value={company}
                        name="company"
                        onChange={handleInputChange}
                        type="text"
                        placeholder="Company (Optional)"
                    />
                </div>
                <div className='mb-4'>
                    <label class="block text-gray-700 text-sm font-bold mb-2" for="firstName">
                        Email
                    </label>
                </div>
                <div className='mb-6'>
                    <input required
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        value={email}
                        name="email"
                        onChange={handleInputChange}
                        type="text"
                        placeholder="Email"
                    />
                </div>
                <div className='mb-4'>
                    <label class="block text-gray-700 text-sm font-bold mb-2" for="firstName">
                        Message
                    </label>
                </div>
                <div className='mb-6'>
                    <input required
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        value={message}
                        name="message"
                        onChange={handleInputChange}
                        type="text"
                        placeholder="Message"
                    />
                </div>
                <div>
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
                        Submit
                    </button>
                </div>
            </form>
        </div>
    );
}