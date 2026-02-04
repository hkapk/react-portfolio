import React, { useState } from "react";
import Swal from "sweetalert2";
import { validateEmail } from "../../utils/helpers";
import maineBG from "../../assets/backgrounds/mainbg.jpeg";

function Contact() {
    const [formState, setFormState] = useState({ name: "", email: "", phone: "", message: "" });
    const [errorMessage, setErrorMessage] = useState("");
    const { name, email, phone, message } = formState;

    const handleChange = (e) => {
        if (e.target.name === "email") {
            const isValid = validateEmail(e.target.value);
            if (!isValid) setErrorMessage("Your email is invalid.");
            else setErrorMessage("");
        } else {
            if (!e.target.value.length) setErrorMessage(`${e.target.name} is required.`);
            else setErrorMessage("");
        }
        setFormState({ ...formState, [e.target.name]: e.target.value });
    };

    const onSubmit = async (event) => {
        event.preventDefault();
        if (errorMessage) return;

        const formData = new FormData(event.target);
        formData.append("access_key", "301f0d9e-73ec-4449-b5d4-3cfeb83f974b");
        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);

        const res = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            headers: { "Content-Type": "application/json", Accept: "application/json" },
            body: json,
        }).then((res) => res.json());

        if (res.success) {
            Swal.fire({ title: "Thank you", text: "Your message has been sent.", icon: "success" });
            event.target.reset();
            setFormState({ name: "", email: "", phone: "", message: "" });
        }
    };

    return (

        <div className="relative w-full h-screen 
        bg-cover bg-center overflow-x-hidden"
            style={{ backgroundImage: `url(${maineBG})` }}>
            <div className="absolute inset-0 bg-black/10"></div>
            <div className="py-4 px-12 lg:mt-12 mt-8 mb-4 bg-slate-50/4 text-center">
                <p className="lg:pt-4 pt-2 text-white text-2xl font-bold">Fill out the form to get in touch</p>
                <form onSubmit={onSubmit} className="px-6 py-6 text-white">
                    <div className="pt-4">
                        <label className="block text-sm text-left font-medium ">Name</label>
                        <input
                            type="text"
                            name="name"
                            value={name}
                            onChange={handleChange}
                            onBlur={handleChange}
                            className="w-full px-4 py-2 border bg-white/25 border-gray-300 rounded-md 
                  focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400"
                            required
                        />
                    </div>
                    <div>
                        <label className="block text-sm text-left font-medium mb-1">Email</label>
                        <input
                            type="email"
                            name="email"
                            value={email}
                            onChange={handleChange}
                            onBlur={handleChange}
                            className="w-full px-4 py-2 border bg-white/25 border-gray-300 rounded-md 
                  focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400"
                            required
                        />
                    </div>

                    <div>
                        <label className="block text-sm text-left font-medium mb-1">Phone</label>
                        <input
                            type="phone"
                            name="phone"
                            value={phone}
                            onChange={handleChange}
                            onBlur={handleChange}
                            className="w-full px-4 py-2 border bg-white/25 border-gray-300 rounded-md 
                  focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400"
                            required
                        />
                    </div>

                    <div>
                        <label className="block text-sm text-left font-medium mb-1">Message</label>
                        <textarea
                            name="message"
                            rows="5"
                            value={message}
                            onChange={handleChange}
                            onBlur={handleChange}
                            className="w-full px-4 py-2 border bg-white/25 border-gray-300 rounded-md 
                  focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400 resize-none pb-4"
                            required
                        />
                    </div>

                    {errorMessage && <p className="text-red-500 text-sm">{errorMessage}</p>}

                    <button
                        type="submit"
                        className="mx-auto block bg-blue-100 hover:bg-gray-300 text-black font-medium py-2 mt-4 px-4 rounded-md 
    focus:outline-none focus:ring-2 focus:ring-blue-400 transition-colors"
                    >
                        Submit
                    </button>
                </form>
            </div>
        </div>
    );
}

export default Contact;

