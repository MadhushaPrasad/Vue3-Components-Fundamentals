const app = Vue.createApp({});

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

app.mount('#app');
