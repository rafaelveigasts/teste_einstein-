# Description

Grand-Line-API is a Backend for Front-end Application!

![](https://www.einerd.com.br/wp-content/uploads/2021/01/Grande-Linha-One-Piece-capa.jpg)

# Features

Backend application the new Patient and Doctor ROL use, responsible for patients and doctors see their profiles with medical reports and images.

# Tech Used

![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white) ![Google Cloud](https://img.shields.io/badge/Google%20Cloud-%234285F4.svg?style=for-the-badge&logo=google-cloud&logoColor=white) ![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white) ![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB) ![Yarn](https://img.shields.io/badge/yarn-%232C8EBB.svg?style=for-the-badge&logo=yarn&logoColor=white)

# How to run

After you ran `yarn` the app can be run as follow:

```
yarn start
# or using nodemon
yarn dev
```

To run with `NODE_ENV=production`:

```
yarn build
yarn prod
```

# How to test

While the yarn dev is running type:

```
yarn test
# will run the tests with cypress

```

# How to deploy

The app use Google Cloud build, on changes in branch `main` the pipeline execute automatically.

| Environment | Endpoint                                              | Swagger                                                    | Build trigger                                                                                                                                                                                                                                                                                                                                          |
| ----------- | ----------------------------------------------------- | ---------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Staging     | https://staging-engineering.alliar.com/grand-line-api | https://staging-engineering.alliar.com/grand-line-api/docs | [bff-grand-line-api-stg](<https://console.cloud.google.com/cloud-build/builds?authuser=1&project=alliar-jornada-digital-13c0&pageState=(%22builds%22:(%22f%22:%22%255B%257B_22k_22_3A_22Nome%2520do%2520gatilho_22_2C_22t_22_3A10_2C_22v_22_3A_22_5C_22bff-grand-line-api-stg_5C_22_22_2C_22s_22_3Atrue_2C_22i_22_3A_22triggerName_22%257D%255D%22))>) |
| Production  | https://tech.alliar.com/grand-line-api                | https://tech.alliar.com/grand-line-api/docs                | [bff-grand-line-api-prd](<https://console.cloud.google.com/cloud-build/builds?authuser=1&project=alliar-jornada-digital-13c0&pageState=(%22builds%22:(%22f%22:%22%255B%257B_22k_22_3A_22Nome%2520do%2520gatilho_22_2C_22t_22_3A10_2C_22v_22_3A_22_5C_22bff-grand-line-api-prd_5C_22_22_2C_22s_22_3Atrue_2C_22i_22_3A_22triggerName_22%257D%255D%22))>) |
