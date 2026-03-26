import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer/Footer';
import SEOHead from '../components/SEOHead';
import { motion } from 'framer-motion';
const PrivacyPolicy = () => {
  return <>
      <SEOHead title="Privacy Policy | Sunrise Human Care Services" description="Our privacy policy details how we collect, use, and protect your personal information at Sunrise Human Care Services." />
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow py-12 md:py-16">
          <div className="container mx-auto px-4 md:px-6 py-[70px]">
            <motion.div initial={{
            opacity: 0,
            y: 20
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.5
          }} className="max-w-4xl mx-auto">
              <h1 className="text-3xl md:text-4xl font-bold mb-8">Privacy Policy</h1>
              
              <div className="prose prose-lg max-w-none space-y-6">
                <p>Last Updated: {new Date().toLocaleDateString()}</p>
                
                <section>
                  <h2 className="text-2xl font-semibold mt-8 mb-4">1. Introduction</h2>
                  <p>
                    Sunrise Human Care Services ("we," "our," or "us") respects your privacy and is committed to protecting your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
                  </p>
                </section>
                
                <section>
                  <h2 className="text-2xl font-semibold mt-8 mb-4">2. Information We Collect</h2>
                  <p>We may collect personal information that you voluntarily provide to us when you:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Fill out forms on our website</li>
                    <li>Register for an appointment</li>
                    <li>Sign up for our newsletter</li>
                    <li>Contact us with inquiries</li>
                    <li>Participate in surveys or promotions</li>
                  </ul>
                  
                  <p className="mt-4">This information may include:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Name, email address, phone number, and address</li>
                    <li>Health information relevant to your care</li>
                    <li>Billing and payment information</li>
                    <li>Information provided in forms or correspondence with us</li>
                  </ul>
                </section>
                
                <section>
                  <h2 className="text-2xl font-semibold mt-8 mb-4">3. How We Use Your Information</h2>
                  <p>We may use the information we collect for various purposes, including to:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Provide and maintain our services</li>
                    <li>Process and manage appointments</li>
                    <li>Communicate with you about services, updates, or inquiries</li>
                    <li>Improve our website and services</li>
                    <li>Send newsletters or marketing communications (with your consent)</li>
                    <li>Comply with legal obligations</li>
                  </ul>
                </section>
                
                <section>
                  <h2 className="text-2xl font-semibold mt-8 mb-4">4. HIPAA Compliance</h2>
                  <p>
                    As a healthcare provider, we are subject to the Health Insurance Portability and Accountability Act (HIPAA). We maintain appropriate safeguards to protect the privacy and security of protected health information as required by law.
                  </p>
                </section>
                
                <section>
                  <h2 className="text-2xl font-semibold mt-8 mb-4">5. Cookies and Tracking Technologies</h2>
                  <p>
                    We use cookies and similar tracking technologies to track activity on our website and collect certain information. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent.
                  </p>
                </section>
                
                <section>
                  <h2 className="text-2xl font-semibold mt-8 mb-4">6. Third-Party Disclosure</h2>
                  <p>
                    We do not sell, trade, or otherwise transfer your personally identifiable information to outside parties without your consent, except as required by law or to trusted third parties who assist us in operating our website or servicing you.
                  </p>
                </section>
                
                <section>
                  <h2 className="text-2xl font-semibold mt-8 mb-4">7. Security</h2>
                  <p>
                    We implement appropriate security measures to maintain the safety of your personal information. However, no method of transmission over the internet or electronic storage is 100% secure, and we cannot guarantee absolute security.
                  </p>
                </section>
                
                <section>
                  <h2 className="text-2xl font-semibold mt-8 mb-4">8. Your Rights</h2>
                  <p>
                    Depending on your location, you may have certain rights regarding your personal information, such as the right to access, correct, or delete your data. To exercise these rights, please contact us using the information provided below.
                  </p>
                </section>
                
                <section>
                  <h2 className="text-2xl font-semibold mt-8 mb-4">9. Changes to This Privacy Policy</h2>
                  <p>
                    We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last Updated" date.
                  </p>
                </section>
                
                <section>
                  <h2 className="text-2xl font-semibold mt-8 mb-4">10. Contact Us</h2>
                  <p>
                    If you have any questions about this Privacy Policy, please contact us at:
                  </p>
                  <p>
                    Sunrise Human Care Services<br />
                    869 Main Street<br />
                    Darby, PA 19023<br />
                    Email: info@sunrisehcsllc.com<br />
                    Phone: (814) 620-2162
                  </p>
                </section>
              </div>
            </motion.div>
          </div>
        </main>
        <Footer />
      </div>
    </>;
};
export default PrivacyPolicy;