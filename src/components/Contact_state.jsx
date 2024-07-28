import React, { useState } from "react";

const Contact = () => {
    const [selectedOption, setSelectedOption] = useState('Select an option ⬇');

    const handleSelectChange = (event) => {
        const selected = Array.from(event.target.selectedOptions).map(option => option.text).join(', ');
        setSelectedOption(selected);
    };

    return (
        <div>
            <br/>
            <p className="text-2xl"><i>Lets talk about your query !!</i></p>
            <br/>
            <p className="text-2xl"><i>Drop us a line through the form below and we'll get back to you.</i></p>
            <br/>

            <form className="">
                <div className="flex items-center mb-4">
                    <label className="block text-xl mb-2 ml-40 mr-10" htmlFor="enquiry-type">Types of Enquiry <b className="text-red-700">*</b></label>

                    <details className="flex-grow">
                        <summary className="block text-xl mb-2 cursor-pointer border rounded py-2 px-3 text-gray-900 mr-14">{selectedOption}</summary>
                        <select multiple name="Types of Enquiry" size="4" className="border rounded py-2 px-3 text-gray-700" onChange={handleSelectChange}>
                            <option value="sales">Sales</option>
                            <option value="support">Support</option>
                            <option value="feedback">Feedback</option>
                            <option value="other">Other</option>
                        </select>
                    </details>
                </div>

                <div className="flex flex-col items-center justify-center mb-4">
                    <div className="flex items-center mb-4">
                        <label className="text-xl mb-2 mr-4" htmlFor="first-name">First Name</label>
                        <input type="text" name="first-name" id="first-name" className="border rounded py-2 px-3 text-gray-700 mr-10" />
                        <label className="text-xl mb-2 mr-4" htmlFor="last-name">Last Name</label>
                        <input type="text" name="last-name" id="last-name" className="border rounded py-2 px-3 text-gray-700" />
                    </div>

                    <div className="flex items-center mb-4">
                        <label className="text-xl mb-2 mr-4" htmlFor="email">Email 📩</label>
                        <input type="text" name="email" id="email" className="border rounded py-2 px-3 text-gray-800"></input>
                    </div>

                    <div className="flex items-center mb-4">
                        <label className="text-xl mb-2 mr-4" htmlFor="mobile_no">Mobile No.</label>
                        <input type="text" name="mobile_no" id="mobile_no" className="border rounded py-2 px-3 text-gray-800"></input>
                    </div>
                </div>

                <br/>

                <div className="flex justify-center">
                    <button type="submit" className="bg-gray-500 hover:bg-red-500 text-white font-bold py-2 px-4 rounded">
                        Submit
                    </button>
                </div>
            </form>
        </div>
    );
};

export default Contact;