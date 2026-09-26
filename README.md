# Gridworld Value Iteration

![Python](https://img.shields.io/badge/Python-3.x-3776AB?logo=python&logoColor=white)

Gridworld Value Iteration runs value iteration on a grid-world reward map.

## Quick start

```bash
python -m gridworld_value_iteration.server --port 5173
```

Open http://localhost:5173

## API

- POST `/api/iterate` `{ "grid": "0,0,1\n0,-1,0", "gamma": 0.9, "iters": 20 }`

