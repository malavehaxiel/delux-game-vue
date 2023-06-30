<template>
<div>
    <h1 class="text-blue-400 mb-2">Lista de Equipos</h1>

    <hr>
    <section class="my-2">
        <div class="mb-2 w-1/2 p-1">
            <label for="name" class="block text-sm font-medium text-slate-700">Código Único</label>
            <input v-model="form.code" type="text" class="bg-white shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
        </div>
        <div class="mb-2 w-1/2 p-1">
            <label for="lastname" class="block text-sm font-medium text-slate-700">Nombre de Equipo</label>
            <input v-model="form.name" type="text" class="bg-white shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
        </div>
        <div>
            <button  @click="save" class="bg-blue-500 text-white py-2 px-4 rounded m-1">Guardar</button>
            <button @click="back" class="bg-gray-500 text-white py-2 px-4 rounded m-1">Regresar</button>
        </div>
    </section>

    <hr>

    <table class="w-full divide-y divide-gray-200 mt-2">
        <thead>
            <tr>
                <th class="px-6 py-3 bg-blue-500 text-left text-xs font-medium text-white uppercase tracking-wider">#</th>
                <th class="px-6 py-3 bg-blue-500 text-left text-xs font-medium text-white uppercase tracking-wider">Código Único</th>
                <th class="px-6 py-3 bg-blue-500 text-left text-xs font-medium text-white uppercase tracking-wider">Nombre de Equipo</th>
                <th class="px-6 py-3 bg-blue-500 text-left text-xs font-medium text-white uppercase tracking-wider">Acciones</th>
            </tr>
        </thead>
        <tbody class="bg-white divide-y divide-gray-200">
            <tr v-for="(team, index) in teams" :key="index">
                <td class="px-6 py-4 whitespace-nowrap">{{ index + 1 }}</td>
                <td class="px-6 py-4 whitespace-nowrap">{{ team.code }}</td>
                <td class="px-6 py-4 whitespace-nowrap">{{ team.name }}</td>
                <td class="px-6 py-4 whitespace-nowrap">
                    <button @click="remove(team.code)" style="background-color: indianred;">Eliminar</button>
                </td>
            </tr>
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
    code: '',
    name: ''
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
</script>
