<template>
  <div class="personal-bio">
    <h2>My Introduction</h2>
    <p>Medhavi Goel</p>
    <p>
      Hi there, I'm Medhavi Goel, a dedicated Web Developer based in Cityville.
    </p>
    <h1>Skills</h1>
    <ul>
      <li>JavaScript</li>
      <li>C++</li>
      <li>C</li>
      <li>HTML</li>
      <li>Python</li>
      <li>Java</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'PersonalBio',
};
</script>

<style scoped>
.personal-bio {
  text-align: center;
  padding: 20px;
}

h2 {
  font-size: 24px;
  margin-bottom: 20px;
}

p {
  font-size: 16px;
  line-height: 1.6;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  font-size: 16px;
  margin-bottom: 5px;
}
</style>
