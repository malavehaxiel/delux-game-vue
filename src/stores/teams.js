import { defineStore } from 'pinia'

export default defineStore({
  id: 'teams',
  state: () => ({
    _status: 'idle',
    _error: null,
    _teams: [],
  }),
  getters: {
    isIdle: (state) => state._status === 'idle',
    isLoading: (state) => state._status === 'loading',
    isReady: (state) => state._status === 'ready',
    isError: (state) => state._status === 'error',
    error: (state) => state._error,
    teams: (state) => state._teams,
    cant: (state) => state._teams.length,
  },
  actions: {
    getTeams() {
        this._teams = JSON.parse(localStorage.getItem('teams')) ?? []
    },
    async saveTeam(form) {
        let teams = JSON.parse(localStorage.getItem('teams')) ?? []
        teams.push(form)

        localStorage.setItem('teams', JSON.stringify(teams))
    },
    async removeTeam(code) {
        let teams = JSON.parse(localStorage.getItem('teams')) ?? []
        teams = teams.filter(team => team.code != code)

        localStorage.setItem('teams', JSON.stringify(teams))
    },
    find(code) {
        let teams = JSON.parse(localStorage.getItem('teams')) ?? []
        return teams.find(team => team.code == code)
    },
    setLoading() {
      this._status = 'loading'
    },
    setReady() {
      this._status = 'ready'
    },
    setError(error) {
      this._error = error
      this._status = 'error'
    },
  },
})
