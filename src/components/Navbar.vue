<template>
  <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <a class="navbar-brand" style="color:white" href="#">TO-DO</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link active" style="color:white" aria-current="page" href="/">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" style="color:white" href="CreateList">To-Dos erstellen</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" style="color:white" href="List">Liste</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
  <div class="collapse" id="navbarToggleExternalContent">
    <div class="bg-dark p-4">
      <h6><router-link class="text-white" to="/">Home</router-link></h6>
      <h6><router-link class="text-white" to="/createList">To-Dos erstellen</router-link></h6>
      <h6><router-link class="text-white" to="/list">Liste</router-link></h6>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NavBar'
}
</script>
