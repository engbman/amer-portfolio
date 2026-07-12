// ✅ src/components/Experience.tsx (with schema and preserved comments)

const Experience = () => {
  return (
    <section id="experience" className="text-white px-6 md:p-10 max-w-3xl mx-auto" itemScope itemType="http://schema.org/ItemList">
      <h2 className="text-3xl font-bold text-blue-400 mb-6 text-center md:text-left" itemProp="name">
        Experience
      </h2>

      <div className="space-y-8">
        {/* Experience Item 1 */}
        <div className="p-6 rounded-lg shadow-lg bg-transparent border border-gray-700 transition-all duration-300 hover:shadow-blue-500/50 hover:border-blue-400" itemScope itemType="http://schema.org/JobPosting">
          <div className="text-gray-400 text-sm" itemProp="datePosted">December 2024 – Present</div>
          <h3 className="text-xl font-semibold text-white" itemProp="title">Software &amp; IT Systems Engineer · SSBTE (Saleh Saeed Baosman Trading Est.)</h3>
          <p className="text-gray-300 mt-2" itemProp="description">
            Build and deploy internal AI tools (including SSBTE Prospector AI) in daily production use, develop and maintain the company website end to end, and manage network infrastructure, office hardware, and CCTV.
          </p>
          <div className="flex flex-wrap gap-2 mt-4">
            <span className="bg-blue-500/20 text-blue-400 px-3 py-1 rounded-full text-sm border border-blue-400">Python</span>
            <span className="bg-blue-500/20 text-blue-400 px-3 py-1 rounded-full text-sm border border-blue-400">FastAPI</span>
            <span className="bg-blue-500/20 text-blue-400 px-3 py-1 rounded-full text-sm border border-blue-400">React</span>
            <span className="bg-blue-500/20 text-blue-400 px-3 py-1 rounded-full text-sm border border-blue-400">TypeScript</span>
            <span className="bg-blue-500/20 text-blue-400 px-3 py-1 rounded-full text-sm border border-blue-400">AI</span>
          </div>
        </div>

        {/* Experience Item 2 */}
        <div className="p-6 rounded-lg shadow-lg bg-transparent border border-gray-700 transition-all duration-300 hover:shadow-blue-500/50 hover:border-blue-400" itemScope itemType="http://schema.org/JobPosting">
          <div className="text-gray-400 text-sm" itemProp="datePosted">September 2024 – Present</div>
          <h3 className="text-xl font-semibold text-white" itemProp="title">Full-Stack Developer &amp; Systems Engineer (Contract) · Trusted Raed Freelancer</h3>
          <p className="text-gray-300 mt-2" itemProp="description">
            Build and maintain web-based systems end to end, engineer backend integrations with PostgreSQL and Supabase, and deploy and support cloud applications in production.
          </p>
          <div className="flex flex-wrap gap-2 mt-4">
            <span className="bg-blue-500/20 text-blue-400 px-3 py-1 rounded-full text-sm border border-blue-400">React</span>
            <span className="bg-blue-500/20 text-blue-400 px-3 py-1 rounded-full text-sm border border-blue-400">TypeScript</span>
            <span className="bg-blue-500/20 text-blue-400 px-3 py-1 rounded-full text-sm border border-blue-400">PostgreSQL</span>
            <span className="bg-blue-500/20 text-blue-400 px-3 py-1 rounded-full text-sm border border-blue-400">Supabase</span>
          </div>
        </div>

        {/* Experience Item 3 */}
        <div className="p-6 rounded-lg shadow-lg bg-transparent border border-gray-700 transition-all duration-300 hover:shadow-blue-500/50 hover:border-blue-400" itemScope itemType="http://schema.org/JobPosting">
          <div className="text-gray-400 text-sm" itemProp="datePosted">September 2022 – February 2023</div>
          <h3 className="text-xl font-semibold text-white" itemProp="title">Systems &amp; Integration Associate · SITACO</h3>
          <p className="text-gray-300 mt-2" itemProp="description">
            Tested and configured multi-city stock and POS systems, diagnosed production issues, and documented operational workflows.
          </p>
          <div className="flex flex-wrap gap-2 mt-4">
            <span className="bg-blue-500/20 text-blue-400 px-3 py-1 rounded-full text-sm border border-blue-400">POS Systems</span>
            <span className="bg-blue-500/20 text-blue-400 px-3 py-1 rounded-full text-sm border border-blue-400">React</span>
          </div>
        </div>

        {/* Experience Item 4 */}
        <div className="p-6 rounded-lg shadow-lg bg-transparent border border-gray-700 transition-all duration-300 hover:shadow-blue-500/50 hover:border-blue-400" itemScope itemType="http://schema.org/JobPosting">
          <div className="text-gray-400 text-sm" itemProp="datePosted">August 2021 – August 2022</div>
          <h3 className="text-xl font-semibold text-white" itemProp="title">Pre-Sales Engineer · Afaqy Tech</h3>
          <p className="text-gray-300 mt-2" itemProp="description">
            Delivered technical demos and training, deployed real-time GPS tracking systems on cellular towers during Riyadh Season, and handled field configuration.
          </p>
          <div className="flex flex-wrap gap-2 mt-4">
            <span className="bg-blue-500/20 text-blue-400 px-3 py-1 rounded-full text-sm border border-blue-400">GPS</span>
            <span className="bg-blue-500/20 text-blue-400 px-3 py-1 rounded-full text-sm border border-blue-400">IoT</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;

