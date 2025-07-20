"use client";

import { useState } from "react";
import { FaArrowRight } from "react-icons/fa";

type Question = {
  q: string;
  a: string;
};

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const questions: Question[] = [
    {
      q: "What innovative health tech solutions does our company offer in India?",
      a: "Our company offers a wide range of health tech solutions tailored to the Indian healthcare landscape. These include AI-powered diagnostic tools, telemedicine platforms for remote consultations, digital health records for easy access to patient information, and mobile health apps for personalized care management. By integrating cutting-edge technologies like IoT and data analytics, we help healthcare providers improve patient outcomes, reduce operational costs, and deliver seamless healthcare experiences even in rural areas.",
    },
    {
      q: "What benefits can patients expect from using our digital health services?",
      a: "Patients can enjoy multiple benefits from our digital health services. These include 24/7 access to qualified doctors through teleconsultations, reduced waiting times at clinics and hospitals, and the convenience of getting medical advice from their homes. Our services also offer personalized health plans, reminders for medication, and secure storage of medical records for easy sharing with doctors. Additionally, patients in rural and underserved areas can connect with specialists without the need to travel long distances.",
    },
    {
      q: "How do you ensure data security and privacy in our health tech solutions?",
      a: "We take data security and privacy very seriously in all our health tech solutions. Our systems are built with end-to-end encryption to protect patient information during transmission and storage. We comply with global healthcare data standards like HIPAA and adhere to India’s Data Protection laws to ensure confidentiality. Regular security audits, two-factor authentication, and robust firewalls are implemented to safeguard against unauthorized access. Furthermore, our team is trained in best practices for handling sensitive data, and we continuously update our systems to counter emerging cyber threats.",
    },
    {
      q: "What industries and healthcare providers do we serve with our technology?",
      a: "Our technology serves a diverse range of industries and healthcare providers, including hospitals, clinics, diagnostic labs, pharmaceutical companies, and even wellness centers. We collaborate with both large urban hospitals and small rural clinics to provide scalable solutions that meet their unique needs. Our platforms are also used by government health agencies for community health programs and by corporate organizations offering employee wellness benefits.",
    },
    {
      q: "What makes our health tech company a trusted partner for healthcare innovation in India?",
      a: "Our company stands out as a trusted partner because of our focus on innovation, affordability, and accessibility. We combine advanced technologies like AI, IoT, and cloud computing with a deep understanding of India’s healthcare challenges to create practical solutions. Our proven track record of successful deployments across urban and rural settings, along with strong partnerships with healthcare institutions, reinforces our credibility. Additionally, our customer-centric approach ensures that we continuously refine our offerings based on feedback from doctors, patients, and industry experts.",
    },
  ];

  const toggleAnswer = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      id="faq"
      className="min-h-screen flex flex-col justify-center items-center text-white px-4 pt-20 overflow-hidden"
    >
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
        Frequently Asked Questions
      </h2>

      <div className="max-w-4xl mx-auto space-y-8">
        {questions.map((item, index) => (
          <div key={index}>
            <div
              className="flex justify-between items-center cursor-pointer"
              onClick={() => toggleAnswer(index)}
            >
              <div>
                <span className="text-blue-500 font-semibold text-lg">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <p className="text-white text-base">{item.q}</p>
              </div>
              <FaArrowRight className="text-white ml-4" />
            </div>

            {openIndex === index && (
              <p className="mt-4 text-gray-300 text-sm whitespace-pre-line">
                {item.a}
              </p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQ;
