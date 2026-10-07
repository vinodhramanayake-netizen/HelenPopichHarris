const assets = "/assets"

const practiceAreas = [
  [
    "Divorce",
    "Thoughtful representation through the legal and financial complexities of divorce.",
  ],
  [
    "Complex Community Property",
    "Identification, valuation and division of complex marital property.",
  ],
  [
    "High-Value Marital Estates",
    "Representation involving businesses, investments, real estate, retirement assets and other significant property.",
  ],
  [
    "Spousal Support",
    "Guidance regarding interim and final spousal support matters.",
  ],
  [
    "Retirement Division & QDROs",
    "Careful handling of retirement benefits and qualified domestic relations orders.",
  ],
  [
    "Child Support",
    "Representation concerning the establishment, modification and enforcement of child support.",
  ],
]

function SectionLabel({
  children,
  light = false,
}: {
  children: React.ReactNode
  light?: boolean
}) {
  return (
    <div className={`section-label ${light ? "section-label--light" : ""}`}>
      <span>{children}</span>
      <span className="section-label__rule" />
    </div>
  )
}

function Brand({ footer = false }: { footer?: boolean }) {
  return (
    <div className={`brand ${footer ? "brand--footer" : ""}`}>
      <img src={`${assets}/3a1b2.png`} alt="" className="brand__seal" />
      <div className="brand__wordmark">
        <strong>HELEN POPICH HARRIS</strong>
        <div className="brand__designation">
          <span />
          <b>APLC</b>
          <span />
        </div>
      </div>
    </div>
  )
}

function RecognitionColumn() {
  return (
    <aside className="recognitions" aria-label="Professional recognitions">
      <div className="certification">
        <img src={`${assets}/cd539.svg`} alt="" />
        <div>
          <strong>
            BOARD CERTIFIED
            <br />
            Family Law Specialist
          </strong>
          <span>
            Louisiana Board of
            <br />
            Legal Specialization
          </span>
        </div>
      </div>
      <div className="recognition recognition--lawyers">
        <strong>Super Lawyers</strong>
        <span>2022&nbsp; | &nbsp;2025&nbsp; | &nbsp;2026</span>
        <small>Selected to Louisiana Super Lawyers</small>
      </div>
      <div className="recognition">
        <strong className="profile">
          ACADIANA PROFILE
          <br />
          TOP LAWYERS 2025
        </strong>
        <span>Family Law</span>
      </div>
      <div className="rating">
        <div className="rating__medallion">
          <img src={`${assets}/6debe.svg`} alt="" />
          <strong>AV</strong>
        </div>
        <div>
          <strong>AV PREEMINENT®</strong>
          <span>
            Martindale-Hubbell
            <br />
            Peer Review Rating
          </span>
        </div>
      </div>
      <div className="academy">
        <div>
          <strong>AAML</strong>
          <img src={`${assets}/8335c.svg`} alt="" />
        </div>
        <b>
          AMERICAN ACADEMY OF
          <br />
          MATRIMONIAL LAWYERS
        </b>
        <span>Fellow</span>
      </div>
    </aside>
  )
}

function ContactDetail({
  icon,
  children,
}: {
  icon: string
  children: React.ReactNode
}) {
  return (
    <div className="contact-detail">
      <img src={`${assets}/${icon}`} alt="" />
      <span className="contact-detail__rule" />
      <div>{children}</div>
    </div>
  )
}

