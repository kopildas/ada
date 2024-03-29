export type news= {
    length: number;
    slice(indexOfFirstItem: number, indexOfLastItem: number): any;
    _id:string,
    source: {
        id:string,
        name:string,
    },
    author:string,
    title:string,
    description:string,
    url:string,
    urlToImage:string,
    publishedAt:string,
    content:string,
    category:string,
}

export type ViewerData ={
    map(arg0: (item: any) => {
      name: any; // Extract only the date part
      Visitors: any;
    }): any;
    message: string;
    data: {
      _id: string;
      name: string;
      view: number;
      metrics: {
        orders: number;
      };
    }[];
    totalViews: number;
    todayViews: number;
    today: string;
    averageView: number;
  }