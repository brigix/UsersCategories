import { Category } from '../../models/Category';
import { User } from '../../models/User';

let users = [];
let categories = [];

export function configureFakeBackend() {
  let realFetch = window.fetch;
  window.fetch = function (url, opts) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (url.endsWith('/user/create') && opts.method === 'POST') {
          let params = JSON.parse(opts.body);
          let user = new User({
            name: params.name,
            surname: params.surname,
            email: params.email,
            password: params.password,
            gender: params.gender,
            age: params.age,
            category: params.category,
          });
          users = [...users, user];
          resolve({ ok: true, json: () => user });
          return;
        }

        if (url.endsWith('/users') && opts.method === 'GET') {
          if (opts.headers) {
            resolve({ ok: true, users });
          } else {
            reject('Error: no headers');
          }
          return;
        }

        if (opts.body) {
          if (
            url.endsWith('/usersList/' + opts.body) &&
            opts.method === 'GET'
          ) {
            const usersListByCategory = [];
            if (opts.headers) {
              let category = opts.body;
              let user = users.filter(user => {
                if (user.category === category) {
                  usersListByCategory.push(user);
                  return usersListByCategory;
                } else return null;
              });
              resolve({ ok: true, user });
            } else {
              reject('Error: no headers');
            }
            return;
          }
        }

        if (url.endsWith('/category/create') && opts.method === 'POST') {
          let params = JSON.parse(opts.body);
          let category = new Category({
            category_1: params.category_1,
            subCategory_2: params.subCategory_2,
            subCategory_3: params.subCategory_3,
          });
          /*      nestedCategories = [
            ...nestedCategories,
            NestedCategoryArr(nestedCategories, category),
          ]; */
          categories = [...categories, category];
          resolve({ ok: true, json: () => category });
          return;
        }

        realFetch(url, opts).then(response => resolve(response));
      }, 500);
    });
  };
}
