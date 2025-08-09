import Header from '@/components/Header'
import Footer from '@/components/Footer'
import FeatureCards from '@/components/FeatureCards'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'

export default function FeaturesPage() {
  return (
    <div className="min-h-dvh flex flex-col bg-white">
      <Header />
      <main className="flex-1">
        <FeatureCards />
        <section className="max-w-6xl mx-auto px-4 py-12">
          <h2 className="text-xl font-semibold mb-4">FAQs</h2>
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger>How do I create an RFP?</AccordionTrigger>
              <AccordionContent>Go to New RFP and follow the guided steps.</AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>Can I import templates?</AccordionTrigger>
              <AccordionContent>Yes, via Templates page or during creation.</AccordionContent>
            </AccordionItem>
          </Accordion>
        </section>
      </main>
      <Footer />
    </div>
  )
}


