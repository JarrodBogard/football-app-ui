import { useContext } from "react";
import { AppContext } from "../contexts/AppContext";

const FantasyStats = (props) => {
  const { fantasyPlayerStats } = useContext(AppContext);

  const foundPlayer = fantasyPlayerStats.find(
    (player) => player.PlayerID === props.player.PlayerID
  );

  return (
    <ul className="player-stats-list">
      <li className="homepage-list-items">
        <p>
          <span>Fantasy Pts:</span>{" "}
          <span className="list-span">{foundPlayer.FantasyPoints}</span>
        </p>
        <p>
          <span>Status:</span>
          <span
            className="list-span"
            style={
              foundPlayer.InjuryStatus === null
                ? { color: "green" }
                : { color: "red" }
            }
          >
            {foundPlayer.InjuryStatus === null ? "Healthy" : "Injured"}
          </span>
        </p>
        <p>
          <span>Next Game:</span>{" "}
          <span className="list-span">{foundPlayer.Opponent}</span>
        </p>
      </li>
    </ul>
  );

  // return (
  //   <ul className="player-stats-list">
  //     {fantasyPlayerStats.map((player) => (
  //       <>
  //         {player.PlayerID === props.player.PlayerID ? (
  //           <li className="homepage-list-items">
  //             <p>
  //               <span>Fantasy Pts:</span>{" "}
  //               <span className="list-span">{player.FantasyPoints}</span>
  //             </p>
  //             <p>
  //               <span>Status:</span>
  //               <span className="list-span">
  //                 {player.InjuryStatus === null ? "Healthy" : "Injured"}
  //               </span>
  //             </p>
  //             <p>
  //               <span>Next Game:</span>{" "}
  //               <span className="list-span">{player.Opponent}</span>
  //             </p>
  //           </li>
  //         ) : null}
  //       </>
  //     ))}
  //   </ul>
  // );
};

export default FantasyStats;
