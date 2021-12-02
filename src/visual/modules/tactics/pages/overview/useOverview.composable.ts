import { players } from "../../../../../infrastructure/data/players";

export default function UseOverviewComposable() {

  /************  Variables   ************/
  const metaData = { title: "Overview", titleTemplate: ( title: any ) => `${ title } - Football Manager` };
  const columns  = [
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
      name    : "condition_form",
      required: true,
      label   : "COND / FORM",
      align   : "left",
      field   : ( row: { player_condition: any; } ) => row.player_condition,
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
  return {
    metaData,
    columns,
    rows
  };
}
