<template>
  <h1>Delux Game</h1>

  <p>
    <a href="#" @click="toGamerRouterPush"># Jugadores</a>
  </p>
  <p>
    <a href="#" @click="toTeamsRouterPush"># Equipos</a>
  </p>

  <hr>

  <ul>
    <li>
      <h3 style="display: inline-block; margin-right: 10px;">Numero de Jugadores registrados:</h3>
      <span>{{ cantGamers }}</span>
    </li>
    <li>
      <h3 style="display: inline-block; margin-right: 10px;">Numero de Equipos registrados:</h3>
      <span>{{ cantTeams }}</span>
    </li>
  </ul>
</template>

<script setup>
import { ref, onBeforeMount } from 'vue'
import { useRouter } from 'vue-router'
import GamersStore from '../stores/gamers'
import TeamsStore from '../stores/teams'

const storeGamers = new GamersStore()
const storeTeams = new TeamsStore()

const router = useRouter()

const cantGamers = ref(0)
const cantTeams = ref(0)


const toGamerRouterPush = () => {
  router.push({ name: 'gamers' })
}

const toTeamsRouterPush = () => {
  router.push({ name: 'teams' })
}

const getTeams = async () => {
    await storeTeams.getTeams()
    cantTeams.value = storeTeams.cant
}

const getGamers = async () => {
    await storeGamers.getGamers()
    cantGamers.value = storeGamers.cant
}

onBeforeMount(async () => {
  await getGamers()
  await getTeams()
})
</script>