Demo project: Spring Boot (backend) + React (frontend) + K8s manifests + JMeter test plan
=================================================================

What is included
- backend/        : Spring Boot minimal app (port 8080)
- frontend/       : React minimal app (serves on port 80 when containerized)
- k8s/            : Kubernetes manifests (backend/frontend services + HPA)
- jmeter/         : simple JMeter .jmx for load testing
- README.md       : this file

Quick steps (local build & test)
--------------------------------
1) Backend (build jar)
   - Install Maven and JDK 17.
   - From backend/ run:
       mvn clean package -DskipTests
   - Build Docker image:
       docker build -t YOUR_REGISTRY/demo-backend:latest backend
   - Push to your registry (gcr.io, DockerHub, etc).

2) Frontend
   - From frontend/ run:
       npm install
       npm run build
   - Build Docker image (or use the Dockerfile included):
       docker build -t YOUR_REGISTRY/demo-frontend:latest frontend
   - Push to your registry.

3) Kubernetes (GKE Autopilot recommended)
   - Edit k8s/* yaml files: replace YOUR_REGISTRY with your image registry.
   - Apply:
       kubectl apply -f k8s/backend-deployment.yaml
       kubectl apply -f k8s/backend-service.yaml
       kubectl apply -f k8s/frontend-deployment.yaml
       kubectl apply -f k8s/frontend-service.yaml
       kubectl apply -f k8s/hpa-backend.yaml

   - Get frontend external IP:
       kubectl get svc demo-frontend

4) JMeter
   - Edit jmeter/load-test.jmx: replace REPLACE_WITH_FRONTEND_IP_OR_HOST with the external IP or domain.
   - Run with JMeter (or in distributed mode) to generate load.

Notes / Tips
------------
- This project is minimal and intended for testing autoscaling and cloud deployment.
- On GKE Autopilot you must set proper resource requests/limits (manifests already include them for backend).
- For production, add readiness/liveness probes, logging, HTTPS/Ingress and environment configs.

If you want, I can:
- Create a GitHub repo and push this code there.
- Build the Docker images and provide example 'gcloud' commands for deploying to GKE Autopilot.
- Add a sample Helm chart.

Enjoy! :)
