import React, { useState } from "react";
import { Row } from "react-bootstrap";

import { useQuery } from "react-query";
import Expand from "./Accordion";

const getContacts = async () => {
  const response = await fetch(
    "https://rapid-api5247.herokuapp.com/api/contacts"
  );
  return response.json();
};

const Home = () => {
  const { status, data , error } = useQuery("contacts", getContacts);
  console.log(data);
  const [searchTerm, setSearchTerm] = useState("");

  if (status === "loading") {
    return (
      <div>
        <h1>loading...</h1>
      </div>
    ); // loading state
  }

  if (status === "error") {
    return <div>{error.message}</div>; // error state
  }

  return (
    <>
      <input
        type="text"
        placeholder="Search name"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      {data.contacts
        .filter((val) => {
          if (searchTerm === "") {
            return val;
          } else if (
            val.name.toLowerCase().includes(searchTerm.toLowerCase())
          ) {
            return val;
          }
        })
        .map((c) => (
          <Row key={`c-${c._id}`}>
            <>
              <Expand c={c} />
            </>
          </Row>
        ))}
    </>
  );
};

export default Home;
