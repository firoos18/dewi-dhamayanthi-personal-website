import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Image from "next/image";

const Services = () => {
  return (
    <div className="relative min-h-fit mt-9 px-4 flex flex-col">
      <div className="w-full flex flex-row items-center">
        <p className="text-3xl sm:text-4xl font-semibold">Services I Offer</p>
        <div className="flex-grow h-[1px] bg-black ml-5" />
      </div>
      <Accordion type="single" collapsible className="w-full mt-8">
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
              <p className="ml-4 font-semibold text-lg text-start">
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
              <p className="ml-4 font-semibold text-lg text-start">
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
              <p className="ml-4 font-semibold text-lg text-start">
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
