import { supabase } from '../../utils/supabaseClient';
import { useRouter } from 'next/router';
import ContactForm from '../../components/ContactForm';

export async function getServerSideProps({ params }) {
  const { id } = params;
  const { data: tutor, error } = await supabase
    .from('tutors')
    .select('*')
    .eq('id', id)
    .single();

  return {
    props: { tutor },
  };
}

const TutorDetails = ({ tutor }) => {
  const router = useRouter();

  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{tutor.full_name}</h1>
      <p>{tutor.subject_expertise.join(', ')}</p>
      <p>{tutor.bio}</p>
      <button onClick={() => document.getElementById('contact-form').style.display = 'block'}>
        Contact Tutor
      </button>

      <div id="contact-form" style={{ display: 'none', marginTop: '20px' }}>
        <ContactForm tutorId={tutor.id} />
      </div>
    </div>
  );
};

export default TutorDetails;
