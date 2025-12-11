import prisma from '@/BACKEND/src/prisma'
import { verifyWebhook } from '@clerk/nextjs/webhooks'
import { NextRequest } from 'next/server'

export async function POST(req: NextRequest) {
  try {
    const evt = await verifyWebhook(req)

    // Do something with payload
    // For this guide, log payload to console
    // const { id } = evt.data
    // const eventType = evt.type
    // console.log(`Received webhook with ID ${id} and event type of ${eventType}`)
    // console.log('Webhook payload:', evt.data)

    if (evt.type === "user.created") {
  const { id, email_addresses, first_name, last_name, image_url, username } = evt.data

  const email = email_addresses?.[0]?.email_address
  if (!email) {
    console.error("User.created webhook received without email — skipping DB insert")
    return new Response("Missing email — user not stored", { status: 400 })
  }

  try {
    const newUser = await prisma.user.create({
      data: {
        id,
        email,
        username: username || email.split("@")[0],
        firstName: first_name,
        lastName: last_name,
        imageUrl: image_url
      }
    })
    return new Response(JSON.stringify(newUser), { status: 200 })
  } catch (error) {
    console.error("Error creating user:", error)
    return new Response("Failed to create user", { status: 500 })
  }
}


    if(evt.type === 'user.updated') {
      const { id, email_addresses, first_name, last_name, image_url, username } = evt.data
      try {
        
      } catch (error) {
        
      }
    }

    return new Response('Webhook received', { status: 200 })
  } catch (err) {
    console.error('Error verifying webhook:', err)
    return new Response('Error verifying webhook', { status: 400 })
  }
}