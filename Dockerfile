FROM ubuntu:14.04

# make sure apt is up to date
RUN apt-get update

# install nodejs and npm
RUN apt-get install -y nodejs npm git git-core

# Rename nodejs to node
RUN     ln -s /usr/bin/nodejs /usr/bin/node

# package manager packages
RUN     npm install -g bower
RUN     npm install -g grunt-cli
#RUN     grunt
#RUN     grunt serve
EXPOSE  9000

# Start the app
ADD start.sh /tmp/
RUN chmod +x /tmp/start.sh
CMD /tmp/start.sh
