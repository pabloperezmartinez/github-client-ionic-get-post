import { useEffect, useState } from "react";
import { Storage } from "@ionic/storage";

const REPOS_KEY = 'my-repos'

export interface Repository {
    name: string;
    imageUrl: string;
    owner: string;
    language: string;
}

export function useStorage() {
    const [store, setStore] = useState<Storage>();
    const [repos, setRepos] = useState<Repository[]>();

    useEffect(() => {
        const initStorage = async () => {
            const newStore = new Storage ({name: 'repository-db'});
            const store = await newStore.create();
            setStore(store);
            const storedRepos = await store.get(REPOS_KEY) || [];
            setRepos(storedRepos);
        }

        initStorage()
    }, []);

    const addRepo = async (repo: Repository) => {
        repos?.push(repo);
        console.log(repos);
        store?.set(REPOS_KEY, repos);
    }

    const loadRepos = async () => {
        if (store) {
            const storedRepos = await store.get(REPOS_KEY) || [];
            setRepos(storedRepos);
        }
    }

    return {repos, addRepo, loadRepos}
}