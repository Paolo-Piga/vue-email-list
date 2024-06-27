// axios.get(`https://flynn.boolean.careers/exercises/api/random/mail`)
//     then(function(response){
//     const result = response.data;
// })

const {createApp} = Vue;
const container = document.getElementById("app");

createApp({
    data(){
        return{
            numero: 0,
        }
    },
    methods: {
        
    },
    mounted() {
        for (let i=0; i<10; i++)
        {
            axios.get(`https://flynn.boolean.careers/exercises/api/random/mail`)
            .then(function(response){
            const result = response.data.response;
            console.log(result);
            container.innerHTML += ``
            });
        }
        
    }
}).mount(`#app`);