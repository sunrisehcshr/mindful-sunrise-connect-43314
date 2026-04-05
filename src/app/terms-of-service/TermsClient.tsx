"use client";

import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer/Footer';
import SEOHead from '@/components/SEOHead';
import { motion } from 'framer-motion';

export default function TermsOfServicePage() {
  return (
    <>
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
              <h1 className="text-3xl md:text-4xl font-bold mb-8">Terms of Service</h1>
              
              <div className="prose prose-lg max-w-none space-y-6">
                <p>Last Updated: {new Date().toLocaleDateString()}</p>
                
                <section>
                  <h2 className="text-2xl font-semibold mt-8 mb-4">1. Introduction</h2>
                  <p>
                    Welcome to Sunrise Human Care Services. These Terms of Service (&quot;Terms&quot;) govern your use of our website and services. By accessing or using our website, you agree to be bound by these Terms. If you disagree with any part of the Terms, you may not access our website or use our services.
                  </p>
                </section>
                
                <section>
                  <h2 className="text-2xl font-semibold mt-8 mb-4">2. Services Description</h2>
                  <p>
                    Sunrise Human Care Services provides mental health care services including counseling, therapy, psychiatry, and medication management. Our website provides information about our services and facilitates appointment scheduling.
                  </p>
                  <p>
                    While we strive to provide accurate and up-to-date information, we do not warrant that the information on our website is complete, accurate, or current. Information on our website is not a substitute for professional medical advice, diagnosis, or treatment.
                  </p>
                </section>
                
                <section>
                  <h2 className="text-2xl font-semibold mt-8 mb-4">3. Healthcare Disclaimer</h2>
                  <p>
                    The information provided on our website is for general informational purposes only and is not intended as a substitute for professional medical advice, diagnosis, or treatment. Always seek the advice of your physician or other qualified health provider with any questions you may have regarding a medical condition.
                  </p>
                  <p>
                    If you think you may have a medical emergency, call your doctor or 911 immediately. We do not recommend or endorse any specific tests, physicians, products, procedures, opinions, or other information that may be mentioned on our website.
                  </p>
                </section>
                
                <section>
                  <h2 className="text-2xl font-semibold mt-8 mb-4">4. User Accounts and Appointment Scheduling</h2>
                  <p>
                    When you schedule an appointment through our website, you agree to provide accurate and complete information. You are responsible for maintaining the confidentiality of any account information and for all activities that occur under your account.
                  </p>
                  <p>
                    We reserve the right to refuse service, terminate accounts, or cancel appointments at our discretion.
                  </p>
                </section>
                
                <section>
                  <h2 className="text-2xl font-semibold mt-8 mb-4">5. Intellectual Property</h2>
                  <p>
                    The content on our website, including text, graphics, logos, images, and software, is the property of Sunrise Human Care Services and is protected by copyright and other intellectual property laws. You may not reproduce, distribute, modify, create derivative works of, publicly display, or exploit any content from our website without our prior written consent.
                  </p>
                </section>
                
                <section>
                  <h2 className="text-2xl font-semibold mt-8 mb-4">6. User Conduct</h2>
                  <p>When using our website, you agree not to:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Use our website in any way that violates any applicable federal, state, local, or international law</li>
                    <li>Impersonate or attempt to impersonate our staff or another user</li>
                    <li>Engage in any conduct that restricts or inhibits anyone&apos;s use of our website</li>
                    <li>Attempt to gain unauthorized access to our systems or user accounts</li>
                    <li>Use our website for any purpose that is unlawful or prohibited by these Terms</li>
                  </ul>
                </section>
                
                <section>
                  <h2 className="text-2xl font-semibold mt-8 mb-4">7. Limitation of Liability</h2>
                  <p>
                    Sunrise Human Care Services shall not be liable for any direct, indirect, incidental, consequential, or punitive damages arising out of your access to or use of our website. We do not guarantee that our website will be secure or free from errors or viruses.
                  </p>
                </section>
                
                <section>
                  <h2 className="text-2xl font-semibold mt-8 mb-4">8. Indemnification</h2>
                  <p>
                    You agree to defend, indemnify, and hold harmless Sunrise Human Care Services, its employees, contractors, and agents from and against any claims, liabilities, damages, judgments, awards, losses, costs, expenses, or fees arising out of or relating to your violation of these Terms or your use of our website.
                  </p>
                </section>
                
                <section>
                  <h2 className="text-2xl font-semibold mt-8 mb-4">9. Changes to Terms</h2>
                  <p>
                    We may revise these Terms from time to time. The most current version will always be posted on our website with the effective date. By continuing to use our website after revisions become effective, you agree to be bound by the revised Terms.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold mt-8 mb-4">10. Contact Us</h2>
                  <p>
                    If you have any questions about these Terms, please contact us at:
                  </p>
                  <div className="mt-4">
                    <p>Sunrise Human Care Services Inc</p>
                    <p>869 Main Street, Darby, PA 19023</p>
                    <p>Email: info@sunrisehumancare.com</p>
                    <p>Phone: (814) 620-2162</p>
                  </div>
                </section>
              </div>
            </motion.div>
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
}
