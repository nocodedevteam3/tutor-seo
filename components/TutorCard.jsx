import Image from 'next/image';

const TutorCard = ({ tutor }) => (
  <div className="tutor-card">
    <Image
      src={tutor.profile_picture_url}
      alt={tutor.full_name}
      width={100}
      height={100}
      layout="fixed"
      className="tutor-image"
    />
    <h3 className="tutor-name">{tutor.full_name}</h3>
    <p className="tutor-qualification">{tutor.education_level}</p>
    <p className="tutor-subjects">{tutor.subject_expertise ? tutor.subject_expertise.join(', ') : 'N/A'}</p>
    <p className="tutor-location"><i className="location-icon"></i> {tutor.location}</p>
    <p className="tutor-languages"><i className="language-icon"></i> {tutor.languages ? tutor.languages.join(', ') : 'N/A'}</p>
    <p className="tutor-bio">{tutor.bio}</p>
    <button className="contact-button">Contact Tutor</button>
  </div>
);

export default TutorCard;
