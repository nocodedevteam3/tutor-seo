import HeroSection from '../components/HeroSection';
import FeaturesSection from '../components/FeaturesSection';
import TutorSEO from '../components/TutorCard'; // This will be created in the next step
import FAQSection from '../components/FAQSection';
import Footer from '../components/Footer';
import { supabase } from '../utils/supabaseClient';

export async function getServerSideProps() {
  const { data: tutors } = await supabase
    .from('tutors')
    .select('id, full_name, subject_expertise, profile_picture_url, location');

  return { props: { tutors } };
}


const Home = ({ tutors }) => (
  <>
    <HeroSection />
    <FeaturesSection />
    <div>
      <h2>Tutors Directory</h2>
      <div>
        {tutors?.map((tutor) => (
          <TutorSEO key={tutor.id} tutor={tutor} />
        ))}
      </div>
    </div>
    <FAQSection />
    <Footer />
  </>
);

export default Home;
