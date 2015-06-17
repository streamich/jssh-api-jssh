Start Docker.
    
    docker run -it --rm -v /share/jssh-api-jssh:/code streamich/node bash
    cd /code
    sudo npm install --no-bin-links
    
Setup environment.
    
    npm install -g mocha
    mocha test
    
    npm install -g tsd
    tsd query node -a install -ros
    
    npm install -g uglify
    
Pack using http://www.bitsnbites.eu/?p=20

    ./crunchme-linux-amd64 -latin1 -lzg src dest
    