export default function App() {
  return (
    <main>
      <div className="hero-parallax">
        <section className="hero" id="home">
        <div className="hero__paper" />
        <header className="header">
          <Brand />
          <a href="#contact">Contact Us</a>
        </header>
        <div className="hero__composition">
          <h1>Family Law</h1>
          <div className="hero__portrait">
            <img
              src={`${assets}/20514.png`}
              alt="Helen Popich Harris in her office"
            />
          </div>
          <div className="hero__tagline">
            <span>Made</span> <em>Personal</em>
          </div>
        </div>
        <nav className="hero__practice-nav" aria-label="Practice areas">
          {practiceAreas.map(([title]) => (
            <a href="#practice-areas" key={title}>
              {title}
            </a>
          ))}
        </nav>
        </section>

        <section className="about" id="about">
        <div className="about__inner">
          <div className="about__main">
            <SectionLabel light>ABOUT HELEN</SectionLabel>
            <h2>
              Experience Matters.
              <br />
              <em>So Does Personal Attention.</em>
            </h2>
            <p>
              Helen Popich Harris is a Board Certified Family Law Specialist by
              the Louisiana Board of Legal Specialization and a Fellow of the
              American Academy of Matrimonial Lawyers. She brings extensive
              experience, professionalism and a thoughtful, practical approach
              to complex family law matters.
            </p>
            <a href="#approach" className="outline-button">
              LEARN MORE ABOUT HELEN <img src={`${assets}/1ccff.svg`} alt="" />
            </a>
            <img
              className="about__office"
              src={`${assets}/734af.png`}
              alt="Helen Popich Harris law office"
            />
          </div>
          <RecognitionColumn />
        </div>
        </section>
      </div>

      <section className="practice" id="practice-areas">
        <div className="practice__inner">
          <SectionLabel>PRACTICE AREAS</SectionLabel>
          <h2>Focused Family Law Representation</h2>
          <p className="practice__intro">
            Guidance for the legal and financial complexities of family law,
            with a focus on high-value and complex matters.
          </p>
          <div className="services">
            {practiceAreas.map(([title, description]) => (
              <a className="service" href="#contact" key={title}>
                <h3>{title}</h3>
                <span className="service__rule" />
                <p>{description}</p>
                <img src={`${assets}/311fc.svg`} alt="" />
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="approach" id="approach">
        <img
          src={`${assets}/3ad77.png`}
          alt="Helen Popich Harris"
          className="approach__portrait"
        />
        <div className="approach__quote">
          <span className="approach__mark">“</span>
          <blockquote>
            My approach to family law is rooted in clear guidance, thoughtful
            strategy, and genuine personal attention. Every client’s situation
            is unique, and I am committed to providing experienced, practical
            advice to help you move forward with confidence.
          </blockquote>
          <div className="attribution">
            <span />
            <div>
              <strong>HELEN POPICH HARRIS</strong>
              <small>ATTORNEY AT LAW</small>
            </div>
          </div>
        </div>
      </section>

      <section className="contact" id="contact">
        <div className="contact__inner">
          <div className="contact__information">
            <SectionLabel light>CONTACT</SectionLabel>
            <h2>
              Let’s Discuss Your
              <br />
              Family Law Matter.
            </h2>
            <p>
              If you would like to discuss your family law matter with Helen
              Popich Harris, contact the office to arrange a consultation.
            </p>
            <div className="contact__details">
              <ContactDetail icon="6d23a.svg">
                <strong>Helen Popich Harris, APLC</strong>
                <span>
                  201 Settlers Trace Boulevard, Suite 3B
                  <br />
                  Lafayette, Louisiana 70508
                </span>
              </ContactDetail>
              <ContactDetail icon="272aa.svg">
                <a href="tel:+13372679999">(337) 267-9999</a>
              </ContactDetail>
              <ContactDetail icon="e3437.svg">
                <a href="mailto:info@hphpfamilylaw.com">
                  info@hphpfamilylaw.com
                </a>
              </ContactDetail>
            </div>
          </div>
          <div className="contact__divider" />
          <form
            className="inquiry"
            onSubmit={(event) => event.preventDefault()}
          >
            <SectionLabel light>SEND AN INQUIRY</SectionLabel>
            <div className="inquiry__row">
              <input aria-label="Name" placeholder="Name *" required />
              <input
                aria-label="Email"
                placeholder="Email *"
                type="email"
                required
              />
            </div>
            <input
              aria-label="Phone"
              placeholder="Phone *"
              type="tel"
              required
            />
            <div className="textarea-wrap">
              <textarea
                aria-label="How can we help?"
                placeholder="How can we help? *"
                required
              />
              <img src={`${assets}/e31a9.svg`} alt="" />
            </div>
            <button type="submit">
              SEND INQUIRY <img src={`${assets}/12ea3.svg`} alt="" />
            </button>
            <p className="inquiry__disclaimer">
              Submitting this form does not create an attorney-client
              relationship.
              <br />
              Please do not include confidential information.
            </p>
          </form>
        </div>

        <footer className="footer">
          <div className="footer__top">
            <Brand footer />
            <div className="footer__credentials">
              <div className="footer-cert">
                <img src={`${assets}/b761f.svg`} alt="" />
                <div>
                  <strong>BOARD CERTIFIED</strong>
                  <span>Family Law Specialist</span>
                  <small>
                    Louisiana Board of
                    <br />
                    Legal Specialization
                  </small>
                </div>
              </div>
              <span className="footer__credential-rule" />
              <div className="footer-academy">
                <div>
                  <strong>AAML</strong>
                  <img src={`${assets}/64d44.svg`} alt="" />
                </div>
                <b>
                  AMERICAN ACADEMY OF
                  <br />
                  MATRIMONIAL LAWYERS
                </b>
                <span>Fellow</span>
              </div>
            </div>
          </div>
          <div className="footer__legal">
            <span>© 2026 Helen Popich Harris, APLC. All rights reserved.</span>
            <div>
              <a href="#home">Privacy Policy</a>
              <i />
              <a href="#home">Legal Disclaimer</a>
              <i />
              <a href="#home">Site by (Your Name/Agency)</a>
            </div>
          </div>
        </footer>
      </section>
    </main>
  )
}
