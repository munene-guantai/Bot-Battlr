import React from "react";

function SortBar({ sortBy }) {
    return (
        <div className="ui menu">
            <div className="header item">Sort By:</div>
            <div className="item" onClick={() => sortBy("health")}>
                Health
            </div>
            <div className="item" onClick={() => sortBy("damage")}>
                Damage
            </div>
            <div className="item" onClick={() => sortBy("armor")}>
                Armor
            </div>
        </div>
    );
}

export default SortBar;