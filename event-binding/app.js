const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: "",
    };
  },
  methods: {
    onSetName(e) {
      this.name = e.target.value;
    },
    onAdd() {
      return this.counter++;
    },
    onRemove() {
      return this.counter--;
    },
    onSubmitForm() {
      alert("Submitted");
    },
    onShowAlert() {
      alert("Alert generated");
    },
  },
});

app.mount("#events");
