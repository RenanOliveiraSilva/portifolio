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
    <div className="container px-4 mx-auto">
      <div className="mx-auto">
        <div className="max-w-md mx-auto px-8 py-6 bg-customGray rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold text-white mb-4">
            Fale Comigo
          </h2>
          <form onSubmit={sendEmail}>
            <div className="mb-4">
              <label className="block text-white mb-1" htmlFor="name">
                Seu Nome
              </label>
              <input
                className="w-full px-4 py-2 bg-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-customPurple transition duration-300"
                placeholder="Digite seu nome"
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-white mb-1" htmlFor="email">
                Seu Email
              </label>
              <input
                className="w-full px-4 py-2 bg-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-customPurple transition duration-300"
                placeholder="Digite seu email"
                name="email"
                id="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-white mb-1" htmlFor="message">
                Sua Mensagem
              </label>
              <textarea
                className="w-full px-4 py-2 bg-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-customPurple transition duration-300 resize-none"
                rows={4}
                placeholder="Digite sua mensagem"
                name="message"
                id="message"
                value={formData.message}
                onChange={handleChange}
                required
              />
            </div>
            <button
              className="w-full bg-customPurple text-white py-2 px-4 rounded-lg hover:bg-customPurpleDark transition duration-300"
              type="submit"
            >
              Enviar Mensagem
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
