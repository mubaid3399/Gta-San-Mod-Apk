'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { AutoAnimateWrapper } from './animations';

const styles = `
  @keyframes slideDown {
    from {
      opacity: 0;
      transform: translateY(-10px);
      max-height: 0;
    }
    to {
      opacity: 1;
      transform: translateY(0);
      max-height: 500px;
    }
  }

  @keyframes slideUp {
    from {
      opacity: 1;
      transform: translateY(0);
      max-height: 500px;
    }
    to {
      opacity: 0;
      transform: translateY(-10px);
      max-height: 0;
    }
  }

  .faq-expand {
    animation: slideDown 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
  }

  .faq-collapse {
    animation: slideUp 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
  }
`;

export default function FAQSection({ faqs: customFAQs = null }) {
  const t = useTranslations();
  const [expandedIndex, setExpandedIndex] = useState(null);

  // Use custom FAQs if provided, otherwise use translations (backward compatible)
  const faqs = customFAQs || [
    {
      id: 'q1',
      question: t('faq.questions.q1.question'),
      answer: t('faq.questions.q1.answer'),
    },
    {
      id: 'q2',
      question: t('faq.questions.q2.question'),
      answer: t('faq.questions.q2.answer'),
    },
    {
      id: 'q3',
      question: t('faq.questions.q3.question'),
      answer: t('faq.questions.q3.answer'),
    },
    {
      id: 'q4',
      question: t('faq.questions.q4.question'),
      answer: t('faq.questions.q4.answer'),
    },
    {
      id: 'q5',
      question: t('faq.questions.q5.question'),
      answer: t('faq.questions.q5.answer'),
    },
    {
      id: 'q6',
      question: t('faq.questions.q6.question'),
      answer: t('faq.questions.q6.answer'),
    },
    {
      id: 'q7',
      question: t('faq.questions.q7.question'),
      answer: t('faq.questions.q7.answer'),
    },
    {
      id: 'q8',
      question: t('faq.questions.q8.question'),
      answer: t('faq.questions.q8.answer'),
    },
    {
      id: 'q9',
      question: t('faq.questions.q9.question'),
      answer: t('faq.questions.q9.answer'),
    },
    {
      id: 'q10',
      question: t('faq.questions.q10.question'),
      answer: t('faq.questions.q10.answer'),
    },
  ];

  const toggleAccordion = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <>
      <style>{styles}</style>
      <section className="relative w-full bg-gradient-to-b from-gray-50 to-white dark:from-gray-900/50 dark:to-[#030712] text-gray-900 dark:text-gray-100 py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-6xl">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
            {t('faq.title')}
          </h2>
          <div className="h-1 w-16 sm:w-24 bg-gradient-to-r from-[#00ff87] to-[#00a2ff] rounded mx-auto mb-6"></div>
          <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed">
            {t('faq.subtitle')}
          </p>
        </div>

        {/* FAQ Accordion */}
        <AutoAnimateWrapper className="space-y-4 sm:space-y-5">
          {faqs.map((faq, index) => (
            <div
              key={faq.id}
              className="group rounded-lg overflow-hidden bg-white dark:bg-gray-900/40 border border-gray-200 dark:border-gray-800 hover:border-[#00ff87]/50 dark:hover:border-[#00ff87]/50 transition-all duration-300 hover:shadow-lg dark:hover:shadow-xl dark:hover:shadow-[#00ff87]/10"
            >
              {/* Question */}
              <button
                onClick={() => toggleAccordion(index)}
                className="w-full px-6 sm:px-8 py-5 sm:py-6 flex items-start sm:items-center justify-between gap-4 text-left hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors duration-200"
              >
                <div className="flex items-start gap-4 flex-1">
                  {/* Question Number Badge */}
                  <div className="flex-shrink-0 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gradient-to-r from-[#00ff87] to-[#00a2ff] flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-xs sm:text-sm font-bold text-black">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                  </div>
                  {/* Question Text */}
                  <span className="text-base sm:text-lg font-semibold text-gray-900 dark:text-white leading-snug pt-1">
                    {faq.question}
                  </span>
                </div>
                {/* Chevron Icon */}
                <div
                  className={`flex-shrink-0 w-5 h-5 sm:w-6 sm:h-6 text-[#00ff87] transition-transform duration-300 ${
                    expandedIndex === index ? 'rotate-180' : ''
                  }`}
                >
                  <FontAwesomeIcon icon={faChevronDown} className="w-full h-full" />
                </div>
              </button>

              {/* Answer */}
              <div
                className={`overflow-hidden ${
                  expandedIndex === index ? 'faq-expand' : 'faq-collapse'
                }`}
              >
                <div className="px-6 sm:px-8 pb-5 sm:pb-6 pt-4 sm:pt-5 border-t border-gray-200 dark:border-gray-800 bg-gradient-to-b from-transparent to-gray-50/50 dark:to-gray-800/20">
                  <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </AutoAnimateWrapper>


        {/* Additional Info */}
        <div className="mt-12 sm:mt-16 p-6 sm:p-8 rounded-lg bg-blue-50 dark:bg-blue-950/20 border border-blue-200 dark:border-blue-800">
          <h4 className="text-base sm:text-lg font-semibold text-blue-900 dark:text-blue-200 mb-3">
            💡 {t('faq.additionalInfo.title')}
          </h4>
          <p className="text-sm sm:text-base text-blue-800 dark:text-blue-300 leading-relaxed">
            {t('faq.additionalInfo.description')}
          </p>
        </div>
        </div>
      </section>
    </>
  );
}
