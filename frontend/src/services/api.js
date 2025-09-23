export async function fetchProjects() {
  try {
    const res = await fetch("/api/v1/listProjects");
    if (!res.ok) throw new Error(`API error: ${res.status}`);
    return await res.json();
  } catch (err) {
    console.error("Failed to fetch projects:", err);
    return { items: [] }; // safe fallback
  }
}

export async function fetchProject(slug) {
  try {
    const res = await fetch(`/api/v1/getProject?slug=${slug}`);
    if (!res.ok) throw new Error(`API error: ${res.status}`);
    return await res.json();
  } catch (err) {
    console.error(`Failed to fetch project ${slug}:`, err);
    return null; // safe fallback
  }
}
