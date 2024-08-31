<template>
  <div class="container">
    <h1>Ваши данные</h1>
    <p>Имя: {{ firstName }}</p>
    <p>Фамилия: {{ lastName }}</p>
    <p>Юзернейм: {{ username }}</p>
    <p>До следующего дня рождения: {{ timeUntilBirthday }}</p>
  </div>
</template>

<script>
export default {
  name: 'UserProfile',
  computed: {
    firstName() {
      return this.$route.query.firstName || 'Не указано';
    },
    lastName() {
      return this.$route.query.lastName || 'Не указано';
    },
    username() {
      return this.$route.query.username || 'Не указано';
    },
    birthdate() {
      return this.$route.query.birthdate || '';
    },
    timeUntilBirthday() {
      const today = new Date();
      const birthDate = new Date(this.birthdate);
      let nextBirthday = new Date(today.getFullYear(), birthDate.getMonth(), birthDate.getDate());

      if (today > nextBirthday) {
        nextBirthday = new Date(today.getFullYear() + 1, birthDate.getMonth(), birthDate.getDate());
      }

      const diff = nextBirthday - today;
      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));

      return `${days} дней, ${hours} часов, ${minutes} минут`;
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
p {
  margin: 5px 0;
}
</style>
