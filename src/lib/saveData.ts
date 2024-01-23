const app = 'weatherExtension';

const ls = {
  get: (item: string) => {
    return localStorage.getItem(app + item);
  },
  set: (item: string, data: string) => {
    return localStorage.setItem(app + item, data);
  },
  clear: () => {
    for (let elem in localStorage) {
      if (elem.startsWith(app)) localStorage.removeItem(elem);
    }
  },
  getJsonFn: (item: string) => {
    return function () {
      return JSON.parse(ls.get(item) || '{}');
    };
  },
};

export default ls;
