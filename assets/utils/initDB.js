import { decode, encode } from "base-64";
import SQLiteAdapterFactory from "pouchdb-adapter-react-native-sqlite";
import SQLite from "react-native-sqlite-2";
import { addRxPlugin, createRxDatabase } from "rxdb";
import { RxDBReplicationCouchDBPlugin } from "rxdb/plugins/replication-couchdb";
import { addPouchPlugin, getRxStoragePouch } from "rxdb/plugins/pouchdb";

if (!global.btoa) {
  global.btoa = encode;
}
if (!global.atob) {
  global.atob = decode;
}
process.browser = true;

const SQLiteAdapter = SQLiteAdapterFactory(SQLite);

addPouchPlugin(SQLiteAdapter);
addPouchPlugin(require("pouchdb-adapter-http"));
addRxPlugin(RxDBReplicationCouchDBPlugin);

const syncURL = "http://admin:k@localhost:5984"; // Replace localhost with a public ip address!
const dbName = "researchTasks";
const todoCollectionURL = `${syncURL}/researchTasks/`;

console.debug("researchTasks REMOTE URL: ", todoCollectionURL);

const initDB = async () => {
  let db;

  try {
    console.log("loading pls wait po...");

    // await removeRxDatabase(dbName, getRxStoragePouch("react-native-sqlite"));

    db = await createRxDatabase({
      name: dbName,
      storage: getRxStoragePouch("react-native-sqlite"),
      ignoreDuplicate: true,
      multiInstance: false,
    });

    console.log("DB INITED!");
  } catch (err) {
    console.error("DB FAILED TO CREATE", err);
  }

  try {
    await db.addCollections({
      todos: {
        schema: {
          version: 0,
          title: "researchtask schema",
          description: "researchtask",
          primaryKey: "_id",
          type: "object",
          keyCompression: false,
          properties: {
            _id: {
              type: "string",
            },
            title: {
              type: "string",
            },
            description: {
              type: "string",
            },
            date: {
              type: "any",
            },

            completed: {
              type: "boolean",
            },
          },
          required: ["_id", "title", "description", "completed"],
        },
      },
    });

    const replicationState = await db.collections.todos.syncCouchDB({
      remote: todoCollectionURL,
      waitForLeadership: true,
      direction: {
        pull: true,
        push: true,
      },
      options: {
        live: true,
        retry: true,
      },
    });

    // console.log("Synced to remote database!");

    replicationState.change$.subscribe((change) => console.log("Change: " + change));
    replicationState.docs$.subscribe((docData) => console.log("Doc: " + docData));
    replicationState.denied$.subscribe((docData) => console.error("Denied: " + docData));
    replicationState.active$.subscribe((active) => console.log("Active: " + active));
    replicationState.alive$.subscribe((alive) => console.log("Alive: " + alive));
    replicationState.complete$.subscribe((completed) => console.log("Complete: " + completed));
    replicationState.error$.subscribe((error) => console.error("Error: " + error));
  } catch (err) {
    console.error("ERROR CREATING COLLECTION", err);
  }

  return db;
};

export default initDB;
