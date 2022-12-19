<template>
  <section class="vh-10">
    <div class="container py-5 h-100">
      <div class="row d-flex justify-content-center align-items-center h-100">
        <div class="col">
          <div class="card" id="list1" style="border-radius: .75rem; background-color: #eff1f2;">
            <div class="card-body py-4 px-4 px-md-5">

              <p class="h1 text-center mt-3 mb-4 pb-3 text-primary">
                <i class="fas fa-check-square me-1"></i>
                <u>Todos</u>
              </p>

              <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">Aufgabentitel</label>
                <input type="text" class="form-control" v-model="title">
              </div>
              <div class="mb-3">
                <label for="exampleFormControlTextarea1" class="form-label">Aufgabenbeschreibung</label>
                <textarea class="form-control" id="exampleFormControlTextarea1" v-model="description" rows="3"></textarea>
              </div>

              <div class="mb-3">
                <label for="exampleFormControlTextarea1" class="form-label">Fälligkeitsdatum</label>
                  <label for="formDate"></label>
                   <Datepicker class="form-control" id="minimumView" v-model="date"></Datepicker>
                </div>
                    <button type="submit" class="btn btn-success" v-on:click="createToDo">erstellen</button>
              </div>
            </div>
          </div>
        </div>
      </div>
  </section>
  <div class="d-flex justify-content-center">
    <p class="text-start col-9 text-white">Hinweis: Um ein task zu ändern müssen die Felder zum erstellen der Tasks nochmal ausgefüllt werden und anschließend auf den "ändern" Button vom jeweiligen Task geklickt werden.</p>
  </div>
  <section class="vh-100">
    <div class="container py-5 h-30">
      <div class="row d-flex justify-content-center align-items-center h-100">
        <div class="col">
          <div class="card" id="list1" style="border-radius: .75rem; background-color: #eff1f2;">
            <div class="card-body py-4 px-4 px-md-5">
              <div class=""><th scope="col">Todos insgesamt: {{toDos.length}}</th></div>
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
                <tr v-for="toDo in toDos" :key="toDo.id">
                  <td> <input class="form-check-input" type="checkbox" v-model="toDo.status"></td>
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
// import { ref } from 'vue'
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'ToDos',
  data () {
    return {
      id: '',
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
    createToDo () {
      const endpoint = process.env.VUE_APP_BACKEND_BASE_URL + '/api/v1/todolist'
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
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
      }

      fetch(endpoint, requestOptions)
        .then(response => response.text())
        .then(async result => {
          console.log(result)
          document.location.reload()
        })
        .catch(error => console.log('error', error))
    },
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
    }
  }
}

</script>

<style scoped>

#list1 .form-control {
  border-color: transparent;
}
#list1 .form-control:focus {
  border-color: transparent;
  box-shadow: none;
}
#list1 .select-input.form-control[readonly]:not([disabled]) {
  background-color: #fbfbfb;
}

</style>
