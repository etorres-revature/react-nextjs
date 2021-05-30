//localhost:3000/news/**
import { useRouter } from "next/router";

const ImportantPage = () => {
  const router = useRouter();

  const newsID = router.query.newsID;

  //send request to backend API
  //to fetch the news id with newsID variable

  return <h1>The News - something important happened</h1>;
};

export default ImportantPage;
