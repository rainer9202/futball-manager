import { ref }     from "vue";
import { players } from "src/infrastructure/data/players";

export default function UsePlayersComposable() {

  /************  Variables   ************/
  const metaData = { title: "Players", titleTemplate: ( title: any ) => `${ title } - Football Manager` };
  const columns  = [
    {
      name    : "number",
      required: true,
      label   : "#",
      align   : "left",
      field   : ( row: { player_number: any; } ) => row.player_number,
      sortable: true
    },
    {
      name    : "name",
      required: true,
      label   : "PLAYER",
      align   : "left",
      field   : ( row: { player_name: any; } ) => row.player_name,
      sortable: true
    },
    {
      name    : "inf",
      required: true,
      label   : "INF",
      align   : "left",
      field   : ( row: { inf: any; } ) => row.inf,
      sortable: true
    },
    {
      name    : "position",
      required: true,
      label   : "POS",
      align   : "left",
      field   : ( row: { player_type: any; } ) => row.player_type,
      sortable: true
    },
    {
      name    : "age",
      required: true,
      label   : "AGE",
      align   : "left",
      field   : ( row: { player_age: any; } ) => row.player_age,
      sortable: true
    },
    {
      name    : "match_played",
      required: true,
      label   : "MATCH PLAYED",
      align   : "left",
      field   : ( row: { player_match_played: any; } ) => row.player_match_played,
      sortable: true
    },
    {
      name    : "goals",
      required: true,
      label   : "GOALS",
      align   : "left",
      field   : ( row: { player_goals: any; } ) => row.player_goals,
      sortable: true
    },
    {
      name    : "condition_form",
      required: true,
      label   : "COND / FORM",
      align   : "left",
      field   : ( row: { player_condition: any; } ) => row.player_condition,
      sortable: true
    },
    {
      name    : "yellow_red",
      required: true,
      label   : "YELLOW / RED",
      align   : "left",
      field   : ( row: { player_yellow_cards: any; } ) => row.player_yellow_cards,
      sortable: true
    },
    {
      name    : "captain",
      required: true,
      label   : "CAP",
      align   : "left",
      field   : ( row: { player_captain: any; } ) => row.player_captain,
      sortable: true
    },
    {
      name    : "rating_average",
      required: true,
      label   : "RAT",
      align   : "left",
      field   : ( row: { player_rating_average: any; } ) => row.player_rating_average,
      sortable: true
    }
  ];
  const rows     = players;
  const search   = ref( "" );

  return {
    metaData,
    columns,
    rows,
    search
  };
}
