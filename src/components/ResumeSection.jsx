import resumePdf from "../assets/resume.pdf";

const resumeUrl = resumePdf;

export default function ResumeSection() {
  return (
    <section id="resume" className="section resume-section">
      <div className="container">
        <h2 className="section-title">Resume</h2>
        <p className="resume-intro">
          View my resume below or download the PDF copy.
        </p>

        <div className="resume-layout">
          <div className="resume-preview-card">
            <div className="resume-preview-header">
              <span>CV Preview</span>
              <a href={resumeUrl} className="resume-download-button" download>
                Download CV
              </a>
            </div>

            <div className="resume-viewer">
              <iframe
                src={resumeUrl}
                title="Milan Belal Resume"
                className="resume-frame"
              />
            </div>
          </div>

          <div className="resume-side-card">
            <h3>Quick Overview</h3>
            <ul>
              <li>Software development portfolio</li>
              <li>BCA background</li>
              <li>Projects and technical skills</li>
              <li>Available as PDF download</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
