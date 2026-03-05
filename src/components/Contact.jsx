import React, { useState } from 'react';
import { Send, CheckCircle, XCircle } from 'lucide-react';
import './Contact.css';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [status, setStatus] = useState('idle'); // idle, submitting, success, error

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('submitting');

        try {
            const response = await fetch('http://localhost:5000/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData)
            });

            if (!response.ok) {
                throw new Error('Failed to send message');
            }

            setStatus('success');
            setFormData({ name: '', email: '', message: '' });

            setTimeout(() => setStatus('idle'), 5000);
        } catch (error) {
            console.error('Error sending message:', error);
            setStatus('error');
            setTimeout(() => setStatus('idle'), 5000);
        }
    };

    return (
        <section id="contact" className="contact-section">
            <div className="container">
                <h2 className="section-title">Get In Touch</h2>
                <p className="section-subtitle">
                    Whether you have a question or just want to say hi, I'll try my best to get back to you!
                </p>

                <div className="contact-wrapper">
                    <form className="contact-form" onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="name" className="form-label">Name</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                className="form-control"
                                value={formData.name}
                                onChange={handleChange}
                                required
                                placeholder="John Doe"
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="email" className="form-label">Email</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                className="form-control"
                                value={formData.email}
                                onChange={handleChange}
                                required
                                placeholder="john@example.com"
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="message" className="form-label">Message</label>
                            <textarea
                                id="message"
                                name="message"
                                className="form-control textarea"
                                value={formData.message}
                                onChange={handleChange}
                                required
                                placeholder="Hello, I'd like to work with you on..."
                                rows="5"
                            ></textarea>
                        </div>

                        <button
                            type="submit"
                            className={`btn btn-primary submit-btn ${status === 'submitting' ? 'loading' : ''}`}
                            disabled={status === 'submitting'}
                        >
                            {status === 'submitting' ? 'Sending...' : (
                                <>
                                    Send Message <Send className="btn-icon" size={18} />
                                </>
                            )}
                        </button>

                        {status === 'success' && (
                            <div className="message-status success-message">
                                <CheckCircle size={20} />
                                <span>Message sent successfully! I'll be in touch soon.</span>
                            </div>
                        )}

                        {status === 'error' && (
                            <div className="message-status error-message">
                                <XCircle size={20} />
                                <span>Oops! Something went wrong. Please try again later.</span>
                            </div>
                        )}
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contact;
