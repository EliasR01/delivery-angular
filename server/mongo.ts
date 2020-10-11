import { MongoClient } from 'mongodb';

export let db: any;

export class MongoDb {
  private client: MongoClient;
  public close() {
    if (this.client) {
      this.client
        .close()
        .then()
        .catch((error) => {
          console.error(error);
        });
    } else {
      console.error('close: client is undefined');
    }
  }

  public async connect() {
    try {
      if (!this.client) {
        this.client = await MongoClient.connect(process.env.MONGO_DB_URI!, {
          useNewUrlParser: true,
          useUnifiedTopology: true,
        });
        db = this.client.db(process.env.MONGO_DB_NAME!);
      }
    } catch (error) {
      console.error(error);
    }
  }
  public getDb(): any {
    if (this.client) {
      return this.client.db(process.env.MONGO_DB_NAME!);
    } else {
      console.error('no db found');
      return undefined;
    }
  }
}
