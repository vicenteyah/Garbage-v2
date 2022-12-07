
const {createApp} = Vue
createApp({
    data(){
        return {
            navItems:[
                {
                    id: 1,
                    name: 'HOME'
                },
                {
                    id: 2,
                    name: 'ABOUT'
                },
                {
                    id: 3,
                    name: 'SERVICES'
                },
                {
                    id: 4,
                    name: 'PROJECTS'
                },
                {
                    id: 5,
                    name: 'BLOG'
                },
                {
                    id: 6,
                    name: 'CONTACT'
                }
            ],
            slider: [
                {
                    id:1,
                    path:'./images/slide-1.jpg',
                    alt: 'slide1'
                },
                {
                    id:2,
                    path:'./images/slide-2.jpg',
                    alt: 'slide2'
                },
                {
                    id:3,
                    path:'./images/slide-3.jpg',
                    alt: 'slide3'
                }
            ],
            sliderArticle:{
                title: 'We Are Your Local Removal Service',
                subtitle: 'GIVE US A CALL TO GET A QUOTE TODAY!',
                buttonTitle:' FREE QUOTE'
            },
            junks:[
                {
                    id:1,
                    path:'/images/junk1.jpg',
                    alt:'junk1',
                    title: 'Trash Removal',
                    description:`
                        we do trash removal in timely manner, so
                        you wont't have problems with trash. 
                    `,
                    btn:'VIEW DETAILS'
                },
                {
                    id:2,
                    path:'/images/junk2.jpg',
                    alt:'junk2',
                    title: 'Junk Removal',
                    description:`
                        Our junk hauling service is based on how 
                        quickly and efficiently we can recycle materials.
                    `,
                    btn:'VIEW DETAILS'
                },
                {
                    id:3,
                    path:'/images/junk3.jpg',
                    alt:'junk3',
                    title: 'Recycle',
                    description:`
                        If the junk is comprised of all wood, yard waste, 
                        rock, brick, brush, tree, stumps, dirt,or concrete 
                        we can recycle the waste at a topsoil recycling center.
                    `,
                    btn:'VIEW DETAILS'
                },

            ],
            teams:[
                {
                    id:1,
                    title: 'Our Team',
                    path:'/images/home-4-1.jpg',
                    alt:'home1',
                    description:`
                        Our team consists of people who care about environment and cleanliness. 
                        Every team member showed themselves as responsible and accurate person.
                    `,
                    btn:'VIEW DETAILS'
                },
                {
                    id:2,
                    title: 'What we take',
                    path:'/images/home-5.jpg',
                    alt:'home2',
                    description:`
                        We collect paper, plastic, beverage cartons, white and colored glass,
                        wood, textile etc. We care about environment and use recycle trash.
                    `,
                    btn:'VIEW DETAILS'
                },
                {
                    id:3,
                    title: 'Towns we serve',
                    path:'/images/home-6.jpg',
                    alt:'home3',
                    description:`
                        We work all over Glasgow area, and also we serve such regions 
                        as Nashville, Princeton, Eddyville, Madisonville and others.
                    `,
                    btn:'VIEW DETAILS'
                }
            ],
            feedbacks:[
                {
                    id:1,
                    name: 'Michael Sellers',
                    ocuppation: 'Teacher',
                    path:'/images/gravatars/avatar1.jpg',
                    alt:'avatar1',
                    description:`
                        Thanks to JohnnyGo's team my house is now as good as new! They helped me to renew my roof, 
                        fixed the heating system and rewired the house. I'm very grateful as I could never do it alone! 
                        These guys are very careful, skilled and indeed fast!
                    `,
                },
                {
                    id:2,
                    name: 'Daniel Gleber',
                    ocuppation: 'Mathematician',
                    path:'/images/gravatars/avatar2.jpg',
                    alt:'avatar2',
                    description:`
                        Thanks to JohnnyGo's team my house is now as good as new! They helped me to renew my roof, 
                        fixed the heating system and rewired the house. I'm very grateful as I could never do it alone! 
                        These guys are very careful, skilled and indeed fast!
                    `,
                },
                {
                    id:3,
                    name: 'Vladimir Makarov',
                    ocuppation: 'Engineer',
                    path:'/images/gravatars/avatar3.jpg',
                    alt:'avatar3',
                    description:`
                        Thanks to JohnnyGo's team my house is now as good as new! They helped me to renew my roof, 
                        fixed the heating system and rewired the house. I'm very grateful as I could never do it alone! 
                        These guys are very careful, skilled and indeed fast!
                    `,
                }
            ],
            contacts: [
                {
                    id:1,
                    icon:'fas fa-phone-alt',
                    title: 'Phone:',
                    description:'719) 445-2808;(719) 445-2809'
                },
                {
                    id:2,
                    icon:'fas fa-map-marker-alt',
                    title: 'Address:',
                    description:'4578 Marmora Road, Glasgow'
                },
                {
                    id:3,
                    icon:'fas fa-envelope',
                    title: 'Email:',
                    description:'info@demolink.org'
                }
            ]
        }
    }
}).mount('#app')


$(() => {
    $("#slider4").responsiveSlides({
        auto: true,
        pager: false,
        nav: true,
        speed: 500,
        namespace: "callbacks",
        before: function () {
          $('.events').append("<li>before event fired.</li>");
        },
        after: function () {
          $('.events').append("<li>after event fired.</li>");
        }
    });
})

$(".open").on("click", function(){
    $(".overlay, .modal").addClass("active");
});
  
  $(".close, .overlay").on("click", function(){
    $(".overlay, .modal").removeClass("active");
});