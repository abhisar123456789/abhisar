const AboutSection = () => {
  return <section id="about" className="py-24 bg-secondary/30">
      <div className="section-container">
        <div className="max-w-4xl mx-auto">
          <h2 className="section-title text-center mb-12">About Me</h2>
          
          <div className="space-y-6 text-foreground/80 text-lg leading-relaxed">
            <p>My work focuses on transforming complex business workflows into structured product solutions. I lead client discovery calls, translate operational needs into detailed Business Requirements Documents (BRDs), collaborate closely with engineering and QA teams, work with LLM-powered automation products, and ensure high product quality through rigorous testing, UAT support, and demos.</p>
            
            <p>
              Beyond execution, I also contribute to product strategy, competitive analysis, and growth, including building outreach strategies for enterprise clients and shaping product positioning through structured market research.
            </p>
            
            <p>
              I hold a <span className="font-semibold text-foreground">B.Tech in Mechanical Engineering from IIT Delhi</span>, along with a <span className="font-semibold text-foreground">Minor in Business Management</span>, giving me a strong foundation in both technical systems and business decision-making. My background spans product management, machine learning, cryptography research, predictive analytics, operations optimization, and engineering design, enabling me to approach product challenges with a multidisciplinary and outcome-oriented mindset.
            </p>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
            <div className="card-metric">
              <div className="card-metric-value">IIT Delhi</div>
              <div className="card-metric-label">Education</div>
            </div>
            <div className="card-metric">
              <div className="card-metric-value">Product</div>
              <div className="card-metric-label">FOCUS AREA</div>
            </div>
            <div className="card-metric">
              <div className="card-metric-value">AI & Data</div>
              <div className="card-metric-label">FOCUS AREA</div>
            </div>
            <div className="card-metric">
              <div className="card-metric-value">AI & Data</div>
              <div className="card-metric-label">Expertise</div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default AboutSection;