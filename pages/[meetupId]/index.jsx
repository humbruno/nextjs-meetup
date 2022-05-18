import MeetupDetail from '../../components/meetups/MeetupDetail';

const MeetupDetails = ({ meetupData }) => {
  return (
    <MeetupDetail
      image="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/Frauenkirche_and_Neues_Rathaus_Munich_March_2013.JPG/2560px-Frauenkirche_and_Neues_Rathaus_Munich_March_2013.JPG"
      title="A first meetup"
      address="Some Street 5, Some City"
      description={meetupData.description}
    />
  );
};

export async function getStaticPaths() {
  return {
    fallback: false,
    paths: [
      {
        params: {
          meetupId: 'm1',
        },
      },
      {
        params: {
          meetupId: 'm2',
        },
      },
    ],
  };
}

export async function getStaticProps(context) {
  const meetupId = context.params.meetupId;

  return {
    props: {
      meetupData: {
        image:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/Frauenkirche_and_Neues_Rathaus_Munich_March_2013.JPG/2560px-Frauenkirche_and_Neues_Rathaus_Munich_March_2013.JPG',
        id: meetupId,
        title: 'A first meetup',
        address: 'Some Street 56, Some City',
        description: `The ${meetupId} meetup description`,
      },
    },
  };
}

export default MeetupDetails;
