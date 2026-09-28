// Indication and Important Safety Information — written once, shown on every page.
export default function Isi() {
  return (
    <section className="isi" id="isi" aria-labelledby="isiTitle">
      <div className="wrap">
        <div className="isi__inner">
          <h2 id="isiTitle">Indication and Important Safety Information</h2>
          <p className="isi__product">
            ZAYNICH<sup>™</sup> (cefepime and zidebactam) for Injection
          </p>
          <h3>Indication and Usage</h3>
          <h4>Complicated Urinary Tract Infections, Including Pyelonephritis</h4>
          <p>
            ZAYNICH
            <sup>™</sup> is indicated for the treatment of adult patients with complicated urinary tract
            infections (cUTI), including pyelonephritis caused by the following susceptible microorganisms:{' '}
            <em>Escherichia coli</em>, <em>Klebsiella pneumoniae</em>, <em>Proteus mirabilis</em>,{' '}
            <em>Enterobacter cloacae</em> complex, and <em>Pseudomonas aeruginosa</em>.
          </p>
          <h4>Usage to Reduce Development of Drug-Resistant Bacteria</h4>
          <p>
            To reduce the development of drug-resistant bacteria and maintain the effectiveness of ZAYNICH
            <sup>™</sup> and other antibacterial drugs, ZAYNICH
            <sup>™</sup> should be used only to treat or prevent infections that are proven or strongly
            suspected to be caused by susceptible bacteria.
          </p>
          <h3>Important Safety Information</h3>
          <h4>Contraindications</h4>
          <p>
            ZAYNICH
            <sup>™</sup> is contraindicated in patients with a known history of serious hypersensitivity to
            the components of ZAYNICH
            <sup>™</sup> (cefepime and zidebactam) or other beta-lactam antibacterial drugs.
          </p>
          <h4>Warnings and Precautions</h4>
          <ul>
            <li>
              <strong>Hypersensitivity Reactions:</strong> Serious hypersensitivity reactions, including
              anaphylaxis, have been reported in patients treated with ZAYNICH
              <sup>™</sup>. Serious and occasionally fatal hypersensitivity reactions and serious skin
              reactions have been reported in patients receiving beta-lactam antibacterial drugs. Before
              therapy with ZAYNICH
              <sup>™</sup> is instituted, carefully inquire about previous hypersensitivity reactions to
              cefepime, cephalosporins, penicillins, or other beta-lactams because cross-hypersensitivity
              among beta-lactam antibacterial drugs has been reported. If an allergic reaction to ZAYNICH
              <sup>™</sup> occurs, discontinue the drug and institute appropriate supportive measures.
            </li>
            <li>
              <strong>Neurotoxicity:</strong> Neurotoxicity has been reported during treatment with cefepime,
              a component of ZAYNICH
              <sup>™</sup>, including life-threatening or fatal occurrences of encephalopathy, aphasia,
              myoclonus, seizures, and nonconvulsive status epilepticus. Most cases occurred in patients with
              renal impairment who did not receive appropriate dosage adjustment. If neurotoxicity associated
              with ZAYNICH
              <sup>™</sup> therapy occurs, discontinue ZAYNICH
              <sup>™</sup> and institute appropriate supportive measures.
            </li>
            <li>
              <strong>
                <em>Clostridioides difficile</em> Infection (CDI):
              </strong>{' '}
              <em>Clostridioides difficile</em> infection (CDI) has been reported with the use of nearly all
              antibacterial agents, including ZAYNICH
              <sup>™</sup>, and may range in severity from mild diarrhea to fatal colitis. Careful medical
              history is necessary because CDI has been reported to occur over two months after the
              administration of antibacterial agents. If CDI is suspected or confirmed, ongoing antibacterial
              drug use not directed against <em>C. difficile</em> may need to be discontinued.
            </li>
            <li>
              <strong>Positive Direct Coombs' Tests:</strong> Positive direct Coombs' tests with or without
              hemolysis have been reported during treatment with cefepime, a component of ZAYNICH
              <sup>™</sup>. In patients who develop hemolytic anemia, discontinue the drug and institute
              appropriate therapy.
            </li>
            <li>
              <strong>Prolonged Prothrombin Time:</strong> Decrease in prothrombin activity has been reported
              for many cephalosporins including cefepime, a component of ZAYNICH
              <sup>™</sup>. Those at risk include patients with renal or hepatic impairment or poor
              nutritional state, as well as patients receiving a protracted course of antimicrobial therapy.
              Prothrombin time should be monitored in patients at risk, and exogenous vitamin K should be
              administered as indicated.
            </li>
            <li>
              <strong>Development of Drug-Resistant Bacteria:</strong> Prescribing ZAYNICH
              <sup>™</sup> in the absence of a proven or strongly suspected bacterial infection or a
              prophylactic indication is unlikely to provide benefit to the patient and increases the risk of
              the development of drug-resistant bacteria.
            </li>
            <li>
              <strong>Interactions with Urine Glucose Testing:</strong> The administration of cefepime, a
              component of ZAYNICH
              <sup>™</sup>, may result in a false-positive reaction for glucose in the urine when using some
              methods (e.g., Clinitest
              <sup>™</sup> tablets). It is recommended that glucose tests based on enzymatic glucose oxidase
              reactions be used.
            </li>
          </ul>
          <h4>Adverse Reactions</h4>
          <p>
            The most common adverse reactions occurring in ≥2% of patients receiving ZAYNICH
            <sup>™</sup> were diarrhea, hypertension, headache, and hypokalemia.
          </p>
          <h4>Use in Specific Populations</h4>
          <p>
            <strong>Geriatric Use:</strong> Serious neurologic adverse reactions have occurred in geriatric
            patients with renal insufficiency given unadjusted doses of cefepime, a component of ZAYNICH
            <sup>™</sup>. Care should be taken in dose selection for elderly patients, and renal function
            should be monitored as appropriate.
          </p>
          <div className="isi__report">
            <p>
              <strong>
                To report SUSPECTED ADVERSE REACTIONS, contact Wockhardt Suisse USA LLC at{' '}
                <a href="tel:+18443676548">1-844-367-6548</a> or FDA at 1-800-FDA-1088 or{' '}
                <a href="https://www.fda.gov/medwatch" target="_blank" rel="noopener">
                  www.fda.gov/medwatch
                </a>
                .
              </strong>
            </p>
            <p>
              Please see full{' '}
              <a href="/assets/pdfs/zaynich-prescribing-information.pdf" target="_blank" rel="noopener">
                Prescribing Information
              </a>
              .
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
