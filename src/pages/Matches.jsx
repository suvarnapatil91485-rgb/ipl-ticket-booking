import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { supabase } from "../supabase";

function MatchCard(props) {
  return (
    <div className="match-card">
      <h2>
        {props.team1} vs {props.team2}
      </h2>

      <p>📍 {props.venue}</p>
      <p>📅 {props.date}</p>
      <p>⏰ {props.time}</p>

      <Link
  to="/booking"
  state={{
    team1: props.team1,
    team2: props.team2,
    venue: props.venue,
    date: props.date,
    time: props.time
  }}
>
  <button>Book Ticket</button>
</Link>
    </div>
  );
}

function Matches() {
  const [matches, setMatches] = useState([]);

  useEffect(() => {
    getMatches();
  }, []);

  async function getMatches() {
    const { data, error } = await supabase
      .from("matches")
      .select("*");

    if (error) {
      console.error("Supabase error:", error);
      return;
    }

    setMatches(data);
  }

  return (
    <main className="matches-page">
      <h1>Upcoming IPL Matches</h1>

      <div className="matches-grid">
        {matches.map((match) => (
          <MatchCard
            key={match.id}
            team1={match.team1}
            team2={match.team2}
            venue={match.venue}
            date={match.date}
            time={match.time}
          />
        ))}
      </div>
    </main>
  );
}

export default Matches;