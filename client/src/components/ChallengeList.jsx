import React from 'react';
import ChallengeListEntry from './ChallengeListEntry.jsx';

// takes in props.challenges, and maps over to create ChallengeListEntry
var ChallengeList = ({challenges}) => (
  <div> 
   {challenges.map(function(challenge, i) {
    return (
      <div key={challenge.id}> 
        <h3> Challenge {i + 1}</h3> 
        <ChallengeListEntry challenge={challenge} />
      </div>
    );
   })}
  </div>
  );

ChallengeList.propTypes = {
  challenges: React.PropTypes.array.isRequired
};

export default ChallengeList;