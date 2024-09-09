# Video Search System Frontend

## Overview

This repository contains the **frontend** for a video search system. The frontend interacts with the backend API, which is built using FastAPI and integrated with Elasticsearch for text data search. The system supports querying OCR, ASR, and object detection data, while also leveraging CLIP and FAISS for efficient image and text retrieval.

### Note:

Before using this frontend, please make sure to set up the backend from [aic_backend](https://github.com/xlinh2301/aic_backend).

## Setup

Follow these steps to set up and run the frontend.

### Step 1: Clone the repository

First, clone the repository and navigate into the project directory:

```bash
git clone https://github.com/BeQuang/AIC2024
cd AIC2024
```

### 2: Install necessary packages

Install all the required dependencies by running:

```bash
npm install
```

### Step 3: Extract Elasticsearch zip and run Docker

Extract the elasticsearch.zip file and run the Docker container inside the extracted folder:

- Unzip the elasticsearch.zip file.
- Navigate to the directory containing the Docker setup.
- Run the following command to start Elasticsearch via Docker:

```bash
cd elasticsearch
docker-compose up -d
```

### Note:

If you encounter an error with exit code 78 when running Docker, follow the solution in this [StackOverflow thread](https://stackoverflow.com/questions/56937171/efk-elasticsearch-1-exited-with-code-78-when-install-elasticsearch) to resolve the issue.

### Step 4: Start the frontend

After the setup is complete, start the frontend development server with:

```bash
npm run dev
```
