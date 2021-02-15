# Image

Image utilities

- import

```js
import { image } from 'reactils'
```

### parse

Parse image

- usage

```jsx
const { size, type, height, width, base64 } = await image.parse(Blob)
```

### resize

Resize image

- usage

```jsx
const base64Image = await image.resize(Blob, { height: 200, width: 100 })
```

### compress

Compress image

- usage

```jsx
const base64Image = await image.compress(base64Image, 80)
```
