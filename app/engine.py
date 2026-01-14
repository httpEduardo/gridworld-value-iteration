
def parse_grid(text):
    rows = []
    for line in text.split("\n"):
        if not line.strip():
            continue
        row = []
        for part in line.split(","):
            cell = part.strip()
            if cell.lower() == "x":
                row.append(None)
            else:
                row.append(float(cell))
        rows.append(row)
    return rows


def value_iteration(grid, gamma=0.9, iters=20):
    if not grid:
        return []
    rows = len(grid)
    cols = len(grid[0])
    values = [[0.0 for _ in range(cols)] for _ in range(rows)]

    def neighbors(r, c):
        steps = []
        for dr, dc in [(-1, 0), (1, 0), (0, -1), (0, 1)]:
            nr, nc = r + dr, c + dc
            if 0 <= nr < rows and 0 <= nc < cols and grid[nr][nc] is not None:
                steps.append((nr, nc))
        return steps if steps else [(r, c)]

    for _ in range(iters):
        new_values = [[0.0 for _ in range(cols)] for _ in range(rows)]
        for r in range(rows):
            for c in range(cols):
                if grid[r][c] is None:
                    new_values[r][c] = None
                    continue
                reward = grid[r][c]
                options = neighbors(r, c)
                best = max(values[nr][nc] for nr, nc in options)
                new_values[r][c] = reward + gamma * best
        values = new_values
    return values
