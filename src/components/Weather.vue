<template>
<a class="weatherwidget-io" href="https://forecast7.com/de/52d5213d40/berlin/" data-label_1="BERLIN" data-label_2="Wetter" data-icons="Climacons Animated" data-days="7" data-theme="original" data-basecolor="#212529" data-cloudfill="#212529" >BERLIN Wetter</a>
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
  name: 'Weather'
}
</script>
