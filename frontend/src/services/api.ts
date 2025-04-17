export interface User {
  id: number;
  firstName: string;
  lastName: string;
  age: number;
  role: string;
  ssn: string;
  image:string;
}

const BASE_URL = "http://localhost:8080/api/users";

export const fetchUsers = async (): Promise<User[]> => {
  try {
    const response = await fetch(BASE_URL);
    if (!response.ok) throw new Error(`HTTP Error: ${response.status}`);
    return (await response.json()) as User[];
  } catch (error) {
    console.error("Error fetching users:", error);
    return [];
  }
};

export const fetchUsersByRole = async (role: string): Promise<User[]> => {
  try {
    const response = await fetch(`${BASE_URL}/role/${encodeURIComponent(role)}`);
    if (!response.ok) throw new Error(`HTTP Error: ${response.status}`);
    return (await response.json()) as User[];
  } catch (error) {
    console.error(`Error fetching users by role (${role}):`, error);
    return [];
  }
};

export const fetchUserById = async (id: number): Promise<User | null> => {
  try {
    const response = await fetch(`${BASE_URL}/search?id=${id}`);
    if (!response.ok) throw new Error(`HTTP Error: ${response.status}`);
    return (await response.json()) as User;
  } catch (error) {
    console.error(`Error fetching user by ID (${id}):`, error);
    return null;
  }
};

export const fetchRoles = async (): Promise<string[]> => {
  try {
    const response = await fetch(`${BASE_URL}/roles`);
    if (!response.ok) throw new Error("Failed to fetch roles");
    return response.json();
  } catch (error) {
    console.error("Error fetching roles:", error);
    return [];
  }
};

