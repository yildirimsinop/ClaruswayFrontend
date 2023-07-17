import { useState, useEffect } from "react";
import AddTutorial from "../components/AddTutorial";
import TutorialList from "../components/TutorialList";
import axios from "axios";

const Home = () => {
  const [tutorials, setTutorials] = useState([]);

  const BADE_URL = "https://tutorial-api.fullstack.clarusway.com/tutorials/";

  const getTutorials = async () => {
    const data = await axios(BADE_URL);
    console.log(data.data);
    setTutorials(data.data);
  };

  console.log(tutorials);

  useEffect(() => {
    getTutorials();
  });

  return (
    <>
      <AddTutorial />
      <TutorialList />
    </>
  );
};

export default Home;
