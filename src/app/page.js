import HeroSection from "@/components/homePage/heroSection";
import ProblemSection from "@/components/homePage/problemSection";
// import ComparisonSection from "@/components/homePage/comparisonSection";
import IntegrativePlateSection from "@/components/homePage/integrativePlateSection";
import CoursesSection from "@/components/homePage/coursesSection";
import WhoLearnsWithUsSection from "@/components/homePage/whoLearnsWithUsSection";
import AcademicSupportSection from "@/components/homePage/academicSupportSection";
import FaqSection from "@/components/homePage/faqSection";
import ContactConnectSection from "@/components/homePage/contactConnectSection";
import FacultyScrollSection from "@/components/homePage/facultyScrollSection";
import KnowledgeLevelSection from "@/components/homePage/knowledgeLevelSection";
import ImpactRecommendationSection from "@/components/homePage/impactRecommendationSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <ProblemSection />
      {/* <ComparisonSection /> */}
      <IntegrativePlateSection />
      <CoursesSection />
      <WhoLearnsWithUsSection />
      <KnowledgeLevelSection />
      <ImpactRecommendationSection />
      <AcademicSupportSection />
      <FacultyScrollSection />
      <FaqSection />
      <ContactConnectSection />

    </>
  );
}
