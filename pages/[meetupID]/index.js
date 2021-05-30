import { MongoClient, ObjectId } from "mongodb";
import { Fragment } from "react";
import Head from "next/head";
import MeetupDetail from "../../components/meetups/MeeupDetail";

const MeetUpDetail = (props) => {
  return (
    <Fragment>
      <Head>
        <title>{props.meetupData.title}</title>
        <meta name="description" content={props.meetupData.description} />
      </Head>
      <MeetupDetail
        image={props.meetupData.image}
        title={props.meetupData.title}
        address={props.meetupData.address}
        description={props.meetupData.description}
      />
    </Fragment>
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

  console.log(selectedMeetup);

  return {
    props: {
      meetupData: {
        id: selectedMeetup._id.toString(),
        title: selectedMeetup.title,
        address: selectedMeetup.address,
        image: selectedMeetup.image,
        description: selectedMeetup.description,
      },
    },
  };
}

export default MeetUpDetail;
