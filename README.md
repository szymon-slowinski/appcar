# Content of Project
* [Information](#information)
* [Technologies](#technologies)
* [Setup](#setup)


## Information
<details>
<summary>Click here to see general information about <b>Project</b>!</summary>
<b>iCARED</b>. Website application dedicated to managing cars. Users can add their car fleet. The application allows booking a car at a convenient and available time. Intuitive interface shows which car is free or rented. All events can be found in the Calendar, where current information about booked vehicles are shown.
</details>

## Technologies
<ul> 
<li>React</li>
<li>TypeScript</li>
<li>Supabase</li>
<li>React Query</li>
<li>Docker</li>
<li>Material UI</li>
</ul>

## Setup

### Using NPM
1.Create account and get your API at https://supabase.com/ <br/>
2.Clone the repo
```git clone https://github.com/szymon-slowinski/Dog2Add```
3.Install NPM packages ```npm install```<br/>
4.Create file .env.local and add your all API keys <br/> ```REACT_APP_SUPABASE_URL= YOUR API URL```<br/>
 ``` REACT_APP_SUPABASE_PUBLIC_KEY=YOUR API PUBLIC KEY```<br/>
5.Write in console ```npm start```<br/>
6.Open http://localhost:3000 with your browser to see the result.

# Using DOCKER
After fourth step:<br/>
5.Install DOCKER https://www.docker.com/ <br/>
6.Write in console:<br/>
``` docker build -t sample:dev . ```<br/>
**Next:**
``` 
docker run \
    -it \
    --rm \
    -v ${PWD}:/app \
    -v /app/node_modules \
    -p 3001:3000 \
    -e CHOKIDAR_USEPOLLING=true \
    sample:dev 
 ```
 <br/>
 
**After that:**<br/>
``` docker run -it --rm -v ${PWD}:/app -v /app/node_modules -p 3001:3000 -e CHOKIDAR_USEPOLLING=true sample:dev ```<br/>
7.Open http://localhost:3001 with your browser to see the result.
