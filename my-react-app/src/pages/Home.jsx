import React, { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    document.title = "DocEase – Online Doctor Consultations";
  }, []);

  const page = {
    fontFamily:
      "'Inter', system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
    color: "#1f2933",
    backgroundColor: "#fdfaf5",
  };

  const container = {
    maxWidth: "1120px",
    margin: "0 auto",
    padding: "32px 16px 48px 16px",
  };

  const heroGrid = {
    display: "flex",
    flexWrap: "wrap",
    gap: "40px",
    alignItems: "flex-start",
  };

  const heroCol = {
    flex: "1 1 320px",
  };

  const pill = {
    display: "inline-flex",
    alignItems: "center",
    gap: "8px",
    padding: "4px 12px",
    borderRadius: "999px",
    backgroundColor: "#ecfdf5",
    color: "#047857",
    fontSize: "12px",
    fontWeight: 600,
  };

  const heading = {
    fontSize: "36px",
    lineHeight: 1.2,
    fontWeight: 800,
    color: "#111827",
    marginTop: "12px",
    marginBottom: "12px",
  };

  const highlight = {
    color: "#1f8efa",
  };

  const description = {
    fontSize: "14px",
    color: "#6b7280",
    marginBottom: "18px",
    maxWidth: "520px",
  };

  const searchCard = {
    borderRadius: "18px",
    padding: "16px",
    border: "1px solid #e5e7eb",
    backgroundColor: "#ffffff",
    boxShadow: "0 10px 28px rgba(15,23,42,0.06)",
    display: "flex",
    flexWrap: "wrap",
    gap: "10px",
    alignItems: "center",
    marginBottom: "16px",
  };

  const label = {
    fontSize: "12px",
    fontWeight: 600,
    color: "#4b5563",
    marginBottom: "4px",
  };

  const inputGroup = {
    flex: "1 1 180px",
  };

  const input = {
    width: "100%",
    padding: "10px 12px",
    borderRadius: "999px",
    border: "1px solid #d1d5db",
    fontSize: "14px",
    outline: "none",
  };

  const primaryBtn = {
    padding: "12px 20px",
    borderRadius: "999px",
    border: "none",
    fontSize: "14px",
    fontWeight: 600,
    cursor: "pointer",
    background:
      "linear-gradient(135deg,#1f8efa,#1ac8b0)",
    color: "#ffffff",
    boxShadow: "0 10px 25px rgba(31,142,250,0.25)",
    whiteSpace: "nowrap",
  };

  const ghostBtn = {
    padding: "10px 18px",
    borderRadius: "999px",
    border: "1px solid #d0d7e2",
    fontSize: "14px",
    fontWeight: 500,
    cursor: "pointer",
    backgroundColor: "transparent",
    color: "#1f2933",
    whiteSpace: "nowrap",
  };

  const actionsRow = {
    display: "flex",
    flexWrap: "wrap",
    gap: "10px",
    marginBottom: "16px",
  };

  const statsRow = {
    display: "flex",
    flexWrap: "wrap",
    gap: "20px",
  };

  const statItem = {
    minWidth: "120px",
  };

  const statNumber = {
    fontSize: "20px",
    fontWeight: 700,
    color: "#111827",
  };

  const statLabel = {
    fontSize: "12px",
    color: "#6b7280",
  };

  const rightBoxOuter = {
    flex: "1 1 320px",
    borderRadius: "24px",
    border: "1px solid #e5e7eb",
    padding: "16px",
    background:
      "radial-gradient(circle at top left,#e0f2fe,#fef3c7)",
  };

  const cardBase = {
    borderRadius: "18px",
    padding: "16px",
    border: "1px solid #e5e7eb",
    backgroundColor: "#ffffff",
    boxShadow: "0 10px 28px rgba(15,23,42,0.06)",
  };

  const doctorHeader = {
    display: "flex",
    justifyContent: "space-between",
    marginBottom: "8px",
  };

  const chip = {
    fontSize: "11px",
    padding: "2px 8px",
    borderRadius: "999px",
    backgroundColor: "#eff6ff",
    color: "#1d4ed8",
    fontWeight: 600,
  };

  const tinyTag = {
    padding: "4px 8px",
    borderRadius: "999px",
    backgroundColor: "#f3f4f6",
    fontSize: "11px",
    marginRight: "6px",
    marginBottom: "6px",
    display: "inline-block",
  };

  const phoneMock = {
    borderRadius: "24px",
    border: "1px solid #e5e7eb",
    padding: "14px",
    marginTop: "16px",
    backgroundColor: "#ffffff",
    display: "flex",
    flexDirection: "column",
    gap: "10px",
  };

  const phoneTop = {
    display: "flex",
    justifyContent: "space-between",
    fontSize: "12px",
  };

  const phoneCard = {
    borderRadius: "14px",
    padding: "10px",
    border: "1px solid #e5e7eb",
    backgroundColor: "#f9fafb",
    marginTop: "4px",
    fontSize: "11px",
  };

  const phoneFooter = {
    fontSize: "11px",
    color: "#6b7280",
    textAlign: "center",
  };

  const sectionTitle = {
    fontSize: "26px",
    fontWeight: 700,
    marginBottom: "6px",
    color: "#111827",
  };

  const sectionSubtitle = {
    fontSize: "14px",
    color: "#6b7280",
    maxWidth: "520px",
  };

  const featuresGrid = {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))",
    gap: "16px",
    marginTop: "18px",
  };

  const iconCircle = {
    width: "36px",
    height: "36px",
    borderRadius: "999px",
    backgroundColor: "#eff6ff",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "18px",
  };

  const featureTitle = {
    fontSize: "15px",
    fontWeight: 600,
    marginTop: "10px",
    marginBottom: "4px",
  };

  const featureText = {
    fontSize: "13px",
    color: "#6b7280",
  };

  const stepsWrapper = {
    marginTop: "20px",
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))",
    gap: "14px",
  };

  const stepBadge = {
    width: "24px",
    height: "24px",
    borderRadius: "999px",
    backgroundColor: "#e0f2fe",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "12px",
    fontWeight: 700,
    color: "#1d4ed8",
    marginBottom: "6px",
  };

  const stepTitle = {
    fontSize: "14px",
    fontWeight: 600,
    marginBottom: "2px",
  };

  const stepText = {
    fontSize: "12px",
    color: "#6b7280",
  };

  const twoCol = {
    display: "flex",
    flexWrap: "wrap",
    gap: "24px",
    marginTop: "32px",
    alignItems: "center",
  };

  const col = {
    flex: "1 1 320px",
  };

  const badgeRow = {
    display: "flex",
    gap: "10px",
    flexWrap: "wrap",
    marginTop: "12px",
  };

  const downloadBadge = {
    padding: "8px 12px",
    borderRadius: "12px",
    border: "1px solid #d1d5db",
    backgroundColor: "#ffffff",
    fontSize: "12px",
    fontWeight: 500,
  };

  const stackedPhones = {
    display: "flex",
    gap: "12px",
    justifyContent: "center",
  };

  const smallPhone = {
    ...phoneMock,
    height: "240px",
  };

  const testimonialRow = {
    display: "flex",
    flexWrap: "wrap",
    gap: "24px",
    marginTop: "24px",
  };

  const quoteCard = {
    ...cardBase,
    flex: "1 1 320px",
    fontSize: "13px",
  };

  const quoteMark = {
    fontSize: "26px",
    color: "#d1d5db",
    marginBottom: "6px",
  };

  const authorRow = {
    display: "flex",
    alignItems: "center",
    gap: "10px",
    marginTop: "12px",
  };

  const avatar = {
    width: "32px",
    height: "32px",
    borderRadius: "999px",
    backgroundColor: "#e5e7eb",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "14px",
    fontWeight: 600,
  };

  const faqCard = {
    ...cardBase,
    flex: "1 1 280px",
  };

  const faqList = {
    listStyle: "none",
    padding: 0,
    margin: 0,
    fontSize: "13px",
    color: "#4b5563",
  };

  const faqItem = {
    padding: "6px 0",
    borderBottom: "1px solid #f3f4f6",
  };

  const faqLink = {
    marginTop: "10px",
    display: "inline-block",
    fontSize: "12px",
    fontWeight: 600,
    color: "#1f8efa",
    textDecoration: "none",
  };

  return (
    <main style={page}>
      <section style={container}>
        {/* HERO */}
        <div style={heroGrid}>
          <div style={heroCol}>
            <div style={pill}>
              <span>●</span> 24×7 Video Consultations
            </div>
            <h1 style={heading}>
              Speak to a{" "}
              <span style={highlight}>doctor in 2 minutes</span> from the
              comfort of your home.
            </h1>
            <p style={description}>
              DocEase connects you with verified specialists for instant online
              consultations, digital prescriptions and follow-ups – anytime,
              anywhere.
            </p>

            <div style={searchCard}>
              <div style={inputGroup}>
                <div style={label}>Speciality</div>
                <input
                  style={input}
                  placeholder="E.g. Dermatologist, Pediatrician..."
                />
              </div>
              <div style={inputGroup}>
                <div style={label}>City / Pincode</div>
                <input style={input} placeholder="Hyderabad, 500001" />
              </div>
              <button style={primaryBtn}>Search Doctors</button>
            </div>

            <div style={actionsRow}>
              <button style={primaryBtn}>Book Appointment</button>
              <button style={ghostBtn}>Explore doctors</button>
            </div>

            <div style={statsRow}>
              <div style={statItem}>
                <div style={statNumber}>20k+</div>
                <div style={statLabel}>Consultations completed</div>
              </div>
              <div style={statItem}>
                <div style={statNumber}>4.9★</div>
                <div style={statLabel}>Average rating</div>
              </div>
              <div style={statItem}>
                <div style={statNumber}>1500+</div>
                <div style={statLabel}>Verified doctors</div>
              </div>
            </div>
          </div>

          {/* RIGHT – doctor card + mobile mock */}
          <div style={rightBoxOuter}>
            <div style={cardBase}>
              <div style={doctorHeader}>
                <div>
                  <div
                    style={{
                      fontSize: "14px",
                      fontWeight: 700,
                      color: "#111827",
                    }}
                  >
                    Dr. Ananya Rao
                  </div>
                  <div
                    style={{ fontSize: "12px", color: "#6b7280" }}
                  >
                    Consultant Cardiologist • 12 yrs exp.
                  </div>
                </div>
                <span style={chip}>Online now</span>
              </div>
              <div>
                <span style={tinyTag}>✔ Video Consult</span>
                <span style={tinyTag}>₹499 per session</span>
                <span style={tinyTag}>Languages: EN, HI, TE</span>
              </div>
              <button
                style={{ ...primaryBtn, marginTop: "10px", width: "100%" }}
              >
                Start instant consultation
              </button>
            </div>

            <div style={phoneMock}>
              <div style={phoneTop}>
                <span style={{ fontWeight: 600 }}>Your next visit</span>
                <span style={{ fontSize: "11px", color: "#6b7280" }}>
                  Today • 7:30 PM
                </span>
              </div>

              <div>
                <div style={phoneCard}>
                  <div
                    style={{
                      fontWeight: 600,
                      marginBottom: "4px",
                    }}
                  >
                    Video call with Dr. Ananya Rao
                  </div>
                  <div style={{ color: "#6b7280" }}>
                    Join from your phone or laptop. Please keep your reports
                    handy.
                  </div>
                </div>

                <div style={phoneCard}>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                    }}
                  >
                    <span>BP log</span>
                    <span>Today</span>
                  </div>
                  <div
                    style={{
                      marginTop: "6px",
                      height: "6px",
                      borderRadius: "999px",
                      backgroundColor: "#e5e7eb",
                    }}
                  >
                    <div
                      style={{
                        width: "70%",
                        height: "100%",
                        borderRadius: "999px",
                        background:
                          "linear-gradient(135deg,#1f8efa,#1ac8b0)",
                      }}
                    />
                  </div>
                </div>
              </div>

              <div style={phoneFooter}>
                One app for doctors, prescriptions and health records.
              </div>
            </div>
          </div>
        </div>

        {/* FEATURES */}
        <div style={{ marginTop: "40px" }}>
          <h2 style={sectionTitle}>Everything you need in one app</h2>
          <p style={sectionSubtitle}>
            From instant booking to follow-up care, DocEase keeps your entire
            healthcare journey simple and organised.
          </p>

          <div style={featuresGrid}>
            <div style={cardBase}>
              <div style={iconCircle}>⏱</div>
              <div style={featureTitle}>Instant video consults</div>
              <p style={featureText}>
                Connect with specialist doctors in less than 2 minutes – no
                travel, no waiting rooms.
              </p>
            </div>
            <div style={cardBase}>
              <div style={iconCircle}>💊</div>
              <div style={featureTitle}>Digital prescriptions</div>
              <p style={featureText}>
                Get secure e-prescriptions and share them with your chemist in a
                single tap.
              </p>
            </div>
            <div style={cardBase}>
              <div style={iconCircle}>📁</div>
              <div style={featureTitle}>Smart health records</div>
              <p style={featureText}>
                Upload lab reports, scans and previous prescriptions. Access
                them anytime.
              </p>
            </div>
            <div style={cardBase}>
              <div style={iconCircle}>🔒</div>
              <div style={featureTitle}>Bank-grade security</div>
              <p style={featureText}>
                Your health data is encrypted and stored securely. You control
                who sees what.
              </p>
            </div>
          </div>

          <div style={stepsWrapper}>
            <div>
              <div style={stepBadge}>1</div>
              <div style={stepTitle}>Choose a speciality</div>
              <p style={stepText}>
                Search by symptoms or speciality and filter doctors by fees,
                language and experience.
              </p>
            </div>
            <div>
              <div style={stepBadge}>2</div>
              <div style={stepTitle}>Book a slot</div>
              <p style={stepText}>
                Pick a time that works for you – or start an instant
                consultation if you need urgent help.
              </p>
            </div>
            <div>
              <div style={stepBadge}>3</div>
              <div style={stepTitle}>Consult & follow up</div>
              <p style={stepText}>
                Talk to your doctor, receive notes and schedule follow-ups in a
                single tap.
              </p>
            </div>
          </div>
        </div>

        {/* APP DOWNLOAD SECTION */}
        <div style={twoCol}>
          <div style={col}>
            <h2 style={sectionTitle}>
              Take your doctor with you, wherever you go.
            </h2>
            <p style={sectionSubtitle}>
              Track vitals, manage medicines and share your history in seconds.
              DocEase is available on Android and iOS.
            </p>
            <div style={badgeRow}>
              <button style={downloadBadge}>Get it on Play Store</button>
              <button style={downloadBadge}>Download on App Store</button>
            </div>
          </div>

          <div style={col}>
            <div style={stackedPhones}>
              <div style={smallPhone}>
                <div style={{ fontSize: "12px", fontWeight: 600 }}>
                  Reminders
                </div>
                <p style={{ fontSize: "11px", color: "#6b7280" }}>
                  Never miss a dose or an appointment again.
                </p>
              </div>
              <div style={smallPhone}>
                <div style={{ fontSize: "12px", fontWeight: 600 }}>
                  Health Timeline
                </div>
                <p style={{ fontSize: "11px", color: "#6b7280" }}>
                  See all your visits, tests and prescriptions in one
                  interactive view.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* TESTIMONIAL + FAQ PREVIEW */}
        <div style={testimonialRow}>
          <div style={quoteCard}>
            <div style={quoteMark}>“</div>
            <p>
              I used to spend hours travelling and waiting at hospitals. With
              DocEase I can consult my regular doctor and share my reports in
              minutes. The reminders for medicines are a bonus!
            </p>
            <div style={authorRow}>
              <div style={avatar}>A</div>
              <div>
                <div
                  style={{ fontSize: "13px", fontWeight: 600 }}
                >
                  Aditi Sharma
                </div>
                <div
                  style={{ fontSize: "11px", color: "#9ca3af" }}
                >
                  Bangalore, India
                </div>
              </div>
            </div>
          </div>

          <div style={faqCard}>
            <h3
              style={{
                fontSize: "16px",
                fontWeight: 700,
                marginBottom: "8px",
              }}
            >
              Frequently asked questions
            </h3>
            <ul style={faqList}>
              <li style={faqItem}>Is my video consultation private?</li>
              <li style={faqItem}>
                Can I get a refund if my consultation is cancelled?
              </li>
              <li style={{ padding: "6px 0" }}>
                Are your doctors verified by medical councils?
              </li>
            </ul>
            <a href="/faq" style={faqLink}>
              View all FAQs →
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
