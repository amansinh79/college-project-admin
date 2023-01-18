import Cookies from "js-cookie";

const endpoint = "http://localhost:3000";

export async function getAllUsers() {
  const response = await fetch(`${endpoint}/get_users`, {
    headers: {
      auth_token: Cookies.get("auth_token"),
    },
  });
  const data = await response.json();

  return data;
}

export async function getAllAttachments() {
  const response = await fetch(`${endpoint}/get_attachments`, {
    headers: {
      auth_token: Cookies.get("auth_token"),
    },
  });
  const data = await response.json();
  console.log(data);
  return data;
}

export async function deleteAttachment(id) {
  const response = await fetch(`${endpoint}/delete_attachment/${id}`, {
    method: "DELETE",
    headers: {
      auth_token: Cookies.get("auth_token"),
    },
  });
  const data = await response.text();
  console.log(data);
  return data;
}

export async function getAllProducts() {
  const response = await fetch(`${endpoint}/get_products`, {
    headers: {
      auth_token: Cookies.get("auth_token"),
    },
  });
  const data = await response.json();
  console.log(data);
  return data;
}
