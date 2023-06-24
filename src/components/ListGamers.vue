<template>
<div>
    <h1>Lista de Jugadores</h1>

    <hr>
    <section>
        <div>
            <label for="name" style="padding-right: 20px;">Nombres</label>
            <input v-model="form.name" type="text">
        </div>
        <div>
            <label for="lastname" style="padding-right: 20px;">Apellidos</label>
            <input v-model="form.lastname" type="text">
        </div>
        <div>
            <label for="birthdate" style="padding-right: 20px;">Fecha de nacimiento</label>
            <input v-model="form.birthdate" type="date">
        </div>
        <div>
            <label for="gender" style="padding-right: 20px;">Género</label>
            <select v-model="form.gender" style="padding: 5px;">
                <option value="M">Masculino</option>
                <option value="F">Femenino</option>
            </select>
        </div>
        <div>
            <label for="dni" style="padding-right: 20px;">DNI</label>
            <input v-model="form.dni" type="text">
        </div>
        <div>
            <label for="nacionality" style="padding-right: 20px;">Nacionalidad</label>
            <input v-model="form.nacionality" type="text">
        </div>
        <div>
            <label for="weight" style="padding-right: 20px;">Peso (kg)</label>
            <input v-model="form.weight" type="number">
        </div>
        <div>
            <label for="height" style="padding-right: 20px;">Estatura (cm)</label>
            <input v-model="form.height" type="number">
        </div>
        <div>
            <label for="height" style="padding-right: 20px;">Equipo</label>
            <select v-model="form.team_code" style="padding: 5px;">
                <option v-for="(item, i) in teams" :key="i" :value="item.code">{{ item.name }}</option>
            </select>
        </div>
        <div>
            <button @click="save" style="background-color: cornflowerblue; margin-right: 10px; margin-top: 10px;">Guardar</button>
            <button @click="back" style="background-color: lightgrey;">Regresar</button>
        </div>
    </section>

    <hr>

    <table class="w-full divide-y divide-gray-200">
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
