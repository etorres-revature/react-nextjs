import { useEffect, useState } from "react";
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
  const [meetups, setMeetups] = useState([]);

  useEffect(() => {
    //send http request and fetch data
    setMeetups(DUMMY_MEETUPS);
  }, []);

  return <MeetupList meetups={meetups} />;
};

export async const getStaticProps = () => {
//fetch data from an API
//read files from file system
return {
  props: {
    meetups: DUMMY_MEETUPS
  }
} //always return an object from this funciton
}

export default HomePage;
