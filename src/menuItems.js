export const menuItems = [
    {
        title: "Home",
        url: "/"
    },
    {
        title: "Services",
        url: "/services",
        submenu: [
            {
                title: "Web Design",
                url: "web-design",
                submenu: [
                    {
                        title: "frontend",
                        url: "frontend", 
                    },
                    {
                        title: "Backend",
                        submenu:[
                            {
                                title: "Nodejs",
                                url: "node",
                            },
                            {
                                title: "Php",
                                url: "php"
                            }
                        ]
                    }
                ]
            },
            {
                title: "Web Development",
                url: "web-dev",
            },
            {
                title: "Seo",
                url: "seo",
            }
        ]
    },
    {
        title: "About",
        url: "/about"
    },
]