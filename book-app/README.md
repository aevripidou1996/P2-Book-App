# tech-blog

## Starting local development

Fill in the `.env` file with the necessary variables

```
# Install dependencies
npm ci
```

```
# refresh the database
mysql -u root -p < ./db/schema.sql

# populate the database
npm run seed 

# start the app
npm run start
```

1. Define the relationships between the models
2. For each frontend page, add route in home-routes.js