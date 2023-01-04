<template>
  <section class="vh-100">
    <div class="container py-5 h-30">
      <div class="row d-flex justify-content-center align-items-center h-100">
        <div class="col">
          <div class="card" id="list1" style="border-radius: .75rem; background-color: #eff1f2;">
            <div class="card-body py-4 px-4 px-md-5">
              <div class=""><th scope="col">Todos insgesamt: {{toDos.length}}</th>
              </div>
              <hr class="my-4">
              <table class="table mb-4">
                <thead class="table-light">
                <tr>
                  <th scope="col">Status</th>
                  <th scope="col">Titel</th>
                  <th scope="col">Beschreibung</th>
                  <th scope="col">Fälligkeitsdatum</th>
                  <th scope="col">Bearbeiten</th>
                </tr>
                </thead>
                <tbody>
                <tr v-for="toDo in tests" :key="toDo.id">
                  <td><input class="form-check-input" type="checkbox" v-model="toDo.status" v-on:click="isDone (toDo.id)"></td>
                  <td>{{toDo.todoTitel}}</td>
                  <td>{{toDo.beschreibung}}</td>
                  <td>{{new Date(toDo.datum).toLocaleDateString()}}</td>
                  <td>
                    <button type="submit" class="btn btn-outline-primary btn-sm" v-on:click="updateToDo (toDo.id)">ändern</button>
                    <button type="submit" class="btn btn-outline-danger btn-sm" v-on:click="deleteToDo (toDo.id)">löschen</button>
                  </td>
                </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'TaskList',
  props: {
    tests: {
      type: Array,
      required: true
    }
  },
  methods: {
    updateToDo (id) {
      const endpoint = process.env.VUE_APP_BACKEND_BASE_URL
      const myHeaders = new Headers()
      myHeaders.append('Content-Type', 'application/json')
      // eslint-disable-next-line no-undef
      const date = this.date

      const raw = JSON.stringify({

        todoTitel: this.title,
        beschreibung: this.description,
        todoStatus: this.status,
        datum: date
      })

      const requestOptions = {
        method: 'PUT',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
      }

      fetch(endpoint + '/api/v1/todolist/' + id, requestOptions)
        .then(response => response.text())
        .then(async result => {
          console.log(result)
          document.location.reload()
        })
        .catch(error => console.log('error', error))
    },
    deleteToDo (id) {
      const endpoint = process.env.VUE_APP_BACKEND_BASE_URL
      const raw = ''

      const requestOptions = {
        method: 'DELETE',
        body: raw,
        redirect: 'follow'
      }

      fetch(endpoint + '/api/v1/todolist/' + id, requestOptions)
        .then(response => response.text())
        .then(async result => {
          console.log(result)
          document.location.reload()
        })
        .catch(error => console.log('error', error))
    },
    isDone (id) {
      const endpoint = process.env.VUE_APP_BACKEND_BASE_URL
      const myHeaders = new Headers()
      myHeaders.append('Content-Type', 'application/json')

      const raw = JSON.stringify({
        todoStatus: this.status
      })

      const requestOptions = {
        method: 'PUT',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
      }

      fetch(endpoint + '/api/v1/todolist/' + id, requestOptions)
        .then(response => response.text())
        .then(async result => {
          console.log(result)
          document.location.reload()
        })
        .catch(error => console.log('error', error))
    }
  }
}
</script>

<style scoped>

</style>
