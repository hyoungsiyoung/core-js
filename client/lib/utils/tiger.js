const ENDPOINT = 'https://jsonplaceholder.typicode.com/users';

const defaultOptions = {
  method: 'GET',
  body: null,
  headers: {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
  },
};

// fetch  => promise

export const tiger = async (options) => {
  //사용하기 위해 tiger 함수를 내보내기(export)
  const { url, ...restOptions } = {
    ...defaultOptions,
    ...options,
    headers: {
      ...defaultOptions.headers,
      ...options.headers,
    },
  };

  const response = await fetch(url, restOptions);

  if (response.ok) {
    response.data = await response.json();
  }

  return response;
};

// const result = await tiger({ url: ENDPOINT });

// console.log(result);

tiger.get = (url, options) => {
  return tiger({
    //tiger함수 실행 //await promise 객체라서 return
    url, //url을 호출
    ...options, //body, headers 등 하나로 나열해서 전달되어야 하기 때문에
  });
};
// await tiger.get(ENDPOINT, {body:'', headers:''})

tiger.post = (url, body, options) => {
  return tiger({
    method: 'POST',
    url,
    ...options,
    body: JSON.stringify(body),
  });
};

tiger.delete = (url, options) => {
  return tiger({
    method: 'DELETE',
    url,
    ...options,
  });
};

tiger.put = (url, body, options) => {
  return tiger({
    method: 'PUT',
    url,
    ...options,
    body: JSON.stringify(body),
  });
};

tiger.patch = (url, body, options) => {
  return tiger({
    method: 'PATCH',
    url,
    ...options,
    body: JSON.stringify(body),
  });
};

// IIAFE

// (async function(){

// })()
