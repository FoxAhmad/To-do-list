
const app = Vue.createApp({
    data() {
        return {
            
            works: [
                {name: "work1" , done: false,id:1},
                {name: "work2" , done: false,id:2},
                {name: "work3" , done: false,id:3},
            ],
            nt: '',

            
        
            
    }
},
computed: {
   
    // removeTask(index) {
    //     this.array.splice(index, 1)
    // },
    //  cTask() {
    //     this.works.done = true;
    // },
    // ncTask(index) {
    //     this.works.done = false;
    // },
    completedTask() {
       
        return this.works.filter(w => w.done === true);
    },
    uncompletedTask() {
        
         return this.works.filter(w => w.done === false);
       } 
    },
    methods: {
        // add a new task
        addtask() {
          if (this.nt.trim()) { // check if the task name is not empty or whitespace
            this.works.push({
              name: this.nt.trim(),
              done: false,
              id: this.works.length + 1, // generate a unique ID for the new task
            });
            this.nt = ""; // clear the input field
          }
        },
    }
}
)

app.mount('#app')
