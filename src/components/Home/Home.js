import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import TeamCard from '../TeamCard/TeamCard';

const Home = () => {
  const [teams, setTeams] = useState([]);
  useEffect(() => {
    const url = `https://www.thesportsdb.com/api/v1/json/2/search_all_teams.php?l=English%20Premier%20League`;
    fetch(url)
      .then(res => res.json())
      .then(data => setTeams(data.teams))
      // .then(data => console.log(data.teams))
  }, [])
  return (
    <div className='home py-5'>
      <div className="container">
        <Row xs={1} sm={2} md={3} className="g-4">
          {teams.map((team) => <TeamCard team={team} key={team.idTeam}></TeamCard>)}
        </Row>
      </div>
    </div>
  );
};

export default Home;