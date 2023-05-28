const ObjectId = require("mongodb").ObjectId

const orders2 = Array.from({length: 10}).map((_, idx) => {
    let day = 20
    if(idx < 10) {
        var hour = "0" + idx
        var subtotal = 100
    } else if(idx > 16 && idx < 21) {
        var hour = idx
        var subtotal = 100 + 12*idx
    } else {
        var hour = idx
        var subtotal = 100
    }

    const createdDate = new Date(2022, 2, day, hour, 12, 36, 490);
    return {
        user:new ObjectId("645c77d17c8d96b2c8e4f935"),
        orderTotal: {
            itemsCount: 3,
            cartSubtotal: subtotal
        },
        orderItems: [
            {
                name: "Panadol",
                price: 531,
                image:{ path: "/assets/img/product/product1.jpg" },
                quantity: 3,
                pharmacy:"ISURU",
                
            },
            {
                name: "Paracetamol",
                price: 540,
                image:{ path: "/assets/img/product/product1.jpg" },
                quantity: 5,
                pharmacy:"ISURU",
                
            }
        ],
        Date:createdDate,
        paymentMethod: "PayPal",
        isPaid: false,
        isDelivered: false,
        createdAt: `2022-03-${day}T${hour}:12:36.490+00:00`
    }
})

module.exports = orders2
