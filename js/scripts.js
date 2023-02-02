const { createApp } = Vue; 

createApp({

    data() {

        return {
            titolo: 'Vue Email List',
            apiUrl: 'https://flynn.boolean.careers/exercises/api/random/mail',
            emails: []
        }

    },

    methods:{

        generatoreEmail(){

            for (let index = 0; index < 10; index++) {

                    axios
                        .get(this.apiUrl)
                        .then((response) => {

                            console.log(index);
                            console.log(response);
                            console.log(response.data);

                            this.emails.push(response.data.response);
                    
                        });
                
            }
            
        }

    }

}).mount("#app");