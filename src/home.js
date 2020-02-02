import React, { useState, useEffect } from "react";
import {
  Button,
  Checkbox,
  Form,
  Dropdown,
  Loader,
  Grid,
  Icon,
  Card,
  Image
} from "semantic-ui-react";
import { symptoms, disease } from "./constants";
import Map from "./map";
import axios from "axios";
import { rootUrl } from "./constants";
import image0 from "./images/0.jpg";
import image1 from "./images/1.jpg";
import image2 from "./images/2.jpg";

import "./home.css";
const stateOptions = [];
symptoms.map(symptopm =>
  stateOptions.push({
    key: symptopm,
    value: symptopm,
    text: symptopm.replace(/_/g, " ")
  })
);
const diseaseOptions = [];
disease.map(symptopm =>
  diseaseOptions.push({
    key: symptopm,
    value: symptopm,
    text: symptopm.replace(/_/g, " ")
  })
);
const options = [
  { key: 1, text: "Male", value: 1 },
  { key: 2, text: "Female", value: 2 },
  { key: 3, text: "Others", value: 3 }
];
export default function Home(props) {
  const [height, setheight] = useState("");
  const [weight, setweight] = useState("");
  const [age, setage] = useState("");
  const [symptom, setSymptom] = useState([]);
  const [diseaseState, setDisease] = useState([]);
  const [pastD, setPastD] = useState([]);
  const [results, setResults] = useState(undefined);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const token = localStorage.getItem("user-token");
    if (!token) {
      props.history.push("/login/");
    }
  }, []);
  const handleSubmit = () => {
    if (height && weight && age && symptom.length > 0) {
      setLoading(true);
      axios({
        method: "post",
        url: `${rootUrl}results/`,
        data: {
          symptoms: JSON.stringify(symptom)
        }
      })
        .then(function(response) {
          setTimeout(() => {
            setLoading(false);
            setResults(response.data);
            console.log(response);
          }, 1000);
        })
        .catch(function(error) {
          console.log(error.response);
          alert(JSON.stringify(error.response.data));
        });
    } else {
      alert("Some of the fields are empty!");
      return;
    }
  };
  return (
    <>
      {loading ? (
        <>
          <Loader style={{ marginTop: "500%" }} active inline="centered" />
        </>
      ) : (
        <>
          {results ? (
            <>
              <div className="home-result-container" style={{ width: "600px" }}>
                <div className="home-form ui one column grid">
                  <div className="erow">
                    <div className="column">
                      <h3
                        className="ui header no-anchor"
                        id="types-1"
                        style={{ margin: "0px" }}
                      >
                        Results
                      </h3>
                      <p>
                        You are suspectible to be diagnosed with the following
                        disease.
                      </p>
                    </div>
                  </div>
                  <div className="row">
                    <div className="column">
                      <i>{results.disease}</i>
                      <a
                        href={`https://www.google.com/search?q=${results.disease}`}
                        target="_blank"
                      >
                        <Icon name="search" style={{ marginLeft: "10px" }} />
                      </a>
                    </div>
                  </div>
                  <div className="row">
                    <Card.Group>
                      {results.doctors.map(doctor => (
                        <Card>
                          <Card.Content>
                            <Image
                              floated="right"
                              size="mini"
                              src={`${
                                parseInt(doctor.id) % 3 === 0
                                  ? image0
                                  : parseInt(doctor.id) % 3 === 1
                                  ? image1
                                  : image2
                              }`}
                            />
                            <Card.Header>{doctor.name}</Card.Header>
                            <Card.Meta>{doctor.address}</Card.Meta>
                            <Card.Description>
                              Specialist in{" "}
                              {doctor.disease.map((dis, i) => {
                                console.log(dis);
                                if (i < 2) return `${dis}, `;
                                if (i === 3) return `${dis}.`;
                                return "";
                              })}
                            </Card.Description>
                          </Card.Content>
                          <Card.Content extra>
                            <div className="ui two buttons">
                              <Button basic color="green">
                                Contact
                              </Button>
                            </div>
                          </Card.Content>
                        </Card>
                      ))}
                    </Card.Group>
                  </div>
                  <div className="row">
                    <Map width="600px" doctors={results.doctors} />
                  </div>
                </div>
              </div>
            </>
          ) : (
            <div className="home-container">
              <div className="home-form ui vertically padded grid">
                <div className="equal width row">
                  <div className="column">
                    <div>
                      <h3
                        className="ui header no-anchor"
                        id="types-1"
                        style={{ margin: "0px" }}
                      >
                        Welcome to Drishti
                      </h3>
                      <p>
                        Please take a few moments to provide these information
                        as accurately as possible.
                      </p>
                    </div>
                  </div>
                </div>
                <Form
                  style={{ width: "100%", paddingBottom: "20px" }}
                  onSubmit={handleSubmit}
                >
                  <Form.Field width={16}>
                    <label>Height</label>
                    <input
                      placeholder="Height in cm"
                      type="text"
                      value={height}
                      onChange={e => setheight(e.target.value)}
                    />
                  </Form.Field>
                  <Form.Field width={16}>
                    <label>Weight</label>
                    <input
                      placeholder="Weight in kg"
                      type="text"
                      value={weight}
                      onChange={e => setweight(e.target.value)}
                    />
                  </Form.Field>
                  <Form.Field width={16}>
                    <label>Age</label>
                    <input
                      placeholder="Age"
                      type="text"
                      value={age}
                      onChange={e => setage(e.target.value)}
                    />
                  </Form.Field>
                  <Form.Field width={16}>
                    <label>Gender</label>
                    <Dropdown options={options} selection />
                  </Form.Field>
                  <Form.Field>
                    <label>Symptoms</label>
                    <Dropdown
                      placeholder="Select Symptoms. A maximum of 5 symptoms can be selected"
                      fluid
                      multiple
                      search
                      selection
                      onChange={(e, { value }) => {
                        if (value.length <= 5) {
                          setSymptom(value);
                        }
                      }}
                      options={stateOptions}
                      value={symptom}
                    />
                  </Form.Field>
                  <Form.Field width={16}>
                    <label>Genetic History of Diseases</label>
                    <Dropdown
                      placeholder="Select diseases which affect your family"
                      fluid
                      multiple
                      search
                      selection
                      onChange={(e, { value }) => setDisease(value)}
                      options={diseaseOptions}
                      value={diseaseState}
                    />
                  </Form.Field>
                  <Form.Field width={16}>
                    <label>Any previous medical record</label>
                    <Dropdown
                      placeholder="Select diseases which affected you in past!"
                      fluid
                      multiple
                      search
                      selection
                      onChange={(e, { value }) => setPastD(value)}
                      options={diseaseOptions}
                      value={pastD}
                    />
                  </Form.Field>
                  <Button positive type="submit">
                    Submit
                  </Button>
                </Form>
              </div>
            </div>
          )}
        </>
      )}
    </>
  );
}
