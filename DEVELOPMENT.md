Start Docker.
    
    docker run -it --rm -v /share/jssh-api-jssh:/code streamich/node bash
    cd /code
    sudo npm install --no-bin-links
    
Setup environment.
    
    npm install -g mocha
    npm install -g tsd
    mocha test
    
    tsd query node -a install -ros