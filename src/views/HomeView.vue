<template>
  <div class="p-3 mb-2 bg-dark text-light">
  <div class="home">
    <img alt="Vue logo" src="../assets/todo.png">
  </div>
  <div>
    <h1>Glaube an dich, du schaffst das!</h1>
  </div>
  <div class="gap-2">
   <p class="text-center">Hallo, mit dieser Webseite kannst du deine To-Dos auflisten und sie nach Fälligkeit prüfen. Wenn du sie erledigt hast kannst du es abhacken.</p>
  </div>
  <div class="d-grid gap-3 col-6 mx-auto">
    <button type="button" class="btn btn-info">neue To-Dos anlegen</button>
    <button type="button" class="btn btn-info">bereits vorhandene</button>
  </div>
  <div class="container">
    <div class="row">
  <div class="col-sm-3">
    <p class="text-start">1. Sammle To-Dos!
      Schreibe auf was du in dieser Woche/Monat alles für To-Dos hast. Achte darauf das du deine deine To-Dos in kleinere Aufgaben zu unterteilen.</p>
  </div>
  <div class="col-sm-3">
    <p class="text-start">2. Fälligkeitsdatum!
    Damit du die Zeit immer im Auge behalten kannst solltest du dir immer ein Fälligkeitsdatum vermerken.</p>
    </div>
    <div class="col-sm-3">
      <p class="text-start">3. Abhaken!
      Um dich selbst zu motivieren, kannst du die erledigten To-Dos abhaken.</p>
  </div>
    </div>
  </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
}
</script>
