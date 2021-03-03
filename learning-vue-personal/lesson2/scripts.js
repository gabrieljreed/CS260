let app = new Vue({
    el: "#root",
    data: {
        names: ["Emma", "Brandon", "Lucy", "George"],
        newName: ''
    },
    methods: {
        addName() {
            if(this.newName === '') {
                return;
            }
            this.names.push(this.newName);
            this.newName = '';
        }
    }
});
