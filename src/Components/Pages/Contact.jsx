import React, { useState } from 'react';

// Button Component
const Button = ({ children, className, ...props }) => (
  <button
    className={`px-4 py-2 text-white font-semibold rounded ${className}`}
    {...props}
  >
    {children}
  </button>
);

// Input Component
const Input = ({ className, ...props }) => (
  <input
    className={`w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500 ${className}`}
    {...props}
  />
);

// Label Component
const Label = ({ children, htmlFor }) => (
  <label htmlFor={htmlFor} className="block text-sm font-medium text-gray-700">
    {children}
  </label>
);

// Select Components
const Select = ({ children, onValueChange }) => {
  const handleChange = (e) => onValueChange(e.target.value);
  return (
    <select
      onChange={handleChange}
      className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
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
    className={`w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500 ${className}`}
    {...props}
  />
);

export default function ContactPage() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    state: '',
    city: '',
    school: '',
    message: '',
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className="min-h-screen bg-[#EBF5FF] relative overflow-hidden">
      {/* Background Patterns */}
      <div className="absolute inset-0 overflow-hidden">
        {Array.from({ length: 6 }).map((_, i) => (
          <div
            key={i}
            className="absolute border border-white/20 rounded-full"
            style={{
              width: `${(i + 1) * 300}px`,
              height: `${(i + 1) * 300}px`,
              left: '50%',
              top: '50%',
              transform: 'translate(-50%, -50%)',
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 py-16 relative">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Column */}
          <div className="space-y-6">
            <h1 className="text-4xl font-bold text-gray-900">
              Have more Questions?
            </h1>
            <p className="text-lg text-gray-600">Sector 135, Greater Noida, India</p>
            <p className="text-lg text-gray-600">Info@univoc.co.in</p>

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
          <div className="bg-white rounded-2xl shadow-xl p-8">
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
                  <SelectItem value="IN">IN</SelectItem>
                  <SelectItem value="US">US</SelectItem>
                  <SelectItem value="UK">UK</SelectItem>
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
                <Label htmlFor="school">Select School Name</Label>
                <Select
                  onValueChange={(value) =>
                    setFormData({ ...formData, school: value })
                  }
                >
                  <SelectItem value="school1">School 1</SelectItem>
                  <SelectItem value="school2">School 2</SelectItem>
                  <SelectItem value="school3">School 3</SelectItem>
                </Select>
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
                  className="min-h-[100px]"
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
