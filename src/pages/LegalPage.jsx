import PageBanner from '../components/ui/PageBanner';
import Section from '../components/ui/Section';
import Reveal from '../components/ui/Reveal';
import Button from '../components/ui/Button';
import { company } from '../data/site';

/**
 * Shared shell for Privacy and Terms.
 *
 * The source site links to both from its footer but serves 404s for each, so
 * there is no copy to carry over — and legal text must not be invented. The
 * routes exist to keep the footer links valid; drop real copy into `sections`
 * (an array of { heading, body }) when legal supplies it.
 */
export default function LegalPage({ eyebrow, title, sections = [] }) {
  return (
    <>
      <PageBanner
        eyebrow={eyebrow}
        title={title}
        breadcrumb={[{ label: 'Home', to: '/' }, { label: title }]}
      />

      <Section>
        <div className="max-w-3xl">
          {sections.length > 0 ? (
            sections.map((section, index) => (
              <Reveal key={section.heading} delay={index * 0.05} className="mb-10">
                <h2 className="text-2xl sm:text-3xl">{section.heading}</h2>
                <p className="mt-4 text-[0.9375rem] leading-relaxed text-body">{section.body}</p>
              </Reveal>
            ))
          ) : (
            <Reveal>
              <div className="border border-line p-8 sm:p-12">
                <h2 className="text-2xl sm:text-3xl">This policy is being prepared</h2>
                <p className="mt-5 text-[0.9375rem] leading-relaxed text-body">
                  Our {title.toLowerCase()} is not published yet. If you need it before it goes
                  live — or have a question about how we handle your information — please contact
                  our team and we will share the current position directly.
                </p>
                <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                  <Button to="/contact">Contact Us</Button>
                  <Button href={`mailto:${company.email}`} variant="outline">
                    {company.email}
                  </Button>
                </div>
              </div>
            </Reveal>
          )}
        </div>
      </Section>
    </>
  );
}
