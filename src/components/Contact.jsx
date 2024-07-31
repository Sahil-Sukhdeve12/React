// import {selectedOption} from "./Contact_state";

export default function Contactus(){
    
    return(
        <div className="text-center mt-3">
            <b><h1 className="text-4xl" style={{ fontFamily: 'Script' }}>Contact Us</h1></b>
            <br/>
            <p className="text-2xl"><i>Lets talk about your query !!</i></p>
            <br/>
            <p className="text-2xl"><i>Drop us a line through the form below and we'll get back to you.</i></p>
            <br/>

            <form className="">
                <div className="flex items-center mb-4">
                <label className="block text-xl mb-2 ml-40 mr-10" htmlFor="enquiry-type">Types of Enquiry <b className="text-red-700">*</b></label>

                <details className="flex-grow">
                    <summary className="block text-xl mb-2 cursor-pointer border rounded py-2 px-3 text-gray-900 mr-14">Select an Option ⬇</summary>
                    <select multiple name="Types of Enquiry" size="4" className="border rounded w-3/4 mb-2 py-2 px-3 mr-14 text-gray-700 ">
                        
                        <option value="sales">Sales</option>
                        <option value="food-packaging">Food Packaging</option>
                        <option value="delivery-issue">Delivery Issue</option>
                        <option value="other">Other</option>
                        
                    </select>
                </details>
                </div>

                <div className="flex flex-col items-center justify-center mb-4">
                    <div className="flex items-center mb-4">
                        <label className="text-xl mb-2 mr-4" htmlFor="first-name">First Name <b className="text-red-700">*</b></label>
                        <input type="text" name="first-name" id="first-name" className="border rounded py-2 px-3 text-gray-700 mr-10" />
                        <label className="text-xl mb-2 mr-4" htmlFor="last-name">Last Name <b className="text-red-700">*</b></label>
                        <input type="text" name="last-name" id="last-name" className="border rounded py-2 px-3 text-gray-700" />
                    </div>

                    <div className="flex items-center mb-4">
                        <label className="text-xl mb-2 mr-4" htmlFor="email">Email 📩</label>
                        <input type="text" name="email" id="email" className="border rounded py-2 px-3 text-gray-800"></input>
                    </div>

                    <div className="flex items-center mb-4">
                        <label className="text-xl mb-2 mr-4" htmlFor="mobile_no">Mobile No. <b className="text-red-700">*</b></label>
                        <input type="text" name="mobile_no" id="mobile_no" className="border rounded py-2 px-3 text-gray-800"></input>
                    </div>
                </div>

                <div className="flex items-center justify-center mb-4">
                    <label className="text-xl mb-2 mr-4" htmlFor="feedback">Please provide your valuable feedback. <b className="text-red-700">*</b></label>
                    <input type="text" name="feedback" id="feedback" className="border rounded py-2 px-3 text-gray-800"></input>
                </div>

                {/* <label for="feedback">Please provide your valuable feedback.</label>
                <textarea id="feedback"></textarea> */}

                <br/>
                
                <div className="flex justify-center">
                    <button type="submit" className="bg-gray-500 hover:bg-red-500 text-white font-bold py-3 px-4 rounded mb-4">Submit</button>
                </div>
                
            </form>
            
        </div>

        
    )
}