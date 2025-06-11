import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export default function CicdPipelineSetupPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow bg-background py-12">
        <section className="container-max">
          <h1 className="text-4xl font-bold text-primary mb-6">CI/CD Pipeline Setup</h1>
          <p className="text-lg text-muted-foreground mb-8">
            Automating your software delivery process for faster, more reliable deployments.
          </p>
          {/* Add more specific content about CI/CD pipeline setup here */}
          <div className="prose dark:prose-invert">
            <p>We design and implement robust CI/CD pipelines that automate every stage of your software development lifecycle, from code commit to production deployment.</p>
            <ul>
              <li>Automated Build & Test</li>
              <li>Continuous Integration</li>
              <li>Continuous Delivery/Deployment</li>
              <li>Pipeline Monitoring & Optimization</li>
            </ul>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
} 