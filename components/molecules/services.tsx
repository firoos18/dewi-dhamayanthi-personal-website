import Image from "next/image";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../atoms/accordion";

const Services = () => {
  return (
    <div className="relative mt-9 flex min-h-fit flex-col px-4">
      <div className="flex w-full flex-row items-center">
        <p className="text-3xl font-semibold sm:text-4xl">Services I Offer</p>
        <div className="ml-5 h-[1px] flex-grow bg-black" />
      </div>
      <Accordion type="single" collapsible className="mt-8 w-full">
        <AccordionItem value="item-1">
          <AccordionTrigger>
            <div className="flex flex-row justify-start">
              <div>
                <Image
                  src={"/financial-management.png"}
                  alt="financial management icon"
                  width={24}
                  height={24}
                  priority
                />
              </div>
              <p className="ml-4 text-start text-lg font-semibold">
                Financial Management
              </p>
            </div>
          </AccordionTrigger>
          <AccordionContent>
            Handling bookkeeping, budgeting, invoicing, and financial reporting
            to ensure your business stays financially healthy and on track.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>
            <div className="flex flex-row justify-start">
              <div>
                <Image
                  src={"/project-management.png"}
                  alt="financial management icon"
                  width={24}
                  height={24}
                  priority
                />
              </div>
              <p className="ml-4 text-start text-lg font-semibold">
                Project Coordination
              </p>
            </div>
          </AccordionTrigger>
          <AccordionContent>
            Coordinating projects from start to finish, ensuring deadlines are
            met and resources are utilized effectively.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger>
            <div className="flex flex-row justify-start">
              <div>
                <Image
                  src={"/business-support.png"}
                  alt="financial management icon"
                  width={24}
                  height={24}
                  priority
                />
              </div>
              <p className="ml-4 text-start text-lg font-semibold">
                Business Support
              </p>
            </div>
          </AccordionTrigger>
          <AccordionContent>
            Offering a range of administrative services to help you stay
            organized, from calendar management to email correspondence.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default Services;
