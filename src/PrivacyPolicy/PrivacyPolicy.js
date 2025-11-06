import React from 'react';
import { Link } from 'react-router-dom';
import './PrivacyPolicy.css';

class PrivacyPolicy extends React.Component {
  componentDidMount() {
    // Add noindex meta tag
    this.metaTag = document.createElement('meta');
    this.metaTag.name = 'robots';
    this.metaTag.content = 'noindex, nofollow';
    document.head.appendChild(this.metaTag);

    // Update page title
    document.title = 'Privacy Policy - JPG Exhaust Inc.';
  }

  componentWillUnmount() {
    // Remove meta tag when component unmounts
    if (this.metaTag) {
      document.head.removeChild(this.metaTag);
    }
    document.title = 'JPG Exhaust - Oakville, Ontario Exhaust Shop';
  }

  render() {
    return (
    <div className='PrivacyPolicy'>
      <div className='content'>
        <Link to="/" className='back-link'>← Back to Home</Link>

        <h1>Privacy Policy – AI Voice Agent for JPG Exhaust Inc.</h1>

        <p className='effective-date'>Effective date: October 30, 2025</p>

        <p className='intro'>
          JPG Exhaust Inc. ("we", "us", "our") is committed to protecting and respecting your privacy.
        </p>

        <section>
          <h2>1. Introduction</h2>
          <p>
            We have deployed an AI-voice scheduling and notification system (the "Voice Agent") to assist you in booking vehicle service appointments and to improve our customer service. The Voice Agent is designed to collect only the information necessary to address your service request, connect you with our CRM, and (if needed) transfer your call to a human agent.
          </p>
          <p>
            When you call, you will be informed that you are interacting (or may interact) with an automated system and you will be directed to this privacy policy.
          </p>
          <p>
            By providing your information to the Voice Agent or to a human representative of JPG Exhaust Inc., you consent to our collection, use and disclosure of your personal information in accordance with this policy.
          </p>
        </section>

        <section>
          <h2>2. What personal information we collect</h2>
          <p>When you use our Voice Agent, we may collect the following personal information:</p>
          <ul>
            <li>Your name</li>
            <li>Your telephone number</li>
            <li>Vehicle information (such as make, model, year, or other details you provide)</li>
            <li>Any other information you voluntarily provide during the call</li>
          </ul>
          <p>In addition, we collect call-related information including:</p>
          <ul>
            <li>Date and time of the call</li>
            <li>Duration of the call</li>
            <li>Whether you spoke to the Voice Agent or the call was forwarded to a human representative</li>
            <li>If you spoke to the Voice Agent: the transcript of your interaction with the Voice Agent</li>
          </ul>
          <p>
            If you are transferred to a human representative, and you do not speak to the Voice Agent, we collect only the date/time of call, duration and the fact of transfer.
          </p>
          <p>
            We do not intentionally collect sensitive personal information (such as financial information or health information) through the Voice Agent. However, if you voluntarily provide such information during your call, it may be recorded in the transcript.
          </p>
        </section>

        <section>
          <h2>3. Purposes of collection, use and disclosure</h2>
          <p>We collect and use your information for the following purposes:</p>
          <ul>
            <li>To schedule service appointments and send you notifications regarding your vehicle service</li>
            <li>To connect your call and relevant information into our CRM system so that our staff can follow up and provide service</li>
            <li>To monitor and improve the performance of the Voice Agent (for example, to analyse call durations, transcripts, error rates)</li>
            <li>To comply with legal or regulatory obligations</li>
          </ul>
          <p>
            We will not use your information for purposes other than those described above unless we obtain additional consent (unless permitted or required by law).
          </p>
          <p>
            We may disclose your information to service providers and third parties who assist us in the operation of the Voice Agent and CRM (including the AI platform provider). In each case we will ensure that contractual protections are in place so that your information is safeguarded and used only for the stated purposes.
          </p>
        </section>

        <section>
          <h2>4. Consent</h2>
          <p>
            By interacting with the Voice Agent and providing your information, you are consenting to our collection, use and disclosure of your information as set out in this policy.
          </p>
          <p>
            If you decline to provide the requested information, we may be unable to fulfil your service booking request through the automated system, and may transfer you to a human representative instead.
          </p>
          <p>
            If you do not want your transcript to be retained, you may ask us to delete it (see section 7 "Your rights").
          </p>
        </section>

        <section>
          <h2>5. Data limitation and retention</h2>
          <p>
            We collect only the minimum personal information necessary to fulfil the stated purposes, consistent with the principle of data minimization.
          </p>
          <p>
            We will retain your personal information only for as long as is necessary to fulfil the purposes described above and in accordance with our internal retention policy. Once the information is no longer required for those purposes, we will securely destroy, de-identify or anonymize it.
          </p>
          <p>In particular:</p>
          <ul>
            <li>Call meta-data (date/time, duration, transfer flag) is retained for 12 months for service-improvement and audit purposes.</li>
            <li>Transcripts are retained for 12 months, after which they are deleted or anonymized.</li>
            <li>Personal information (name, phone number, vehicle information) is retained only as long as required for scheduling, notification and follow-up; thereafter it is archived or destroyed.</li>
          </ul>
          <p>
            You can request the retention periods by contacting us (see section 7).
          </p>
        </section>

        <section>
          <h2>6. Safeguards</h2>
          <p>
            We maintain reasonable physical, organizational and technical safeguards to protect your personal information against unauthorized access, disclosure, copying, modification or destruction. This includes encryption of data in transit and at rest, access‐controls, audit logging, regular security reviews, and vendor management.
          </p>
          <p>
            While no system can guarantee absolute security, we are committed to continuously monitoring, testing and improving our security posture.
          </p>
        </section>

        <section>
          <h2>7. Your rights</h2>
          <p>You have the following rights under applicable law and this policy:</p>
          <ul>
            <li><strong>Access:</strong> You may request access to the personal information we hold about you, and obtain details of how we use it.</li>
            <li><strong>Correction:</strong> If you believe any of your personal information is inaccurate or incomplete, you may request correction.</li>
            <li><strong>Deletion/Withdrawal:</strong> You may ask us to delete your personal information (or transcripts) and/or withdraw your consent for future processing of your information through the Voice Agent (which may mean you revert to interacting only with a human representative). Please note some information may need to be retained to fulfil legal or contractual obligations.</li>
            <li><strong>Challenge:</strong> You may challenge our compliance with this policy and with applicable privacy law.</li>
          </ul>
          <p>To exercise any of these rights, please contact our Privacy Officer as follows:</p>
          <div className='contact-box'>
            <p><strong>Privacy Officer</strong></p>
            <p>Philip Chan</p>
            <p>JPG Exhaust Inc.</p>
            <p>1015 Industry Street, Oakville ON L6J 2X3</p>
            <p>Email: <a href='mailto:info@jpgexhaust.com'>info@jpgexhaust.com</a></p>
            <p>Phone: <a href='tel:905-339-0317'>905-339-0317</a></p>
          </div>
          <p>
            We will respond to your request within a reasonable period and free of charge (unless the request is manifestly unfounded or excessive).
          </p>
        </section>

        <section>
          <h2>8. Use of AI / Automated Processing</h2>
          <p>
            Our Voice Agent uses an AI system (provided by OpenAI) to process voice input, convert speech to text, and in some cases, conduct automated scheduling or routing. You will be informed at the start of your call that you may be interacting with an AI system and that your input may be transcribed and stored.
          </p>
          <p>While the system is subject to human oversight and you may be transferred to a human representative at any time, you should be aware that the AI processing is used to:</p>
          <ul>
            <li>interpret your voice input to identify your request (e.g., scheduling service)</li>
            <li>record and analyse the transcript for service‐improvement and system monitoring</li>
          </ul>
          <p>
            We do not use the input for training the underlying AI model beyond the scope of our service, unless we obtain separate explicit consent.
          </p>
          <p>
            We also do not use the system to make significant automated decisions about you (for example refusing service), but we may route you or transfer you to a human agent.
          </p>
          <p>
            If you prefer not to interact with the AI system, you may ask to speak directly with a human representative.
          </p>
        </section>

        <section>
          <h2>9. Transfers and international data flows</h2>
          <p>
            Your personal information may be stored in or transferred to locations outside Canada (for example if the AI-platform provider stores voice-data or transcripts on global servers). We will ensure that any such third parties are bound by contractual safeguards requiring them to provide protections equivalent to those in Canada. If you are concerned about your data being transferred outside Canada, please contact us (see section 7).
          </p>
          <p>
            Where feasible, we aim to use Canadian-based servers/storage.
          </p>
        </section>

        <section>
          <h2>10. Changes to this policy</h2>
          <p>
            We may update this policy from time to time to reflect changes in our practices or legal/regulatory requirements. We will post a revised version on our website and indicate the date of last update. We encourage you to review this policy periodically.
          </p>
        </section>

        <section>
          <h2>11. Contact and complaints</h2>
          <p>
            If you have any questions, concerns or complaints about this policy or how we handle your personal information, please contact our Privacy Officer (details in section 7). If you are not satisfied with our response, you may lodge a complaint with the Office of the Privacy Commissioner of Canada (OPC).
          </p>
          <p>Website: <a href='https://www.priv.gc.ca' target='_blank' rel='noopener noreferrer'>www.priv.gc.ca</a></p>
          <p>Telephone: 1-800-282-1376</p>
        </section>

        <footer className='policy-footer'>
          <p>© 1997-2025 JPG Exhaust Inc.</p>
        </footer>
      </div>
    </div>
    );
  }
}

export default PrivacyPolicy;
