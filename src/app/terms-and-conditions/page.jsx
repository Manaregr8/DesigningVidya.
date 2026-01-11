import "@/styles/blog.css";

export const metadata = {
  title: "Terms and Conditions - DesigningVidya",
  description: "Terms and Conditions for DesigningVidya - Digital Marketing Training Institute",
};

export default function TermsAndConditionsPage() {
  return (
    <main id="main-content" className="blog-index" role="main">
      <header className="blog-index__hero">
        <div>
          <p className="eyebrow">Legal</p>
          <h1>Terms and Conditions</h1>
        </div>
      </header>

      <article className="blog-post__content" style={{ maxWidth: '900px', margin: '0 auto', padding: '2rem' }}>
        <section>
          <p>
            Welcome to DesigningVidya – Best Digital Marketing Institute in Delhi. By accessing and using our website, 
            you agree to be bound by the following terms and conditions. If you disagree with any part of these terms, 
            please stop using our website.
          </p>
        </section>

        <section style={{ marginTop: '2rem' }}>
          <h2>1. Content Usage</h2>
          <p>
            The content on our website, whether it's text, images, videos, and other materials, is provided for 
            informational purposes only.
          </p>
          <p>
            By continuing to use our website, you agree to these terms and conditions in their entirety. If you do not 
            agree with any part of these terms, please refrain from using our website. This content is protected by 
            copyright and intellectual property laws. You cannot copy, share, change, or use any content without our permission.
          </p>
        </section>

        <section style={{ marginTop: '2rem' }}>
          <h2>2. User Accounts</h2>
          <p>
            If you create an account on our website, you are responsible for keeping your account information, including 
            your password, safe. You must notify us immediately if you find any unauthorized use of your account.
          </p>
        </section>

        <section style={{ marginTop: '2rem' }}>
          <h2>3. Privacy</h2>
          <p>
            Your use of our website is subject to our Privacy Policy, which explains how we collect, use, and protect 
            your personal data. By using our site, you agree to follow the terms of our Privacy Policy.
          </p>
        </section>

        <section style={{ marginTop: '2rem' }}>
          <h2>4. Third-Party Links</h2>
          <p>
            Our website may have links to third-party websites or services that are not controlled by DesigningVidya. 
            We are not responsible for the content or privacy policies of those third-party sites or services.
          </p>
        </section>

        <section style={{ marginTop: '2rem' }}>
          <h2>5. Modification and Termination</h2>
          <p>
            We may change, pause, or stop any part of our website at any time without notice. We may also block or end 
            your access to the site for any reason, without prior notice or responsibility.
          </p>
        </section>

        <section style={{ marginTop: '2rem' }}>
          <h2>6. Limitation of Liability</h2>
          <p>
            DesigningVidya, its team, employees, partners, or affiliates are not liable for any indirect, special, or 
            punitive damages that result from your use or inability to use our website.
          </p>
        </section>

        <section style={{ marginTop: '2rem' }}>
          <h2>7. Governing Law</h2>
          <p>
            These terms follow the laws of India. Any legal matters regarding your use of the website will be handled 
            by courts in Delhi, India.
          </p>
        </section>

        <section style={{ marginTop: '2rem' }}>
          <h2>8. Course Registration and Payment</h2>
          <p>
            All course registrations are subject to availability and confirmation from DesigningVidya. Payment terms, 
            refund policies, and cancellation policies are detailed in our Privacy Policy section.
          </p>
        </section>

        <section style={{ marginTop: '2rem' }}>
          <h2>9. Intellectual Property</h2>
          <p>
            All course materials, content, and resources provided by DesigningVidya are protected by copyright and 
            intellectual property laws. Unauthorized distribution, reproduction, or use of any materials is strictly prohibited.
          </p>
        </section>

        <section style={{ marginTop: '2rem' }}>
          <h2>10. Student Conduct</h2>
          <p>
            Students are expected to maintain professional conduct during classes and in all interactions with 
            DesigningVidya staff and fellow students. Any violation of conduct policies may result in immediate 
            termination of enrollment without refund.
          </p>
        </section>

        <section style={{ marginTop: '3rem', padding: '1.5rem', backgroundColor: '#1a1a1a', borderRadius: '8px', border: '1px solid #333' }}>
          <h2 style={{ color: '#fff' }}>Company Information</h2>
          <ul style={{ lineHeight: '1.8', listStyle: 'none', paddingLeft: 0, color: '#d1d5db' }}>
            <li><strong style={{ color: '#fff' }}>Company:</strong> DesigningVidya</li>
            <li><strong style={{ color: '#fff' }}>Address:</strong> 2nd Floor, Savitri Cinema Complex, Block E, Greater Kailash II, Greater Kailash, New Delhi, Delhi 110048</li>
            <li><strong style={{ color: '#fff' }}>Contact:</strong> +91 78272 50823</li>
            <li><strong style={{ color: '#fff' }}>Email:</strong> designingvidya3@gmail.com</li>
          </ul>
        </section>

        <section style={{ marginTop: '2rem', padding: '1rem', backgroundColor: '#1a1a1a', borderRadius: '8px', borderLeft: '4px solid #3b82f6', border: '1px solid #333' }}>
          <p style={{ margin: 0, color: '#d1d5db' }}>
            <strong style={{ color: '#fff' }}>Last Updated:</strong> January 2026
          </p>
          <p style={{ margin: '0.5rem 0 0 0', color: '#d1d5db' }}>
            By using our website and services, you acknowledge that you have read, understood, and agree to be bound by 
            these Terms and Conditions.
          </p>
        </section>
      </article>
    </main>
  );
}
