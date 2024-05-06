
import { Account, Avatars, Client, Databases, ID, Query } from 'react-native-appwrite';

export const config = {
  endpoint: 'https://cloud.appwrite.io/v1',
  platform: 'com.jsm.aora.videoapp',
  projectId: '6636dc700019211337fc',
  databaseID: '6636df97002aa49018b6',
  userCollectionID: '6636dff3000ecf90709c',
  videoCollectionID: '6636e039001aa04a4d88',
  storageId: '6636e4d80034e94c03af'
}

const {
  endpoint,
  platform,
  projectId,
  databaseID,
  userCollectionID,
  videoCollectionID,
  storageId
} = config

// Init your react-native SDK
const client = new Client();

client
    .setEndpoint(config.endpoint) // Your Appwrite Endpoint
    .setProject(config.projectId) // Your project ID
    .setPlatform(config.platform) // Your application ID or bundle ID.
;

const account = new Account(client);
const avatars = new Avatars(client);
const databases = new Databases(client)

export const createUser = async (email, password, username) => {
  // Register User
  try{
    const newAccount = await account.create(
      ID.unique(),
      email,
      password,
      username
    )

    if(!newAccount) throw Error

    const avatarUrl = avatars.getInitials(username)
    
    await signIn(email, password)

    const newUser = await databases.createDocument(
      config.databaseID,
      config.userCollectionID,
      ID.unique(),
      {
        accountId: newAccount.$id,
        email,
        username,
        avatar: avatarUrl
      }
    )

    return newUser;
  } catch (error){
    console.log(error)
    throw new Error(error)
  }
}

export const signIn = async (email, password) => {
  try {
    const session = await account.createEmailSession(email, password)
    return session;
  } catch (error) {
    throw new Error(error)
  }
}

export const getCurrentUser = async () => {
  try {
    const currentAccount = await account.get()

    if(!currentAccount) throw Error

    const currentUser = await databases.listDocuments(
      config.databaseID,
      config.userCollectionID,
      [Query.equal('accountId', currentAccount.$id)]
    )

    if(!currentUser) throw Error

    return currentUser.documents[0]
  } catch (error) {
    console.log(error)
  }
}

export const getAllPosts = async () => {
  try {
    const posts = await databases.listDocuments(
      databaseID,
      videoCollectionID
    )
    return posts.documents
  } catch (error) {
    throw new Error(error)
  }
}