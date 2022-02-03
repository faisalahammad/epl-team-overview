import { faLongArrowAltRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Card, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const TeamCard = (props) => {
  const { idTeam, strTeam, strTeamBadge, strSport } = props.team;
  return (
    <Col>
      <Card className="text-center pt-5 pb-3">
        <Card.Img variant="top" src={strTeamBadge} />
        <Card.Body>
          <Card.Title>{strTeam}</Card.Title>
          <Card.Text>Sports: {strSport}</Card.Text>
          <Link to={`/team/${idTeam}`} className="btn btn-dark">
            Explore <FontAwesomeIcon icon={faLongArrowAltRight} />
          </Link>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default TeamCard;
