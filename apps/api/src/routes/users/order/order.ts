import { Router } from "express";
import JWT from "jsonwebtoken"
import { JWT_SECRET } from "configs";
import { prisma } from "database";

export const orderRouter = Router()

orderRouter.post('/order/create', async (req, res) => {
    const token = req.cookies.token
    const userEmail = JWT.verify(token, JWT_SECRET)

    const user = await prisma.user.findFirst({
        where: {
            email: userEmail.toString()
        },
        include: {
            Cart: true
        }
    })

    if (!user) {
        return res.send({
            error: "no user found"
        })
    }

    const cartItemsArr: {
        id: number;
        userId: number;
        productId: number;
        quantity: number;
    }[] = user.Cart

    cartItemsArr.map(async (item) => {

        const product = await prisma.product.findFirst({ where: { id: item.productId } })
        const producPrice = product?.price

        if (!producPrice) {
            return res.send({
                error: ''
            })
        }

        const orderValue = producPrice * item.quantity
        const order = await prisma.orderItem.create({
            data: {
                quantity: item.quantity,
                value: orderValue,
                cartItemId: item.id
            }
        })

        await prisma.cartItem.updateMany({
            where: {
                status: "ALIVE"
            },

            data: {
                status: 'DEAD'
            }
        })
    })

    return res.send({
        message: 'success'
    })

})