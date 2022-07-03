const app = Vue.createApp({
  data() {
    return {
      plans: ['John', 'Micle', 'Bob'],
    };
  },
});

// =============================================================================================================

// simple component intro
app.component('click-counter', {
  template: `<button @click="count++">{{count}}</button>`,
  data() {
    return {
      count: 0,
    };
  },
}); // <-- component <-- {name,{template,props,methods,data,computed,watch,directives}

// ==============================================================================================================

// Vue Component Template
app.component('click-counter-template', {
  template: '#click-counter-template',
  data() {
    return {
      count: 0,
    };
  },
});

// ==============================================================================================================

// Reusable Components with Props
app.component('reusable-template', {
  template: '#reusable-template',
  data() {
    return {
      count: 0,
    };
  },
  //   props: ['name'],
  //   props: {
  //     name: String,
  //   },
  props: {
    name: { type: String, default: 'Hello Test', required: true },
  },
});

app.mount('#app');
