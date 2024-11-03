

// gsap.to('#box' , {
//   x: 1000,
//   duration: 2,
//   delay:1,
//   rotate: 360,
//   backgroundColor: "blue",
//   borderRadius: "50%"
    
// })
// gsap.from('#box1' , {
//     x: 1000,
//     duration: 2,
//     delay:3,
//     rotate: 360,
//     borderRadius: "50%"
      
//   })

  let tl = gsap.timeline();

// tl.to('#box' , {
//   x: 1000,
//   duration: 2,
//   delay:1,
//   rotate: 360,
//   backgroundColor: "blue",
//   borderRadius: "50%"
    
// })
// tl.from('#box1' , {
//     x: 1000,
//     duration:2,
//     rotate: 360,
//     borderRadius: "50%"
      
//   })

tl.from('h2' , {
    y: -50,
    opacity:0,
    duration: 1,
    delay:0.3
})

tl.from('h4' , {
    y: -50,
    opacity:0,
    duration: 1,
    delay:0.3,
    stagger:0.3
})
tl.from('h1' , {
    y: -50,
    opacity:0,
    duration: 1,
    delay:0.3,
    stagger:0.3
})