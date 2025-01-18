import { Mail, MapPin } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-academic-primary mb-8 text-center">
          Contact
        </h2>
        <div className="max-w-2xl mx-auto">
          <div className="bg-academic-halfshadedbg p-8 rounded-lg shadow-sm">
            <div className="flex flex-col md:flex-row md:justify-center md:space-x-12 space-y-6 md:space-y-0">
              <div className="flex items-center justify-center space-x-4">
                <Mail className="text-academic-primary" />
                <div>
                  <h3 className="font-semibold">Email</h3>
                  <p className="text-academic-secondary">
                    marco.bagnara@sns.it
                  </p>
                </div>
              </div>
              <div className="flex items-center justify-center space-x-4">
                <MapPin className="text-academic-primary" />
                <div>
                  <h3 className="font-semibold">Address</h3>
                  <p className="text-academic-secondary">
                    Scuola Normale Superiore<br />
                    Piazza dei Cavalieri, 7<br />
                    56126 Pisa PI
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;