import {ref} from "vue";
import {players} from "src/infrastructure/data/players";

export default function UseOverviewComposable() {
  /************  Variables   ************/
  const metaData = {title: "Overview", titleTemplate: (title: any) => `${title} - Football Manager`};
  // @ts-ignore
  const lineUp = ref(players.filter(player => player.headline));
  const bench = ref(players.filter(player => !player.headline));
  const player = ref({});

  /************  Methods   ************/
  const handleDragEnd = (item: object) => {
    console.log(item);
    const playerStatic = player.value;
    const playerPicked = item;

    // @ts-ignore
    if (lineUp.value.indexOf(playerPicked) !== -1 && lineUp.value.indexOf(playerStatic) !== -1) {
      // @ts-ignore
      const indexPlayerPicker = lineUp.value.indexOf(playerPicked);
      // @ts-ignore
      const indexPlayerStatic = lineUp.value.indexOf(playerStatic);
      // @ts-ignore
      lineUp.value[indexPlayerPicker] = playerStatic;
      // @ts-ignore
      lineUp.value[indexPlayerStatic] = playerPicked;
    }
    // @ts-ignore
    else if (bench.value.indexOf(playerPicked) !== -1 && bench.value.indexOf(playerStatic) !== -1) {
      // @ts-ignore
      const indexPlayerPicker = bench.value.indexOf(playerPicked);
      // @ts-ignore
      const indexPlayerStatic = bench.value.indexOf(playerStatic);
      // @ts-ignore
      bench.value[indexPlayerPicker] = playerStatic;
      // @ts-ignore
      bench.value[indexPlayerStatic] = playerPicked;
    }
    // @ts-ignore
    else if (lineUp.value.indexOf(playerPicked) !== -1 && bench.value.indexOf(playerStatic) !== -1) {
      // @ts-ignore
      const indexPlayerPicker = lineUp.value.indexOf(playerPicked);
      // @ts-ignore
      const indexPlayerStatic = bench.value.indexOf(playerStatic);
      // @ts-ignore
      lineUp.value[indexPlayerPicker] = playerStatic;
      // @ts-ignore
      bench.value[indexPlayerStatic] = playerPicked;
    } else {
      // @ts-ignore
      const indexPlayerPicker = bench.value.indexOf(playerPicked);
      // @ts-ignore
      const indexPlayerStatic = lineUp.value.indexOf(playerStatic);
      // @ts-ignore
      lineUp.value[indexPlayerStatic] = playerPicked;
      // @ts-ignore
      bench.value[indexPlayerPicker] = playerStatic;
    }
  };

  const handleDragEnter = (item: object) => {
    console.log(item);
    player.value = item;
  };

  return {
    metaData,
    lineUp,
    bench,
    handleDragEnd,
    handleDragEnter
  };
}
