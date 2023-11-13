const { createApp } = Vue;

const app = createApp({
    data() {
        return {
            title: "Questo è il mio primo progetto con Vue!",
            image: "https://plus.unsplash.com/premium_photo-1675827055694-010aef2cf08f?q=80&w=2024&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        }
    }
});

app.mount("#app");