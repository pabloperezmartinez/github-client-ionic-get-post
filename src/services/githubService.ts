// src/services/repositoryService.ts
import axios from 'axios';
import { RepositoryItem } from '../interfaces/RepositoryItem';

const GITHUB_API_URL = 'https://api.github.com/user/repos';
const GITHUB_API_TOKEN = 'Bearer XXXXXXXXXX';  // Reemplaza XXXXX con tu token real

export const fetchRepositories = async (): Promise<RepositoryItem[]> => {
  try {
    const response = await axios.get(GITHUB_API_URL, {
      headers: {
        Authorization: GITHUB_API_TOKEN
      },
      params: {
        per_page: 100,  // Solicitar 50 repositorios por página
        sort: 'created',    // Ordenar por fecha de creación
        direction: 'desc' 
      }
    });

    const reposData: RepositoryItem[] = response.data.map((repo: any) => ({
      name: repo.name,
      imageUrl: repo.owner.avatar_url,
      owner: repo.owner.login,
      language: repo.language,
      description: repo.description
    }));

    return reposData;
  } catch (error) {
    console.error('Error obteniendo repositorios', error);
    return [];
  }
  
};


export const createRepository = async (name: string, description: string): Promise<void> => {
  try {
    const response = await axios.post(GITHUB_API_URL, {
      name: name,
      description: description,
      auto_init: true  // Este campo puede ser opcional dependiendo de tu uso
    }, {
      headers: {
        Authorization: GITHUB_API_TOKEN
      }
    });

    console.log('Repositorio creado con éxito', response.data);
  } catch (error) {
    console.error('Error creando el repositorio', error);
  }
};