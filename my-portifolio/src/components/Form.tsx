import React, { useState } from 'react';
import emailjs from 'emailjs-com';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const userId = import.meta.env.VITE_EMAILJS_USER_ID;
  const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;


  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    

    emailjs.sendForm(serviceId, templateId, e.target as HTMLFormElement, userId)
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
  
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section className="flex flex-col items-center justify-center bg-gray-900 p-8 rounded-xl max-w-3xl w-full">
      <h2 className="text-xl md:text-2xl font-extrabold font-asap text-white mb-6">Mande um EMAIL</h2>
      <form onSubmit={sendEmail} className="w-full flex flex-col gap-4">
        <div className="flex flex-col">
          <label className="text-white font-inconsolata mb-1">Nome:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="bg-customGray text-white p-3 rounded-lg outline-none focus:ring-2 focus:ring-customPurple"
          />
        </div>

        <div className="flex flex-col">
          <label className="text-white font-inconsolata mb-1">Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="bg-customGray text-white p-3 rounded-lg outline-none focus:ring-2 focus:ring-customPurple"
          />
        </div>

        <div className="flex flex-col">
          <label className="text-white font-inconsolata mb-1">Mensagem:</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            className="bg-customGray text-white p-3 rounded-lg outline-none focus:ring-2 focus:ring-customPurple h-32 resize-none"
          ></textarea>
        </div>

        <button type="submit" className="mt-4 bg-customPurple text-white py-3 rounded-lg hover:bg-customPurpleDark transition duration-300">
          Enviar
        </button>
      </form>
    </section>
  );
};

export default ContactForm;
