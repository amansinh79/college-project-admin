import Cookies from "js-cookie";

const endpoint = "http://localhost:3000";

const headers = {
  auth_token: Cookies.get("auth_token"),
};

export async function getAllUsers() {
  const response = await fetch(`${endpoint}/get_users`, {
    headers,
  });
  const data = await response.json();

  return data;
}

export async function getAllProducts() {
  const response = await fetch(`${endpoint}/get_products`, {
    headers,
  });
  const data = await response.json();
  return data;
}

export async function getStats() {
  const response = await fetch(`${endpoint}/stats`, {
    headers,
  });
  const data = await response.json();
  return data;
}

export async function blockUnblockUser(id, isBlocked) {
  const response = await fetch(`${endpoint}/block_unblock_user`, {
    method: "POST",
    headers: {
      ...headers,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ id, isBlocked }),
  });
  const data = await response.json();
  return data;
}
