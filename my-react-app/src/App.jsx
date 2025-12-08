import React from "react";

function AmrutamRecruitmentProcess() {
  const styles = {
    section: {
      backgroundColor: "#F7F5EC",
      padding: "60px 20px",
      display: "flex",
      justifyContent: "center",
      fontFamily: "'Inter', system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
    },
    container: {
      maxWidth: "1100px",
      width: "100%",
    },
    headingWrapper: {
      textAlign: "left",
      marginBottom: "32px",
    },
    titleTag: {
      fontSize: "14px",
      letterSpacing: "2px",
      textTransform: "uppercase",
      color: "#2F7A55",
      fontWeight: 600,
      marginBottom: "6px",
    },
    title: {
      fontSize: "30px",
      lineHeight: 1.3,
      color: "#123326",
      margin: 0,
      fontWeight: 700,
    },
    subtitle: {
      marginTop: "10px",
      fontSize: "15px",
      color: "#5C6B63",
      maxWidth: "620px",
    },
    stepsGrid: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
      gap: "20px",
    },
    stepCard: {
      backgroundColor: "#FFFFFF",
      borderRadius: "16px",
      padding: "20px 20px 18px 20px",
      boxShadow: "0 10px 24px rgba(0, 0, 0, 0.06)",
      position: "relative",
      border: "1px solid #E3E6DF",
    },
    stepHeader: {
      display: "flex",
      alignItems: "center",
      marginBottom: "10px",
    },
    stepNumber: {
      height: "32px",
      width: "32px",
      borderRadius: "999px",
      backgroundColor: "#2F7A55",
      color: "#FFFFFF",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontWeight: 700,
      fontSize: "16px",
      marginRight: "10px",
      flexShrink: 0,
    },
    stepTitleWrapper: {
      display: "flex",
      flexDirection: "column",
    },
    stepTitle: {
      margin: 0,
      fontSize: "16px",
      fontWeight: 600,
      color: "#123326",
    },
    stepLabel: {
      fontSize: "12px",
      textTransform: "uppercase",
      letterSpacing: "1px",
      color: "#7C887F",
      marginTop: "2px",
    },
    stepBody: {
      fontSize: "13px",
      color: "#5C6B63",
      lineHeight: 1.5,
    },
    list: {
      margin: "8px 0 0 14px",
      padding: 0,
    },
    listItem: {
      marginBottom: "4px",
    },
    highlight: {
      fontWeight: 600,
      color: "#2F7A55",
    },
    exampleBox: {
      marginTop: "8px",
      padding: "8px 10px",
      borderRadius: "10px",
      backgroundColor: "#F0F5F0",
      fontSize: "12px",
      color: "#415048",
    },
  };

  return (
    <section style={styles.section}>
      <div style={styles.container}>
        {/* Heading */}
        <div style={styles.headingWrapper}>
          <div style={styles.titleTag}>Careers at Amrutam</div>
          <h2 style={styles.title}>Amrutam Recruitment Process</h2>
          <p style={styles.subtitle}>
            Our hiring journey is simple, transparent, and focused on finding a
            strong match between your skills and our culture. Below is an
            overview of the typical stages you may experience.
          </p>
        </div>

        {/* Steps */}
        <div style={styles.stepsGrid}>
          {/* Step 1 */}
          <div style={styles.stepCard}>
            <div style={styles.stepHeader}>
              <div style={styles.stepNumber}>1</div>
              <div style={styles.stepTitleWrapper}>
                <h3 style={styles.stepTitle}>Carefully Review the JD</h3>
                <span style={styles.stepLabel}>Understand the role</span>
              </div>
            </div>
            <div style={styles.stepBody}>
              The Job Description outlines key responsibilities, skills and
              qualifications for the role. Please:
              <ul style={styles.list}>
                <li style={styles.listItem}>
                  Understand the core responsibilities and daily tasks.
                </li>
                <li style={styles.listItem}>
                  Identify essential and preferred skills we are looking for.
                </li>
                <li style={styles.listItem}>
                  Assess if your experience aligns with the requirements.
                </li>
                <li style={styles.listItem}>
                  Check for any specific application instructions.
                </li>
              </ul>
            </div>
          </div>

          {/* Step 2 */}
          <div style={styles.stepCard}>
            <div style={styles.stepHeader}>
              <div style={styles.stepNumber}>2</div>
              <div style={styles.stepTitleWrapper}>
                <h3 style={styles.stepTitle}>
                  Complete the Assignment & Apply
                </h3>
                <span style={styles.stepLabel}>Show your skills</span>
              </div>
            </div>
            <div style={styles.stepBody}>
              For specific roles, you will receive a role-related assignment.
              This may be a coding challenge, design project, writing sample or
              case study.
              <ul style={styles.list}>
                <li style={styles.listItem}>
                  Complete the task within the given timeline.
                </li>
                <li style={styles.listItem}>
                  Submit the assignment along with the application form.
                </li>
              </ul>
              <div style={styles.exampleBox}>
                <span style={styles.highlight}>Example:</span> For some
                technical roles, you may be asked to build a small application
                to demonstrate your coding and problem-solving abilities.
              </div>
            </div>
          </div>

          {/* Step 3 */}
          <div style={styles.stepCard}>
            <div style={styles.stepHeader}>
              <div style={styles.stepNumber}>3</div>
              <div style={styles.stepTitleWrapper}>
                <h3 style={styles.stepTitle}>Group Discussion (GD)</h3>
                <span style={styles.stepLabel}>Collaborate & communicate</span>
              </div>
            </div>
            <div style={styles.stepBody}>
              Shortlisted candidates may be invited to a Group Discussion with
              5–10 participants.
              <ul style={styles.list}>
                <li style={styles.listItem}>
                  We assess communication & listening skills.
                </li>
                <li style={styles.listItem}>
                  We observe teamwork and leadership qualities.
                </li>
                <li style={styles.listItem}>
                  We review your analysis, problem-solving and confidence.
                </li>
              </ul>
            </div>
          </div>

          {/* Step 4 */}
          <div style={styles.stepCard}>
            <div style={styles.stepHeader}>
              <div style={styles.stepNumber}>4</div>
              <div style={styles.stepTitleWrapper}>
                <h3 style={styles.stepTitle}>Personal Interview (PI)</h3>
                <span style={styles.stepLabel}>One-to-one interaction</span>
              </div>
            </div>
            <div style={styles.stepBody}>
              Candidates clearing the GD usually move to a one-on-one or panel
              interview.
              <ul style={styles.list}>
                <li style={styles.listItem}>
                  We discuss your technical skills and experience.
                </li>
                <li style={styles.listItem}>
                  We explore your goals, motivation and culture fit.
                </li>
                <li style={styles.listItem}>
                  Be prepared for questions like{" "}
                  <span style={styles.highlight}>
                    “Tell me about yourself”, “Why Amrutam?”,
                  </span>{" "}
                  and role-specific questions.
                </li>
              </ul>
            </div>
          </div>

          {/* Step 5 */}
          <div style={styles.stepCard}>
            <div style={styles.stepHeader}>
              <div style={styles.stepNumber}>5</div>
              <div style={styles.stepTitleWrapper}>
                <h3 style={styles.stepTitle}>Final Results & Offer</h3>
                <span style={styles.stepLabel}>Closure</span>
              </div>
            </div>
            <div style={styles.stepBody}>
              After all rounds, we evaluate each candidate holistically.
              <ul style={styles.list}>
                <li style={styles.listItem}>
                  Successful candidates receive an offer of employment.
                </li>
                <li style={styles.listItem}>
                  The mode and timeline of communication will be shared with
                  you.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AmrutamRecruitmentProcess;
