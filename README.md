# 🐳 Innovatech Back — ECR Deploy Guide

Comandos rápidos para build, tag y push de la imagen Docker a Amazon ECR.

---

## 📋 Variables

| Variable | Valor |
|---|---|
| Account ID | `875727095515` |
| Region | `us-east-1` |
| Repo | `innovatech-back` |
| URI completo | `875727095515.dkr.ecr.us-east-1.amazonaws.com/innovatech-back` |

---

## 🔐 1. Autenticar Docker con ECR

> Ejecutar cada vez que se reinicie el laboratorio de AWS Academy.

```bash
aws ecr get-login-password --region us-east-1 | docker login --username AWS --password-stdin 875727095515.dkr.ecr.us-east-1.amazonaws.com
```

---

## 🔨 2. Build de la imagen

```bash
docker build -t innovatech-back .
```

---

## 🏷️ 3. Tag de la imagen

```bash
docker tag innovatech-back:latest 875727095515.dkr.ecr.us-east-1.amazonaws.com/innovatech-back:latest
```

---

## 🚀 4. Push a ECR

```bash
docker push 875727095515.dkr.ecr.us-east-1.amazonaws.com/innovatech-back:latest
```

---

## ⚡ Todo junto (copy-paste rápido)

```bash
aws ecr get-login-password --region us-east-1 | docker login --username AWS --password-stdin 875727095515.dkr.ecr.us-east-1.amazonaws.com

docker build -t innovatech-back .

docker tag innovatech-back:latest 875727095515.dkr.ecr.us-east-1.amazonaws.com/innovatech-back:latest

docker push 875727095515.dkr.ecr.us-east-1.amazonaws.com/innovatech-back:latest
```

---

## 🖥️ 5. En ec2-app — Pull y Run

```bash
# Autenticar
aws ecr get-login-password --region us-east-1 | docker login --username AWS --password-stdin 875727095515.dkr.ecr.us-east-1.amazonaws.com

# Pull
docker pull 875727095515.dkr.ecr.us-east-1.amazonaws.com/innovatech-back:latest

# Run
docker run -d \
  --name innovatech-back \
  --restart always \
  -p 8080:8080 \
  875727095515.dkr.ecr.us-east-1.amazonaws.com/innovatech-back:latest
```

---

## ✅ Verificar que está corriendo

```bash
docker ps
docker logs innovatech-back
```

---

## 🌐 Probar conectividad desde ec2-web

```bash
# Reemplaza con la IP privada de ec2-app
curl http://10.0.2.X:8080/health
curl http://10.0.2.X:8080/api/datos
```

---

## 🔄 Actualizar versión (re-deploy)

```bash
# 1. Hacer cambios en el código
# 2. Build + tag + push (sección "Todo junto" de arriba)
# 3. En ec2-app:
docker stop innovatech-back
docker rm innovatech-back
docker pull 875727095515.dkr.ecr.us-east-1.amazonaws.com/innovatech-back:latest
docker run -d --name innovatech-back --restart always -p 8080:8080 875727095515.dkr.ecr.us-east-1.amazonaws.com/innovatech-back:latest
```

---