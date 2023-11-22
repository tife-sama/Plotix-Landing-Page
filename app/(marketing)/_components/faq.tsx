import { Disclosure } from "@headlessui/react";
import { MinusSmallIcon, PlusSmallIcon } from "@heroicons/react/24/outline";

const faqs = [
  {
    question: "What's the best thing about Switzerland?",
    answer:
      "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
  },
  // More questions...
];

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const Faqsection = () => {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8 lg:py-30">
        <div className="mx-auto max-w-4xl divide-y divide-gray-900/10">
          <h2 className="text-5xl font-bold leading-10 tracking-tight text-gray-900">
            Frequently asked questions
          </h2>
          <br />
          <br />
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger>Who can use Plotix?</AccordionTrigger>
              <AccordionContent>
                Plotix is for anyone who loves writing! Whether you're new to
                writing or already experienced, Plotix is here to help you
                become a better writer.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>How does Plotix work?</AccordionTrigger>
              <AccordionContent>
                Plotix connects writers with experts who help them get better at
                writing. You can talk to these experts, get advice, and learn
                more about writing from them.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>
                Does Plotix work only in certain places?
              </AccordionTrigger>
              <AccordionContent>
                Nope! Plotix works everywhere because it's on the internet.
                Anyone from anywhere can use Plotix to learn about writing.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </div>
  );
};
