import React, { useState } from "react";
import YourBotArmy from "./YourBotArmy";
import BotCollection from "./BotCollection";
import SortBar from "./SortBar";
import BotSpecs from "./BotSpecs";

function BotsPage() {
  const [botCollection, setBotCollection] = useState([]);
  const [yourBotArmy, setYourBotArmy] = useState([]);
  const [sortType, setSortType] = useState("");

  const sortBy = (property) => {
    const sortedCollection = [...botCollection].sort(
      (a, b) => b[property] - a[property]
    );
    setBotCollection(sortedCollection);
    setSortType(property);
  };

  const enlistBot = (bot) => {
    if (!yourBotArmy.some((b) => b.id ===bot.id)) {
      setYourBotArmy((prevArmy) => [...prevArmy, bot]);
    }
  };

  const releaseBot = (bot) => {
    setYourBotArmy((prevArmy) => prevArmy.filter((b) => b.id !== bot.id));
  };

  const dischargeBot = (bot) => {
    setBotCollection((prevCollection) => prevCollection.filter((b) => b.id !== bot.id));
    setYourBotArmy((prevArmy) => prevArmy.filter((b) => b.id !== bot.id));
  };

  //start here with your code for step one

  return (
    <div>
      <YourBotArmy yourBotArmy={yourBotArmy} releaseBot={releaseBot} dischargeBot={dischargeBot} />
      <SortBar sortBy={sortBy} />
      <BotCollection botCollection={botCollection} enlistBot={enlistBot} />
    </div>
  );
}

export default BotsPage;
