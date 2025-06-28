export async function searchPeople(name) {
  const res = await fetch(`http://localhost:4000/api/search`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ name })
  });
  if (!res.ok) throw new Error('Search failed');
  return res.json();
}

// src/services/torreAPI.js

// ✅ Fix the export name to match
export async function getGenome(username) {
  const res = await fetch(`http://localhost:4000/api/genome/${username}`);
  if (!res.ok) throw new Error('User not found');
  return res.json();
}
