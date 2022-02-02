import React, { useEffect, useState } from 'react';
import { Badge, Table } from 'react-bootstrap';
import TeamRank from '../TeamRank/TeamRank';

const PointsTable = () => {
  const [teams, setTeams] = useState([]);
  const season = '2021-2022';
  useEffect(() => {
    const url = `https://www.thesportsdb.com/api/v1/json/2/lookuptable.php?l=4328&s=${season}`;
    fetch(url)
      .then(res => res.json())
      .then(data => setTeams(data.table))
  }, [])

  return (
    <div className='points-table py-5 text-light'>
      <div className="container">
        <div className="row">
          <h2>Points Table of {season}</h2>
          <Table striped bordered hover variant='dark' className='mt-3'>
            <thead>
              <tr>
                <th>#</th>
                <th>Team</th>
                <th>P</th>
                <th>W</th>
                <th>L</th>
                <th>D</th>
                <th>GA</th>
                <th>GC</th>
                <th>GD</th>
                <th>Form</th>
                <th>PO</th>
              </tr>
            </thead>
            <tbody>
              {
                teams.map(team => <TeamRank team={team} key={team.idTeam} />)
              }
            </tbody>
          </Table>

          <div className="promotion mt-3">
            <h4>Season end promotion:</h4>
            <Badge pill bg='success'>Champions League</Badge>
            <Badge pill bg='primary'>Euro League</Badge>
            <Badge pill bg='danger'>Relegation</Badge>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PointsTable;