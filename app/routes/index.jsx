import CallToAction from '../components/CallToAction'
import { useLoaderData } from "remix";

export const loader = async () => {
  return [
    {
      url: "https://remix.run/tutorials/blog",
      title: "15m Quickstart Blog Tutorial"
    },
    {
      url: "https://remix.run/tutorials/jokes",
      title: "Deep Dive Jokes App Tutorial"
    },
    {
      url: "https://remix.run/docs",
      title: "Remix Docs"
    }
  ]
}

export default function Index() {
  const urls = useLoaderData()
  console.log(urls)
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }}>
      <h1>Welcome to Remix</h1>
      <ul>
        {urls.map(url => (
          <li key={url.url}>
            <CallToAction
              {...url}
            />
          </li>
        ))}
      </ul>
    </div>
  )
}
