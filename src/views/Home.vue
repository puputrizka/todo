<template>
  <div>
    <div>
      <input type="text" v-model="userId" />
    </div>
    <div>
      <input type="text" v-model="id" />
    </div>
    <div>
      <input type="text" v-model="title" />
    </div>
    <div>
      <input type="text" v-model="completed" />
    </div>
    <div>
      <button @click="addTodo">add data</button>
    </div>
    <div>
      <tr>
        <th>
          No
        </th>
        <th>
          userId
        </th>
        <th>
          id
        </th>
        <th>
          title
        </th>
        <th>
          completed
        </th>
        <th>
          action
        </th>
      </tr>
      <tr v-for="(item, index) in todoList" :key="index">
        <td>
          {{ index + 1 }}
        </td>
        <td>
          {{ item.userId }}
        </td>
        <td>
          {{ item.id }}
        </td>
        <td>
          {{ item.title }}
        </td>
        <td>
          {{ item.completed }}
        </td>
        <td>
          <button @click="deleteTodo(item.id)">delete</button>
          <button @click="editTodo(item)">edit</button>
        </td>
      </tr>
    </div>

    <b-modal ref="edit-todolist" title="Edit Todo" hide-footer>
      <div v-if="selectedData">
        <div>
          update data
        </div>
        <div>
          <input type="text" v-model="selectedData.userId" />
        </div>
        <div>
          <input type="text" v-model="selectedData.id" />
        </div>
        <div>
          <input type="text" v-model="selectedData.title" />
        </div>
        <div>
          <input type="text" v-model="selectedData.completed" />
        </div>
        <div slot="modal-footer">
          <button @click="updateTodoListData">
            update
          </button>
          <button @click="hideModal">
            cancel
          </button>
        </div>
      </div>
    </b-modal>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters("todo", ["todoList"])
  },
  data() {
    return {
      userId: "",
      id: "",
      title: "",
      completed: "",
      selectedData: null
    };
  },
  methods: {
    ...mapActions("todo", [
      "getTodoList",
      "deleteTodoList",
      "addTodoList",
      "updateTodoList"
    ]),
    async deleteTodo(id) {
      await this.deleteTodoList(id);
    },
    async addTodo() {
      const data = {
        userId: this.userId,
        id: this.id,
        title: this.title,
        completed: this.completed
      };
      await this.addTodoList(data);
      (this.userId = ""),
      (this.id = ""),
      (this.title = ""),
      (this.completed = "");
    },
    async updateTodoListData() {
      await this.updateTodoList(this.selectedData);
      this.selectedData = null;
    },
    editTodo(data) {
      this.selectedData = JSON.parse(JSON.stringify(data));
      this.$refs["edit-todolist"].show();
    },
    hideModal() {
      this.$refs["edit-todolist"].hide();
    }
  },
  async created() {
    await this.getTodoList();
  }
};
</script>
