import { Webhook } from "svix";
import {headers} from "next/headers";
import { WebhookEvent } from "@clerk/nextjs/server";


export async function POST(request: Request){
    const headerPayload = await headers();
    const svix_id = headerPayload.get("svix-id");
    const svix_timestamp = headerPayload.get("svix-timestamp");
    const svix_signature = headerPayload.get("svix-signature");

    if(!svix_id || !svix_timestamp || !svix_signature){
        return new Response("Missing svix headers", {
            status: 400});
    }

    const payload = await request.json();
    const body = JSON.stringify(payload);

    const webhookSecret = new Webhook(process.env.CLERK_WEBHOOK_SIGNING_SECRET || "");

    let event: WebhookEvent;

    try {
    event = webhookSecret.verify(body, {
      "svix-id": svix_id,
      "svix-timestamp": svix_timestamp,
      "svix-signature": svix_signature,
    }) as WebhookEvent;
  } catch (err) {
    console.error('Error verifying webhook:', err);
    return new Response('Error occurred', {
      status: 400
    });
  }

  // Handle the webhook
  const eventType = event.type;
  console.log(`Webhook with type ${eventType}`);

  if (eventType === 'user.created') {
    const { id, email_addresses, first_name, last_name, image_url, username } = event.data;
    // Send data to your backend API
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/users/create`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          id,
          email: email_addresses[0]?.email_address,
          username: username || email_addresses[0]?.email_address.split('@')[0],
          firstName: first_name,
          lastName: last_name,
          imageUrl: image_url,
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to create user in database');
      }

      console.log('User created successfully in database');
    } catch (error) {
      console.error('Error creating user:', error);
      return new Response('Error creating user in database', { status: 500 });
    }
  }

  if (eventType === 'user.updated') {
    const { id, email_addresses, first_name, last_name, image_url, username } = event.data;

    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/users/update`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          id,
          email: email_addresses[0]?.email_address,
          username: username || email_addresses[0]?.email_address.split('@')[0],
          firstName: first_name,
          lastName: last_name,
          imageUrl: image_url,
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to update user in database');
      }

      console.log('User updated successfully in database');
    } catch (error) {
      console.error('Error updating user:', error);
      return new Response('Error updating user in database', { status: 500 });
    }
  }

  if (eventType === 'user.deleted') {
    const { id } = event.data;

    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/users/delete`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ id }),
      });

      if (!response.ok) {
        throw new Error('Failed to delete user from database');
      }

      console.log('User deleted successfully from database');
    } catch (error) {
      console.error('Error deleting user:', error);
      return new Response('Error deleting user from database', { status: 500 });
    }
  }

  return new Response('', { status: 200 });


}