// export async function loginRequest(userData) {
//   // userData ist eine rucksackträger, die hält username und pass

//   const URL = "";

//   const response = await fetch(URL, {
//     method: "POST",
//     header: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify(userData),
//   });

//   const json = await response.json();
//   console.log(`message server ${json}`);
// }

export async function register(registrationData) {
  const URL = "http://localhost:5300/register";

  const response = await fetch(URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(registrationData),
  });
  const json = await response.json();
  console.log("message for registration", json);
}

export async function fetchAllArticles() {
  const URL = "http://localhost:5300/";

  const response = await fetch(URL);
  const data = await response.json();
  return data;
}
