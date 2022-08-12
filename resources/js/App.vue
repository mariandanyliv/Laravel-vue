<template>
    <div class="todoListContainer">
        <div class="heading">
            <h2 id="title"> Todo List</h2>
            <addTaskForm
                v-on:reloadlist="getList()"
            />
        </div>
        <listView
            :tasks="tasks"
            v-on:reloadlist="getList()"
        />
    </div>
</template>

<script>
import addTaskForm from "./components/addTaskForm.vue"
import listView from "./components/listView.vue"
export default {
    data: function () {
        return {
            tasks: []
        }
    },
    components: {
        addTaskForm,
        listView,
    },
    methods: {
        getList () {
            axios.get('api/tasks')
            .then(response => {
                this.tasks = response.data
            })
            .catch (error => {
                console.log(error)
            })
        }
    },
    created() {
        this.getList();
    }
}
</script>

<style scoped>
.todoListContainer {
    width: 350px;
    margin: auto;
}

.heading {
    background: #e6e6e6;
    padding: 10px;
}

#title {
    text-align: center;
}
</style>
