import { ref } from "vue";

import { formattedFullDateSTimeString } from "src/domain/services/moment.service";

export default function UseMainLayoutComposable() {

  /************  Variables   ************/
  const leftMenuState     = ref( true );
  const { date, dayWeek } = formattedFullDateSTimeString();
  return {
    date,
    dayWeek,
    leftMenuState
  };
}
