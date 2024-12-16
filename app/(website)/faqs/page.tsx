import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export default function FAQs() {
  return (
    <div className="mx-auto mt-content relative container px-4 lg:px-0">
      {/* Heading, subtext and CTAs */}
      <div className="mx-auto max-w-sm md:max-w-screen-lg">

        {/* Heading */}
        <h2 className="mb-8 text-3xl md:text-4xl lg:text-5xl text-center md:text-left font-semibold leading-tight md:leading-snug tracking-tighter">
          Frequently asked questions
        </h2>

        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger>Is it accessible?</AccordionTrigger>
            <AccordionContent>
              Yes. It adheres to the WAI-ARIA design pattern.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>Is it styled?</AccordionTrigger>
            <AccordionContent>
              Yes. It comes with default styles that matches the other
              components&apos; aesthetic.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>Is it animated?</AccordionTrigger>
            <AccordionContent>
              Yes. It&apos;s animated by default, but you can disable it if you
              prefer.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  )
}
