#!/bin/bash

REACT_PATH="../ccg-project-v3"
BUILD_PATH="../ccg-project-client"

# Démarrer les deux commandes en arrière-plan
concurrently "nodemon CCG_MASTER.js" "cd $REACT_PATH && npm run dev" &

# PID du processus concurrently
CONCURRENTLY_PID=$!

# Fonction pour gérer la commande build
execute_build() {
  echo "Build command received. Executing build..."
  # Ajoutez ici le code à exécuter lors de la commande build
  cd ../ccg-project-v3
  npm run build
  mv dist "$REACT_PATH/dist"
	echo "dist folder moved to $REACT_PATH"
}

# Boucle pour surveiller l'entrée de l'utilisateur
while true; do
  read -r input
  if [[ "$input" == "build" ]]; then
    execute_build
  fi
done

# Attendre que le processus concurrently se termine
wait $CONCURRENTLY_PID