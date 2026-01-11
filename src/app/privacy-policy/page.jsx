import "@/styles/blog.css";

export const metadata = {
  title: "Privacy Policy - DesigningVidya",
  description: "Privacy Policy for DesigningVidya - Digital Marketing Training Institute",
};

export default function PrivacyPolicyPage() {
  return (
    <main id="main-content" className="blog-index" role="main">
      <header className="blog-index__hero">
        <div>
          <p className="eyebrow">Legal</p>
          <h1>Privacy Policy</h1>
        </div>
      </header>

      <article className="blog-post__content" style={{ maxWidth: '900px', margin: '0 auto', padding: '2rem' }}>
        <section>
          <p>
            The terms and conditions include the use of this website www.designingvidya.com. In these terms and conditions, 
            the term "DesigningVidya" or "us" or "we" refers to the owner of the website whose registered office is 
            2nd Floor, Savitri Cinema Complex, Block E, Greater Kailash II, Greater Kailash, New Delhi, Delhi 110048.
          </p>
        </section>

        <section style={{ marginTop: '2rem' }}>
          <h2>Terms and Conditions for the Use of Website</h2>
          
          <div style={{ marginTop: '1.5rem' }}>
            <p>
              <strong>Payment Terms:</strong> Payment shall be made payable to "DesigningVidya". The mode of payment can be 
              either Online transfer (UPI), Cash, or Credit Card payment.
            </p>
          </div>

          <div style={{ marginTop: '1.5rem' }}>
            <h3>Online Transfer To:</h3>
            <ul style={{ lineHeight: '1.8' }}>
              <li><strong>Beneficiary Details:</strong> DesigningVidya</li>
              <li><strong>Name of the bank:</strong> [Your Bank Name]</li>
              <li><strong>Branch name:</strong> [Your Branch Name]</li>
              <li><strong>Bank account type:</strong> Current Account</li>
              <li><strong>Bank a/c number:</strong> [Your Account Number]</li>
              <li><strong>Branch IFSC code:</strong> [Your IFSC Code]</li>
            </ul>
            <p>Your registration will be confirmed once DesigningVidya receives the course fee payment.</p>
          </div>

          <div style={{ marginTop: '1.5rem' }}>
            <h3>Cancellations & Transfers:</h3>
            <ul style={{ lineHeight: '1.8' }}>
              <li>Cancellations and transfers must be made in writing to DesigningVidya. If participants miss the course, the fees will not be refunded.</li>
              <li>Any remittance or bank charges must be paid by the participants. All payments are strictly non-refundable and non-transferable.</li>
              <li>Once payment is made, it cannot be reversed, stopped, or cancelled by any method.</li>
              <li>Participants paying in two instalments must pay the second instalment within 20 days of the course start date. Failing to do so may result in cancellation or postponement of their registration or course date.</li>
              <li>Fees once paid are non-refundable and non-transferable.</li>
            </ul>
          </div>

          <div style={{ marginTop: '1.5rem' }}>
            <h3>Course Policies:</h3>
            <ul style={{ lineHeight: '1.8' }}>
              <li>DesigningVidya reserves the right to alter the timings, dates & duration for the training.</li>
              <li>DesigningVidya reserves the right to alter the course content at any time without liability.</li>
              <li>We provide certifications (international and institutional) and it is totally based on exam clearance or course opted.</li>
              <li>Placement assistance is not a compulsion; it's an add-on service from DesigningVidya. Work from home opportunities will only be provided as per the requirements from our placement partners.</li>
              <li>The Institute will conduct certification exams either between the course or within 1 month of course completion.</li>
            </ul>
          </div>

          <div style={{ marginTop: '1.5rem' }}>
            <h3>User Responsibilities:</h3>
            <ul style={{ lineHeight: '1.8' }}>
              <li>You agree to provide your authentic and correct personal information. DesigningVidya reserves the right (not obligatory) to confirm and verify the information and other details provided by you at any point in time.</li>
              <li>If, upon confirmation, your details are not found to be true (wholly or partially), your admission will be cancelled. You agree not to dispute DesigningVidya's decision regarding cancellation.</li>
              <li>DesigningVidya will conduct the course only if there are sufficient participants. In case of non-sufficient participants, the current participants will be merged into another batch or the training might be postponed.</li>
            </ul>
          </div>

          <div style={{ marginTop: '1.5rem' }}>
            <h3>Facility Usage:</h3>
            <ul style={{ lineHeight: '1.8' }}>
              <li>You will be provided free internet access in the classrooms. The internet should be only used for training purposes. DesigningVidya is not responsible, under any circumstances, if the internet is misused for fraudulent purposes.</li>
              <li>Photography or video/audio recording inside the classroom during the training session is not allowed. If anyone is found doing so, DesigningVidya has the right in its sole discretion to cancel your admission. You agree not to dispute DesigningVidya's decision regarding cancellation.</li>
              <li>The live class recordings are not provided by the DesigningVidya under any circumstances.</li>
              <li>If any candidate is found creating a nuisance in the class or spoiling the company's image on any online platform, DesigningVidya has the right in its sole discretion to cancel your admission. You agree not to dispute DesigningVidya's decision regarding cancellation.</li>
              <li>You are required to carry your own laptop during the class. DesigningVidya does not issue any laptops to its students under any circumstances.</li>
            </ul>
          </div>

          <div style={{ marginTop: '2rem', padding: '1.5rem', backgroundColor: '#1a1a1a', borderRadius: '8px', border: '1px solid #333' }}>
            <h3 style={{ color: '#fff' }}>Contact Information</h3>
            <p style={{ color: '#d1d5db' }}>If you have any other queries or need any further clarifications regarding this or other programs, please do not hesitate to contact us:</p>
            <ul style={{ lineHeight: '1.8', listStyle: 'none', paddingLeft: 0, color: '#d1d5db' }}>
              <li><strong style={{ color: '#fff' }}>Phone:</strong> +91 78272 50823</li>
              <li><strong style={{ color: '#fff' }}>Email:</strong> designingvidya3@gmail.com</li>
              <li><strong style={{ color: '#fff' }}>Address:</strong> 2nd Floor, Savitri Cinema Complex, Block E, Greater Kailash II, Greater Kailash, New Delhi, Delhi 110048</li>
            </ul>
            <p style={{ marginTop: '1rem', color: '#d1d5db' }}>We, as DesigningVidya, are here to support you in your digital career!</p>
          </div>
        </section>
      </article>
    </main>
  );
}
