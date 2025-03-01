<template>
    <v-btn class="btn" :href="href" :text="text">
      <slot></slot>
    </v-btn>
  </template>
  
  <script>
  export default {
    name: "CustomButton",
    props: {
      href: {
        type: String,
        required: true,
      },
      text: {
        type: String,
        required: true,
      },
    },
  };
  </script>
  
  <style scoped>
  .btn {
    color: white;
    font-family: 'Monserrat';
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 16px;
    margin-left: 35%;
    margin-right: 35%;
    background-color: green;
    transition: background-color 0.3s ease, transform 0.3s ease;
  }
  
  .btn:hover {
    background-color: darkgreen;
    transform: scale(1.05);
  }
  </style>