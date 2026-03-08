import React from "react";
import {
  Github,
  Linkedin,
  Mail,
  MessageSquare,
  Phone,
  Send,
} from "lucide-react";
import "./Contact.css";

const Contact: React.FC = () => {
  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);
    const name = String(formData.get("name") ?? "").trim();
    const email = String(formData.get("email") ?? "").trim();
    const message = String(formData.get("message") ?? "").trim();

    const subject = `Portfolio message from ${name || "someone"}`;
    const body = `Name: ${name}\nEmail: ${email}\n\n${message}`;
    window.location.href = `mailto:kavinuthepul456@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  return (
    <section className="contact section" id="contact">
      <div className="container">
        <h2 className="section-title">
          Initialize <span>Connection</span>
        </h2>

        <div className="contact-wrapper">
          <div className="contact-info glass-card animate-fade-up">
            <h3>Let's build something scalable.</h3>
            <p>
              I'm open to DevOps internship opportunities, collaboration, and
              learning-focused projects. Send me a message and I'll get back to
              you as soon as I can.
            </p>

            <div className="contact-methods">
              <a
                href="mailto:kavinuthepul456@gmail.com"
                className="contact-method"
              >
                <div className="method-icon">
                  <Mail size={24} />
                </div>
                <div className="method-details">
                  <h4>Email Me</h4>
                  <span>kavinuthepul456@gmail.com</span>
                </div>
              </a>

              <a href="tel:+94712190188" className="contact-method">
                <div className="method-icon">
                  <Phone size={24} />
                </div>
                <div className="method-details">
                  <h4>Call / WhatsApp</h4>
                  <span>+94 71 219 0188</span>
                </div>
              </a>

              <a
                href="https://www.linkedin.com/in/kavinuv"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-method"
              >
                <div className="method-icon">
                  <Linkedin size={24} />
                </div>
                <div className="method-details">
                  <h4>LinkedIn</h4>
                  <span>@kavinuv</span>
                </div>
              </a>

              <a
                href="https://github.com/kavinu1"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-method"
              >
                <div className="method-icon">
                  <Github size={24} />
                </div>
                <div className="method-details">
                  <h4>GitHub</h4>
                  <span>@kavinu1</span>
                </div>
              </a>

              <div className="contact-method">
                <div className="method-icon">
                  <MessageSquare size={24} />
                </div>
                <div className="method-details">
                  <h4>Available For</h4>
                  <span>DevOps Internship (Year 3 Placement)</span>
                </div>
              </div>
            </div>
          </div>

          <form
            className="contact-form glass-card animate-fade-up"
            style={{ animationDelay: "0.2s" }}
            onSubmit={handleSubmit}
          >
            <div className="form-group">
              <label htmlFor="name">System Admin Name</label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="John Doe"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Return Address</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="john@example.com"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Payload</label>
              <textarea
                id="message"
                name="message"
                rows={5}
                placeholder="Execute connection request..."
                required
              ></textarea>
            </div>

            <button type="submit" className="btn btn-primary submit-btn">
              Send Request <Send size={18} />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
