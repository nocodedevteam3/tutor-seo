import { useState } from 'react';
import { supabase } from '../utils/supabaseClient';

const ContactForm = ({ tutorId }) => {
  const [formData, setFormData] = useState({
    student_name: '',
    student_email: '',
    student_mobile: '',
    location: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { student_name, student_email, student_mobile, location, message } = formData;

    // Insert data into Supabase 'applications' table
    const { error } = await supabase
      .from('applications')
      .insert([{ tutor_id: tutorId, student_name, student_email, student_mobile, location, message }]);

    if (error) {
      console.error('Error submitting application:', error);
    } else {
      alert('Application submitted successfully!');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="student_name"
        value={formData.student_name}
        onChange={handleChange}
        placeholder="Your Name"
        required
      />
      <input
        type="email"
        name="student_email"
        value={formData.student_email}
        onChange={handleChange}
        placeholder="Your Email"
        required
      />
      <input
        type="tel"
        name="student_mobile"
        value={formData.student_mobile}
        onChange={handleChange}
        placeholder="Mobile Number"
        required
      />
      <input
        type="text"
        name="location"
        value={formData.location}
        onChange={handleChange}
        placeholder="Location"
        required
      />
      <textarea
        name="message"
        value={formData.message}
        onChange={handleChange}
        placeholder="Message"
        rows="4"
        required
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default ContactForm;
