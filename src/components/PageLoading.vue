<template>
    <div class="c-loader"></div>
</template>

<style>

.c-loader {
  animation: is-rotating 1s infinite;
  border: 6px solid #e5e5e5;
  border-radius: 50%;
  border-top-color: #759F41;
  height: 80px;
  width: 80px;
  margin: 0 auto 40px;
}

@keyframes is-rotating {
  to {
    transform: rotate(1turn);
  }
}


</style>