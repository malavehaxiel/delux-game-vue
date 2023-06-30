<template>
<div>
    <h1 class="text-blue-400 mb-2">Clasificación</h1>

    <hr>
    <h3 class="text-blue-400 my-2">Registrar nuevo juego</h3>
    <hr>
    <h2 class="text-blue-400 my-2">
        <div v-if="form.mark_first_team && !form.mark_second_team">
            <span style="color: green">¡Ganador!</span> {{ storeTeams.find(form.first_team_code)?.name }}
        </div>
        <div v-else-if="!form.mark_first_team && form.mark_second_team">
            <span style="color: green">¡Ganador!</span> {{ storeTeams.find(form.second_team_code)?.name }}
        </div>
        <div v-else-if="form.mark_first_team && form.mark_second_team">
            <span style="color:dodgerblue">¡Empate!</span> {{ storeTeams.find(form.first_team_code)?.name }} - {{ storeTeams.find(form.second_team_code)?.name }}
        </div>
        <div v-else>
            <span style="color: brown;">¡Sin resultados!</span>
        </div>
    </h2>
    <hr>
    <section class="my-2">
        <div class="flex items-center mb-2 flex-wrap">
            <label for="height" class="w-full mb-1 block text-sm font-medium text-slate-700">Equipo 1</label>
            <select v-model="form.first_team_code" class=" bg-white block appearance-none w-96 shadow border text-gray-700 py-2 px-3 rounded leading-tight focus:outline-none focus:shadow-outline">
                <option v-for="(item, i) in teams" :key="i" :value="item.code">{{ item.name }}</option>
            </select>
            <input type="checkbox" v-model="form.mark_first_team" @input="markFirstTeam" class="ml-2 shadow h-5 w-5 text-blue-600 rounded border-gray-300 focus:ring-blue-500">
        </div>
       
        <div class="flex items-center mb-2 flex-wrap">
            <label for="height" class="w-full mb-1 block text-sm font-medium text-slate-700">Equipo 2</label>
            <select v-model="form.second_team_code" class=" bg-white block appearance-none w-96 shadow border text-gray-700 py-2 px-3 rounded leading-tight focus:outline-none focus:shadow-outline">
                <option v-for="(item, i) in teams" :key="i" :value="item.code">{{ item.name }}</option>
            </select>
            <input type="checkbox" v-model="form.mark_second_team" @input="markSecondTeam" class="ml-2 shadow h-5 w-5 text-blue-600 rounded border-gray-300 focus:ring-blue-500">
            
        </div>
        
        <div class="mb-2">
            <button  @click="save" class="bg-blue-500 text-white py-2 px-4 rounded m-1">Guardar</button>
            <button @click="back" class="bg-gray-500 text-white py-2 px-4 rounded m-1">Regresar</button>
        </div>
    </section>

    <hr>

    <table class="w-full divide-y divide-gray-200 mt-4">
        <thead>
            <tr>
                <th class="px-6 py-3 bg-blue-500 text-left text-xs font-medium text-white uppercase tracking-wider">Posición</th>
                <th class="px-6 py-3 bg-blue-500 text-left text-xs font-medium text-white uppercase tracking-wider">Equipo</th>
                <th class="px-6 py-3 bg-blue-500 text-left text-xs font-medium text-white uppercase tracking-wider">Victorias</th>
                <th class="px-6 py-3 bg-blue-500 text-left text-xs font-medium text-white uppercase tracking-wider">Derrotas</th>
                <th class="px-6 py-3 bg-blue-500 text-left text-xs font-medium text-white uppercase tracking-wider">Empates</th>
                <th class="px-6 py-3 bg-blue-500 text-left text-xs font-medium text-white uppercase tracking-wider">Puntos</th>
            </tr>
        </thead>
        <tbody class="bg-white divide-y divide-gray-200">
            
        </tbody>
    </table>

</div>
</template>

<script setup>

import { ref, onMounted } from 'vue'
import TeamsStore from '../stores/teams'
import { useRouter } from 'vue-router'

const router = useRouter()

const storeTeams = new TeamsStore()

const teams = ref([])

const form = ref({
    first_team_code: '',
    second_team_code: '',
    mark_first_team: false,
    mark_second_team: false,
})

onMounted(() => {
    getTeams()
})

const save = async () => {
    await storeTeams.saveTeam(form.value)
    getTeams()
    form.value = {}
}

const getTeams = async () => {
    await storeTeams.getTeams()
    teams.value = storeTeams.teams
}

const remove = async (code) => {
    await storeTeams.removeTeam(code)
    getTeams()
}

const back = () => {
    router.push({ name: '/' })
}

const markFirstTeam = () => {
    form.value.mark_first_team = ! form.value.mark_first_team
}

const markSecondTeam = () => {
    form.value.mark_second_team = !  form.value.mark_second_team
}
</script>
