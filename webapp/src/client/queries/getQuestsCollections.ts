import { ApiQuestCollection } from "../../types";
import { api } from "../api"

export interface GetQuestsCollectionsResponse {
  featured: ApiQuestCollection;
  recent: ApiQuestCollection[];
} 

export const getQuestsCollections = async () => {
  const { data } = await api.get('/quests-collections');
  return data as GetQuestsCollectionsResponse;
};
