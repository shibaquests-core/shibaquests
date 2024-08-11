import { api } from "../api";

export interface CreateQuestCollectionData {
  address: string;
  name: string;
  description: string;
  logo: string;
  cover: string;
  owner: string;
}

export const createQuestCollection = (data: CreateQuestCollectionData) => {
  return api.post<CreateQuestCollectionData>("/quests-collections", data);
}
