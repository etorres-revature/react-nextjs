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

const HomePage = () => {
  return <MeetupList meetups={DUMMY_MEETUPS} />;
};

export default HomePage;
