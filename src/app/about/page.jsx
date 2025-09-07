import Header from "@/components/Header";
import Footer from "@/components/Footer";

const AboutPage = () => {
  return (
    <>
      <Header />
      <main className="bg-gradient-to-br from-slate-50 via-gray-50 to-white min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          {/* Page Header */}
          <div className="text-center mb-20">
            <div className="inline-flex items-center space-x-2 bg-white px-4 py-2 rounded-full border border-slate-200 mb-6">
              <div className="w-2 h-2 bg-burnt-orange-600 rounded-full"></div>
              <span className="text-sm font-medium text-slate-700">
                About Us
              </span>
            </div>

            <h1 className="text-4xl md:text-6xl font-bold mb-8 bg-gradient-to-r from-gray-900 via-slate-800 to-gray-900 bg-clip-text text-transparent">
              SDVOSB / Veteran-Owned Government AI Experts
            </h1>

            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Veteran-led AI consulting firm delivering mission-critical
              artificial intelligence solutions where failure is not an option
            </p>
          </div>

          {/* Our Mission */}
          <section className="mb-24">
            <div className="bg-white/60 backdrop-blur-xl rounded-2xl p-12 border border-white/20 shadow-lg">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold bg-gradient-to-r from-gray-900 to-slate-800 bg-clip-text text-transparent mb-4">
                  Advancing National Security Through Purpose-Built AI
                </h2>
                <p className="text-xl text-gray-700 max-w-6xl mx-auto leading-relaxed mb-8">
                  Ancile AI specializes in security-first AI/ML solutions for
                  defense, intelligence, and federal agencies. As
                  veteran-founded experts with active security clearances, we
                  understand that government AI requirements are fundamentally
                  different from commercial applications—so we build
                  mission-specific solutions from the ground up.
                </p>
                <p className="text-lg text-slate-600 max-w-5xl mx-auto mb-8">
                  Our mission is threefold:
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-8 mb-12">
                <div className="text-center">
                  <div className="bg-burnt-orange-600 w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <svg
                      className="w-8 h-8 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.031 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    Deliver Secure AI Systems
                  </h3>
                  <p className="text-gray-700">
                    Every solution is architected to meet NIST AI Risk
                    Management Framework standards and classified environment
                    requirements
                  </p>
                </div>

                <div className="text-center">
                  <div className="bg-burnt-orange-600 w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <svg
                      className="w-8 h-8 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 10V3L4 14h7v7l9-11h-7z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    Enhance Operational Capabilities
                  </h3>
                  <p className="text-gray-700">
                    We build AI that amplifies human decision-making in
                    mission-critical scenarios where lives and national security
                    are at stake
                  </p>
                </div>

                <div className="text-center">
                  <div className="bg-burnt-orange-600 w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <svg
                      className="w-8 h-8 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                      />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    Safeguard Mission Success
                  </h3>
                  <p className="text-gray-700">
                    Our systems are designed for 99.9% reliability because
                    government operations cannot afford downtime or failure
                  </p>
                </div>
              </div>

              <div className="bg-gradient-to-br from-burnt-orange-50 to-orange-50 rounded-xl p-8 text-center">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  What Sets Us Apart
                </h3>
                <p className="text-gray-700">
                  Government-hardened AI engineering: our models are architected
                  for offline deployment, built with explainable algorithms, and
                  engineered to perform consistently in bandwidth-constrained,
                  air-gapped environments.
                </p>
              </div>
            </div>
          </section>

          {/* Our Core Values */}
          <section className="mb-24">
            <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-gray-900 to-slate-800 bg-clip-text text-transparent">
              Our Core Values
            </h2>
            <div className="grid md:grid-cols-3 gap-8 items-stretch">
              <div className="bg-white/60 backdrop-blur-xl rounded-2xl p-8 border border-white/20 shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-2 flex flex-col h-full">
                <div className="flex-grow">
                  <div className="bg-burnt-orange-600 w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-6">
                    <svg
                      className="w-8 h-8 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.031 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    Security First
                  </h3>
                  <h4 className="text-lg font-semibold text-burnt-orange-600 mb-3">
                    Mission Assurance Through Security-by-Design
                  </h4>
                  <p className="text-gray-700 mb-4">
                    Everything we build starts with security, compliance, and
                    mission integrity as foundational principles—never as
                    afterthoughts.
                  </p>
                </div>
                <div className="text-left">
                  <h5 className="font-semibold text-gray-900 mb-2">
                    Our Security Commitment:
                  </h5>
                  <ul className="text-gray-700 text-sm space-y-1 list-disc list-inside">
                    <li>
                      NIST AI Risk Management Framework (AI RMF) compliant from
                      inception
                    </li>
                    <li>FedRAMP High and DoD IL-5 ready architectures</li>
                    <li>
                      Zero security incidents across all classified and
                      unclassified deployments
                    </li>
                    <li>
                      Continuous security validation through red team testing
                    </li>
                  </ul>
                </div>
              </div>

              <div className="bg-white/60 backdrop-blur-xl rounded-2xl p-8 border border-white/20 shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-2 flex flex-col h-full">
                <div className="flex-grow">
                  <div className="bg-burnt-orange-600 w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-6">
                    <svg
                      className="w-8 h-8 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 10V3L4 14h7v7l9-11h-7z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    Innovation with Reliability
                  </h3>
                  <h4 className="text-lg font-semibold text-burnt-orange-600 mb-3">
                    Cutting-Edge Technology, Military-Grade Dependability
                  </h4>
                  <p className="text-gray-700 mb-4">
                    We embrace the latest AI technologies while maintaining the
                    99.9% reliability required for operations where failure means
                    mission compromise.
                  </p>
                </div>
                <div className="text-left">
                  <h5 className="font-semibold text-gray-900 mb-2">
                    Our Innovation Philosophy:
                  </h5>
                  <ul className="text-gray-700 text-sm space-y-1 list-disc list-inside">
                    <li>
                      Deploy proven technologies in novel ways rather than
                      unproven experimental approaches
                    </li>
                    <li>
                      Every innovation undergoes rigorous operational testing
                      before deployment
                    </li>
                    <li>
                      Continuous capability enhancement without compromising
                      system stability
                    </li>
                    <li>
                      Future-ready architectures that evolve with emerging
                      threats and technologies
                    </li>
                  </ul>
                </div>
              </div>

              <div className="bg-white/60 backdrop-blur-xl rounded-2xl p-8 border border-white/20 shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-2 flex flex-col h-full">
                <div className="flex-grow">
                  <div className="bg-burnt-orange-600 w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-6">
                    <svg
                      className="w-8 h-8 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zm-8 6a2 2 0 11-4 0 2 2 0 014 0z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    Customer-Centric
                  </h3>
                  <h4 className="text-lg font-semibold text-burnt-orange-600 mb-3">
                    Mission-First Partners, Purpose-Built Solutions
                  </h4>
                  <p className="text-gray-700 mb-4">
                    Our team leverages unmatched operational experience to deliver
                    solutions that truly understand and address our customers'
                    most critical challenges, combining deep technical expertise
                    with intimate knowledge of mission requirements.
                  </p>
                </div>
                <div className="text-left">
                  <h5 className="font-semibold text-gray-900 mb-2">
                    Our Customer Advantage:
                  </h5>
                  <ul className="text-gray-700 text-sm space-y-1 list-disc list-inside">
                    <li>
                      Average 15+ years serving alongside our customers in
                      intelligence and military operations
                    </li>
                    <li>
                      Firsthand experience in the exact missions our customers
                      face—from tactical operations to strategic decision-making
                    </li>
                    <li>
                      Deep cultural understanding of government workflows,
                      enabling seamless integration and accelerated mission
                      success
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Our Story */}
          <section className="mb-24">
            <div className="bg-white/60 backdrop-blur-xl rounded-2xl p-12 border border-white/20 shadow-lg">
              <h2 className="text-4xl font-bold text-center mb-8 bg-gradient-to-r from-gray-900 to-slate-800 bg-clip-text text-transparent">
                Our Story
              </h2>

              <div className="grid md:grid-cols-2 gap-12 mb-12">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    Founded by Mission Veterans
                  </h3>
                  <h4 className="text-lg font-semibold text-burnt-orange-600 mb-4">
                    From the Field to the Future
                  </h4>
                  <p className="text-gray-700 mb-4">
                    Ancile AI was founded in 2023 by veterans who experienced
                    firsthand the gap between commercial AI capabilities and
                    government operational requirements. During deployments and
                    intelligence assignments, our founders repeatedly
                    encountered situations where existing AI solutions either
                    couldn't meet security requirements or failed to understand
                    the unique constraints of government operations.
                  </p>
                  <p className="text-gray-700">
                    The Genesis: After watching commercial AI vendors struggle
                    to adapt their solutions for classified environments—often
                    compromising either functionality or security—our founders
                    realized the government needed AI built specifically for its
                    unique requirements.
                  </p>
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    Mission-Driven Growth
                  </h3>
                  <h4 className="text-lg font-semibold text-burnt-orange-600 mb-4">
                    Every Client Engagement Advances National Security
                  </h4>
                  <p className="text-gray-700 mb-4">
                    Since our founding, we've maintained our focus on the most
                    critical government missions:
                  </p>
                  <ul className="text-gray-700 space-y-1 mb-4">
                    <li>
                      • Defense Operations: AI systems supporting tactical and
                      strategic military decisions
                    </li>
                    <li>
                      • Intelligence Analysis: Automated processing and
                      correlation of multi-source intelligence
                    </li>
                    <li>
                      • Federal Law Enforcement: Digital evidence analysis and
                      investigative support
                    </li>
                    <li>
                      • Critical Infrastructure: AI-enhanced security and threat
                      detection systems
                    </li>
                  </ul>
                  <p className="text-gray-700">
                    Our Commitment: We intentionally remain focused on
                    government missions rather than expanding into commercial
                    markets, ensuring our team's expertise remains sharp and our
                    solutions purpose-built for federal requirements.
                  </p>
                </div>
              </div>

              <div className="bg-gradient-to-br from-burnt-orange-50 to-orange-50 rounded-xl p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Our Approach
                </h3>
                <p className="text-gray-700">
                  "We started with the most challenging government requirements
                  first—air-gapped networks, multi-level security, real-time
                  decision support—and built outward, rather than starting with
                  commercial solutions and trying to make them
                  'government-ready.'"
                </p>
              </div>
            </div>
          </section>

          {/* Meet Our Founding Team */}
          <section className="mb-24">
            <div className="bg-white/60 backdrop-blur-xl rounded-2xl p-8 border border-white/20 shadow-lg">
              <div className="text-center mb-8">
                <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-gray-900 to-slate-800 bg-clip-text text-transparent">
                  Meet Our Founding Team
                </h2>
              </div>

              <div className="prose prose-lg mx-auto text-gray-700 leading-relaxed space-y-6">
                <p className="text-xl">
                  Our founding team represents a powerhouse of combined expertise, bringing together decades of proven leadership across the most demanding sectors of modern technology—from the battlefields of cyber warfare to the boardrooms of Fortune 500 companies. Forged in military service, our founders developed advanced avionics systems, cyber defense platforms, and battlefield technologies where failure isn't an option, instilling an unwavering commitment to security-first thinking and operational excellence.
                </p>

                <p>
                  Following their military careers, the team ascended to senior technical leadership roles at premier defense contractors, groundbreaking startups, and global technology giants, architecting distributed systems powering critical infrastructure and engineering AI solutions processing real-time data at scale.
                </p>

                <p>
                  With advanced degrees spanning engineering, cryptography, robotics, and data science, they consistently bridge the gap between laboratory innovation and market reality—delivering everything from missile defense software protecting national assets to predictive maintenance systems preventing catastrophic failures.
                </p>

                <p>
                  This unique convergence of military precision, academic rigor, and commercial success means your most complex challenges become our most compelling opportunities. When you work with our team, you're not just hiring consultants—you're partnering with battle-tested innovators who understand that in today's rapidly evolving landscape, the difference between leading and following often comes down to having the right expertise at the right moment.
                </p>
              </div>
            </div>
          </section>

          {/* Why "Ancile"? */}
          <section className="mb-24">
            <div className="bg-white/60 backdrop-blur-xl rounded-2xl p-12 border border-white/20 shadow-lg">
              <h2 className="text-4xl font-bold text-center mb-8 bg-gradient-to-r from-gray-900 to-slate-800 bg-clip-text text-transparent">
                Why "Ancile"?
              </h2>

              <div className="grid md:grid-cols-2 gap-12">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    The Shield of Mars
                  </h3>
                  <h4 className="text-lg font-semibold text-burnt-orange-600 mb-4">
                    Protection Through Advanced Preparation
                  </h4>
                  <p className="text-gray-700 mb-6">
                    In Roman mythology, the Ancile was the sacred shield that
                    fell from heaven to protect Rome. According to legend, as
                    long as the Ancile remained in Rome, the city would be
                    invincible.
                  </p>
                  <blockquote className="text-lg text-gray-800 font-medium italic border-l-4 border-burnt-orange-600 pl-6">
                    Our Modern Ancile: We serve as the protective shield for
                    government operations, using advanced AI to identify
                    threats, enhance capabilities, and ensure mission success.
                    Just as the ancient Ancile protected through divine
                    providence, our AI systems protect through superior
                    technology, unmatched expertise, and unwavering dedication
                    to national security.
                  </blockquote>
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    Symbolism in Our Work
                  </h3>
                  <div className="space-y-4">
                    <div className="bg-slate-50 rounded-lg p-4">
                      <div className="flex items-center space-x-3 mb-2">
                        <div className="w-3 h-3 bg-burnt-orange-600 rounded-full"></div>
                        <strong className="text-gray-900">Protection:</strong>
                      </div>
                      <span className="text-gray-700 text-sm">
                        Every system we build enhances security and mission
                        protection
                      </span>
                    </div>

                    <div className="bg-slate-50 rounded-lg p-4">
                      <div className="flex items-center space-x-3 mb-2">
                        <div className="w-3 h-3 bg-burnt-orange-600 rounded-full"></div>
                        <strong className="text-gray-900">Sacred Trust:</strong>
                      </div>
                      <span className="text-gray-700 text-sm">
                        We safeguard the most sensitive government operations
                        and data
                      </span>
                    </div>

                    <div className="bg-slate-50 rounded-lg p-4">
                      <div className="flex items-center space-x-3 mb-2">
                        <div className="w-3 h-3 bg-burnt-orange-600 rounded-full"></div>
                        <strong className="text-gray-900">
                          Invincibility:
                        </strong>
                      </div>
                      <span className="text-gray-700 text-sm">
                        Our solutions are built to perform flawlessly when
                        failure is not an option
                      </span>
                    </div>

                    <div className="bg-slate-50 rounded-lg p-4">
                      <div className="flex items-center space-x-3 mb-2">
                        <div className="w-3 h-3 bg-burnt-orange-600 rounded-full"></div>
                        <strong className="text-gray-900">
                          Eternal Vigilance:
                        </strong>
                      </div>
                      <span className="text-gray-700 text-sm">
                        Continuous monitoring and enhancement to maintain
                        operational superiority
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default AboutPage;
