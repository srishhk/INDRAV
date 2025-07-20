"use client";

import Image from "next/image";

type Feedback = {
  image: string;
  name: string;
  role: string;
  message: string;
};

const feedback: Feedback[] = [
  {
    image: "/images/doc1.png",
    name: "Dr. Ronit Iyer",
    role: "Chief Medical Officer – Sanjeevani Multispecialty Hospital",
    message:
      "Indrav has been a game changer for our hospital. Their unified health tech platform helped us digitize patient records, streamline appointments, and improve patient outcomes. Their team truly understands the healthcare ecosystem and delivers with empathy and precision.",
  },
  {
    image: "/images/doc2.png",
    name: "Ramesh Kumar",
    role: "Chronic Care Patient\nBengaluru",
    message:
      "Before Indrav, managing my diabetes care meant juggling multiple apps and doctor visits. Now, everything is integrated in one place—from prescriptions to lab results. It’s simple, efficient, and truly built for people like me.",
  },
  {
    image: "/images/doc3.png",
    name: "Anit Das",
    role: "Program Manager – Seva Health Foundation",
    message:
      "We’ve collaborated with Indrav on multiple rural health initiatives. Their digital tools helped us reach remote communities faster and with better accuracy. What stands out is their mission-first approach and deep respect for accessibility.",
  },
];

const Testimonials = () => {
  return (
    <section
      id="testimonials"
      className="min-h-screen flex flex-col justify-center items-center text-white px-4 pt-20"
    >
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
        What our Clients are saying about us!
      </h2>

      <div className="flex flex-row justify-center items-stretch gap-8 max-w-7xl mx-auto flex-wrap md:flex-nowrap">
        {feedback.map((item, index) => (
          <div
            key={index}
            className="relative bg-gray-300 text-black rounded-xl p-6 pt-20 shadow-lg w-80 flex flex-col justify-between items-center text-center"
          >
            <div className="absolute -top-12">
              <Image
                src={item.image}
                alt={item.name}
                width={96}
                height={96}
                className="rounded-full object-cover w-24 h-24"
              />
            </div>

            <p className="mb-6">{item.message}</p>

            <div>
              <h4 className="text-lg font-semibold">{item.name}</h4>
              <p className="text-sm whitespace-pre-line">{item.role}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
