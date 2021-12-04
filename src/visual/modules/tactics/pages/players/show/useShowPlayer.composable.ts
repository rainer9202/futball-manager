import { ref, onMounted } from "vue";
import { useRoute }       from "vue-router";

import { players } from "src/infrastructure/data/players";

export default function UseShowPlayerComposable() {

  /************  Private initialization   ************/
  const $route  = useRoute();
  const routeId = $route.params.id;

  /************  Variables   ************/
  const metaData      = { title: "Player Details", titleTemplate: ( title: any ) => `${ title } - Football Manager` };
  // @ts-ignore
  const player        = players.find( player => player.player_key === parseInt( routeId ) );
  const playerDetails = {
    technical: [
      { label: "Corners", value: 10, active: false },
      { label: "Crossing", value: 11, active: false },
      { label: "Dribbling", value: 13, active: true },
      { label: "Finishing", value: 19, active: true },
      { label: "First Touch", value: 14, active: true },
      { label: "Free Kick", value: 13, active: false },
      { label: "Heading", value: 12, active: false },
      { label: "Long Shots", value: 12, active: true },
      { label: "Long Throws", value: 5, active: false },
      { label: "Marking", value: 12, active: false },
      { label: "Passing", value: 15, active: true },
      { label: "Penalty", value: 7, active: false },
      { label: "Tackling", value: 15, active: true },
      { label: "Technique", value: 15, active: true }
    ],
    mental   : [
      { label: "Aggression", value: 13, active: true },
      { label: "Anticipation", value: 15, active: true },
      { label: "Bravery", value: 15, active: false },
      { label: "Composure", value: 12, active: true },
      { label: "Concentration", value: 11, active: false },
      { label: "Decisions", value: 13, active: true },
      { label: "Determination", value: 14, active: false },
      { label: "Flair", value: 13, active: false },
      { label: "Leadership", value: 6, active: true },
      { label: "Off the ball", value: 14, active: true },
      { label: "Positioning", value: 14, active: true },
      { label: "Teamwork", value: 17, active: true },
      { label: "Vision", value: 15, active: false },
      { label: "Work Rate", value: 17, active: true }
    ],
    physical : [
      { label: "Acceleration", value: 15, active: true },
      { label: "Agility", value: 14, active: false },
      { label: "Balance", value: 12, active: true },
      { label: "Jumping", value: 12, active: false },
      { label: "Natural Fitness", value: 13, active: false },
      { label: "Pace", value: 13, active: true },
      { label: "Stamina", value: 15, active: true },
      { label: "Strength", value: 12, active: true },
      { label: "Height", value: "185 cm", active: false },
      { label: "Weight", value: "68 kg", active: false }
    ]
  };

  return {
    metaData,
    player,
    playerDetails
  };
}
