import React from "react";
import BotCard from "./BotCard";

function YourBotArmy({ yourBotArmy, releaseBot, dischargeBot }) {
  if (!yourBotArmy) {
    return null;
  }
  //your bot army code here...
  return (
    <div className="ui segment inverted olive bot-army">
      <div className="ui five column grid">
        <div className="row bot-army-row">
          <h2>Your Bot Army</h2>
          {yourBotArmy.map((bot) => (
            <BotCard 
            key={bot.id} 
            bot={bot} 
            releaseBot={releaseBot} 
            dischargeBot={dischargeBot} 
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default YourBotArmy;
