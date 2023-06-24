<template>
<div>
    <h1>Lista de Equipos</h1>

    <hr>
    <section>
        <div>
            <label for="name" style="padding-right: 20px;">Código Único</label>
            <input v-model="form.code" type="text">
        </div>
        <div>
            <label for="lastname" style="padding-right: 20px;">Nombre de Equipo</label>
            <input v-model="form.name" type="text">
        </div>
        <div>
            <button  @click="save" style="background-color: cornflowerblue; margin-right: 10px; margin-top: 10px;">Guardar</button>
            <button @click="back" style="background-color: lightgrey;">Regresar</button>
        </div>
    </section>

    <hr>

    <table class="w-full divide-y divide-gray-200">
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
