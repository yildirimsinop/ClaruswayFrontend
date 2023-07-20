import React, { useEffect, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
const PersonDetail = () => {
  //! navigate ile gonderilen state'i yakalamak icin useLocation Hook'u kullanilabilir.
  //! Bu durumda veri, state ile geldigi icin yeniden fetch yapilmasina gerek kalmaz
  // let { state: person } = useLocation();
  let navigate = useNavigate();
  // console.log(person);
  //! Linkteki parametreyi almak icin useParams Hook'u kullanilabilir.
  let { id } = useParams();
  console.log({ id });
  const [person, setPerson] = useState({});

  const getPerson = () => {
    axios(`https://reqres.in/api/users/${id}`)
      .then((res) => setPerson(res.data.data))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getPerson();
  }, []);

  return (
    <div className="container text-center">
      <h3>
        {person?.first_name} {person?.last_name}
      </h3>
      <img className="rounded" src={person?.avatar} alt="" />
      <p>{person?.email}</p>
      <div>
        <button onClick={() => navigate("/")} className="btn btn-success me-2">
          Go Home
        </button>
        <button onClick={() => navigate(-1)} className="btn btn-warning">
          Go Back
        </button>
      </div>
    </div>
  );
};

export default PersonDetail;
