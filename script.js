console.log('vue ok', Vue);

const app = Vue.createApp({

    data(){
      return {
        newItem: '',
        items: [
        {
          text: 'Comprare pane',
          done: true,
        },  {
            text: 'Comprare pasta',
            done: false,
        },  {
            text: 'Pagare la bolletta della luce',
            done: false,
        },  {
            text: 'Ritirare pacco Amazon',
            done: false,
        },  {
            text: 'Passare straccio',
            done: false,
        },
        ]}
    },
         methods: {

    },
}).mount('#root');