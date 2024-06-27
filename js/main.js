// axios.get(`https://flynn.boolean.careers/exercises/api/random/mail`)
//     then(function(response){
//     const result = response.data;
// })

const {createApp} = Vue;


createApp({
    data(){
        
        return{
           emails : [
            
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
            
            emails.push(result);
            
            });
        }
        
    }
}).mount(`#app`);