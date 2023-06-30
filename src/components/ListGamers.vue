<template>
<div>
    <h1 class="text-blue-400 mb-2">Lista de Jugadores</h1>

    <hr>
    <section class="flex flex-wrap my-2">
        <div class="mb-2 w-1/2 p-1">
            <label for="name" class="block text-sm font-medium text-slate-700">Nombres</label>
            <input v-model="form.name" type="text" class="bg-white shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
        </div>
        <div class="mb-2 w-1/2 p-1">
            <label for="lastname" class="block text-sm font-medium text-slate-700">Apellidos</label>
            <input v-model="form.lastname" type="text" class="bg-white  shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
        </div>
        <div class="mb-2 w-1/2 p-1">
            <label for="birthdate" class="block text-sm font-medium text-slate-700">Fecha de nacimiento</label>
            <input v-model="form.birthdate" type="date" class="bg-white  shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
        </div>
        <div class="mb-2 w-1/2 p-1">
            <label for="gender" class="block text-sm font-medium text-slate-700">Género</label>
            <select v-model="form.gender" class=" bg-white block appearance-none w-full shadow border text-gray-700 py-2 px-3 rounded leading-tight focus:outline-none focus:shadow-outline">
                <option value="M">Masculino</option>
                <option value="F">Femenino</option>
            </select>
        </div>
        <div class="mb-2 w-1/2 p-1">
            <label for="dni" class="block text-sm font-medium text-slate-700">DNI</label>
            <input v-model="form.dni" type="text" class="bg-white  shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
        </div>
        <div class="mb-2 w-1/2 p-1">
            <label for="nacionality" class="block text-sm font-medium text-slate-700">Nacionalidad</label>
            <input v-model="form.nacionality" type="text" class="bg-white  shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
        </div>
        <div class="mb-2 w-1/2 p-1">
            <label for="weight" class="block text-sm font-medium text-slate-700">Peso (kg)</label>
            <input v-model="form.weight" type="number" class="bg-white  shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
        </div>
        <div class="mb-2 w-1/2 p-1">
            <label for="height" class="block text-sm font-medium text-slate-700">Estatura (cm)</label>
            <input v-model="form.height" type="number" class="bg-white  shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
        </div>
        <div class="mb-2 w-1/2 p-1">
            <label for="height" class="block text-sm font-medium text-slate-700">Equipo</label>
            <select v-model="form.team_code" class=" bg-white block appearance-none w-full shadow border text-gray-700 py-2 px-3 rounded leading-tight focus:outline-none focus:shadow-outline">
                <option v-for="(item, i) in teams" :key="i" :value="item.code">{{ item.name }}</option>
            </select>
        </div>
        <div class="mb-2 w-full p-1">
            <button @click="save" class="bg-blue-500 text-white py-2 px-4 rounded m-1">Guardar</button>
            <button @click="back" class="bg-gray-500 text-white py-2 px-4 rounded m-1">Regresar</button>
        </div>
    </section>

    <hr>

    <table class="table-auto divide-y divide-gray-200 mt-2">
        <thead>
            <tr>
                <th class="px-6 py-3 bg-blue-500 text-left text-xs font-medium text-white uppercase tracking-wider">#</th>
                <th class="px-6 py-3 bg-blue-500 text-left text-xs font-medium text-white uppercase tracking-wider">Nombres</th>
                <th class="px-6 py-3 bg-blue-500 text-left text-xs font-medium text-white uppercase tracking-wider">Apellidos</th>
                <th class="px-6 py-3 bg-blue-500 text-left text-xs font-medium text-white uppercase tracking-wider">Fecha de nacimiento</th>
                <th class="px-6 py-3 bg-blue-500 text-left text-xs font-medium text-white uppercase tracking-wider">Género</th>
                <th class="px-6 py-3 bg-blue-500 text-left text-xs font-medium text-white uppercase tracking-wider">DNI</th>
                <th class="px-6 py-3 bg-blue-500 text-left text-xs font-medium text-white uppercase tracking-wider">Nacionalidad</th>
                <th class="px-6 py-3 bg-blue-500 text-left text-xs font-medium text-white uppercase tracking-wider">Peso</th>
                <th class="px-6 py-3 bg-blue-500 text-left text-xs font-medium text-white uppercase tracking-wider">Estatura</th>
                <th class="px-6 py-3 bg-blue-500 text-left text-xs font-medium text-white uppercase tracking-wider">Equipo</th>
                <th class="px-6 py-3 bg-blue-500 text-left text-xs font-medium text-white uppercase tracking-wider">Acciones</th>
            </tr>
        </thead>
        <tbody class="bg-white divide-y divide-gray-200">
            <tr v-for="(gamer, index) in gamers" :key="index">
                <td class="px-6 py-4 whitespace-nowrap">{{ index + 1 }}</td>
                <td class="px-6 py-4 whitespace-nowrap">{{ gamer.name }}</td>
                <td class="px-6 py-4 whitespace-nowrap">{{ gamer.lastname }}</td>
                <td class="px-6 py-4 whitespace-nowrap">{{ gamer.birthdate }}</td>
                <td class="px-6 py-4 whitespace-nowrap">{{ gamer.gender }}</td>
                <td class="px-6 py-4 whitespace-nowrap">{{ gamer.dni }}</td>
                <td class="px-6 py-4 whitespace-nowrap">{{ gamer.nacionality }}</td>
                <td class="px-6 py-4 whitespace-nowrap">{{ gamer.weight }} (kg)</td>
                <td class="px-6 py-4 whitespace-nowrap">{{ gamer.height }} (cm)</td>
                <td class="px-6 py-4 whitespace-nowrap">
                    <span v-if="gamer.team.code">{{ gamer.team_code }} - {{ gamer.team.name }}</span>
                </td>
                <td class="px-6 py-4 whitespace-nowrap">
                    <button @click="remove(gamer.dni)" style="background-color: indianred;">Eliminar</button>
                </td>
            </tr>
        </tbody>
    </table>


</div>
</template>

<script setup>

import { ref, onMounted } from 'vue'
import GamersStore from '../stores/gamers'
import TeamsStore from '../stores/teams'
import { useRouter } from 'vue-router'

const storeTeams = new TeamsStore()

const router = useRouter()

const storeGamers = new GamersStore()

const teams = ref([])
const gamers = ref([])
const form = ref({
    name: '',
    lastname: '',
    birthdate: '',
    gender: '',
    dni: '',
    nacionality: '',
    weight: '',
    height: '',
    team_code: ''
})

onMounted(() => {
    getTeams()
    getGamers()
})

const save = async () => {
    await storeGamers.saveGamer(form.value)
    getGamers()
    form.value = {}
}

const getGamers = async () => {
    await storeGamers.getGamers()
    gamers.value = storeGamers.gamers
}

const remove = async (dni) => {
    await storeGamers.removeGamer(dni)
    getGamers()
}

const back = () => {
    router.push({ name: '/' })
}

const getTeams = async () => {
    await storeTeams.getTeams()
    teams.value = storeTeams.teams
}
</script>
