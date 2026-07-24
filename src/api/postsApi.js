const API_BASE_URL = import.meta.env.VITE_API_URL ?? "http://localhost:3000";

async function fetchJson(endpoint, options) {
  const response = await fetch(`${API_BASE_URL}${endpoint}`, options);

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(`Request failed: ${response.status} ${response.statusText} - ${errorText}`);
  }

  return response.json();
}

export async function getPosts() {
  return fetchJson("/posts");
}

export async function getPostById(postId) {
  return fetchJson(`/posts/${postId}`);
}

export async function createPost(postData) {
  return fetchJson("/posts", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(postData),
  });
}
