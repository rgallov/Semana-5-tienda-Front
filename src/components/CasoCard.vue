<template>
  <div class="col">
    <div class="footer-widget card text-black bg-light">
      <div class="d-flex justify-content-center p-2">
        <img class="team-image__img" v-bind:src="member.imagen" alt="Developer" />
      </div>
      <div class="card-body">
        <h5 class="card-title">{{ member.nombre }}</h5>
        <p class="card-text" v-html="member.descripcion"></p>
      </div>
      <div class="m-auto pb-2">
        <a
          :href="member.url"
          class="btn btn-outline-success mr-2"
          role="button"
          aria-pressed="true"
          target="_blank"
          >Ver</a
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CasoCard",
  props: { member: Object },
};
</script>

<style scoped>
.footer-widget {
  border: 1px solid #444;
  height: 100%;
  width: 100%;
}
</style>
