import Cookies from "js-cookie";

const endpoint = "http://localhost:3000";

const headers = () => ({
  auth_token: Cookies.get("auth_token"),
});

export async function getAllUsers() {
  const response = await fetch(`${endpoint}/get_users`, {
    headers: headers(),
  });
  const data = await response.json();

  return data;
}

export async function getAllProducts() {
  const response = await fetch(`${endpoint}/get_products`, {
    headers: headers(),
  });
  const data = await response.json();
  return data;
}

export async function getStats() {
  const response = await fetch(`${endpoint}/stats`, {
    headers: headers(),
  });
  const data = await response.json();
  return data;
}

export async function blockUnblockUser(id, isBlocked) {
  const response = await fetch(`${endpoint}/block_unblock_user`, {
    method: "POST",
    headers: {
      ...headers(),
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ id, isBlocked }),
  });
  const data = await response.json();
  return data;
}

export async function getAllFeedbacks() {
  const response = await fetch(`${endpoint}/get_feedbacks`, {
    headers: headers(),
  });
  const data = await response.json();
  return data;
}

export async function getAllOrders() {
  const response = await fetch(`${endpoint}/get_all_orders`, {
    headers: headers(),
  });
  const data = await response.json();
  return data;
}

export async function getOrderItems(id) {
  const response = await fetch(`${endpoint}/get_order_items/${id}`, {
    headers: {
      ...headers(),
      "Content-Type": "application/json",
    },
  });
  const data = await response.json();
  return data;
}

export async function deleteProduct(id) {
  const response = await fetch(`${endpoint}/delete_product`, {
    method: "POST",
    headers: {
      ...headers(),
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ id }),
  });
  return response.ok;
}

export async function addProduct(form) {
  const response = await fetch(`${endpoint}/add_product`, {
    method: "POST",
    headers: {
      ...headers(),
    },
    body: form,
  });
  return response.ok;
}
