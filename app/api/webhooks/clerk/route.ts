import { Webhook } from "svix";
import { headers } from "next/headers";
import { WebhookEvent } from "@clerk/nextjs/server";

export async function POST(request: Request) {
  const headerPayload = await headers();
  const svix_id = headerPayload.get("svix-id");
  const svix_timestamp = headerPayload.get("svix-timestamp");
  const svix_signature = headerPayload.get("svix-signature");

  if (!svix_id || !svix_timestamp || !svix_signature) {
    return new Response("Missing svix headers", { status: 400 });
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
    console.error("Error verifying webhook:", err);
    return new Response("Error occurred", { status: 400 });
  }

  const eventType = event.type;
  console.log(`Webhook with type ${eventType}`);
  const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL;

  if (eventType === "user.created") {
    const { id, email_addresses, first_name, last_name, image_url, username } = event.data;
    const email = email_addresses?.[0]?.email_address  ?? null;

    if (!email) {
      console.error("User.created webhook received without email — skipping DB insert");
      return new Response("Missing email — user not stored", { status: 400 });
    }

    try {
      const response = await fetch(`${backendUrl}/api/users/create`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          id,
          email,
          username: username || email.split("@")[0],
          firstName: first_name ?? null,
          lastName: last_name ?? null,
          imageUrl: image_url ?? null,
        }),
      });

      if (!response.ok) throw new Error("Failed to create user in backend");

      const newUser = await response.json();
      console.log("User created successfully in backend:", newUser);
      return new Response(JSON.stringify(newUser), { status: 200 });
    } catch (error) {
      console.error("Error creating user:", error);
      return new Response("Failed to create user", { status: 500 });
    }
  }

  if (eventType === "user.updated") {
    const { id, email_addresses, first_name, last_name, image_url, username } = event.data;
    const email = email_addresses?.[0]?.email_address;

    if (!email) {
      console.error("User.updated webhook received without email — skipping DB update");
      return new Response("Missing email — user not updated", { status: 400 });
    }

    try {
      const response = await fetch(`${backendUrl}/api/users/update`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          id,
          email,
          username: username || email.split("@")[0],
          firstName: first_name ?? null,
          lastName: last_name ?? null,
          imageUrl: image_url ?? null,
        }),
      });

      if (!response.ok) throw new Error("Failed to update user in backend");

      const updatedUser = await response.json();
      console.log("User updated successfully in backend:", updatedUser);
      return new Response(JSON.stringify(updatedUser), { status: 200 });
    } catch (error) {
      console.error("Error updating user:", error);
      return new Response("Failed to update user", { status: 500 });
    }
  }

  if (eventType === "user.deleted") {
    const { id } = event.data;

    try {
      const response = await fetch(`${backendUrl}/api/users/delete`, {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id }),
      });

      if (!response.ok) throw new Error("Failed to delete user in backend");

      const deletedUser = await response.json();
      console.log("User deleted successfully in backend:", deletedUser);
      return new Response(JSON.stringify(deletedUser), { status: 200 });
    } catch (error) {
      console.error("Error deleting user:", error);
      return new Response("Failed to delete user", { status: 500 });
    }
  }

  return new Response("", { status: 200 });
}
