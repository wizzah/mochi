import { Db, Collection } from "mongodb";

interface IUrl {
  url: string,
  shortenedUrl: string
}

/**
 * Get a URL document from mongoDB.
 * 
 * @param shortenedUrl the shortened url to find in mongo
 * @param dbo mongo db instance
 * @param callback callback returning url document, requires an optional
 *                 IUrl instance and returns void
 */
export const getUrl = (shortenedUrl: string, dbo: Db, callback: (result?: IUrl) => void) => {
  const collection = dbo.collection('shortener') as Collection<IUrl>
  collection
    .findOne({ shortenedUrl: shortenedUrl }, (err, item) => {
      if (err) { return }

      if (item) {
        callback(item)
      } else {
        callback()
      }
    });
};

export const getOrCreateUrl = (url: string, dbo: Db, callback: (result: IUrl) => void) => {
  const collection = dbo.collection('shortener') as Collection<IUrl>;

  collection
    .findOne({ url: url }, (err, item) => {
      if (err) { return }

      // if we have an item, send that back
      if (item) {
        callback(item);
      } else {
        let random_string = Math.random().toString(36).substr(2, 5)
        // otherwise create a new one
        const newDoc = {
          url: url,
          shortenedUrl: "r/" + random_string
        }
        collection.insert(newDoc)
        callback(newDoc)
      }
    });
};
