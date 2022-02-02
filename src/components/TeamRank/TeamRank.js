import React from 'react';

const TeamRank = (props) => {
  const { intRank, strTeam, intPlayed, intWin, intLoss, intDraw, intGoalsFor, intGoalsAgainst, intGoalDifference, strForm, intPoints, strDescription } = props.team;
  let promotionColor = 'unset';
  if (strDescription == "Promotion - Champions League (Group Stage)") {
    promotionColor = '#1a8754';
  }else if (strDescription == "Promotion - Europa League (Group Stage)") {
    promotionColor = '#0d6efd';
  }else if (strDescription == "Relegation - Championship") {
    promotionColor = '#dc3545';
  }
  const promotionStyle = {
    borderLeft: `3px solid ${promotionColor}`
  }
  return (
    <>
      <tr>
        <td style={promotionStyle}>{ intRank }</td>
        <td>{ strTeam }</td>
        <td>{ intPlayed }</td>
        <td>{ intWin }</td>
        <td>{ intLoss }</td>
        <td>{ intDraw }</td>
        <td>{ intGoalsFor }</td>
        <td>{ intGoalsAgainst }</td>
        <td>{ intGoalDifference }</td>
        <td>{ strForm }</td>
        <td>{ intPoints }</td>
      </tr>
    </>
  );
};

export default TeamRank;