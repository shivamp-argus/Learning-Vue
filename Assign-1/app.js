Vue.createApp({
  data() {
    return {
      name: "Shivam Patel",
      age: 21,
      imgLink:
        "https://images.unsplash.com/photo-1657934787560-cbecc866430a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
    };
  },
  methods: {
    ageAfterFiveYears() {
      return this.age + 5;
    },
    favNumber() {
      let num = Math.floor(Math.random() * 10);
      return num;
    },
  },
}).mount("#assignment");
