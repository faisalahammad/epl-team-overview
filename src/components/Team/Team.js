import { faFacebook, faInstagram, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faFlag, faFutbol, faGlobe, faMapMarkerAlt, faMars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './Team.css';



const Team = () => {
  const {id} = useParams();
  const [teams, setTeams] = useState([]);

  useEffect(() => {
    const url = `https://www.thesportsdb.com/api/v1/json/2/search_all_teams.php?l=English%20Premier%20League`;
    fetch(url)
      .then(res => res.json())
      .then(data => setTeams(data.teams))
  }, [])

  const currentTeam = teams.filter(team => team.idTeam === id);
  // const {strStadiumThumb, strTeamBadge} = currentTeam[0];
  // console.log(currentTeam[0]);
  // console.log(currentTeam);

  return (
    <div className='team text-light'>
      <div className="team--header text-center py-5">
        <img src={currentTeam[0]?.strStadiumThumb} alt={`${currentTeam[0]?.strTeam } stadium`} className='team--bg' />
        <div className="team--logo">
          <img src={currentTeam[0]?.strTeamBadge} alt={`${currentTeam[0]?.strTeam } logo`} />
        </div>
      </div>

      <div className="container py-5">
        <div className="row team--card py-5 px-2">
          <div className="col-md-8 col-sm-6">
            <h2>{ currentTeam[0]?.strTeam }</h2>
            <div className="team--info">
              <p><FontAwesomeIcon icon={faMapMarkerAlt}/> Founded: { currentTeam[0]?.intFormedYear }</p>
              <p><FontAwesomeIcon icon={faFlag}/> Country: { currentTeam[0]?.strCountry }</p>
              <p><FontAwesomeIcon icon={faFutbol}/> Sport Type: { currentTeam[0]?.strSport }</p>
              <p><FontAwesomeIcon icon={faMars}/> Gender: { currentTeam[0]?.strGender }</p>
            </div>
          </div>
          <div className="col-md-4 col-sm-6">
            <img src={currentTeam[0]?.strTeamBanner} alt={`${currentTeam[0]?.strTeam } banner`} className='img-fluid' />
          </div>
        </div>

        <div className="row team--history mt-5">
          <p>{ currentTeam[0]?.strStadiumDescription}</p>
          <p>{ currentTeam[0]?.strDescriptionEN}</p>
        </div>

        <div className="row mt-3">
          <div className="team--links text-center">
            <h3>Follow Us</h3>
            <ul className="mt-2">
              <li><a href={`https://${currentTeam[0]?.strTwitter}`}><FontAwesomeIcon icon={faTwitter} size="3x"/></a></li>
              <li><a href={`https://${currentTeam[0]?.strFacebook}`}><FontAwesomeIcon icon={faFacebook} size="3x"/></a></li>
              <li><a href={`https://${currentTeam[0]?.strInstagram}`}><FontAwesomeIcon icon={faInstagram} size="3x"/></a></li>
              <li><a href={`https://${currentTeam[0]?.strWebsite}`}><FontAwesomeIcon icon={faGlobe} size="3x"/></a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;