<template>
  <section class="vh-100">
    <div class="container py-5 h-30">
      <div class="row d-flex justify-content-center align-items-center h-100">
        <div class="col">
          <div class="card" id="list1" style="border-radius: .75rem; background-color: #eff1f2;">
            <div class="card-body py-4 px-4 px-md-5">
              <hr class="my-4">
              <table class="table mb-4">
                <thead class="table-light">
                <tr>
                  <th scope="col">Status</th>
                  <th scope="col">Titel</th>
                  <th scope="col">Beschreibung</th>
                  <th scope="col">Fälligkeitsdatum</th>
                </tr>
                </thead>
                <tbody>
                <tr v-for="toDo in toDos" :key="toDo.id">
                  <td> <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" v-model="status"></td>
                  <td>{{toDo.todoTitel}}</td>
                  <td>{{toDo.beschreibung}}</td>
                  <td>{{new Date(toDo.datum).toLocaleDateString()}}</td>
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
  name: 'ListeView',
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
  }
}
</script>

<style scoped>

</style>
