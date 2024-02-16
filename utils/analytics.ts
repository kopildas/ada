// import { redis } from '@/lib/redis'
// import { getDate } from '@/utils'
// import { parse } from 'date-fns'


import { add_view } from "@/lib/mongo";
import { db_connection, getDate } from ".";
import { connectToDatabase } from "./connectMongo";
import axios from "axios";

type AnalyticsArgs = {
  retention?: number;
};

type TrackOptions = {
  persist?: boolean;
};

export class Analytics {
  private retention: number = 60 * 60 * 24 * 7;

  constructor(opts?: AnalyticsArgs) {
    if (opts?.retention) this.retention = opts.retention;
  }

  async track(namespace: string, event: object = {}, opts?: TrackOptions) {
    let key = `analytics::${namespace}`;

    if (!opts?.persist) {
      key += `::${getDate(0)}`;
      console.log(key);
    }

    // db call to persist this event
    // await redis.hincrby(key, JSON.stringify(event), 1)
    // if (!opts?.persist) await redis.expire(key, this.retention)
    try {
      // const data = add_view(namespace,key)
      const formData = {
        namespace: namespace,
        key: key,
      };
      console.log(formData)

      const res = await fetch('http://localhost:3000/api/addviewer', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });    // console.log(key)
    console.log(res)

  } catch (error) {
      console.error("err holo "+error);
  }

        
  }

  async retrieveDays(namespace: string, nDays: number) {
    type AnalyticsPromise = ReturnType<typeof analytics.retrieve>;
    const promises: AnalyticsPromise[] = [];

    for (let i = 0; i < nDays; i++) {
      //   const formattedDate = getDate(i)
      //   const promise = analytics.retrieve(namespace, formattedDate)
      //   promises.push(promise)
    }

    const fetched = await Promise.all(promises);

    const data = fetched.sort((a, b) => {
      // if (
      //   // parse(a.date, 'dd/MM/yyyy', new Date()) >
      //   // parse(b.date, 'dd/MM/yyyy', new Date())
      // ) {
      //   return 1
      // } else {
      //   return -1
      // }
    });

    return data;
  }

  async retrieve(namespace: string, date: string) {
    // const res = await redis.hgetall<Record<string, string>>(
    //   `analytics::${namespace}::${date}`
    // )
    // return {
    //   date,
    //   events: Object.entries(res ?? []).map(([key, value]) => ({
    //     [key]: Number(value),
    //   })),
    // }
  }
}

export const analytics = new Analytics();