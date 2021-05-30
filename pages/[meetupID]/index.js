import { MongoClient, ObjectId } from "mongodb";
import MeetupDetail from "../../components/meetups/MeeupDetail";

const MeetUpDetail = (props) => {
  return (
    <MeetupDetail
      image={props.meetupData.image}
      title={props.meetupData.title}
      address={props.meetupData.address}
      description={props.meetupData.description}
    />
  );
};

export async function getStaticPaths() {
  const client = MongoClient.connect("mondoconnecturl");

  const db = client.db();

  const meetUpsCollection = db.collection("meetups");

  const meeetups = await meetUpsCollection.find({}, { _id: 1 }).toArray();

  (await client).close();

  return {
    fallback: false,
    paths: meeetups.map((meetup) => ({
      params: { meetupID: meetup._id.toString() },
    })),
  };
}

export async function getStaticProps(context) {
  //fetch data for a single meetup

  const meetupID = context.params.meetupID;

  const client = MongoClient.connect("mondoconnecturl");

  const db = client.db();

  const meetUpsCollection = db.collection("meetups");

  const selectedMeetup = await meetUpsCollection.findOne({
    _id: ObjectId(meetupID),
  });

  client.clost();

  return {
    props: {
      meetupData: selectedMeetup,
    },
  };
}

export default MeetUpDetail;
