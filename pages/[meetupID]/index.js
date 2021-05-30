import MeetupDetail from "../../components/meetups/MeeupDetail";

const MeetUpDetail = () => {
  return (
    <MeetupDetail
      image="https://i2.wp.com/handluggageonly.co.uk/wp-content/uploads/2016/10/Hand-Luggage-Only-2-1.jpg?w=1600&ssl=1"
      title="first meetup"
      address="Some street, your city"
      description="this is the first meetup"
    />
  );
};

export async function getStaticPaths() {
  return {
    fallback: false,
    paths: [
      {
        params: {
          meetupID: "m1",
        },
      },
      {
        params: {
          meetupID: "m2",
        },
      },
    ],
  };
}

export async function getStaticProps(context) {
  //fetch data for a single meetup

  const meetupID = context.params.meetupID;

  console.log(meetupID);

  return {
    props: {
      meetupData: {
        id: "m1",
        image:
          "https://i2.wp.com/handluggageonly.co.uk/wp-content/uploads/2016/10/Hand-Luggage-Only-2-1.jpg?w=1600&ssl=1",
        title: "First meetup",
        address: "Some Street, Your City",
        description: "this is the first meetup",
      },
    },
  };
}

export default MeetUpDetail;
