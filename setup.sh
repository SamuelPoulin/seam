#!/bin/bash
YELLOW='\033[1;33m'
RED='\033[1;31m'
GREEN='\033[1;32m'
NC='\033[0m' # No Color

echo -e "\n${YELLOW}Welcome to Seam${NC}\n\n${GREEN}==> Checking for dependencies...${NC}"
missing_message="is not installed or has not been added to PATH."

# Check for dependencies
if ! [ -x "$(command -v mysql)" ]; then
  echo -e "${RED}MySQL ${missing_message} It is required for Seam to store and retrieve data.${NC}\n\nExiting..."
  exit 1
fi

if ! [ -x "$(command -v npm)" ]; then
  echo -e "${RED}npm is not installed or has not been added to PATH. It is required to build and run the dashboard and server.${NC}\n\nExiting..."
  exit 1
fi

echo -e "All dependencies installed.\n\n${GREEN}==> MySQL database configuration...${NC}"

printf "Host (default: 127.0.0.1): "

read -r dbhost

if [ -z "$dbhost" ]; then
  dbhost="127.0.0.1"
fi

printf "Port (default: 3306): "

read -r dbport

if [ -z "$dbport" ]; then
  dbport="3306"
fi

printf "User: "

read -r dbuser

if [ -z "$dbuser" ]; then
  echo -e "${RED}The user cannot be empty.${NC}\n\nExiting..."
  exit 1
fi

read -s -p "Password: " dbpassword

printf "\nDatabase: "

read -r db

if ! mysql --database=$db --user=$dbuser --password=$dbpassword --port=$dbport --host=$dbhost --connect-timeout=5 --execute=; then
  echo -e "${RED}\nCould not connect to MySQL using the given parameters. Make sure you have given the required privileges to your user.\n\n${NC}Exiting..."
  exit 1
fi

echo -e "\nMySQL connection successful."

if [ -e seam-backend/.env ]; then
  rm seam-backend/.env
fi

ssh-keygen -t rsa -b 4096 -m PEM -f jwtRS256.key -N "" > /dev/null 2>&1
openssl rsa -in jwtRS256.key -pubout -outform PEM -out jwtRS256.key.pub > /dev/null 2>&1

privatejwt="\"""$(sed ':a;N;$!ba;s/\n/\\n/g' jwtRS256.key)""\""
publicjwt="\""$(sed ':a;N;$!ba;s/\n/\\n/g' jwtRS256.key.pub)"\""


rm jwtRS256.key jwtRS256.key.pub

echo MYSQL_HOST=$dbhost >> seam-backend/.env
echo MYSQL_PORT=$dbport >> seam-backend/.env
echo MYSQL_USER=$dbuser >> seam-backend/.env
echo MYSQL_PASSWORD=$dbpassword >> seam-backend/.env
echo MYSQL_DATABASE=$db >> seam-backend/.env
echo JWT_PRIVATE_KEY="$privatejwt" >> seam-backend/.env
echo JWT_PUBLIC_KEY="$publicjwt" >> seam-backend/.env
echo SEAM_CONTENT_PATH=/seam/content/ >> seam-backend/.env

echo -e "Configuration file saved as seam-backend/.env\n"

read -p "Any conflicting tables in the database '${db}' will be overwritten. Continue? [Y/n]: " sure

if [ "$sure" == "n" ] || [ "$sure" == "N" ]; then
  echo -e "\nExiting..."
  exit 1
fi

echo -e "Creating database..."

if ! mysql --database=$db --user=$dbuser --password=$dbpassword --port=$dbport --host=$dbhost < seam-database/database.sql; then
  echo -e "${RED}Could not create a database named seam. Make sure you have given the required privileges to your user and that the database does not already exist.\n\n${NC}Exiting..."
  exit 1
fi

if ! mysql --database=$db --user=$dbuser --password=$dbpassword --port=$dbport --host=$dbhost < seam-database/functions.sql; then
  echo -e "${RED}Could not create a database named seam. Make sure you have given the required privileges to your user and that the database does not already exist.\n\n${NC}Exiting..."
  exit 1
fi


echo -e "\n${GREEN}==> Building Seam Dashboard from source...${NC}"

if [ -e seam-frontend/build/ ]; then
  rm -rf seam-frontend/build/
fi

npm run build --prefix seam-frontend/ > /dev/null 2>&1

echo -e "Done.\n"

echo -e "${GREEN}==> Finalizing...${NC}"
echo -e "All done!\n"