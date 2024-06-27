// axios.get(`https://flynn.boolean.careers/exercises/api/random/mail`)
//     then(function(response){
//     const result = response.data;
// })

const {createApp} = Vue;


createApp({
    el: `emails`,
    data(){
        
        return{
           emails : [
            { message: `${result}`}
           ]
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
            
            
            });
        }
        
        
    },
    
}).mount(`#app`);