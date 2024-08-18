export interface ApiQuestCollection {
  address: string;
  name: string;
  description: string;
  logo: string;
  cover: string;
  owner: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface QuestsCollectionMetadata {
  name: string;
  description: string;
  logo: string;
  cover: string;
  quests: [];
}

export interface DeployedQuest {
  icon: string;
  address: string;
  name: string;
  description: string;
}
