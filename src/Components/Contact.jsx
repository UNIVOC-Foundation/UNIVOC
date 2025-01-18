import React, { useState } from "react";

// Button Component
const Button = ({ children, className, ...props }) => (
  <button
    className={`px-6 py-3 text-white font-bold rounded-lg transition-transform transform hover:scale-105 ${className}`}
    {...props}
  >
    {children}
  </button>
);

// Input Component
const Input = ({ className, ...props }) => (
  <input
    className={`w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${className}`}
    {...props}
  />
);

// Label Component
const Label = ({ children, htmlFor }) => (
  <label
    htmlFor={htmlFor}
    className="block text-sm font-medium text-gray-800 mb-1"
  >
    {children}
  </label>
);

// Select Components
const Select = ({ children, onValueChange }) => {
  const handleChange = (e) => onValueChange(e.target.value);
  return (
    <select
      onChange={handleChange}
      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
    >
      {children}
    </select>
  );
};

const SelectItem = ({ value, children }) => (
  <option value={value}>{children}</option>
);

// Textarea Component
const Textarea = ({ className, ...props }) => (
  <textarea
    className={`w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${className}`}
    {...props}
  />
);

export default function ContactPage() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    state: "",
    city: "",
    message: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-blue-100 py-16">
      <div className="container mx-auto px-4 lg:px-20">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left Column */}
          <div className="space-y-6">
            <h1 className="text-4xl font-extrabold text-gray-900">
              Get in Touch with Us!
            </h1>
            <p className="text-lg text-gray-600">
              Have questions about our courses? Contact us and we’ll get back to
              you shortly.
            </p>
            <div className="space-y-4">
              <p className="text-base text-gray-600">
                📍 Sector 135, Greater Noida, India
              </p>
              <p className="text-base text-gray-600">
                📧 Info@univoc.co.in
              </p>
            </div>

            {/* Google Map */}
            <div className="w-full h-[300px] rounded-lg overflow-hidden shadow-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3504.5384391661387!2d77.39771!3d28.5012699!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce866e3c6209d%3A0x1f26713ec3ff7d6c!2sSector%20135%2C%20Noida%2C%20Uttar%20Pradesh%20201304!5e0!3m2!1sen!2sin!4v1642668821822!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          {/* Right Column - Contact Form */}
          <div className="bg-white rounded-2xl shadow-lg p-10">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Label htmlFor="fullName">Full Name*</Label>
                <Input
                  id="fullName"
                  value={formData.fullName}
                  onChange={(e) =>
                    setFormData({ ...formData, fullName: e.target.value })
                  }
                  required
                />
              </div>

              <div>
                <Label htmlFor="email">Email Address*</Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  required
                />
              </div>

              <div className="grid grid-cols-[100px_1fr] gap-4">
                <Select
                  onValueChange={(value) =>
                    setFormData({ ...formData, phone: value })
                  }
                >
                  <SelectItem value="IN">+91</SelectItem>
                  <SelectItem value="US">+1</SelectItem>
                  <SelectItem value="UK">+44</SelectItem>
                </Select>
                <Input
                  placeholder="Enter your mobile number*"
                  value={formData.phone}
                  onChange={(e) =>
                    setFormData({ ...formData, phone: e.target.value })
                  }
                  required
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="state">State*</Label>
                  <Input
                    id="state"
                    value={formData.state}
                    onChange={(e) =>
                      setFormData({ ...formData, state: e.target.value })
                    }
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="city">City*</Label>
                  <Input
                    id="city"
                    value={formData.city}
                    onChange={(e) =>
                      setFormData({ ...formData, city: e.target.value })
                    }
                    required
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="message">Your Message*</Label>
                <Textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  required
                  className="min-h-[150px]"
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-blue-500 hover:bg-blue-600"
              >
                Contact Us
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
