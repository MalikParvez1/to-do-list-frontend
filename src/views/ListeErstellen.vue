<template>
  <a class="weatherwidget-io" href="https://forecast7.com/de/52d5213d40/berlin/" data-label_1="BERLIN" data-label_2="Wetter" data-icons="Climacons Animated" data-days="5" data-theme="original" data-basecolor="#212529" data-cloudfill="#212529" >BERLIN Wetter</a>
    <div class="container py-5 h-100">
      <div class="row d-flex justify-content-center align-items-center h-100">
        <div class="col">
          <div class="card" id="list1" style="border-radius: .75rem; background-color: #eff1f2;">
            <div class="card-body py-4 px-4 px-md-5">

              <p class="h1 text-center mt-3 mb-4 pb-3 text-primary">
                <u>Todos</u>
              </p>
              <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">Aufgabentitel</label>
                <input type="text" class="form-control" v-model="title" required>
              </div>
              <div class="mb-3">
                <label for="exampleFormControlTextarea1" class="form-label">Aufgabenbeschreibung</label>
                <textarea class="form-control" id="exampleFormControlTextarea1" v-model="description" rows="3" required></textarea>
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
  <div class="col-md-8 offset-md-2">
    <p class="text-white">Hinweis: Um ein task zu ändern müssen die Felder zum erstellen der Tasks nochmal ausgefüllt werden und anschließend auf den "<i class="bi bi-pencil"></i>" Button vom jeweiligen Task geklickt werden.</p>
  </div>
  <section class="vh-100">
    <div class="container py-5 h-30">
      <div class="row d-flex justify-content-center align-items-center h-100">
        <div class="col">
          <div class="card" id="list1" style="border-radius: .75rem; background-color: #eff1f2;">
            <div class="card-body py-4 px-4 px-md-5">
              <div class=""><th scope="col">Todos insgesamt: {{toDos.length}}
                <button type="submit" class="btn btn-outline-danger btn-sm ms-3" v-on:click="deleteAllToDos"><i class="bi bi-trash3-fill"></i> alle ToDos löschen</button></th>
              </div>
              <hr class="my-4">
              <table class="table mb-4">
                <thead class="table-light">
                <tr>
                  <th scope="col"><i class="bi bi-ui-checks-grid"></i> Status</th>
                  <th scope="col"><i class="bi bi-justify"></i> Titel</th>
                  <th scope="col"><i class="bi bi-card-text"></i> Beschreibung</th>
                  <th scope="col"><i class="bi bi-calendar-x"></i> Fälligkeitsdatum</th>
                  <th scope="col"><i class="bi bi-pencil"></i> Bearbeiten</th>
                </tr>
                </thead>
                <tbody>
                <tr v-for="toDo in toDos" :key="toDo.id">
                  <td><input class="form-check-input" type="checkbox" v-model="toDo.status" v-on:click="isDone (toDo.id)"></td>
                  <td>{{toDo.todoTitel}}</td>
                  <td>{{toDo.beschreibung}}</td>
                  <td>{{new Date(toDo.datum).toLocaleDateString()}}</td>
                  <td>
                      <button type="submit" class="btn btn-outline-primary btn-sm me-2" v-on:click="updateToDo (toDo.id)"><i class="bi bi-pencil"></i></button>
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
// eslint-disable-next-line no-unused-expressions
!(function (d, s, id) {
  let js
  const fjs = d.getElementsByTagName(s)[0]
  if (!d.getElementById(id)) {
    js = d.createElement(s)
    js.id = id
    js.src = 'https://weatherwidget.io/js/widget.min.js'
    fjs.parentNode.insertBefore(js, fjs)
  }
}(document, 'script', 'weatherwidget-io-js'))
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'ListeErstellen',
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
      if (this.title === '' || this.description === '') {
        alert('Die Felder "Aufgabentitel" und "Aufgabenbeschreibung" dürfen nicht leer sein')
      } else {
        const endpoint = process.env.VUE_APP_BACKEND_BASE_URL + '/api/v1/todolist'
        const myHeaders = new Headers()
        myHeaders.append('Content-Type', 'application/json')
        const raw = JSON.stringify({

          todoTitel: this.title,
          beschreibung: this.description,
          todoStatus: this.status,
          datum: this.date
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
      }
    },
    updateToDo (id) {
      if (this.title === '' || this.description === '') {
        alert('Die Felder "Aufgabentitel" und "Aufgabenbeschreibung" dürfen nicht leer sein')
        const endpoint = process.env.VUE_APP_BACKEND_BASE_URL + '/api/v1/todolist'
        const raw = ''

        const requestOptions = {
          method: 'GET',
          body: raw,
          redirect: 'follow'
        }

        fetch(endpoint + '/api/v1/todolist/' + id, requestOptions)
          .then(response => response.text())
          .then(result => console.log(result))
          .catch(error => console.log('error', error))
      } else {
        const endpoint = process.env.VUE_APP_BACKEND_BASE_URL
        const myHeaders = new Headers()
        myHeaders.append('Content-Type', 'application/json')
        const raw = JSON.stringify({

          todoTitel: this.title,
          beschreibung: this.description,
          todoStatus: this.status,
          datum: this.date
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
.col-center{
  margin: 0 auto;
}

</style>
