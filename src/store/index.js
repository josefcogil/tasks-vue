import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
    state: {
        tasks: {
            all: [{ title: 'Wash the dishes', completed: true }, { title: 'Make the dinner', completed: false }, { title: 'Buy bananas', completed: true }],
            deleted: [{ title: 'Create a tasks app', completed: false }]
        }
    },
    getters: {
        getAllTasks(state) {
            return state.tasks.all
        },
        getDeletedTasks(state) {
            return state.tasks.deleted
        }
    },
    mutations: {
        ADD_TASK(state, task) {
            state.tasks.all.push(task)
        },
        RECOVER_TASK(state, task) {
            state.tasks.all.push(task)

            let index = state.tasks.deleted.indexOf(task)
            state.tasks.deleted.splice(index, 1);
        },
        REMOVE_TASK(state, task) {
            state.tasks.deleted.push(task)

            let index = state.tasks.all.indexOf(task)
            state.tasks.all.splice(index, 1);
        },
        DELETE_TASK(state, task) {
            let index = state.tasks.all.indexOf(task)
            state.tasks.deleted.splice(index, 1);
        },
        CHANGE_TASK_STATUS(state, task) {
            let index = state.tasks.all.indexOf(task)
            state.tasks.all.splice(index, 1);

            if (task.completed) {
                task.completed = false
            } else {
                task.completed = true
            }

            state.tasks.all.push(task);
        }
    }
})