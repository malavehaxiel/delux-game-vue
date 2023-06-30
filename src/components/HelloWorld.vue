<template>
  <div class="bg-black/[.1] rounded p-2">
    <h1 class="text-blue-400 mb-2">Delux Game</h1>

    <p>
      <a href="#" @click="toGamerRouterPush"># Jugadores</a>
    </p>
    <p>
      <a href="#" @click="toTeamsRouterPush"># Equipos</a>
    </p>
    <p>
      <a href="#" @click="toClasificationRouterPush"># Clasificación</a>
    </p>

    <hr />

  <div class="flex flex-wrap justify-center">
    <div
      class="bg-white shadow inline-block p-2 rounded-md m-2 flex flex-wrap justify-center items-center w-52"
    >
      <h3 style="display: inline-block; margin-right: 10px" class="text-center">
        Numero de Jugadores registrados:
      </h3>
      <span class="text-4xl text-blue-400">{{ cantGamers }}</span>
    </div>

    <div
      class="bg-white shadow inline-block p-2 rounded-md m-2 flex flex-wrap justify-center items-center w-52"
    >
      <h3 style="display: inline-block; margin-right: 10px" class="text-center">
        Numero de Equipos registrados:
      </h3>
      <span class="text-4xl text-blue-400">{{ cantTeams }}</span>
    </div>
  </div>
  </div>
</template>

<script setup>
import { ref, onBeforeMount } from "vue";
import { useRouter } from "vue-router";
import GamersStore from "../stores/gamers";
import TeamsStore from "../stores/teams";

const storeGamers = new GamersStore();
const storeTeams = new TeamsStore();

const router = useRouter();

const cantGamers = ref(0);
const cantTeams = ref(0);

const toGamerRouterPush = () => {
  router.push({ name: "gamers" });
};

const toTeamsRouterPush = () => {
  router.push({ name: "teams" });
};

const toClasificationRouterPush = () => {
  router.push({ name: "clasification" });
};

const getTeams = async () => {
  await storeTeams.getTeams();
  cantTeams.value = storeTeams.cant;
};

const getGamers = async () => {
  await storeGamers.getGamers();
  cantGamers.value = storeGamers.cant;
};

onBeforeMount(async () => {
  await getGamers();
  await getTeams();
});
</script>
