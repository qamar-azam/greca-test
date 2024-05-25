FRONTEND DEVELOPER EVALUATION TEST

## Tech Stack

- Frontend: Next.js, Typescript, React-hook-form, Yup, React Query, TailwindCSS
- Backend: Strapi

## Solution

For task 1, Created a form in Next.js using react-hook-form and validate schema with Yup.

While submitting the form, user will be notified with the progress and display messages like success or error. Form entry is saved in Strapi is content-type `Person` by using react-query.

For Task2: I've created a content-type named `Person` containing fields: Firstname, age, email, address along slug. Modify `findOne` function in Controller order to get the entry using slug instead of id.

For Task3: Created a new Persons Page on Next.js to show list of all `Person` content-type which can also be accessed by clicking on `View All List` button on homepage

## To run the project

First, install the dependencies on frontend and backend directories with following command:

```bash
npm run install
```

For running strapi(backend) use

```
 npm run develop
```

On the frontend, create .env file and add below variable to linked with BE

```
BACKEND_URL=http://127.0.0.1:1337
```
