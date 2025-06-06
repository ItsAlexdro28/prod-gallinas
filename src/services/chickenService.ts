import axios from "axios";

const BASE_URL = "http://localhost:8080/api/gallina";

// Type definition for a Gallina
export interface Chicken {
  id?: number;
  nombre: string;
  fechaNacimiento: number | null;
  estado: string;
  grupo: { id: number } | number;
}

export const findAll = async (): Promise<Chicken[] | null> => {
  try {
    const response = await axios.get<Chicken[]>(BASE_URL);
    return response.data;
  } catch (error) {
    console.error("Error fetching gallinas:", error);
    return null;
  }
};

export const findById = async (id: number): Promise<Chicken | null> => {
  try {
    const response = await axios.get<Chicken>(`${BASE_URL}/${id}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching gallina by ID:", error);
    return null;
  }
};

export const save = async (chicken: Chicken): Promise<Chicken | undefined> => {
  try {
    const response = await axios.post<Chicken>(BASE_URL, chicken);
    return response.data;
  } catch (error) {
    console.error("Error saving chicken:", error);
  }
};

export const update = async (chicken: Chicken): Promise<Chicken | undefined> => {
  try {
    if (!chicken.id) throw new Error("ID is required to update chicken.");
    const response = await axios.put<Chicken>(`${BASE_URL}/${chicken.id}`, chicken);
    return response.data;
  } catch (error) {
    console.error("Error updating gallina:", error);
  }
};

export const remove = async (id: number): Promise<boolean> => {
  try {
    await axios.delete(`${BASE_URL}/${id}`);
    return true;
  } catch (error) {
    console.error("Error deleting gallina:", error);
    return false;
  }
};
