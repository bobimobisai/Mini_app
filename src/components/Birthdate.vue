<template>
  <div class="container">
    <h1>Введите дату вашего рождения</h1>
    <input type="date" v-model="birthdate" />
    <button @click="goToNext">Далее</button>
  </div>
</template>

<script>
export default {
  name: 'BirthdatePage',
  data() {
    return {
      birthdate: '',
    };
  },
  methods: {
    goToNext() {
      if (this.birthdate) {
        this.$router.push({ 
          name: 'NamePage', 
          query: { birthdate: this.birthdate } 
        });
      } else {
        alert('Пожалуйста, введите дату рождения');
      }
    },
  },
};
</script>

<style scoped>
/* Стили для контейнера и полей ввода */
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
  max-width: 600px;
  margin: 0 auto;
}
input {
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
  margin-top: 10px;
  width: 100%;
  max-width: 300px;
}
button {
  margin-top: 20px;
  padding: 10px 20px;
  background-color: #42b983;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}
button:hover {
  background-color: #369f7a;
}
</style>
