import { Hono } from 'hono'
import { renderer } from './renderer'

const app = new Hono()

app.use(renderer)

app.get('/', (c) => {
  return c.render(<h1>Hello!</h1>)
})

app.get("/hola", (c) => {

  const a: number = 1;
  const b: number = 2;

  return c.text(String(a + b))
})

export default app
