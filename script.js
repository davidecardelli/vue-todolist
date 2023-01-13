console.log('vue ok', Vue);

const app = Vue.createApp({

    data(){
      return {
        newTasks: '',
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
            addTasks() {
                const task = {
                    text: this.newTasks,
                    done: false,
                }
                this.items.push(task),
                this.cleanNewTask()
            },

            cleanNewTask () {
                this.newTasks = '';
            }   
        }
}).mount('#root');