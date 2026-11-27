# Menú — Aplicación Web en Azure

Aplicación web en **Node.js 22** desplegada en **Azure Web App** (`menu`) mediante **GitHub Actions**.

## Requisitos de ejecución
- **Node.js:** v22.x.
- **Archivos requeridos:** `menu-data.json` en la raíz del proyecto con la estructura.
- **Despliegue (CI/CD):** Azure Web App llamado `menu` y el secret `AZURE_WEBAPP_PUBLISH_PROFILE` configurado en GitHub.

## Instalación y ejecución local
```bash
npm install
npm start
```

##Estrategia de ramas
```
main --> Rama principal
|
feat --> Nuevas funcionalidades
```

#Ejecucion de pruebas local
```bash
npm test
```
