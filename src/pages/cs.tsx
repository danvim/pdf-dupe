import { FC } from 'react'

export const CS: FC = () => {
  return (
    <>
      <link rel="stylesheet" href="/cs.css"/>
      <div id="cover">
        <img
          className="logo"
          src="/images/caspian-sea-logo.svg"
          alt="Caspian Sea Logo"
        />

        <header className="book-title">Annual Report 2018</header>
        <svg viewBox="0 0 210 153" role="presentation" id="cover-graphics">
          <defs>
            <clipPath id="steps">
              <path d="M 0,35 L 25,35 L 25,0 L 210,0 L 210,140 L 141,140 L 141,153 L 0,153 Z"/>
            </clipPath>
          </defs>
          <image
            x="0"
            y="0"
            width="210"
            xlinkHref="./images/hong-kong.jpg"
            clipPath="url(#steps)"
          />
        </svg>
        <h4 className="headline" style={{ breakAfter: 'page' }}>
          Caspian Sea Group
          <br/>
          Caspian Sea
        </h4>
      </div>
      <div className="subsection">
        <h2 className="section-title">
          Message from the Chairman of the Board of Directors
        </h2>
        <h3 className="lead">
          The year 2018 was a pivotal one for Caspian Sea, marking the
          completion of its restructuring and the achievement of its first
          annual post-tax profit since 2014. Through strategic risk management
          and capital efficiency, the bank strengthened its financial position
          while expanding wealth management and investment banking services.
          Digital transformation efforts accelerated, improving operational
          efficiency.
        </h3>
        <div className="col-2">
          <h5>Dear shareholders, clients and colleagues</h5>
          <p>
            As we reflect on the year 2018, I want to take a moment to express
            my deepest gratitude to each of you—our shareholders, our valued
            clients, and our dedicated colleagues—who have been pivotal in our
            journey toward growth and success. the Bank stands today as a
            stronger, more resilient financial institution, built on the
            foundations of trust, innovation, and commitment. This past year has
            been a defining period for us, marked by significant milestones,
            challenges, and opportunities.
          </p>
          <p>
            The global economic landscape has been one of shifting tides,
            demanding adaptability and strategic foresight. Through all of this,
            our bank has remained steadfast in its mission to serve our clients
            with excellence, provide stability to our shareholders, and foster
            an environment where our employees can thrive. We have continued to
            refine our strategies, ensuring that we navigate uncertainties with
            clarity and confidence.
          </p>
          <p>
            Throughout 2018, our commitment to delivering sustainable financial
            solutions has remained unwavering. We have strengthened our
            investment portfolios, enhanced our digital banking infrastructure,
            and deepened our engagement with clients, ensuring that we continue
            to meet their evolving needs. Our ability to stay ahead of industry
            trends, coupled with our dedication to innovation, positions Caspian
            Sea Bank as a leading institution ready to embrace the future.
          </p>
          <h6>Financial Strength and Growth: A Testament to Our Vision</h6>
          <p>
            One of the most notable achievements of the year has been our
            financial growth, which reinforces the trust you have placed in us.
            We have delivered strong financial results, driven by prudent risk
            management and strategic capital allocation. Our ability to navigate
            market volatility has allowed us to maintain stability while seizing
            opportunities for expansion and diversification.
          </p>
          <p>
            A key driver of our success has been the ongoing digital
            transformation of the Bank. By investing in cutting-edge technology,
            we have enhanced efficiency and improved client experiences. Digital
            banking has become central to our operations, allowing us to provide
            seamless, secure, and intuitive financial services to a wider
            demographic. Our expansion into digital services has not only
            strengthened our competitive position but has also enabled us to
            forge deeper relationships with our clients.
          </p>
          <p>
            In addition to financial resilience, we have focused on sustainable
            banking practices. Environmental, social, and governance (ESG)
            principles are embedded in our long-term strategy, ensuring that we
            create meaningful impact beyond profit generation. By supporting
            sustainable investments and fostering responsible banking
            initiatives, we reaffirm our commitment to being a force for good in
            the financial sector.
          </p>
          <h6>Building a Future Together</h6>
          <p>
            The heart of the Bank lies in its people—our esteemed clients and
            our exceptional employees. Our journey toward excellence would not
            be possible without the trust and dedication of all those who
            contribute to our success.
          </p>
          <p>
            For our clients, we have introduced tailored financial solutions
            that meet diverse needs, from personal banking services to
            large-scale corporate investments. We continue to evolve our
            offerings, ensuring accessibility, flexibility, and security. The
            integration of digital tools has streamlined transactions, making
            banking more efficient and user-friendly. Above all, our commitment
            to personalized service remains steadfast—we listen, we adapt, and
            we deliver.
          </p>
          <p>
            To our colleagues across the bank, your unwavering dedication has
            been the backbone of our progress. In an industry that requires
            agility, foresight, and expertise, you have demonstrated resilience
            and passion. Our success as an institution is deeply intertwined
            with the talents and contributions of our people. Moving forward, we
            remain committed to fostering an inclusive workplace, where
            innovation is encouraged and professional growth is nurtured.
          </p>
          <p>
            As we step into the future, we are confident that the foundation we
            have built in 2018 will serve as a catalyst for even greater
            achievements. the Bank will continue to expand, innovate, and serve
            with integrity. We look forward to embarking on the next chapter of
            growth, together.
          </p>
          <p>
            Our collective journey is one of purpose and perseverance, and with
            your continued trust and partnership, we will shape an institution
            that remains strong, sustainable, and forward-thinking for
            generations to come. The future is bright, and together, we will
            seize it with determination and vision.
          </p>
          <figure
            className="bleed"
            style={{
              columnSpan: 'all',
            }}
          >
            <img src="/images/businesswoman.jpg" alt="CEO"/>
            <figcaption>
              Catherine James, Chairman of the Board of Directors.
            </figcaption>
          </figure>
          <p>
            As we move into the next year, Caspian Sea Bank is poised for
            continued growth and strategic expansion. Building upon the solid
            financial foundation established in 2018, we aim to further
            strengthen our investment banking capabilities, broaden our wealth
            management services, and optimize operational efficiencies through
            advanced digital solutions. The evolving financial landscape
            presents new opportunities, and we are committed to adapting to
            market dynamics while ensuring long-term stability for our
            stakeholders. Through prudent risk management and innovation, we
            will capitalize on emerging trends while remaining anchored in our
            core principles of reliability and excellence.
          </p>
          <p>
            Digital transformation will remain a central focus in the coming
            year, as we accelerate the adoption of cutting-edge financial
            technology to enhance customer experience and operational
            effectiveness. The seamless integration of AI-driven solutions,
            blockchain innovations, and mobile banking advancements will enable
            us to provide more personalized and accessible financial services.
            As regulatory frameworks continue to evolve, we will proactively
            align with industry standards, ensuring compliance while leveraging
            opportunities for digital innovation. Our commitment to sustainable
            finance will also be reinforced, supporting ESG initiatives that
            promote responsible investment and long-term economic resilience.{' '}
            <span className="footnote">
              Read our latest Sustainability report to learn more.
            </span>
          </p>
          <p>
            Above all, our outlook for the next year is rooted in the strength
            of our relationships—with our clients, shareholders, and employees.
            We will continue fostering a culture of trust and collaboration,
            ensuring that our people remain at the heart of every decision we
            make. Talent development and inclusivity will be prioritized,
            creating an environment where innovation thrives and expertise
            grows. With determination and vision, Caspian Sea Bank will navigate
            the future with confidence, striving to be a financial institution
            that not only adapts to change but leads it. The year ahead holds
            vast potential, and we look forward to embarking on this journey
            together.
          </p>
        </div>
      </div>
      <div className="section">
        <h1 className="section-title">Information on the company</h1>
        <ul className="toc">
          <li><a href="#information-on-the-company.divisions">Divisions</a></li>
          <li><a href="#information-on-the-company.divisions">Divisions</a></li>
          <li><a href="#information-on-the-company.divisions">Divisions</a></li>
        </ul>
      </div>
      <div className="subsection">
        <h2 id="information-on-the-company.divisions" className="section-title">Vivliostyle experience so far</h2>
        <div className="col-2">
          <h6>What works</h6>
          <p style={{ marginBottom: 0 }}>With custom support for additional CSS from W3C documents, many unachievable by
            today's browser can be implemented. As compared to other HTML-to-PDF solutions, Vivliostyle utilizes an
            actual browser for the rendering, thus it automatically supports the powerful already available CSS on
            browsers. In this document so far, these are used:</p>
          <ul>
            <li>Placing elements outside into the page margin</li>
            <li>Generating chapter names and links with page number</li>
            <li>Blank page for aligning next page to the book left/right side.</li>
            <li>Writing footnotes</li>
          </ul>
          <h6>Comparing with Weasyprint</h6>
          <p style={{ marginBottom: 0 }}>I have attempted to export this document with Weasyprint, but noticed several
            issues:</p>
          <ul>
            <li>It does not support variable fonts</li>
            <li>Cover image SVG, which links another image, cannot be exported</li>
            <li>Modern features like the CSS unit "lh" is not supported</li>
            <li>Discrepancy in bottom edge chapter name alignment</li>
          </ul>
          <p>However, for more general use cases, the Python library more than suffices.</p>
          <h6>Issues</h6>
          <p style={{ marginBottom: 0 }}>
            Using Vivliostyle for laying out this document has been good so far. However, the original design of this
            document requires the following that are yet to be implemented or fixed:
          </p>
          <ul>
            <li>
              Missing support for "margin-outside", or a way to move elements into the outside edge of the book, to
              create flushed elements.
            </li>
            <li>
              Missing selector for 1st of named page, in order to provide different margins for the first page of each
              named page sections.
            </li>
            <li>
              Blank page intrudes into next page if the next page contains links using target-counter() in their
              before/after pseudo elements.
            </li>
          </ul>
        </div>
      </div>
    </>
  )
}
