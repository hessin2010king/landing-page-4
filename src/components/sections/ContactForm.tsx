import React, { useState } from 'react';
import { Button } from '../../components/ui/button';
import { Input } from '../../components/ui/input';
import { Textarea } from '../../components/ui/textarea';
import { toast } from 'sonner';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Message sent successfully!");
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  };

  return (
    <section id="contact" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-blue-800 mb-2">Get In Touch</h2>
          <h3 className="text-5xl font-Gilroy-Light text-gray-700 mb-4">How Can We Help?</h3>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin augue sed vehicular auctor dictum
            tincidunt et ullamcorper eget risus. Suspendisse in sem sit amet lectus pede.
          </p>
        </div>
        
        <div className="flex flex-col md:flex-row gap-8 items-center">
          <div className="w-full md:w-2/3 ">
            <form onSubmit={handleSubmit} className="space-y-5 ">
              <div>
                <Input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full bg-[#54667B21]"
                />
              </div>
              <div>
                <Input
                  type="email"
                  name="email"
                  placeholder="Your Mail"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full bg-[#54667B21]"
                />
              </div>
              <div>
                <Input
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full bg-[#54667B21]"
                />
              </div>
              <div>
                <Textarea
                  name="message"
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full min-h-[120px] bg-[#54667B21]"
                />
              </div>
              <div>
                <Button 
                  type="submit" 
                  className="w-full bg-[#454591] hover:bg-[#454591] justify-center"
                >
                  Send Mail
                </Button>
              </div>
            </form>
          </div>
          
          <div className="w-full md:w-1/2 flex ">
            <img 
              src="/images/contact.png"
              alt="Contact illustration"
              className="w-full h-auto"
              style={{ width: '400px', height: '300px' }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
