"use client";
import { useState } from "react";
import { ArrowRight, MessageCircle } from "lucide-react";
import styles from "./HeroSection.module.css";

export default function HeroSection() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    center: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitError("");
    setSubmitSuccess(false);
    setIsSubmitting(true);
    try {
      const res = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          pageUrl: typeof window !== "undefined" ? window.location.href : "",
        }),
      });
      const data = await res.json().catch(() => null);
      if (!res.ok || data?.ok === false) {
        throw new Error(data?.error || "Failed to submit.");
      }

      setSubmitSuccess(true);
      setFormData({ name: "", phone: "", email: "", center: "" });
    } catch (err) {
      setSubmitError(err?.message || "Failed to submit.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className={styles.section}>
      {/* Pure Black Background with Geometric Shapes */}
      <div className={styles.background}>
        {/* Purple/Magenta Geometric Shapes */}
        <div className={styles.shapeSquare1} />
        <div className={styles.shapeSquare2} />
        <div className={styles.shapeSquare3} />
        <div className={styles.glowCircle1} />
        <div className={styles.glowCircle2} />
        {/* Triangle shapes */}
        <svg className={styles.triangleSvg1} viewBox="0 0 100 100">
          <polygon points="50,10 90,90 10,90" fill="none" stroke="currentColor" strokeWidth="2" />
        </svg>
        <svg className={styles.triangleSvg2} viewBox="0 0 100 100">
          <polygon points="50,10 90,90 10,90" fill="none" stroke="currentColor" strokeWidth="2" />
        </svg>
        {/* Dots pattern */}
        <div className={styles.dotsGrid}>
          {[...Array(24)].map((_, i) => (
            <div key={i} className={styles.dot} />
          ))}
        </div>
        {/* Cross/Plus shapes */}
        <div className={`${styles.plusSign} ${styles.plusSign1}`}>+</div>
        <div className={`${styles.plusSign} ${styles.plusSign2}`}>+</div>
      </div>

      <div className={styles.container}>
        <div className={styles.grid}>
          {/* Left Content */}
          <div className={styles.leftContent}>
            {/* Main Heading */}
            <h1 className={styles.mainHeading}>
              Build a Career in Creative, Media & Technology — Not Just Skills
            </h1>
            <p className={styles.description}>
              Trusted by 25,000+ aspiring creators. We don&apos;t just teach software. We mentor you through real
              projects, portfolios, and career paths that actually get you hired.
            </p>

            {/* CTA Button */}
            <div className={styles.ctaWrapper}>
              <a
                href="#hero-form"
                className={styles.ctaButtonPrimary}
              >
                Get Free Career Guidance
                <ArrowRight className={styles.ctaIcon} />
              </a>
              <a
                href="https://wa.me/917827250823"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.ctaButtonSecondary}
              >
                <MessageCircle className={styles.ctaIcon} />
                Talk to a Career Expert
              </a>
            </div>

            <p className={styles.trustLine}>Trusted by 25,000+ aspiring creators</p>
          </div>

          {/* Right - Enquiry */}
          <div className={styles.rightContent} id="hero-form">
            <div className={styles.formCard}>
              <h3 className={styles.formTitle}>Request Call Back</h3>
              <form onSubmit={handleSubmit} className={styles.form}>
                <input
                  type="text"
                  placeholder="Name"
                  value={formData.name}
                  onChange={e => setFormData({ ...formData, name: e.target.value })}
                  className={styles.input}
                  required
                />
                <input
                  type="tel"
                  placeholder="Phone No."
                  value={formData.phone}
                  onChange={e => setFormData({ ...formData, phone: e.target.value })}
                  className={styles.input}
                  required
                />
                <input
                  type="email"
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={e => setFormData({ ...formData, email: e.target.value })}
                  className={styles.input}
                  required
                />
                <select
                  value={formData.center}
                  onChange={e => setFormData({ ...formData, center: e.target.value })}
                  className={styles.select}
                  required
                >
                  <option value="">Preferred Course</option>
                  <option value="graphic-design">Graphic Design</option>
                  <option value="animation">Animation</option>
                  <option value="vfx">VFX</option>
                  <option value="ui-ux">UI/UX Design</option>
                  <option value="game-design">Game Design</option>
                </select>
                <p className={styles.disclaimer}>
                  By clicking on &quot;Submit&quot;, I allow the company to call me and send program information on email/sms/phone.
                </p>
                {submitError && (
                  <p className={styles.error}>
                    {submitError}
                  </p>
                )}
                {submitSuccess && (
                  <p className={styles.success}>
                    Submitted successfully!
                  </p>
                )}
                <button type="submit" className={styles.submitBtn} disabled={isSubmitting}>
                  {isSubmitting ? "SUBMITTING..." : "SUBMIT"}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
