<template>
    <div class="modal">
      <div>
        <slot></slot>
      </div>
    </div>
</template>

<style>

/* MODAL */

.modal {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: rgba(0,0,0,0.6);
  z-index: 1;
  opacity:1;
  pointer-events: none;
  color: #fff;
}

.modal > div {
  border-radius: 10px;
  width: 400px;
  position: relative;
  margin: 10% auto;
  padding: 15px 20px;
  background: #008000;
}

</style>