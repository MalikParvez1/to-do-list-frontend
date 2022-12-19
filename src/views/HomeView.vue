<template>
  <section class="vh-100">
    <div class="p-3 mb-2 bg-dark text-light">
      <div class="home m-5"  style="background-color: #212529">
        <img alt="Vue logo" src="../assets/todo.png">
      </div>
      <div class="m-5">
        <h1>Glaube an dich, du schaffst das!</h1>
      </div>
      <div class="m-5">
        <p class="text-center">Hallo, mit dieser Webseite kannst du deine To-Dos auflisten und sie nach Fälligkeit prüfen. Wenn du sie erledigt hast kannst du es abhacken.</p>
      </div>
      <div class="d-grid gap-3 col-6 mx-auto m-5">
        <a href="ListeErstellen" class="btn btn-info" role="button">Neue To-Dos anlegen</a>
        <a href="ListeView" class="btn btn-info" role="button">Bereits vorhandene To-Dos</a>
      </div>
      <div class="h-100 d-flex justify-content-center">
        <p class="text-start col-sm-3">1. Sammle To-Dos!
          Schreibe auf was du in dieser Woche/Monat alles für To-Dos hast. Achte darauf das du deine deine To-Dos in kleinere Aufgaben unterteilst.</p>
        <p class="text-start col-sm-3">2. Fälligkeitsdatum!
          Somit kannst du die Zeit im Auge behalten und kannst dir ein Fälligkeitsdatum vermerken.</p>
        <p class="text-start col-sm-3">3. Abhaken!
          Um dich selbst zu motivieren, kannst du die erledigten To-Dos abhaken.</p>
      </div>
    </div>
  </section>
</template>

<script>
// @ is an alias to /src

export default {
}
</script>
