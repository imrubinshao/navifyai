# NavifyAI - AI Tools Navigation Platform
NavifyAI is an open-source project that powers [NavifyAI.com](https://navifyai.com), a comprehensive collection of AI tools navigation websites. You can contribute by submitting new navigation sites to enhance the AI community's resource discovery.



## Local Deployment
To deploy NavifyAI locally, follow these steps:
1. Clone the repository:
```sh
git clone https://github.com/your-username/navifyai.git
cd navifyai
```
2. Create a copy of the example environment file:
```sh
cp .env.example .env
```
Update the **.env** file with your corresponding parameters.
3. Install dependencies 
```sh
yarn install
```
4. Generate Prisma files:
```sh
npx prisma generate
```
5. Run database migrations:
```sh
npx prisma migrate dev
```
6. Start the development server:
```sh
yarn run dev
```
Access the application at `http://localhost:3000`

## Vercel Deployment
NavifyAI can also be deployed on Vercel through the web interface. Prior to deploying on Vercel:
1. Apply for a [Supabase](https://supabase.com/) database for your project.
2. Configure environment variables on Vercel using values from the **.env.example** file.
3. Deploy your project on [Vercel](https://vercel.com/new).
* Create a new Vercel project.
* Link your GitHub repository.
* Configure the environment variables.

## Note: First Deployment
The initial Vercel deployment may fail. If this happens, manually populate the database with some sample data and attempt the deployment again.

## Project Structure
This project is built using Next.js and relies on Prisma for database management. It incorporates the database model from [frontend-nav](https://github.com/wangfengyuan/frontend-nav) and the UI layout from [nextjs-learn-demos](https://github.com/weijunext/nextjs-learn-demos).

## Link
[Twitter/X](https://twitter.com/imrubinshao)

## Support Us
If you find NavifyAI helpful, consider :
<a href="https://www.buymeacoffee.com/rubinshao" target="_blank"><img src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png" alt="Buy Me A Coffee" style="height: 41px !important;width: 174px !important;" ></a>