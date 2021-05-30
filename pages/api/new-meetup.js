// /api/new-meetup server route
//POST /api/new-meetup

import { MongoClient } from "mongodb";

async function handler(req, res) {
  if (req.method === "POST") {
    const data = req.body;

    const client = await MongoClient.connect("mongoconnectclientstring");

    const db = client.db();

    const meetUpsCollection = db.collection("meetups");
    const result = await meetUpsCollection.insertOne({ data });

    console.log(result);
  }
}

export default handler;
