const app = Vue.createApp({
    data() {
        return {
           notes: [
               {
                titel: "Projekt 1",
                kund: "A",
                description: "kort beskrivning av A",
                details: "Mer information om projekt A"
               },
               {
                titel: "Projekt 2",
                kund: "A",
                description: "kort beskrivning av A",
                details: "Mer information om projekt A"
               },
               {
                titel: "Projekt 3",
                kund: "A",
                description: "kort beskrivning av A",
                details: "Mer information om projekt A"
               },
               {
                titel: "Projekt 4",
                kund: "A",
                description: "kort beskrivning av A",
                details: "Mer information om projekt A"
               },
               {
                titel: "Projekt 5",
                kund: "A",
                description: "kort beskrivning av A",
                details: "Mer information om projekt A"
               },
           ]
        }
    },
    created() {
        axios.get('sara.json')
        .then((response)=> {
            this.sara = response.data;
        })
    }
});

app.mount('#app');