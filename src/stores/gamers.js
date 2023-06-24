import { defineStore } from 'pinia'

export default defineStore({
  id: 'gamers',
  state: () => ({
    _status: 'idle',
    _error: null,
    _gamers: [],
  }),
  getters: {
    isIdle: (state) => state._status === 'idle',
    isLoading: (state) => state._status === 'loading',
    isReady: (state) => state._status === 'ready',
    isError: (state) => state._status === 'error',
    error: (state) => state._error,
    gamers: (state) => state._gamers,
  },
  actions: {
    getGamers() {
        // localStorage.setItem('gamers',  JSON.stringify([
        //     // {
        //     //     "name": "Ezequiel",
        //     //     "lastname": "Gutiérrez",
        //     //     "birthdate": "2004-11-25",
        //     //     "gender": "Masculino",
        //     //     "dni": "30884737",
        //     //     "nacionality": "Venezolano",
        //     //     "weight": "65 kg",
        //     //     "height": "176 cm"
        //     // },
        //     // {
        //     //    "name": "Bruniel",
        //     //    "lastname": "Sosa",
        //     //    "birthdate": "2004-12-31",
        //     //    "gender": "Masculino",
        //     //    "dni": "30501561",
        //     //    "nacionality": "venezolano",
        //     //    "weight": "60 Kg",
        //     //    "height": "172 Cm"    
        //     // },
        //     // {
        //     //     "name": "Abner",
        //     //     "lastname": "Fernandez",
        //     //     "birthdate": "2003-01-17",
        //     //     "gender": "Masculino",
        //     //     "dni": "29689707",
        //     //     "nacionality": "Venezolano",
        //     //     "weight": "67 Kg",
        //     //     "height": "170 cm"
        //     // },
        //     // {
        //     //     "name": "Victoria",
        //     //     "lastname" :"Gonzalez",
        //     //     "birthdate": "2000-07-25",
        //     //     "gender": "Femenino",
        //     //     "dni": "28507669",
        //     //     "nacionality": "Venezolana",
        //     //     "weight": "56 kg",
        //     //     "height": "160 cm"
        //     // },
        //     // {
        //     //     "name": "Josue",
        //     //     "lastname": "Rón",
        //     //     "birthdate": "2003-09-16",
        //     //     "gender": "Masculino",
        //     //     "dni": "30120283",
        //     //     "nacionality": "Venezolano",
        //     //     "weight": "45 kg",
        //     //     "height": "173 cm"
        //     // },
        //     // {
        //     //     "name": "Maria",
        //     //     "lastname": "Lopez",
        //     //     "birthdate": "1990-05-15",
        //     //     "gender": "Femenino",
        //     //     "dni": "40501985",
        //     //     "nacionality": "mexicana",
        //     //     "weight": "55 Kg",
        //     //     "height": "165 Cm"
        //     // },
        //     // {
        //     //     "name": "Juan",
        //     //     "lastname": "Gonzalez",
        //     //     "birthdate": "1985-09-20",
        //     //     "gender": "Masculino",
        //     //     "dni": "20753890",
        //     //     "nacionality": "colombiano",
        //     //     "weight": "70 Kg",
        //     //     "height": "180 Cm"
        //     // },
        //     // {
        //     //     "name": "Laura",
        //     //     "lastname": "Martinez",
        //     //     "birthdate": "1998-07-12",
        //     //     "gender": "Femenino",
        //     //     "dni": "50982818",
        //     //     "nacionality": "española",
        //     //     "weight": "63 Kg",
        //     //     "height": "168 Cm"
        //     // },
        //     // {
        //     //     "name": "Andres",
        //     //     "lastname": "Rodriguez",
        //     //     "birthdate": "1993-03-28",
        //     //     "gender": "Masculino",
        //     //     "dni": "70451182",
        //     //     "nacionality": "argentino",
        //     //     "weight": "75 Kg",
        //     //     "height": "185 Cm"
        //     // },
        //     // {
        //     //     "name": "Carolina",
        //     //     "lastname": "Perez",
        //     //     "birthdate": "1987-11-02",
        //     //     "gender": "Femenino",
        //     //     "dni": "30849627",
        //     //     "nacionality": "venezolana",
        //     //     "weight": "58 Kg",
        //     //     "height": "165 Cm"
        //     // },
        //     // {
        //     //     "name": "Luis",
        //     //     "lastname": "Garcia",
        //     //     "birthdate": "1979-04-10",
        //     //     "gender": "Masculino",
        //     //     "dni": "40982340",
        //     //     "nacionality": "mexicano",
        //     //     "weight": "80 Kg",
        //     //     "height": "178 Cm"
        //     // },
        //     // {
        //     //     "name": "Ana",
        //     //     "lastname": "Hernandez",
        //     //     "birthdate": "1995-09-05",
        //     //     "gender": "Femenino",
        //     //     "dni": "50672849",
        //     //     "nacionality": "colombiana",
        //     //     "weight": "65 Kg",
        //     //     "height": "170 Cm"
        //     // },
        //     // {
        //     //     "name": "Javier",
        //     //     "lastname": "Lopez",
        //     //     "birthdate": "1983-02-14",
        //     //     "gender": "Masculino",
        //     //     "dni": "20834589",
        //     //     "nacionality": "español",
        //     //     "weight": "70 Kg",
        //     //     "height": "175 Cm"
        //     // },
        //     // {
        //     //     "name": "Valentina",
        //     //     "lastname": "Torres",
        //     //     "birthdate": "1997-06-20",
        //     //     "gender": "Femenino",
        //     //     "dni": "60382917",
        //     //     "nacionality": "argentina",
        //     //     "weight": "60 Kg",
        //     //     "height": "165 Cm"
        //     // },
        //     // {
        //     //     "name": "Diego",
        //     //     "lastname": "Sanchez",
        //     //     "birthdate": "1992-01-03",
        //     //     "gender": "Masculino",
        //     //     "dni": "70984362",
        //     //     "nacionality": "venezolano",
        //     //     "weight": "75 Kg",
        //     //     "height": "180 Cm"
        //     // },
        //     // {
        //     //     "name": "Camila",
        //     //     "lastname": "Gomez",
        //     //     "birthdate": "1986-08-18",
        //     //     "gender": "Femenino",
        //     //     "dni": "40652139",
        //     //     "nacionality": "mexicana",
        //     //     "weight": "55 Kg",
        //     //     "height": "160 Cm"
        //     // },
        //     // {
        //     //     "name": "Gabriel",
        //     //     "lastname": "Morales",
        //     //     "birthdate": "1981-12-09",
        //     //     "gender": "Masculino",
        //     //     "dni": "20483672",
        //     //     "nacionality": "colombiano",
        //     //     "weight": "80 Kg",
        //     //     "height": "185 Cm"
        //     // },
        //     // {
        //     //     "name": "Sofia",
        //     //     "lastname": "Fernandez",
        //     //     "birthdate": "1996-10-25",
        //     //     "gender": "Femenino",
        //     //     "dni": "50163948",
        //     //     "nacionality": "española",
        //     //     "weight": "62 Kg",
        //     //     "height": "167 Cm"
        //     // },
        //     // {
        //     //     "name": "Ricardo",
        //     //     "lastname": "Perez",
        //     //     "birthdate": "1989-03-07",
        //     //     "gender": "Masculino",
        //     //     "dni": "70382945",
        //     //     "nacionality": "argentino",
        //     //     "weight": "75 Kg",
        //     //     "height": "180 Cm"
        //     // },
        //     // {
        //     //     "name": "Marcela",
        //     //     "lastname": "Gonzalez",
        //     //     "birthdate": "1994-02-01",
        //     //     "gender": "Femenino",
        //     //     "dni": "30372154",
        //     //     "nacionality": "venezolana",
        //     //     "weight": "57 Kg",
        //     //     "height": "162 Cm"
        //     // },
        //     // {
        //     //     "name": "Daniel",
        //     //     "lastname": "Torres",
        //     //     "birthdate": "1980-07-16",
        //     //     "gender": "Masculino",
        //     //     "dni": "40928361",
        //     //     "nacionality": "mexicano",
        //     //     "weight": "78 Kg",
        //     //     "height": "180 Cm"
        //     // },
        //     // {
        //     //     "name": "Fernanda",
        //     //     "lastname": "Hernandez",
        //     //     "birthdate": "1993-11-22",
        //     //     "gender": "Femenino",
        //     //     "dni": "50271934",
        //     //     "nacionality": "colombiana",
        //     //     "weight": "64 Kg",
        //     //     "height": "168 Cm"
        //     // },
        //     // {
        //     //     "name": "Pablo",
        //     //     "lastname": "Lopez",
        //     //     "birthdate": "1987-04-19",
        //     //     "gender": "Masculino",
        //     //     "dni": "20631985",
        //     //     "nacionality": "español",
        //     //     "weight": "72 Kg",
        //     //     "height": "175 Cm"
        //     // },
        //     // {
        //     //     "name": "Lucia",
        //     //     "lastname": "Garcia",
        //     //     "birthdate": "1991-09-14",
        //     //     "gender": "Femenino",
        //     //     "dni": "60892571",
        //     //     "nacionality": "argentina",
        //     //     "weight": "58 Kg",
        //     //     "height": "163 Cm"
        //     // },
        //     // {
        //     //     "name": "Julian",
        //     //     "lastname": "Martinez",
        //     //     "birthdate": "1984-05-27",
        //     //     "gender": "Masculino",
        //     //     "dni": "70984528",
        //     //     "nacionality": "venezolano",
        //     //     "weight": "80 Kg",
        //     //     "height": "185 Cm"
        //     // },
        //     // {
        //     //     "name": "Isabella",
        //     //     "lastname": "Ramirez",
        //     //     "birthdate": "1999-03-03",
        //     //     "gender": "Femenino",
        //     //     "dni": "40381956",
        //     //     "nacionality": "mexicana",
        //     //     "weight": "55 Kg",
        //     //     "height": "162 Cm"
        //     // },
        //     // {
        //     //     "name": "Hector",
        //     //     "lastname": "Gonzalez",
        //     //     "birthdate": "1986-10-18",
        //     //     "gender": "Masculino",
        //     //     "dni": "20563849",
        //     //     "nacionality": "colombiano",
        //     //     "weight": "75 Kg",
        //     //     "height": "180 Cm"
        //     // },
        //     // {
        //     //     "name": "Valeria",
        //     //     "lastname": "Fernandez",
        //     //     "birthdate": "1991-08-11",
        //     //     "gender": "Femenino",
        //     //     "dni": "60491728",
        //     //     "nacionality": "española",
        //     //     "weight": "60 Kg",
        //     //     "height": "167 Cm"
        //     // },
        //     // {
        //     //     "name": "Marcos",
        //     //     "lastname": "Perez",
        //     //     "birthdate": "1985-02-17",
        //     //     "gender": "Masculino",
        //     //     "dni": "30854196",
        //     //     "nacionality": "argentino",
        //     //     "weight": "80 Kg",
        //     //     "height": "180 Cm"
        //     // },
        //     // {
        //     //     "name": "Carla",
        //     //     "lastname": "Hernandez",
        //     //     "birthdate": "1996-12-04",
        //     //     "gender": "Femenino",
        //     //     "dni": "50721394",
        //     //     "nacionality": "venezolana",
        //     //     "weight": "62 Kg",
        //     //     "height": "170 Cm"
        //     // },
        //     // {
        //     //     "name": "Eduardo",
        //     //     "lastname": "Lopez",
        //     //     "birthdate": "1981-05-21",
        //     //     "gender": "Masculino",
        //     //     "dni": "20748923",
        //     //     "nacionality": "mexicano",
        //     //     "weight": "82 Kg",
        //     //     "height": "178 Cm"
        //     // },
        //     // {
        //     //     "name": "Paula",
        //     //     "lastname": "Gomez",
        //     //     "birthdate": "1997-02-08",
        //     //     "gender": "Femenino",
        //     //     "dni": "50471692",
        //     //     "nacionality": "colombiana",
        //     //     "weight": "63 Kg",
        //     //     "height": "168 Cm"
        //     // },
        //     // {
        //     //     "name": "Alejandro",
        //     //     "lastname": "Martinez",
        //     //     "birthdate": "1992-07-24",
        //     //     "gender": "Masculino",
        //     //     "dni": "70642918",
        //     //     "nacionality": "español",
        //     //     "weight": "75 Kg",
        //     //     "height": "175 Cm"
        //     // },
        //     // {
        //     //     "name": "Marina",
        //     //     "lastname": "Garcia",
        //     //     "birthdate": "1987-11-30",
        //     //     "gender": "Femenino",
        //     //     "dni": "30271749",
        //     //     "nacionality": "argentina",
        //     //     "weight": "57 Kg",
        //     //     "height": "162 Cm"
        //     // },
        //     // {
        //     //     "name": "Raul",
        //     //     "lastname": "Torres",
        //     //     "birthdate": "1983-06-03",
        //     //     "gender": "Masculino",
        //     //     "dni": "40567293",
        //     //     "nacionality": "venezolano",
        //     //     "weight": "78 Kg",
        //     //     "height": "180 Cm"
        //     // },
        //     // {
        //     //     "name": "Laura",
        //     //     "lastname": "Sanchez",
        //     //     "birthdate": "1998-04-25",
        //     //     "gender": "Femenino",
        //     //     "dni": "60381954",
        //     //     "nacionality": "mexicana",
        //     //     "weight": "55 Kg",
        //     //     "height": "160 Cm"
        //     // },
        //     // {
        //     //     "name": "Gonzalo",
        //     //     "lastname": "Morales",
        //     //     "birthdate": "1993-09-19",
        //     //     "gender": "Masculino",
        //     //     "dni": "70452618",
        //     //     "nacionality": "colombiano",
        //     //     "weight": "80 Kg",
        //     //     "height": "185 Cm"
        //     // },
        //     // {
        //     //     "name": "Julia",
        //     //     "lastname": "Fernandez",
        //     //     "birthdate": "1998-05-15",
        //     //     "gender": "Femenino",
        //     //     "dni": "50271348",
        //     //     "nacionality": "española",
        //     //     "weight": "62 Kg",
        //     //     "height": "167 Cm"
        //     // },
        //     // {
        //     //     "name": "Andres",
        //     //     "lastname": "Perez",
        //     //     "birthdate": "1991-10-09",
        //     //     "gender": "Masculino",
        //     //     "dni": "70581947",
        //     //     "nacionality": "argentino",
        //     //     "weight": "75 Kg",
        //     //     "height": "180 Cm"
        //     // },
        //     // {
        //     //     "name": "Carolina",
        //     //     "lastname": "Hernandez",
        //     //     "birthdate": "1996-07-17",
        //     //     "gender": "Femenino",
        //     //     "dni": "50843297",
        //     //     "nacionality": "venezolana",
        //     //     "weight": "60 Kg",
        //     //     "height": "165 Cm"
        //     // },
        //     // {
        //     //     "name": "Martin",
        //     //     "lastname": "Lopez",
        //     //     "birthdate": "1988-02-22",
        //     //     "gender": "Masculino",
        //     //     "dni": "20763981",
        //     //     "nacionality": "mexicano",
        //     //     "weight": "82 Kg",
        //     //     "height": "178 Cm"
        //     // },
        //     // {
        //     //     "name": "Lucia",
        //     //     "lastname": "Gomez",
        //     //     "birthdate": "1993-11-28",
        //     //     "gender": "Femenino",
        //     //     "dni": "50182947",
        //     //     "nacionality": "colombiana",
        //     //     "weight": "63 Kg",
        //     //     "height": "168 Cm"
        //     // },
        //     // {
        //     //     "name": "Fernando",
        //     //     "lastname": "Martinez",
        //     //     "birthdate": "1986-06-14",
        //     //     "gender": "Masculino",
        //     //     "dni": "20691374",
        //     //     "nacionality": "español",
        //     //     "weight": "75 Kg",
        //     //     "height": "175 Cm"
        //     // },
        //     // {
        //     //     "name": "Maria",
        //     //     "lastname": "Garcia",
        //     //     "birthdate": "1992-12-31",
        //     //     "gender": "Femenino",
        //     //     "dni": "30261874",
        //     //     "nacionality": "argentina",
        //     //     "weight": "58 Kg",
        //     //     "height": "163 Cm"
        //     // },
        //     // {
        //     //     "name": "Jorge",
        //     //     "lastname": "Torres",
        //     //     "birthdate": "1987-07-10",
        //     //     "gender": "Masculino",
        //     //     "dni": "40492638",
        //     //     "nacionality": "venezolano",
        //     //     "weight": "78 Kg",
        //     //     "height": "180 Cm"
        //     // },
        //     // {
        //     //     "name": "Alejandra",
        //     //     "lastname": "Sanchez",
        //     //     "birthdate": "1991-03-05",
        //     //     "gender": "Femenino",
        //     //     "dni": "60271893",
        //     //     "nacionality": "mexicana",
        //     //     "weight": "55 Kg",
        //     //     "height": "162 Cm"
        //     // },
        //     // {
        //     //     "name": "Carlos",
        //     //     "lastname": "Morales",
        //     //     "birthdate": "1985-08-20",
        //     //     "gender": "Masculino",
        //     //     "dni": "70742968",
        //     //     "nacionality": "colombiano",
        //     //     "weight": "80 Kg",
        //     //     "height": "185 Cm"
        //     // },
        //     // {
        //     //     "name": "Valentina",
        //     //     "lastname": "Fernandez",
        //     //     "birthdate": "1990-12-15",
        //     //     "gender": "Femenino",
        //     //     "dni": "50361427",
        //     //     "nacionality": "española",
        //     //     "weight": "62 Kg",
        //     //     "height": "167 Cm"
        //     // },
        //     // {
        //     //     "name": "Rodrigo",
        //     //     "lastname": "Perez",
        //     //     "birthdate": "1984-05-02",
        //     //     "gender": "Masculino",
        //     //     "dni": "30582947",
        //     //     "nacionality": "argentino",
        //     //     "weight": "80 Kg",
        //     //     "height": "180 Cm"
        //     // },
        //     // {
        //     //     "name": "Sofia",
        //     //     "lastname": "Hernandez",
        //     //     "birthdate": "1999-01-20",
        //     //     "gender": "Femenino",
        //     //     "dni": "50981347",
        //     //     "nacionality": "venezolana",
        //     //     "weight": "62 Kg",
        //     //     "height": "170 Cm"
        //     // },
        //     // {
        //     //     "name": "Luis",
        //     //     "lastname": "Lopez",
        //     //     "birthdate": "1989-06-17",
        //     //     "gender": "Masculino",
        //     //     "dni": "20471836",
        //     //     "nacionality": "mexicano",
        //     //     "weight": "82 Kg",
        //     //     "height": "178 Cm"
        //     // },
        //     // {
        //     //     "name": "Mariana",
        //     //     "lastname": "Gomez",
        //     //     "birthdate": "1994-03-22",
        //     //     "gender": "Femenino",
        //     //     "dni": "50381974",
        //     //     "nacionality": "colombiana",
        //     //     "weight": "63 Kg",
        //     //     "height": "168 Cm"
        //     // },
        //     // {
        //     //     "name": "Andres",
        //     //     "lastname": "Martinez",
        //     //     "birthdate": "1988-08-19",
        //     //     "gender": "Masculino",
        //     //     "dni": "70423918",
        //     //     "nacionality": "español",
        //     //     "weight": "75 Kg",
        //     //     "height": "175 Cm"
        //     // },
        //     // {
        //     //     "name": "Luciana",
        //     //     "lastname": "Garcia",
        //     //     "birthdate": "1993-05-13",
        //     //     "gender": "Femenino",
        //     //     "dni": "50291378",
        //     //     "nacionality": "argentina",
        //     //     "weight": "57 Kg",
        //     //     "height": "162 Cm"
        //     // },
        //     // {
        //     //     "name": "Jose",
        //     //     "lastname": "Torres",
        //     //     "birthdate": "1988-10-07",
        //     //     "gender": "Masculino",
        //     //     "dni": "40372859",
        //     //     "nacionality": "venezolano",
        //     //     "weight": "78 Kg",
        //     //     "height": "180 Cm"
        //     // },
        //     // {
        //     //     "name": "Luz",
        //     //     "lastname": "Sanchez",
        //     //     "birthdate": "1993-07-26",
        //     //     "gender": "Femenino",
        //     //     "dni": "60781943",
        //     //     "nacionality": "mexicana",
        //     //     "weight": "55 Kg",
        //     //     "height": "160 Cm"
        //     // },
        //     // {
        //     //     "name": "Juan",
        //     //     "lastname": "Morales",
        //     //     "birthdate": "1986-12-21",
        //     //     "gender": "Masculino",
        //     //     "dni": "20642973",
        //     //     "nacionality": "colombiano",
        //     //     "weight": "80 Kg",
        //     //     "height": "185 Cm"
        //     // },
        //     // {
        //     //     "name": "Emma",
        //     //     "lastname": "Fernandez",
        //     //     "birthdate": "1991-11-16",
        //     //     "gender": "Femenino",
        //     //     "dni": "60572839",
        //     //     "nacionality": "española",
        //     //     "weight": "62 Kg",
        //     //     "height": "167 Cm"
        //     // },
        //     // {
        //     //     "name": "Gabriel",
        //     //     "lastname": "Perez",
        //     //     "birthdate": "1985-06-03",
        //     //     "gender": "Masculino",
        //     //     "dni": "30391752",
        //     //     "nacionality": "argentino",
        //     //     "weight": "80 Kg",
        //     //     "height": "180 Cm"
        //     // },
        //     // {
        //     //     "name": "Mariana",
        //     //     "lastname": "Hernandez",
        //     //     "birthdate": "1996-09-27",
        //     //     "gender": "Femenino",
        //     //     "dni": "50731498",
        //     //     "nacionality": "venezolana",
        //     //     "weight": "62 Kg",
        //     //     "height": "170 Cm"
        //     // },
        //     // {
        //     //     "name": "Federico",
        //     //     "lastname": "Lopez",
        //     //     "birthdate": "1981-04-24",
        //     //     "gender": "Masculino",
        //     //     "dni": "20891347",
        //     //     "nacionality": "mexicano",
        //     //     "weight": "82 Kg",
        //     //     "height": "178 Cm"
        //     // },
        //     // {
        //     //     "name": "Valentina",
        //     //     "lastname": "Gomez",
        //     //     "birthdate": "1997-03-01",
        //     //     "gender": "Femenino",
        //     //     "dni": "50481926",
        //     //     "nacionality": "colombiana",
        //     //     "weight": "63 Kg",
        //     //     "height": "168 Cm"
        //     // },
        //     // {
        //     //     "name": "Diego",
        //     //     "lastname": "Martinez",
        //     //     "birthdate": "1992-08-25",
        //     //     "gender": "Masculino",
        //     //     "dni": "70381542",
        //     //     "nacionality": "español",
        //     //     "weight": "75 Kg",
        //     //     "height": "175 Cm"
        //     // },
        //     // {
        //     //     "name": "Marina",
        //     //     "lastname": "Garcia",
        //     //     "birthdate": "1987-03-20",
        //     //     "gender": "Femenino",
        //     //     "dni": "30271968",
        //     //     "nacionality": "argentina",
        //     //     "weight": "58 Kg",
        //     //     "height": "163 Cm"
        //     // },
        //     // {
        //     //     "name": "Javier",
        //     //     "lastname": "Torres",
        //     //     "birthdate": "1983-08-15",
        //     //     "gender": "Masculino",
        //     //     "dni": "40371492",
        //     //     "nacionality": "venezolano",
        //     //     "weight": "78 Kg",
        //     //     "height": "180 Cm"
        //     // },
        //     // {
        //     //     "name": "Camila",
        //     //     "lastname": "Sanchez",
        //     //     "birthdate": "1998-06-11",
        //     //     "gender": "Femenino",
        //     //     "dni": "60281437",
        //     //     "nacionality": "mexicana",
        //     //     "weight": "55 Kg",
        //     //     "height": "160 Cm"
        //     // },
        //     // {
        //     //     "name": "Daniel",
        //     //     "lastname": "Morales",
        //     //     "birthdate": "1993-11-06",
        //     //     "gender": "Masculino",
        //     //     "dni": "70521739",
        //     //     "nacionality": "colombiano",
        //     //     "weight": "80 Kg",
        //     //     "height": "185 Cm"
        //     // },
        //     // {
        //     //     "name": "Maria",
        //     //     "lastname": "Fernandez",
        //     //     "birthdate": "1998-07-03",
        //     //     "gender": "Femenino",
        //     //     "dni": "50281359",
        //     //     "nacionality": "española",
        //     //     "weight": "62 Kg",
        //     //     "height": "167 Cm"
        //     // },
        //     // {
        //     //     "name": "Pedro",
        //     //     "lastname": "Perez",
        //     //     "birthdate": "1991-12-28",
        //     //     "gender": "Masculino",
        //     //     "dni": "70491572",
        //     //     "nacionality": "argentino",
        //     //     "weight": "75 Kg",
        //     //     "height": "180 Cm"
        //     // },
        //     // {
        //     //     "name": "Ana",
        //     //     "lastname": "Hernandez",
        //     //     "birthdate": "1996-09-14",
        //     //     "gender": "Femenino",
        //     //     "dni": "50921573",
        //     //     "nacionality": "venezolana",
        //     //     "weight": "60 Kg",
        //     //     "height": "165 Cm"
        //     // },
        //     // {
        //     //     "name": "Ricardo",
        //     //     "lastname": "Lopez",
        //     //     "birthdate": "1988-04-19",
        //     //     "gender": "Masculino",
        //     //     "dni": "20981537",
        //     //     "nacionality": "mexicano",
        //     //     "weight": "82 Kg",
        //     //     "height": "178 Cm"
        //     // },
        //     // {
        //     //     "name": "Natalia",
        //     //     "lastname": "Gomez",
        //     //     "birthdate": "1993-03-15",
        //     //     "gender": "Femenino",
        //     //     "dni": "50132984",
        //     //     "nacionality": "colombiana",
        //     //     "weight": "63 Kg",
        //     //     "height": "168 Cm"
        //     // },
        //     // {
        //     //     "name": "Gabriel",
        //     //     "lastname": "Martinez",
        //     //     "birthdate": "1986-09-10",
        //     //     "gender": "Masculino",
        //     //     "dni": "70461938",
        //     //     "nacionality": "español",
        //     //     "weight": "75 Kg",
        //     //     "height": "175 Cm"
        //     // },
        //     // {
        //     //     "name": "Luciana",
        //     //     "lastname": "Garcia",
        //     //     "birthdate": "1991-08-05",
        //     //     "gender": "Femenino",
        //     //     "dni": "50271936",
        //     //     "nacionality": "argentina",
        //     //     "weight": "57 Kg",
        //     //     "height": "162 Cm"
        //     // },
        //     // {
        //     //     "name": "Rodrigo",
        //     //     "lastname": "Torres",
        //     //     "birthdate": "1986-01-30",
        //     //     "gender": "Masculino",
        //     //     "dni": "40671529",
        //     //     "nacionality": "venezolano",
        //     //     "weight": "78 Kg",
        //     //     "height": "180 Cm"
        //     // },
        //     // {
        //     //     "name": "Carolina",
        //     //     "lastname": "Sanchez",
        //     //     "birthdate": "1991-09-25",
        //     //     "gender": "Femenino",
        //     //     "dni": "60581642",
        //     //     "nacionality": "mexicana",
        //     //     "weight": "55 Kg",
        //     //     "height": "160 Cm"
        //     // },
        //     // {
        //     //     "name": "Santiago",
        //     //     "lastname": "Morales",
        //     //     "birthdate": "1986-02-20",
        //     //     "gender": "Masculino",
        //     //     "dni": "70751482",
        //     //     "nacionality": "colombiano",
        //     //     "weight": "80 Kg",
        //     //     "height": "185 Cm"
        //     // },
        //     // {
        //     //     "name": "Isabella",
        //     //     "lastname": "Fernandez",
        //     //     "birthdate": "1990-11-15",
        //     //     "gender": "Femenino",
        //     //     "dni": "50491872",
        //     //     "nacionality": "española",
        //     //     "weight": "62 Kg",
        //     //     "height": "167 Cm"
        //     // },
        //     // {
        //     //     "name": "Federico",
        //     //     "lastname": "Perez",
        //     //     "birthdate": "1984-06-02",
        //     //     "gender": "Masculino",
        //     //     "dni": "30471539",
        //     //     "nacionality": "argentino",
        //     //     "weight": "80 Kg",
        //     //     "height": "180 Cm"
        //     // },
        //     // {
        //     //     "name": "Valeria",
        //     //     "lastname": "Hernandez",
        //     //     "birthdate": "1999-02-20",
        //     //     "gender": "Femenino",
        //     //     "dni": "50841527",
        //     //     "nacionality": "venezolana",
        //     //     "weight": "62 Kg",
        //     //     "height": "170 Cm"
        //     // },
        //     // {
        //     //     "name": "Luis",
        //     //     "lastname": "Lopez",
        //     //     "birthdate": "1989-07-17",
        //     //     "gender": "Masculino",
        //     //     "dni": "20461953",
        //     //     "nacionality": "mexicano",
        //     //     "weight": "82 Kg",
        //     //     "height": "178 Cm"
        //     // },
        //     // {
        //     //     "name": "Mariana",
        //     //     "lastname": "Gomez",
        //     //     "birthdate": "1994-04-22",
        //     //     "gender": "Femenino",
        //     //     "dni": "50391642",
        //     //     "nacionality": "colombiana",
        //     //     "weight": "63 Kg",
        //     //     "height": "168 Cm"
        //     // },
        //     // {
        //     //     "name": "Andres",
        //     //     "lastname": "Martinez",
        //     //     "birthdate": "1988-09-19",
        //     //     "gender": "Masculino",
        //     //     "dni": "70451823",
        //     //     "nacionality": "español",
        //     //     "weight": "75 Kg",
        //     //     "height": "175 Cm"
        //     // },
        //     // {
        //     //     "name": "Luciana",
        //     //     "lastname": "Garcia",
        //     //     "birthdate": "1993-06-14",
        //     //     "gender": "Femenino",
        //     //     "dni": "50291683",
        //     //     "nacionality": "argentina",
        //     //     "weight": "57 Kg",
        //     //     "height": "162 Cm"
        //     // },
        //     // {
        //     //     "name": "Jose",
        //     //     "lastname": "Torres",
        //     //     "birthdate": "1988-11-09",
        //     //     "gender": "Masculino",
        //     //     "dni": "40371629",
        //     //     "nacionality": "venezolano",
        //     //     "weight": "78 Kg",
        //     //     "height": "180 Cm"
        //     // },
        //     // {
        //     //     "name": "Luz",
        //     //     "lastname": "Sanchez",
        //     //     "birthdate": "1993-08-28",
        //     //     "gender": "Femenino",
        //     //     "dni": "60781934",
        //     //     "nacionality": "mexicana",
        //     //     "weight": "55 Kg",
        //     //     "height": "160 Cm"
        //     // },
        //     // {
        //     //     "name": "Juan",
        //     //     "lastname": "Morales",
        //     //     "birthdate": "1987-01-23",
        //     //     "gender": "Masculino",
        //     //     "dni": "20642975",
        //     //     "nacionality": "colombiano",
        //     //     "weight": "80 Kg",
        //     //     "height": "185 Cm"
        //     // },
        //     // {
        //     //     "name": "Emma",
        //     //     "lastname": "Fernandez",
        //     //     "birthdate": "1992-12-18",
        //     //     "gender": "Femenino",
        //     //     "dni": "60571938",
        //     //     "nacionality": "española",
        //     //     "weight": "62 Kg",
        //     //     "height": "167 Cm"
        //     // },
        //     // {
        //     //     "name": "Gabriel",
        //     //     "lastname": "Perez",
        //     //     "birthdate": "1986-07-05",
        //     //     "gender": "Masculino",
        //     //     "dni": "30391847",
        //     //     "nacionality": "argentino",
        //     //     "weight": "80 Kg",
        //     //     "height": "180 Cm"
        //     // },
        //     // {
        //     //     "name": "Mariana",
        //     //     "lastname": "Hernandez",
        //     //     "birthdate": "1997-10-01",
        //     //     "gender": "Femenino",
        //     //     "dni": "50731482",
        //     //     "nacionality": "venezolana",
        //     //     "weight": "62 Kg",
        //     //     "height": "170 Cm"
        //     // },
        //     {
        //         "name": "Federico",
        //         "lastname": "Lopez",
        //         "birthdate": "1982-05-29",
        //         "gender": "Masculino",
        //         "dni": "20891537",
        //         "nacionality": "mexicano",
        //         "weight": "82 Kg",
        //         "height": "178 Cm"
        //     },
        //     {
        //         "name": "Valentina",
        //         "lastname": "Gomez",
        //         "birthdate": "1997-04-06",
        //         "gender": "Femenino",
        //         "dni": "50481913",
        //         "nacionality": "colombiana",
        //         "weight": "63 Kg",
        //         "height": "168 Cm"
        //     }
        // ]))

        this._gamers = JSON.parse(localStorage.getItem('gamers')) ?? []
    },
    async saveGamer(form) {
        let gamers = JSON.parse(localStorage.getItem('gamers')) ?? []
        gamers.push(form)

        localStorage.setItem('gamers', JSON.stringify(gamers))
    },
    async removeGamer(dni) {
        let gamers = JSON.parse(localStorage.getItem('gamers')) ?? []
        gamers = gamers.filter(gamer => gamer.dni != dni)

        localStorage.setItem('gamers', JSON.stringify(gamers))
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
