<template>
  <div class="container">
    <h1>Введите ваши данные</h1>
    <input type="text" v-model="firstName" placeholder="Имя" />
    <input type="text" v-model="lastName" placeholder="Фамилия" />
    <input type="text" v-model="username" placeholder="Юзернейм" />
    <button @click="goToSummary">Далее</button>
  </div>
</template>

<script>
export default {
  name: 'NamePage',
  data() {
    return {
      firstName: '',
      lastName: '',
      username: '',
    };
  },
  methods: {
    goToSummary() {
      if (this.firstName && this.lastName && this.username) {
        this.$router.push({ 
          name: 'SummaryPage', 
          query: { 
            firstName: this.firstName, 
            lastName: this.lastName, 
            username: this.username,
            birthdate: this.$route.query.birthdate 
          } 
        });
      } else {
        alert('Пожалуйста, заполните все поля');
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
