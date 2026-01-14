# PolicyFabric

PolicyFabric runs value iteration on a grid-world reward map.

## Quick start

```bash
python -m app.server --port 5173
```

Open http://localhost:5173

## API

- POST `/api/iterate` `{ "grid": "0,0,1\n0,-1,0", "gamma": 0.9, "iters": 20 }`

