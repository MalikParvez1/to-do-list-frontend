<template>
  <section class="vh-100">
    <Weather></Weather>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.3/font/bootstrap-icons.css">
    <div class="container py-5 h-30">
      <div class="row d-flex justify-content-center align-items-center">
        <div class="col">
          <div class="card" id="list1" style="border-radius: .75rem; background-color: #eff1f2;">
            <div class="card-body py-4 px-4 px-md-5">
              <div class="d-flex justify-content-start align-items-left h-100">
              </div>
              <div class=""><th scope="col">Todos insgesamt: {{toDos.length}}
                <a href="CreateList" class="btn btn-outline-primary btn-sm ms-3" role="button"><i class="bi bi-list-task"></i> Neue To-Dos anlegen</a>
                <button type="submit" class="btn btn-outline-danger btn-sm ms-3" v-on:click="deleteAllToDos"><i class="bi bi-trash3-fill"></i> Alle ToDos löschen</button></th>
              </div>
              <hr class="my-4">
              <table class="table mb-4">
                <thead class="table-light">
                <tr>
                  <th scope="col"><i class="bi bi-ui-checks-grid"></i> Status</th>
                  <th scope="col"><i class="bi bi-justify"></i> Titel</th>
                  <th scope="col"><i class="bi bi-card-text"></i> Beschreibung</th>
                  <th scope="col"><i class="bi bi-calendar-x"></i> Fälligkeitsdatum</th>
                  <th scope="col"><i class="bi bi-pencil-square"></i>Bearbeiten</th>
                </tr>
                </thead>
                <tbody>
                <tr v-for="toDo in toDos" :key="toDo.id">
                  <td><input class="form-check-input" type="checkbox" v-model="toDo.status" v-on:click="isDone (toDo.id)"></td>
                  <td>{{toDo.todoTitel}}</td>
                  <td>{{toDo.beschreibung}}</td>
                  <td>{{new Date(toDo.datum).toLocaleDateString()}}</td>
                  <td>
                      <button type="submit" class="btn btn-outline-danger btn-sm" v-on:click="deleteToDo (toDo.id)"><i class="bi bi-trash3-fill"></i></button>
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
import Weather from '@/components/Weather'
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'List',
  components: {
    Weather
  },
  data: function () {
    return {
      title: '',
      description: '',
      status: false,
      date: null,
      toDos: []
    }
  },
  mounted () {
    const endpoint = process.env.VUE_APP_BACKEND_BASE_URL + '/api/v1/todolist'
    const requestOptions = {
      method: 'GET',
      redirect: 'follow'
    }

    fetch(endpoint, requestOptions)
      .then(response => response.json())
      .then(result => result.forEach(toDo => {
        this.toDos.push(toDo)
      }))
      .catch(error => console.log('error', error))
  },
  methods: {
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
        todoStatus: this.status = !this.status
      })

      const requestOptions = {
        method: 'PUT',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
      }

      fetch(endpoint + '/api/v1/todolist/' + id + '/status', requestOptions)
        .then(response => response.text())
        .then(async result => {
          console.log(result)
          document.location.reload()
        })
        .catch(error => console.log('error', error))
    },
    deleteAllToDos () {
      const endpoint = process.env.VUE_APP_BACKEND_BASE_URL
      const raw = ''

      const requestOptions = {
        method: 'DELETE',
        body: raw,
        redirect: 'follow'
      }

      fetch(endpoint + '/api/v1/todolist/deleteall', requestOptions)
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
