import HeroSection from "@/components/homePage/heroSection";
import ProblemSection from "@/components/homePage/problemSection";
import ComparisonSection from "@/components/homePage/comparisonSection";
import IntegrativePlateSection from "@/components/homePage/integrativePlateSection";
import CoursesSection from "@/components/homePage/coursesSection";
import WhoLearnsWithUsSection from "@/components/homePage/whoLearnsWithUsSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <ProblemSection />
      <ComparisonSection />
      <IntegrativePlateSection />
      <CoursesSection />
      {/* <WhoLearnsWithUsSection /> */}
    </>
  );
}
