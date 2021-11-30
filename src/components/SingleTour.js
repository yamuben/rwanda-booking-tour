import React from "react";
import { Typography, Divider, Card, Image } from "antd";

const { Title, Paragraph, Text, Link } = Typography;

const gridStyle = {
    width: '50%',
    height:"150px",
    overflow: 'hidden',
    textAlign: 'center',
  };

const SingleTour = ({ tour }) => {
  return (
    <div className="singletour-container">
      <Typography>
        <Title> {tour.title}</Title>

        <span style={{ display: "flex", justifyContent: "space-between" }}>
          <label style={{ textAlign: "left", marginTop: "20px" }} for="value">
            Date Scheduled: <h6 id="value"> {tour?.dateScheduled}</h6>{" "}
          </label>
          <label style={{ textAlign: "left", marginTop: "0px" }} for="value">
            Seats Available:{" "}
            <h6 id="value">
              {" "}
              {tour.available}/ {tour.seats}
            </h6>{" "}
          </label>

          <label style={{ textAlign: "left", marginTop: "20px" }} for="value">
            Due Date Scheduled: <h6 id="value"> {tour.dueDate}</h6>{" "}
          </label>
        </span>

        <Image preview={false} src={tour.images[0]} width="100%" />
        <Paragraph> {tour.description}</Paragraph>
        <Divider />
        <Paragraph>{tour.tripDescription}</Paragraph>

        <span style={{ display: "flex", justifyContent: "space-between" }}>
          <label style={{ textAlign: "left", marginTop: "20px" }} for="value">
            Tour posted by: <h6 id="value"> {tour?.user.name}</h6>{" "}
            <h6 id="value"> {tour?.user.phone}</h6>{" "}
          </label>
        </span>
      </Typography>
      <Divider/>
      
  <Card title="Garelly">
      {tour.images.map((image, i) =>(

    <Card.Grid style={gridStyle}>
    <Image src={image} width="100%" />
</Card.Grid>
      ))}

    </Card>
    </div>
  );
};

export default SingleTour;
