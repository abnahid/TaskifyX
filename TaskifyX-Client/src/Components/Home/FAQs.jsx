import { ChevronDown, ChevronRight } from "lucide-react";
import { useState } from "react";

const FAQs = () => {
  const [activeIndex, setActiveIndex] = useState(null);


  const toggleAnswer = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };


  const questionsAnswers = [
    {
      question: "What makes this platform unique?",
      answer:
        "Our platform provides a seamless experience with verified profiles, instant matchmaking, and secure communication features.",
    },
    {
      question: "Is registration free?",
      answer:
        "Yes! Signing up is completely free, and you can explore basic features. We also offer premium plans for exclusive benefits.",
    },
    {
      question: "How does matchmaking work?",
      answer:
        "We use smart algorithms and filters to match you with the most compatible profiles based on your preferences.",
    },
    {
      question: "Is my data safe?",
      answer:
        "Absolutely! We use end-to-end encryption to protect your personal information and ensure privacy.",
    },
    {
      question: "How can I get support?",
      answer:
        "You can contact our support team via email or use the live chat feature for instant assistance.",
    },
  ];

  return (
    <section className="py-16 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="container max-w-7xl mx-auto px-8">

        <h2 className="text-4xl font-bold text-gray-800 text-center dark:text-white mb-8">
          Frequently Asked Questions
        </h2>

        <div className="space-y-4">
          {questionsAnswers.map((item, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-4 border dark:border-gray-700 transition"
            >
              <div
                className="flex justify-between items-center cursor-pointer"
                onClick={() => toggleAnswer(index)}
              >
                <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
                  {item.question}
                </h3>
                <span className="text-gray-600 dark:text-gray-300">
                  {activeIndex === index ? <ChevronDown /> : <ChevronRight />}
                </span>
              </div>
              {activeIndex === index && (
                <p className="mt-4 text-gray-600 dark:text-gray-300">
                  {item.answer}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQs;
