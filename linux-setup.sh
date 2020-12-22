#!/bin/bash
./setup.sh

# Copy systemd services
cp seam-backend/seam.service /etc/systemd/system/seam.service

if [ ! -d /srv/seam/server ]; then 
    mkdir -p /srv/seam/server
fi

cp -r seam-backend/out/* /srv/seam/server/

if [ ! -d /srv/seam/dashboard ]; then
    mkdir -p /srv/seam/dashboard
fi

cp -r seam-frontend/build/* /srv/seam/dashboard/
