import { MongoClient } from "mongodb";

import MeetupList from "../components/meetups/MeetupList";

const DUMMY_MEETUPS = [
  {
    id: "m1",
    title: "First Meetup",
    image:
      "https://i2.wp.com/handluggageonly.co.uk/wp-content/uploads/2016/10/Hand-Luggage-Only-2-1.jpg?w=1600&ssl=1",
    address: "Some address, your city, state",
    description: "First Meetup",
  },
  {
    id: "m1",
    title: "Second Meetup",
    image:
      "https://i2.wp.com/handluggageonly.co.uk/wp-content/uploads/2016/10/Hand-Luggage-Only-2-1.jpg?w=1600&ssl=1",
    address: "Some address, your city, state",
    description: "Second Meetup",
  },
  {
    id: "m1",
    title: "Third Meetup",
    image:
      "https://i2.wp.com/handluggageonly.co.uk/wp-content/uploads/2016/10/Hand-Luggage-Only-2-1.jpg?w=1600&ssl=1",
    address: "Some address, your city, state",
    description: "Third Meetup",
  },
];

const HomePage = (props) => {
  return <MeetupList meetups={props.meetups} />;
};

// export async function getServerSideProps(context) {
//   const req = context.req;
//   const res = context.res;

//   //fetch data from API or file system
//   return {
//     props: DUMMY_MEETUPS,
//   };
// } //runs for every incoming request

export async function getStaticProps() {
  //fetch data from an API
  //read files from file system

  const client = MongoClient.connect("mondoconnecturl");

  const db = client.db();

  const meetUpsCollection = db.collection("meetups");

  const meeetups = await meetUpsCollection.find().toArray();

  client.close();

  return {
    props: {
      meetups: meetups.map((meetup) => ({
        title: meetup.title,
        address: meetup.address,
        image: meetup.image,
        id: meetup._id.toString(),
      })),
    },
    revalidate: 10, //number of secs next waits to revalidate data on this page...
  }; //always return an object from this funciton
}

export default HomePage;
