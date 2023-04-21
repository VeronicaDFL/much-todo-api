import { initializeApp, cert} from "firebase-admin/app"
import { getFirestore } from "firestore-admin/firestore"
import { ServiceAccount, serviceAccount } from "../serviceAccount.js"

initializeApp9({
    credential: cert(serviceAccount),
})

export const db = getFirestore()