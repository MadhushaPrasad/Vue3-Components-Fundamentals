//Global vs Local Vue Components
let PlanComponent = {
  template: '#reusable-template',
  //   props: ['name'],
  //   props: {
  //     name: String,
  //   },
  props: {
    name: { type: String, default: 'Hello Test', required: true },
    selected: { type: Boolean, default: false },
  },
  methods: {
    select() {
      this.$emit('select', this.name);
    },
  },
};

let PlanPickerComponet = {
  components: { 'reusable-template': PlanComponent },
  template: '#plan-picker-template',
  data() {
    return {
      plans: ['John', 'Micle', 'Bob'],
      selectedPlan: null,
    };
  },
  methods: {
    selectPlan(plan) {
      this.selectedPlan = plan;
    },
  },
};

const app = Vue.createApp({
  components: { 'plan-picker': PlanPickerComponet },
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
// Nested Components In Vue
app.component('plan-picker', {
  template: '#plan-picker-template',
  data() {
    return {
      plans: ['John', 'Micle', 'Bob'],
    };
  },
});

// ==============================================================================================================
// Reusable Components with Props
app.component('reusable-template', {
  template: '#reusable-template',
  //   props: ['name'],
  //   props: {
  //     name: String,
  //   },
  props: {
    name: { type: String, default: 'Hello Test', required: true },
  },
});

app.mount('#app');
