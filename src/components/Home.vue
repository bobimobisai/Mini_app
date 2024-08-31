<template>
  <div class="container">
    <h1>Введите ваши данные</h1>
    <input type="text" v-model="firstName" placeholder="Имя" />
    <input type="text" v-model="lastName" placeholder="Фамилия" />
    <input type="text" v-model="username" placeholder="Юзернейм" />
    <input type="date" v-model="birthdate" />
    <button @click="goToProfile">Далее</button>
  </div>
</template>

<script>
export default {
  name: 'HomePage',
  data() {
    return {
      firstName: '',
      lastName: '',
      username: '',
      birthdate: '',
    };
  },
  methods: {
    goToProfile() {
      if (this.birthdate && this.firstName && this.lastName && this.username) {
        this.$router.push({ 
          name: 'Profile', 
          query: { 
            firstName: this.firstName, 
            lastName: this.lastName, 
            username: this.username,
            birthdate: this.birthdate 
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
