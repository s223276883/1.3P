<template>
  <div id="app">
    <CustomHeader :pageTitle="pageTitle" />
    <router-view />
    <CustomFooter :emailAddress="emailAddress" :phoneNumber="phoneNumber" :linkedinProfile="linkedinProfile" />
  </div>
</template>

<script>
import CustomHeader from './components/CustomHeader.vue';
import CustomFooter from './components/CustomFooter.vue';

export default {
  components: {
    CustomHeader,
    CustomFooter,
  },
  data() {
    return {
      pageTitle: "My Portfolio",
      emailAddress: "myemail@example.com",
      phoneNumber: "+1 123-456-7890",
      linkedinProfile: "linkedin.com/in/myname"
    };
  },
};
</script>
