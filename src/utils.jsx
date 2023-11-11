export const projects = [
    {
        image: "/assets/projects/audiophile.png",
        name: "Audiophile Shop",
        description: "Headphones, speakers and earphone e-commerce website.",
        Link: "https://audiophile-shop-nu.vercel.app/",
        Repository: "https://github.com/thelouisgram/audiophile-shop",
    },
    {
        image: "/assets/projects/arch-studio.png",
        name: "Arch Studio",
        description: "A 4-page website challenge from frontend mentor",
        Link: "https://arch-the-studio.vercel.app/",
        Repository: "https://github.com/thelouisgram/arch-studio",
    },
    {
        image: "/assets/projects/movie-box.png",
        name: "Movie Box",
        description: "Movie discovery app to catch up on the best and trending movies",
        Link: "https://movie-discovery-app-seven.vercel.app/",
        Repository: "https://github.com/thelouisgram/movie-discovery-app",
    },
    {
        image: "/assets/projects/dictionary.png",
        name: "Dictionary",
        description: "Dictionary web app, a frontend mentor challenge",
        Link: "https://dictionary-web-app-sandy.vercel.app/",
        Repository: "https://github.com/thelouisgram/dictionary-web-app",
    },
    {
        image: "/assets/projects/bmi-calc.png",
        name: "BMI Calculator",
        description: "Body Mass Index Calculator to calculate BMI at home",
        Link: "https://body-mass-index-calculator-ebon.vercel.app/",
        Repository: "https://github.com/thelouisgram/body-mass-index-calculator",
    },
    {
        image: "/assets/projects/rest-countries.png",
        name: "Countries App",
        description: "Rest Countries API App, a frontend mentor challenge",
        Link: "https://rest-country-api-thelouisgram.vercel.app/",
        Repository: "https://github.com/thelouisgram/rest-country-api",
    },
    {
        image: "/assets/projects/image-box.png",
        name: "Image Box",
        description: "Image Gallery App, with a drag and drop feature.",
        Link: "https://best-image-box.vercel.app/",
        Repository: "https://github.com/thelouisgram/image-box",
    },
    {
        image: "/assets/projects/multi-step-form.png",
        name: "Multi step Form",
        description: "Multi step form, a frontend Mentor challenge",
        Link: "https://thelouisgram-multi-step-form.netlify.app/",
        Repository: "https://github.com/thelouisgram/multi-step-form",
    },
    {
        image: "/assets/projects/todo-app.png",
        name: "Todo App",
        description: "CRUD Todo App, A frontend mentor challenge",
        Link: "https://to-do-app-tawny-sigma.vercel.app/",
        Repository: "https://github.com/thelouisgram/to-do-app",
    },
    {
        image: "/assets/projects/weather-app.png",
        name: "Weather App",
        description: "Weather app to check weather of locations over the world",
        Link: "https://thelouisgram.github.io/Weather-App/",
        Repository: "https://github.com/thelouisgram/Weather-App",
    },
];


export const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);

    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
    }
};




