let app = new Vue({
    el: "#root",
    data: {
        title: 'Brought to you by JavaScript',
        className: 'red',
        isLoading: true
    },
    methods: {
        toggleLoading() {
            this.isLoading = !this.isLoading;
        }
    }
});
