<template>
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
</template>

<script>
export default {
  name: 'CreateTask',
  data: function () {
    return {
      title: '',
      description: '',
      status: false,
      date: null
    }
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
    }
  }
}
</script>

<style scoped>

</style>
