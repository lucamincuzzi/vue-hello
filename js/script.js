const { createApp } = Vue;

const app = createApp({
    data() {
        return {
            title: "Questo è il mio progetto con Vue!"
        }
    }
});

app.mount("#app");